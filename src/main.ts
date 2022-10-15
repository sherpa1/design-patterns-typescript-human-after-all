interface ICommunicant {
    _firstname: string;
    _lastname: string;
    fullname(): string;
    say(something: string): string;
    answer(something: string, someone: ICommunicant): string;
    ask(something: string, someone: ICommunicant): string;
}

class Human {
    protected _firstname: string;
    protected _lastname: string;

    constructor(firstname: string, lastname: string) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    fullname(): string {
        return `${this._firstname} ${this._lastname}`;
    }

    say(something: string): string {
        return `- ${this.fullname()} says : "${something}"`;
    }

    answer(something: string, someone: Human): string {
        return `- ${this.fullname()} answers to ${someone.fullname()} : "${something}"`;
    }

    ask(something: string, someone: Human): string {
        return `- ${this.fullname()} asks to ${someone.fullname()} : "${something}"`;
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
        return `- ${this._name} 54y5 : "${something}"`;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

}

class AlienAdapterToHuman {
    constructor(alien: Alien) {

    }
}

function main() {
    const john_doe = new Human("John", "Doe");
    console.log(john_doe.say('Hello, World !'));

    const james_white = new Human("James", "White");
    console.log(john_doe.ask('What is your name ?', james_white));

    console.log(james_white.answer(`My name is ${james_white.fullname()}`, john_doe));

    const hal_9000 = new Alien('HAL9000');
    console.log(hal_9000.s4y(`@&$*%+=£`));

    try {
        john_doe.ask('Where are you coming from ?', hal_9000);
    } catch (error) {
        console.error(error);
    }

}

main();