document.addEventListener('DOMContentLoaded', () => {
    // --- Tab Navigation Logic (for Resources page) ---
    const mainTabButtons = document.querySelectorAll('.tab-navigation .tab-button');
    const mainTabPanels = document.querySelectorAll('.tab-content-panels .tab-panel');

    if (mainTabButtons.length > 0 && mainTabPanels.length > 0) {
        // Initial setup for tab panels
        mainTabPanels.forEach(panel => {
            if (!panel.classList.contains('active')) {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block'; // Ensure the active one is visible
            }
        });

        mainTabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Deactivate all buttons and panels
                mainTabButtons.forEach(btn => btn.classList.remove('active'));
                mainTabPanels.forEach(panel => {
                    panel.classList.remove('active');
                    panel.style.display = 'none'; // Explicitly hide
                });

                // Activate clicked button and corresponding panel
                button.classList.add('active');
                const targetPanelId = button.getAttribute('data-tab');
                const targetPanel = document.getElementById(targetPanelId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    targetPanel.style.display = 'block'; // Explicitly show
                }

                // Reset search and category filters in the newly activated tab
                const currentSearchInput = targetPanel ? targetPanel.querySelector('.tab-search-input') : null;
                const currentCategoryFilterBar = targetPanel ? targetPanel.querySelector('.category-filter-bar') : null;

                if (currentSearchInput) {
                    currentSearchInput.value = ''; // Clear search input
                    // Manually trigger input event to reset any search filtering visuals
                    currentSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
                }
                
                if (currentCategoryFilterBar) {
                    const allButton = currentCategoryFilterBar.querySelector('.category-filter-btn[data-filter="all"]');
                    if (allButton) {
                         // Deactivate other filter buttons and activate 'All'
                        currentCategoryFilterBar.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));
                        allButton.classList.add('active');
                        
                        // Manually trigger click on 'All' to reset item visibility based on cleared search
                        // and "All" category.
                        // This ensures items are reshown correctly if they were hidden by previous filters.
                        const itemsToFilter = targetPanel.querySelectorAll('.resource-grid .searchable-item');
                        const noResultsMessage = targetPanel.querySelector('.no-results-message');
                        let visibleItemsCount = 0;

                        itemsToFilter.forEach(item => {
                            const textElements = item.querySelectorAll('.searchable-text');
                            let textMatchesSearch = true; // True because search is cleared

                            if (textMatchesSearch) { // 'all' category means categoryMatchesFilter is true
                                item.style.display = ''; 
                                visibleItemsCount++;
                            } else {
                                item.style.display = 'none';
                            }
                        });
                        if(noResultsMessage) {
                           noResultsMessage.style.display = (visibleItemsCount === 0) ? 'block' : 'none';
                        }
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

                const itemsToSearch = currentPanel.querySelectorAll('.searchable-item');
                const noResultsMessage = currentPanel.querySelector('.no-results-message');
                const activeCategoryFilter = currentPanel.querySelector('.category-filter-btn.active');
                const categoryFilterValue = activeCategoryFilter ? activeCategoryFilter.getAttribute('data-filter') : 'all';
                let visibleItemsCount = 0;

                itemsToSearch.forEach(item => {
                    const textElements = item.querySelectorAll('.searchable-text');
                    let textMatchesSearch = false;
                    if (searchTerm === '') { // If search is empty, all text matches
                        textMatchesSearch = true;
                    } else {
                        textElements.forEach(textEl => {
                            if (textEl.textContent.toLowerCase().includes(searchTerm)) {
                                textMatchesSearch = true;
                            }
                        });
                    }

                    const itemCategory = item.getAttribute('data-category');
                    const categoryMatchesFilter = (categoryFilterValue === 'all' || itemCategory === categoryFilterValue);

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
            const filterButtons = bar.querySelectorAll('.category-filter-btn');
            const panel = bar.closest('.tab-panel');
            const itemsToFilter = panel ? panel.querySelectorAll('.resource-grid .searchable-item') : [];
            const noResultsMessage = panel ? panel.querySelector('.no-results-message') : null;
            const mainSearchInput = panel ? panel.querySelector('.tab-search-input') : null;

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
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
                        
                        if (textMatchesSearch && (filterValue === 'all' || itemCategory === filterValue)) {
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
        });
    }

    // --- Featured Prompts Carousel (for Get Inspired Page V2) ---
    const carousel = document.querySelector('.featured-prompts-carousel-section .carousel-slides');
    if (carousel) {
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide')); // Convert to Array
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
            slides[currentIndex].style.opacity = '0'; // For transition
            
            currentIndex = (index + slides.length) % slides.length;
            
            slides[currentIndex].classList.add('active');
            slides[currentIndex].style.opacity = '1'; // For transition
            updateDots();
        }

        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function prevSlide() {
            goToSlide(currentIndex - 1);
        }
        
        function startInterval() {
            clearInterval(slideInterval); // Clear any existing interval
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        if (slides.length > 0) {
            // Ensure only the first slide has 'active' class from HTML, then JS takes over
            slides.forEach((slide, index) => {
                if (index === 0) {
                    slide.classList.add('active');
                    slide.style.opacity = '1';
                    currentIndex = 0; // Explicitly set current index
                } else {
                    slide.classList.remove('active');
                    slide.style.opacity = '0';
                }
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
            // const innerCard = container.querySelector('.flip-card-inner'); // Not directly used in toggle

            const toggleFlip = () => {
                container.classList.toggle('flipped');
            };

            container.addEventListener('click', toggleFlip);
            container.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleFlip();
                }
            });
        });
    }
});