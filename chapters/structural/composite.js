class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(child) {
        this.children = [...this.children, child];
        return this;
    }

    removeChild(child) {
        this.children = this.children.filter((childItem) => childItem !== child);
        return this;
    }

    getChild(index) {
        return this.children[index];
    }

    hasChildren() {
        return this.children.length > 0;
    }
}

let root = new Node('root');
let l1 = new Node('l1');
let l2 = new Node('l2');
let r1 = new Node('r1');
let r2 = new Node('r2');
let r3 = new Node('r3');
l1.addChild(l2);
r2.addChild(r3);
r1.addChild(r2);
root.addChild(r1)
    .addChild(l1);


function traverse(indent, node) {
    console.log('-'.repeat(indent++), node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        if (node.hasChildren()) {
            traverse(indent, node.getChild(i));
        }
    }
}

console.groupCollapsed('A Small Tree');
traverse(0, root);
console.groupEnd();