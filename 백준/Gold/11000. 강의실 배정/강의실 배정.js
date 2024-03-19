const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');


let lectureCnt = Number(input[0])
let lecturesArr = []
for(let i=1; i<=lectureCnt;i++){
    let lec = input[i].split(" ").map(Number)
    lecturesArr.push([lec[0],0])
    lecturesArr.push([lec[1],1])
}
lecturesArr.sort((a,b)=>{
    if(a[0]===b[0]){
        return b[1]-a[1]
    }
    return a[0]-b[0]
})

let max = -1;
let rooms = 0;
for(let i=0; i<lecturesArr.length; i++){
    if(lecturesArr[i][1]===0){
        rooms++
    }else{
        rooms--
    }
    if(rooms > max){
        max = rooms
    }
}

console.log(max)