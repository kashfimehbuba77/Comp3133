// var greeter = function (name: string) {
//     console.log('Hello' + name)
// }
// greeter("John Smith")

var greet = function (firstName, lastName) {
    return "Hello ".concat(firstName, " ").concat(lastName);
};
console.log(greet("John", "Smith"));
