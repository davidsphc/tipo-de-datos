 export interface person{
    name: string;
    age:number;
    isActive: boolean

}


let fernando = {
    name: 'Fernando',
    age: 36,
    isActive: true

};
let melissa = {
    name: 'Melissa',
    age: 30

}
let juan = {
    name: 'Juan',
    age: 42
}

let people = [ fernando, melissa, juan];

// console.log( people );

for (let i = 0; i < people.length; i++){
    let person = people[i];
    console.log(person.name + ' ' + person.age)
}
