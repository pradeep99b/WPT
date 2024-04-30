let str = prompt("Enter a word");

let countVow = (str) => {
    let count = 0;
    str = str.toLowerCase();
    for (let ch of str) {

        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count++;
        }

    }
    console.log(count);
    return count;

};

let str2 = `The count of Vowels in the word ${str} is ${countVow(str)} `;
console.log(str2);