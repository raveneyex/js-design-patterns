(function() {
    /* use strict; */

    class Filter {
        filterByColor(items, color) {
            return items.filter((item) => item.color === color);
        }

        filterByPrice(items, price) {
            return items.filter((item) => item.price === price);
        }
    }

    const items = [
        { color: 'red', price: 666, name: 'Pr01' },
        { color: 'red', price: 667, name: 'Pr02' },
        { color: 'blue', price: 666, name: 'Pr03' },
        { color: 'green', price: 666, name: 'Pr04' },
        { color: 'yellow', price: 666, name: 'Pr05' },
        { color: 'red', price: 666, name: 'Pr06' }                                  
    ];
    const filter = new Filter();

    let filteredItems;
    filteredItems = filter.filterByColor(items, 'red');
    filteredItems = filter.filterByPrice(filteredItems, 666);
    console.log('Filtered items:', JSON.stringify(filteredItems));
})();