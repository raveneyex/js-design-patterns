class Subject {
    constructor(id) {
        this.id = id;
        this.observers = [];
    }

    register(observer) {
        this.observers = [...this.observers, observer];
        console.log(`${observer.id} is now registered to ${this.id}`);
    }

    deregister(observer) {
        this.observers = this.observers.filter((obs) => obs.id !== observer.id);
        console.log(`${observer.id} is now deregistered from ${this.id}`);
    }

    notify(data) {
        let payload = { id: this.id, data};
        this.observers.forEach((observer) => {
            observer.update(payload);
        });
    }
}

class Cyborg {
    constructor(id) {
        this.id = id;
    }

    update(payload) {
        console.log(`${this.id} has received the following update: ${payload.data} from ${payload.id}`);
    }
}

const subject = new Subject('Body Enhancements');
const observer1 = new Cyborg('molly millions');
const observer2 = new Cyborg('johnny mnemonic');
const observer3 = new Cyborg('Automatic Jack');

console.groupCollapsed('Body Enhancements Black Market')
subject.register(observer1);
subject.register(observer2);
subject.notify('Some mirrorshades implants are available. No serial number.');

subject.deregister(observer1);
subject.register(observer3);

subject.notify('Some secondhand retractile claws are available');
console.groupEnd();