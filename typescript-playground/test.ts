export function Log(message: string) {
    return function(target, key = null, descriptor = null) {
        var originaleMethode = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log('Logging: ', message)
            
            // könte nicht klappen
            // return originaleMethode();
            return originaleMethode.apply(this, args);
            
        }

        return descriptor;
    }
}


export class Test {

    id: number;

    constructor(id: number) {
        this.id = id;
        console.log('Die Antwort: ', id);

        var x = () => { console.log('test', this); }
    }

    @Log('test')
    hallo() {
        return 77;
    }
}

var test = new Test(1);
console.log("Output: ", test.hallo());
