class Iterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }

    first() {
        this.reset();
        return this.next();
    }

    next() {
        return this.items[this.index++];
    }

    hasNext() {
        return this.index <= this.items.length;
    }

    reset() {
        this.index = 0;
    }

    each(callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}
const items = ['one','two','three','four'];
var iter = new Iterator(items);
console.groupCollapsed('Iterator Operations');
console.log(iter.first());
console.groupCollapsed('Iterating items');
iter.each((item) => {
    console.log(item);
});
console.groupEnd();
console.groupEnd();

let count = {
    *[Symbol.iterator]() {
        let index = 0;
        for (;;) {
            yield index++;
        }
    }
}