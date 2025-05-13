document.addEventListener('DOMContentLoaded', () => {
    // --- Tab Navigation Logic ---
    const tabButtons = document.querySelectorAll('.tab-navigation .tab-button');
    const tabPanels = document.querySelectorAll('.tab-content-panels .tab-panel');

    tabPanels.forEach(panel => {
        if (!panel.classList.contains('active')) {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => {
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

            const currentSearchInput = targetPanel ? targetPanel.querySelector('.tab-search-input') : null;
            const currentCategoryFilterBar = targetPanel ? targetPanel.querySelector('.category-filter-bar') : null;

            if (currentSearchInput) {
                currentSearchInput.value = '';
                currentSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
            // Reset category filters in the new tab to "All" if a filter bar exists
            if (currentCategoryFilterBar) {
                const allButton = currentCategoryFilterBar.querySelector('.category-filter-btn[data-filter="all"]');
                if (allButton && !allButton.classList.contains('active')) {
                    allButton.click(); // Simulate a click on "All" to reset view
                } else if (allButton && allButton.classList.contains('active')) {
                    // If "All" is already active, still need to re-trigger filter logic for the items
                     const itemsToFilter = targetPanel.querySelectorAll('.resource-grid .searchable-item');
                     const noResultsMessage = targetPanel.querySelector('.no-results-message');
                     let visibleItemsCount = 0;
                     itemsToFilter.forEach(item => {
                        item.style.display = ''; // Show all items
                        visibleItemsCount++;
                     });
                     if (noResultsMessage) noResultsMessage.style.display = 'none';
                }
            }
        });
    });

    // --- Search Functionality within Tabs ---
    const searchInputs = document.querySelectorAll('.tab-search-input');
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
                textElements.forEach(textEl => {
                    if (textEl.textContent.toLowerCase().includes(searchTerm)) {
                        textMatchesSearch = true;
                    }
                });

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
                noResultsMessage.style.display = (visibleItemsCount === 0 && (searchTerm !== '' || categoryFilterValue !== 'all')) ? 'block' : 'none';
            }
        });
    });

    // --- Category Filter Button Logic (NEW SECTION) ---
    const categoryFilterBars = document.querySelectorAll('.category-filter-bar');
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
                    noResultsMessage.style.display = (visibleItemsCount === 0 && (searchTerm !== '' || filterValue !== 'all')) ? 'block' : 'none';
                }
            });
        });
    });
});