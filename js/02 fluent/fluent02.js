(function() {
    /* use strict; */

    class Filter {

        constructor(items) {
            this._items = items;
        }

        filterByColor(color) {
            this._items = this._items.filter((item) => item.color === color);
            return this;
        }

        filterByPrice(price) {
            this._items = this._items.filter((item) => item.price === price);
            return this;
        }

        get() {
            return this._items;
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

    let filteredItems;
    filteredItems = filter
        .filterByColor('red')
        .filterByPrice(666)
        .get();
        
    console.log('Filtered items:', JSON.stringify(filteredItems));
})();