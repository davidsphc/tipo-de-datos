 export let employees: string [] = ["fernando","Melissa","Eduardo"];
let salaries: number [] =[1500,2400,3200]
// let flowers: string [] = ["Rosa","Girasol","Lirio","Rosa Azul"];



// if ( people[3] ) {
//     console.log( people[3] )
// }

// console.log( flowers[2]);
// console.log( flowers[0]);
// console.log( flowers[1]);


// for(let i = 0; i < flowers.length; i++) {
//     console.log(flowers [i] ) 
// }

// for( let i = 0; i < salaries.length; i++){
//      console.log('El salario de Fernando es',salaries  [i]);
//      console.log('El salario de Melissa es', salaries [i]);
//      console.log('El salario de Eduardo es', salaries [i]);
//     }    

for (let i = 0; i < employees.length; i++){
    let employee = employees[i];
    let salary   = salaries[i];

    console.log(employee,'tiene un salario de ', salary)
}
