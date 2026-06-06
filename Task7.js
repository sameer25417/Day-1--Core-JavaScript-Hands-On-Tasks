//Default Parameters
function sayHello(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(sayHello());
console.log(sayHello("Sameer"));