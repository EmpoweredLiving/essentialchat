document.addEventListener('DOMContentLoaded', () => {
    // --- GLOBAL DATA & HELPERS (for PIPs primarily - Categories now derived from HTML) ---
    // REMOVED: const productInfoPages = [...]

    const officialPipCategoriesOrder = [
        "All", "Single Oils", "Proprietary Blends", "MetaPWR™", "On Guard™", // Ensure these TEXTS match display needs
        "dōTERRA Spa™", "dōTERRA Sun Care", "Essential Skin Care™", "dōTERRA Hair Care",
        "HD Clear™", "Targeted Essentials", "Collections", "Diffusers", "Holiday"
        // Add any other CATEGORY DISPLAY NAMES you want in this specific order
    ];

    // This function is still useful for generating the data-filter attributes for buttons
    function sanitizeCategoryForDataAttr(categoryName) {
        if (typeof categoryName !== 'string') return '';
        return categoryName
            .toLowerCase()
            .replace(/™/g, '') // Remove trademark
            .replace(/ō/g, 'o') // Normalize o with macron
            .replace(/\|/g, '-') // Replace pipe character (e.g. Yarrow|Pom)
            .replace(/\+/g, 'plus') // Replace + with 'plus' (e.g. CP+)
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, ''); // Remove any remaining non-alphanumeric except hyphens
    }

    // --- INITIALIZATION FOR PRODUCT INFO PAGES TAB (Categories dynamic, links static) ---
    function initializePipTab() {
        const pipPanel = document.getElementById('pips');
        if (!pipPanel) {
            // console.log("PIP tab panel (id='pips') not found. Skipping PIP initialization.");
            return;
        }

        const pipCategoryFiltersContainer = pipPanel.querySelector('#pipCategoryFilters');
        const pipLinksGrid = pipPanel.querySelector('#pipLinksGrid'); // For checking if items exist

        if (!pipCategoryFiltersContainer || !pipLinksGrid) {
            // console.log("PIP category filter container or links grid not found. Cannot initialize PIP tab fully.");
            return;
        }

        // 1. Dynamically Render PIP Category Filter Buttons
        //    Derive categories from the `data-category` attributes of the static HTML PIP items.
        //    The `data-category` in your HTML should be the SANITIZED version.
        //    We need a way to map sanitized back to display names if we want officialPipCategoriesOrder to work with display names.
        //    For simplicity now, let's assume officialPipCategoriesOrder contains DISPLAY names,
        //    and we'll create a unique set of DISPLAY names from products IF necessary.

        const uniqueDisplayCategoriesFromHtml = new Set();
        const pipItemsInHtml = pipLinksGrid.querySelectorAll('.searchable-item');

        // Create a map from sanitized category to display name for correct ordering and display
        // This is a bit more complex but ensures we use the original display names from officialPipCategoriesOrder
        const categoryDisplayMap = {};
        officialPipCategoriesOrder.forEach(displayName => {
            if (displayName !== "All") {
                categoryDisplayMap[sanitizeCategoryForDataAttr(displayName)] = displayName;
            }
        });

        pipItemsInHtml.forEach(item => {
            const sanitizedCat = item.getAttribute('data-category');
            if (sanitizedCat && categoryDisplayMap[sanitizedCat]) {
                uniqueDisplayCategoriesFromHtml.add(categoryDisplayMap[sanitizedCat]);
            } else if (sanitizedCat) {
                // Fallback: if a sanitized category in HTML isn't in our map,
                // try to "de-sanitize" it for display (this is imperfect)
                // Or, better, ensure all categories in HTML correspond to officialPipCategoriesOrder display names.
                const somewhatDeSanitized = sanitizedCat.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Basic de-sanitize
                uniqueDisplayCategoriesFromHtml.add(somewhatDeSanitized);
                // console.warn(`PIP item has data-category="${sanitizedCat}" which doesn't map to officialPipCategoriesOrder. Using: "${somewhatDeSanitized}"`);
            }
        });


        const categoriesToDisplay = ["All"]; // Start with "All"
        officialPipCategoriesOrder.forEach(officialCatDisplay => {
            if (officialCatDisplay !== "All" && uniqueDisplayCategoriesFromHtml.has(officialCatDisplay)) {
                categoriesToDisplay.push(officialCatDisplay);
            }
        });
        // Add any categories found in HTML but not in official order (maintains all data filterable)
        uniqueDisplayCategoriesFromHtml.forEach(htmlCatDisplay => {
            if (!categoriesToDisplay.includes(htmlCatDisplay)) {
                categoriesToDisplay.push(htmlCatDisplay);
            }
        });


        pipCategoryFiltersContainer.innerHTML = ''; // Clear existing buttons
        categoriesToDisplay.forEach(displayCategory => {
            const button = document.createElement('button');
            button.classList.add('category-filter-btn');
            button.textContent = displayCategory; // Use the (potentially de-sanitized) display name
            const filterValue = displayCategory === 'All' ? 'all' : sanitizeCategoryForDataAttr(displayCategory);
            button.setAttribute('data-filter', filterValue);
            if (displayCategory === 'All') {
                button.classList.add('active');
            }
            pipCategoryFiltersContainer.appendChild(button);
        });

        // 2. PIP Links are now static in HTML.
        //    Ensure the no-results message is initially set based on content.
        const noResultsMessage = pipPanel.querySelector('.no-results-message');
        if (noResultsMessage) {
            noResultsMessage.style.display = (pipItemsInHtml.length === 0 && !pipPanel.classList.contains('active')) ? 'block' : 'none';
            // If the panel is active on load, the filter logic will handle this.
        }
    }

    // CALL PIP INITIALIZATION EARLY (for dynamic category buttons)
    initializePipTab();

    // --- Tab Navigation Logic (for Resources page) ---
    const mainTabButtons = document.querySelectorAll('.tab-navigation .tab-button');
    const mainTabPanels = document.querySelectorAll('.tab-content-panels .tab-panel');

    if (mainTabButtons.length > 0 && mainTabPanels.length > 0) {
        // Initial setup for tab panels
        mainTabPanels.forEach(panel => {
            if (!panel.classList.contains('active')) {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
                // Trigger initial filter/search for the initially active tab
                const initialSearchInput = panel.querySelector('.tab-search-input');
                if (initialSearchInput) {
                    initialSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
                } else {
                    const catBar = panel.querySelector('.category-filter-bar');
                    const allBtn = catBar ? catBar.querySelector('.category-filter-btn[data-filter="all"]') : null;
                    if (allBtn) {
                        // If this is the PIP tab and buttons were just generated, they might not have listeners yet.
                        // The generic category filter logic below should attach them.
                        // For non-PIP tabs or if buttons are static, this click is fine.
                        if(panel.id !== 'pips' || allBtn.getAttribute('listener') === 'true') {
                           allBtn.click();
                        } else {
                            // For PIPs tab, just ensure items are shown as "All" is default
                            const itemsToFilter = panel.querySelectorAll('.resource-grid .searchable-item');
                            const noResultsMessage = panel.querySelector('.no-results-message');
                            let visibleItemsCount = 0;
                            itemsToFilter.forEach(item => { item.style.display = ''; visibleItemsCount++; });
                            if(noResultsMessage) noResultsMessage.style.display = (visibleItemsCount === 0) ? 'block' : 'none';
                        }
                    }
                }
            }
        });

        mainTabButtons.forEach(button => {
            button.addEventListener('click', () => {
                mainTabButtons.forEach(btn => btn.classList.remove('active'));
                mainTabPanels.forEach(panel => {
                    panel.classList.remove('active');
                    panel.style.display = 'none';
                });

                button.classList.add('active');
                const targetPanelId = button.getAttribute('data-tab');
                const targetPanel = document.getElementById(targetPanelId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    targetPanel.style.display = 'block';
                }

                // Reset search and category filters in the newly activated tab
                const currentSearchInput = targetPanel ? targetPanel.querySelector('.tab-search-input') : null;
                const currentCategoryFilterBar = targetPanel ? targetPanel.querySelector('.category-filter-bar') : null;

                if (currentSearchInput) {
                    currentSearchInput.value = '';
                    currentSearchInput.dispatchEvent(new Event('input', { bubbles: true })); // Triggers search function
                } else if (currentCategoryFilterBar) {
                    // If no search input, but there is a category bar, "click" the "All" button
                    const allButton = currentCategoryFilterBar.querySelector('.category-filter-btn[data-filter="all"]');
                    if (allButton && !allButton.classList.contains('active')) {
                        allButton.click(); // This will trigger its own filter logic
                    } else if (allButton && allButton.classList.contains('active')) {
                        // If "All" is already active, and search was cleared (or no search input), ensure all items are visible
                        const itemsToFilter = targetPanel.querySelectorAll('.resource-grid .searchable-item');
                        const noResultsMessage = targetPanel.querySelector('.no-results-message');
                        let visibleItemsCount = 0;
                        itemsToFilter.forEach(item => { item.style.display = ''; visibleItemsCount++; });
                        if(noResultsMessage) noResultsMessage.style.display = (visibleItemsCount === 0) ? 'block' : 'none';
                    }
                }
            });
        });
    }

    // --- Search Functionality within Tabs (for Resources page) ---
    const searchInputs = document.querySelectorAll('.tab-search-input');
    if (searchInputs.length > 0) {
        searchInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase().trim();
                const currentPanel = e.target.closest('.tab-panel');
                if (!currentPanel) return;

                const itemsToSearch = currentPanel.querySelectorAll('.resource-grid .searchable-item');
                const noResultsMessage = currentPanel.querySelector('.no-results-message');
                const activeCategoryFilterButton = currentPanel.querySelector('.category-filter-bar .category-filter-btn.active');
                const categoryFilterValue = activeCategoryFilterButton ? activeCategoryFilterButton.getAttribute('data-filter') : 'all';
                let visibleItemsCount = 0;

                itemsToSearch.forEach(item => {
                    const textElements = item.querySelectorAll('.searchable-text');
                    let textMatchesSearch = false;
                    if (searchTerm === '') {
                        textMatchesSearch = true;
                    } else {
                        textElements.forEach(textEl => {
                            if (textEl.textContent.toLowerCase().includes(searchTerm)) {
                                textMatchesSearch = true;
                            }
                        });
                    }

                    const itemCategory = item.getAttribute('data-category'); // This should be the SANITIZED category
                    const categoryMatchesFilter = (categoryFilterValue === 'all' || !itemCategory || itemCategory === categoryFilterValue);

                    if (textMatchesSearch && categoryMatchesFilter) {
                        item.style.display = '';
                        visibleItemsCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });

                if (noResultsMessage) {
                    noResultsMessage.style.display = (visibleItemsCount === 0 ) ? 'block' : 'none';
                }
            });
        });
    }

    // --- Category Filter Button Logic (for Resources page) ---
    // This needs to handle dynamically added buttons for the PIPs tab correctly.
    // We can use event delegation on the categoryFilterBars or re-query buttons after PIP init.
    // For now, let's assume querySelectorAll after init is sufficient if the timing is right.
    const categoryFilterBars = document.querySelectorAll('.category-filter-bar');
    if (categoryFilterBars.length > 0) {
        categoryFilterBars.forEach(bar => {
            // Query buttons INSIDE the loop or use event delegation.
            // This will pick up dynamically generated buttons IF initializePipTab has already run AND
            // the #pipCategoryFilters container has the class .category-filter-bar
            const filterButtons = bar.querySelectorAll('.category-filter-btn');
            const panel = bar.closest('.tab-panel');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const itemsToFilter = panel ? panel.querySelectorAll('.resource-grid .searchable-item') : [];
                    const noResultsMessage = panel ? panel.querySelector('.no-results-message') : null;
                    const mainSearchInput = panel ? panel.querySelector('.tab-search-input') : null;

                    // Deactivate other buttons IN THIS BAR
                    bar.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterValue = button.getAttribute('data-filter'); // This is the SANITIZED value
                    const searchTerm = mainSearchInput ? mainSearchInput.value.toLowerCase().trim() : '';
                    let visibleItemsCount = 0;

                    itemsToFilter.forEach(item => {
                        const itemCategory = item.getAttribute('data-category'); // This is SANITIZED from HTML
                        let textMatchesSearch = true;
                        if (searchTerm !== '') {
                            textMatchesSearch = false;
                            const textElements = item.querySelectorAll('.searchable-text');
                            textElements.forEach(textEl => {
                                if (textEl.textContent.toLowerCase().includes(searchTerm)) {
                                    textMatchesSearch = true;
                                }
                            });
                        }
                        
                        const categoryMatchesFilter = (filterValue === 'all' || !itemCategory || itemCategory === filterValue);

                        if (textMatchesSearch && categoryMatchesFilter) {
                            item.style.display = '';
                            visibleItemsCount++;
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    if (noResultsMessage) {
                         noResultsMessage.style.display = (visibleItemsCount === 0 ) ? 'block' : 'none';
                    }
                });
                button.setAttribute('listener', 'true'); // Mark that listener is attached
            });
        });
    }

    // --- Featured Prompts Carousel (for Get Inspired Page V2) ---
    const carousel = document.querySelector('.featured-prompts-carousel-section .carousel-slides');
    if (carousel) {
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const prevButton = document.querySelector('.featured-prompts-carousel-section .carousel-button.prev');
        const nextButton = document.querySelector('.featured-prompts-carousel-section .carousel-button.next');
        const dotsContainer = document.querySelector('.featured-prompts-carousel-section .carousel-dots');
        let currentIndex = 0;
        let slideInterval;

        function updateDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
                dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                dot.addEventListener('click', () => {
                    goToSlide(index);
                    resetInterval();
                });
                dotsContainer.appendChild(dot);
            });
        }

        function goToSlide(index) {
            if (slides.length === 0) return;
            slides[currentIndex].classList.remove('active');
            slides[currentIndex].style.opacity = '0';
            
            currentIndex = (index + slides.length) % slides.length;
            
            slides[currentIndex].classList.add('active');
            slides[currentIndex].style.opacity = '1';
            updateDots();
        }

        function nextSlide() { goToSlide(currentIndex + 1); }
        function prevSlide() { goToSlide(currentIndex - 1); }
        function startInterval() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); }
        function resetInterval() { clearInterval(slideInterval); startInterval(); }

        if (slides.length > 0) {
            slides.forEach((slide, index) => {
                if (index === 0) { slide.classList.add('active'); slide.style.opacity = '1'; currentIndex = 0; }
                else { slide.classList.remove('active'); slide.style.opacity = '0'; }
            });
            updateDots();
            startInterval();
            if (prevButton) prevButton.addEventListener('click', () => { prevSlide(); resetInterval(); });
            if (nextButton) nextButton.addEventListener('click', () => { nextSlide(); resetInterval(); });
        }
    }

    // --- Flip Card Logic (for Get Inspired Page V2) ---
    const flipCardContainers = document.querySelectorAll('.flip-card-container');
    if (flipCardContainers.length > 0) {
        flipCardContainers.forEach(container => {
            const toggleFlip = () => { container.classList.toggle('flipped'); };
            container.addEventListener('click', toggleFlip);
            container.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleFlip(); }
            });
        });
    }
});