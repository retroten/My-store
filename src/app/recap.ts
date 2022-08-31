const username: string | number = 'Nicolar'
const sum = (a:number, b: number){
    return a+b;
}
sum(1, 1);

Class Person {
    Age: number;
    lastName: string;

    constructor(public Age:number, public lastName: string){
       
    }
}

const nico = new Person(15, 'Molina');
nico.age;
