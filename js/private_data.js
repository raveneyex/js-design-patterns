(function() {
    /* use strict; */

    let map = new WeakMap();
    class Filter {

        constructor(items) {
            map.set(this, items);
        }

        filterByColor(color) {
            let items = map.get(this);
            items = items.filter((item) => item.color === color);
            map.set(this, items);
            return this;
        }

        filterByPrice(price) {
            let items = map.get(this);
            items = items.filter((item) => item.price === price);
            map.set(this, items);
            return this;
        }

        get() {
            return map.get(this);
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
    const filter = new Filter(items);

    let filteredItems = filter
        .filterByColor('red')
        .filterByPrice(666)
        .get();

    console.log('Filtered items:', JSON.stringify(filteredItems));
    console.log('filter', JSON.stringify(filter));
})();