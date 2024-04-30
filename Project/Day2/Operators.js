// Arithmetic Operators

let a = 5;
let b = 2;

console.log("a = ", a, "b = ", b);
console.log("Arithmetic Operations on a and b are ");
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);


// Exponents

console.log("a raise to power b is ", a ** b);


// Unary Operator

console.log("Unary Operations on a and b are ");
console.log("a = ", a, "b = ", b);
console.log(++a, a, a++);
console.log("a = ", a, "b = ", b);
console.log(a++, ++a, a);
console.log("a = ", a, "b = ", b);

console.log();

//Modulus opertor
console.log("a = ", a, "b = ", b);
console.log("a % b is ", a % b);
console.log("a = ", a, "b = ", b);


// Assignment Operators

console.log("Assignment Operations on a and b are ");
console.log("a = ", a, "b = ", b);

console.log("a += b", a += b);
console.log("a -= b", a -= b);
console.log("a *= b", a *= b);
console.log("a /= b", a /= b);
console.log("a %= b", a %= b);
console.log("a **= b", a **= b);
console.log("a = ", a, "b = ", b);

console.log();


// Comparison Operators

{
    let a = 5;
    let b = 6;
    let c = "5";

    console.log("a = ", a, "b = ", b);

    console.log("5 == 6", 5 == 6);
    console.log("5 != 6", 5 != 6);
    console.log("5 >= 6", 5 == 6);
    console.log("5 < = 6", 5 == 6);
    console.log("5 == 6", 5 == 6);

    console.log("5 == '5'", a == c);
    console.log("5 != '5'", a != b);
    console.log("5 >= b", a >= b);
    console.log("5 <= '5'", a <= b);

    console.log("a = ", a, "b = ", b);





}

console.log("Logical Operations on a and b are ");

{

    let a = 4;
    let b = 5;

    console.log("a = ", a, "b = ", b);

    console.log("a && b = ", a && b);
    console.log(" a || b =", a || b);

    console.log("a", a, !a);
    console.log();

    console.log("a = ", a, "b = ", b);

}


// ternary Operator

{
    let age = 92;

    console.log(age > 18 ? "adult" : "Not adult");

}