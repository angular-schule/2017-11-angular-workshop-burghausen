export class Test {

    id: number;

    constructor(id: number) {
        this.id = id;
        console.log('Die Antwort: ', id);

        var x = () => { console.log('test', this); }
    }
}