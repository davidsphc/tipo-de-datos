 export class Car {
    brand: string;
    doors:number;
    fuelThank: number;
    IsRunning:boolean;
    type:string;
    createdAt:number;
    constructor() {
        this.brand = 'No brand';
        this.doors = 0;
        this.fuelThank = 43;
        this.IsRunning= false;
        this.type = 'No type'

        this.createdAt = 123456789;
    }

    turnOn(){
        if( this.IsRunning ){
            console.log('El carro ya estaba encendido... se daño el motor');
            return;
        }
        if (this.fuelThank <= 0 ){
            
             console.log('El carro no tiene gasolina');
            return;
        }

            this.IsRunning = true; 
            console.log('El carro está encendido ahora');
    }

    fillTank( gas: number){
        if( gas >= 0 ) {
            console.log('El gas tiene que ser positivo')
            return;
        }
        let newFuelTank = this.fuelThank + gas;
        if (newFuelTank >= 100){
            newFuelTank = 100;
        }
        this.fuelThank = newFuelTank;
    } 
    multiplicaPor10( numero: number) {
        return numero * 10;
    }
       
}    



let myMazda = new Car();
myMazda.brand = 'Mazda';
myMazda.type = 'Sedan'
const numero =  myMazda.multiplicaPor10(10);
console.log( numero )

// console.log(myMazda);
// myMazda.turnOn();
// myMazda.fillTank(-50);
// console.log(myMazda);
