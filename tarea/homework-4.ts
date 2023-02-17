 export let numbers = [1, 6, 8, 4, 2, 7, 10234, 3, -2349845435643857 ]; 
let maxNumber = -9999

for (let i = 0; i < numbers.length; i++ ){
    if (numbers[i] >= maxNumber ){
        maxNumber = numbers[i];
    }
}


console.log('El numero mayor es:', maxNumber );
