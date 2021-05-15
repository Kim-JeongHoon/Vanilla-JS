function sayHello(name, age){
    console.log('Hello!', name, "you have", age, "years of age.");
}
sayHello("Nicolas", 15);

function sayHello2(name, age){
    console.log(`Hello ${name} you are ${age} yaers`);
}

sayHello2("Nicolas", 15);

function sayHello3(name, age){
    return `Hello ${name} you are ${age} years`;
}
const greetNicolas = sayHello3("Nicalas", 15)

console.log(greetNicolas)

const calculator = {
    plus: function(a,b){
        return a + b;
    }
}

//console.log(greetNicolas2)
const plus = calculator.plus(5, 5)
console.log(plus)



