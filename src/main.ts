interface ICommunicant {
    fullname(): string;
    say(something: string): string;
}

class Dialog {
    static log(who: ICommunicant, what: string, toWho?: ICommunicant) {
        let str: string = `- ${who.fullname()} says `;

        if (toWho) str += `to ${toWho.fullname()} `;
        str += `: "${what}"`;

        console.log(str);
    }
}

class Human implements ICommunicant {
    _firstname: string;
    _lastname: string;

    constructor(firstname: string, lastname: string) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    fullname(): string {
        return `${this._firstname} ${this._lastname}`;
    }

    say(something: string): string {
        return something;
    }

    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }
    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }
}

class Alien {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    s4y(something: string): string {
        return something;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

}

class AlienAdapterToHuman implements ICommunicant {

    private _alien: Alien;

    constructor(alien: Alien) {
        this._alien = alien;
    }

    fullname(): string {
        return `${this._alien.name}`;
    }

    say(something: string): string {
        return `${this._alien.s4y(something)}`;
    }

}

function main() {
    const john_doe = new Human("John", "Doe");

    Dialog.log(john_doe, john_doe.say('Hello, World !'));

    const dave_bowman = new Human("Dave", "Bowman");

    Dialog.log(john_doe, john_doe.say('What is your name ?'), dave_bowman);

    Dialog.log(dave_bowman, dave_bowman.say(`My name is ${dave_bowman.fullname()}`), john_doe);

    const hal_9000 = new Alien('HAL9000');

    const adapterToHuman = new AlienAdapterToHuman(hal_9000);
    Dialog.log(adapterToHuman, adapterToHuman.say(`@&$*%+=£`))

    try {
        Dialog.log(john_doe, john_doe.say('Where are you coming from ?'), adapterToHuman);
        Dialog.log(adapterToHuman, adapterToHuman.say("I come from Mars"), john_doe);
    } catch (error) {
        console.error(error);
    }

}

main();