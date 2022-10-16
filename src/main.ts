class Dialog {
    static log(who: Human, what: string, toWho?: Human) {
        let str: string = `- ${who.fullname()} says `;

        if (toWho) str += `to ${toWho.fullname()} `;
        str += `: "${what}"`;

        console.log(str);
    }
}

class Human {
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

function main() {
    const john_doe = new Human("John", "Doe");

    Dialog.log(john_doe, john_doe.say('Hello, World !'));

    const dave_bowman = new Human("Dave", "Bowman");

    Dialog.log(john_doe, john_doe.say('What is your name ?'), dave_bowman);

    Dialog.log(dave_bowman, dave_bowman.say(`My name is ${dave_bowman.fullname()}`), john_doe);

    const hal_9000 = new Alien('HAL9000');

    try {
        Dialog.log(hal_9000, "#*$£+%@&");//la classe Dialog ne peut pas collaborer avec une instance de type Alien
    } catch (error) {
        console.error(error);
        //  Type 'Alien' is missing the following properties from type 'Human': _firstname, _lastname, fullname, say, and 2 more.
    }

}

main();