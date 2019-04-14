class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * 2 * this.radius
    }
}
let circle1 = new Circle (10);
let totalArea = circle1.getArea();
console.log(`this totalArea is ${totalArea}`)

const object = {
    name: 'budi',
    gender: 'male',
    live: 'batam'
}
console.log(object);
const {name,live} = object;
console.log (name, live)

const simpleFunction = ({ name, gender }) => `hi my name is ${name} with gender ${gender}`
const greeting = simpleFunction(object)
console.log(greeting)

const {name1, ... newObject } = object;
console.log( name );
console.log( newObject );

const person1 = {
    name: 'Omi Knight',
    class: 'support',
    level: 21
}
const person2 = {
    ...person1,
    name: 'Tide Hunter'
};
console.log(`person is`, person1)
console.log(`person is`, person2)

const App = {
    start (){
        console.log('running')
    },
    end() {
        console.log('stop')
    }
}
App.start();