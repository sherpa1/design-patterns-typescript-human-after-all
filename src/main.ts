class Human {
    private _firstname: string;
    private _lastname: string;

    constructor(pFirstname: string, pLastname: string) {
        this._firstname = pFirstname;
        this._lastname = pLastname;
    }

    fullname(): string {
        return `${this._firstname} ${this._lastname}`;
    }

    say(something: string) {
        return `- ${this.fullname()} says : "${something}"`;
    }

    answer(something: string, someone: Human) {
        return `- ${this.fullname()} answers to ${someone.fullname()} : "${something}"`;
    }

    ask(something: string, someone: Human) {
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

function main() {
    const john_doe = new Human("John", "Doe");
    console.log(john_doe.say('Hello, World !'));

    const james_white = new Human("James", "White");
    console.log(john_doe.ask('What is your name ?', james_white));

    console.log(james_white.answer(`My name is ${james_white.fullname()}`, john_doe));

}

main();