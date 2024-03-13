const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0])
let liquidsArr = input[1].split(" ").map(Number);

let abs = 2000000000;
let ansLeft = 0;
let ansRight = 0; 

for(let i=0; i<N-1;i++){
    let start = i+1;
    let end = N-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let sum = liquidsArr[mid] +liquidsArr[i]
        if(Math.abs(sum) < abs){
            abs = Math.abs(sum);
            ansLeft = liquidsArr[i]
            ansRight = liquidsArr[mid]
        }
        if(sum===0){
            break
        }else if(sum>0){
            end = mid - 1;
        }else{
            start = mid + 1
        }
    }
}
console.log(ansLeft, ansRight)