// const targetAlpabet = require('fs').readFileSync("./input.txt").toString().trim()
let targetAlpabet = require('fs').readFileSync('/dev/stdin').toString().trim()

let charStrockes = {'A' : 3, 'B' : 2, 'C' : 1,'D' : 2, 'E' : 3,'F' :3,'G' :3,'H' :3,'I' :1,'J' :1,'K':3,'L':1,'M' :3,'N':3,'O':1,'P':2,'Q' :2,'R':2,'S':1,'T':2,'U':1,'V':1,'W':2,'X':2,'Y':2,'Z':1}
// const alphabet = []


//알파벳 'A~Z'까지 담아주기
// for (let i = 65; i < 91;i++){
//     alphabet.push(String.fromCharCode(i));
// }
// //획수 obj만들어주기(ex : A:3)
// for (let i = 0; i < 26;i++){
//     if('AEFGHKMN'.includes(alphabet[i])){
//         charStrockes[alphabet[i]] = 3
//     }else if('CIJLOSUVZ'.includes(alphabet[i])){
//         charStrockes[alphabet[i]] =1
//     }else{
//         charStrockes[alphabet[i]] = 2
//     }
// }

let sum = 0;
for (let char of targetAlpabet){
    sum += charStrockes[char]
}

if(sum%2){
    console.log( "I'm a winner!")
}else{
    console.log("You're the winner?")
}

