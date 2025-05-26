document.addEventListener('DOMContentLoaded', () => {
    // --- GLOBAL DATA & HELPERS ---
    // const officialPipCategoriesOrder = [ // No longer strictly needed if buttons are hardcoded
    //     "All", "Single Oils", "Blends", "Supplements & Nutrition", "Diffusers", "Everything Else"
    // ];

    // This function might still be useful if you have other dynamic parts or for reference
    // on how data-filter attributes should look.
    function sanitizeCategoryForDataAttr(categoryName) {
        if (typeof categoryName !== 'string') return '';
        return categoryName
            .toLowerCase()
            .replace(/™/g, '')
            .replace(/ō/g, 'o')
            .replace(/\|/g, '-')
            .replace(/\+/g, 'plus')
            .replace(/&/g, 'and') // Example: For "Supplements & Nutrition" -> "supplements-and-nutrition"
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }

    // --- INITIALIZATION FOR PRODUCT INFO PAGES TAB (Buttons & Links are now STATIC in HTML) ---
    function initializePipTab() {
        const pipPanel = document.getElementById('pips');
        if (!pipPanel) {
            return;
        }

        const pipLinksGrid = pipPanel.querySelector('#pipLinksGrid');
        if (!pipLinksGrid) {
            return;
        }

        // 1. PIP Category Filter Buttons are NOW STATIC IN HTML.
        //    The generic "Category Filter Button Logic" below will find them and attach listeners.
        //    No button generation needed here.

        // 2. PIP Links are static in HTML.
        //    Ensure the no-results message is initially set correctly.
        const noResultsMessage = pipPanel.querySelector('.no-results-message');
        if (noResultsMessage) {
            const pipItemsInHtml = pipLinksGrid.querySelectorAll('.searchable-item');
            // Show "no results" only if the panel isn't the active one on load AND it's truly empty.
            // If the panel is active, the filter logic (triggered by tab init) will handle the message.
            noResultsMessage.style.display = (pipItemsInHtml.length === 0 && !pipPanel.classList.contains('active')) ? 'block' : 'none';
        }
        // console.log("PIP Tab Initialized (Static Buttons & Links)");
    }

    // CALL PIP INITIALIZATION (might do very little now, but good for consistency)
    initializePipTab();

    // --- Tab Navigation Logic (for Resources page) ---
    const mainTabButtons = document.querySelectorAll('.tab-navigation .tab-button');
    const mainTabPanels = document.querySelectorAll('.tab-content-panels .tab-panel');

    if (mainTabButtons.length > 0 && mainTabPanels.length > 0) {
        mainTabPanels.forEach(panel => {
            if (!panel.classList.contains('active')) {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
                // Trigger initial filter/search for the initially active tab
                const initialSearchInput = panel.querySelector('.tab-search-input');
                if (initialSearchInput) {
                    initialSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
                } else { // If no search, try to "click" All category button
                    const catBar = panel.querySelector('.category-filter-bar');
                    const allBtn = catBar ? catBar.querySelector('.category-filter-btn[data-filter="all"]') : null;
                    if (allBtn) {
                        // Check if event listeners are attached before clicking
                        // The 'listener' attribute was a temporary measure; a more robust check might be needed
                        // if timing issues persist with dynamically vs. statically added buttons.
                        // For fully static buttons, direct click should be fine.
                        allBtn.click();
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
                    currentSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
                } else if (currentCategoryFilterBar) {
                    const allButton = currentCategoryFilterBar.querySelector('.category-filter-btn[data-filter="all"]');
                    if (allButton && !allButton.classList.contains('active')) {
                        allButton.click();
                    } else if (allButton && allButton.classList.contains('active')) {
                        // If "All" is already active, and search was cleared (or no search input), ensure all items are visible
                        // This re-triggers the filter essentially.
                        allButton.click();
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
                // Default to 'all' if no active category button is found (e.g., if category bar doesn't exist for a tab)
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

                    const itemCategory = item.getAttribute('data-category');
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
    const categoryFilterBars = document.querySelectorAll('.category-filter-bar');
    if (categoryFilterBars.length > 0) {
        categoryFilterBars.forEach(bar => {
            const filterButtons = bar.querySelectorAll('.category-filter-btn'); // Finds static & dynamic (if any)
            const panel = bar.closest('.tab-panel');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => { // Event listener for ALL category filter buttons
                    const itemsToFilter = panel ? panel.querySelectorAll('.resource-grid .searchable-item') : [];
                    const noResultsMessage = panel ? panel.querySelector('.no-results-message') : null;
                    const mainSearchInput = panel ? panel.querySelector('.tab-search-input') : null;

                    bar.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterValue = button.getAttribute('data-filter');
                    const searchTerm = mainSearchInput ? mainSearchInput.value.toLowerCase().trim() : '';
                    let visibleItemsCount = 0;

                    itemsToFilter.forEach(item => {
                        const itemCategory = item.getAttribute('data-category');
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
                // Removed: button.setAttribute('listener', 'true'); // No longer needed with this simplified init
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