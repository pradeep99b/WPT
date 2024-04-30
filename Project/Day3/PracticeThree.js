let name = prompt("Enter username");

let str = '@' + name.replaceAll(" ", "") + name.length;

console.log(str);
