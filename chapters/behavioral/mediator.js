class Participant {
    constructor(name){
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        this.chatroom.send(message, this, to);
    }

    receive(message, from) {
        console.log(`from ${from.name} to ${this.name}: ${message}`);
    }
}

let Chatroom = (function() {
    var participants = {};

    function register(participant) {
        participants[participant.name] = participant;
        participant.chatroom = this;
    }

    function send(message, from, to) {
        if (to) {                      
            to.receive(message, from);    
        } else {
            Object.keys(participants)
                .filter((participant) => participant !== from.name)
                .forEach((participant) => {
                    participants[participant].receive(message, from);
                });
        }
    }

    return {
        register,
        send
    };
})();

let satan = new Participant('Satan');
let god = new Participant('God');
let adam = new Participant('Adam');
Chatroom.register(satan);
Chatroom.register(god);
Chatroom.register(adam);

god.send('Let there be light');
satan.send("Shut up. I'm trying to sleep.", god);