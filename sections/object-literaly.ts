

 export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['basquetball'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log( objectString)
    }


}
// .toString();
// console.log(person.name.toUpperCase() );

let car = {
    branch: 'Koeniggseg',
    wheels: 4,
    doors: 2,
    maxiumSpeed:500,
    hp: 1400

} 

let smartTv = {
    resolution: '4k',
    hz: 120,
    brightness: '10000 nits',
    hdmiPorts: 4

}

let youtubeVideo = {
    likes: 100000,
    comments: 13000,
    duration: '15 minutes',
    creator:'Davidsph88'

}
console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
