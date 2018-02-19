class PubSub {
    constructor(){
        this.topics = {};
        this.subscriberID = -1;
    }

    suscribe(topic, callback) {
        let token = (++this.subscriberID).toString();
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push({
            token,
            callback
        });
        return token;
    }

    publish (topic, args) {
        if (!this.topics[topic]){
            return;
        }
        let suscribers = this.topics[topic];
        suscribers.forEach((suscriber) => {
            suscriber.callback(topic, args);
        });
    }
    
    unsuscribe(token) {
        //TBD;
    };
}

let pubsub = new PubSub();
//suscribers
let johnny = {
    id: 'Johnny',
    onUpdate(topic, args) {
        console.log(`I, ${this.id} received an update from ${topic}:`, args);
    }
};
let molly = {
    id: 'Molly',
    updated(topic, args) {
        console.log(`Molly has a new update from ${topic}:`, args);
    }
}
let johhnySubId = pubsub.suscribe('gossip/politics', johnny.onUpdate.bind(johnny));
let mollySubId = pubsub.suscribe('enhancements/weapons', molly.updated.bind(molly));

pubsub.publish('gossip/politics', {
    headline: 'Politics are corrupt!',
    body: "No shit, Sherlock. It's the system that's corrupt."
});

pubsub.publish('enhancements/weapons', {
    headline: 'AR-15',
    body: 'Remember those bullies back in school? ;)'
});