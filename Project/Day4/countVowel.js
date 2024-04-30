let a = prompt("Enter any word");

function countVowel(a) {

    a = a.toLowerCase();
    let count = 0;
    for (let ch of a) {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count++;
        }
    }

    return count;


}

let str = `The count of Vowels in the word ${a} is ${countVowel(a)} `;
console.log(str);