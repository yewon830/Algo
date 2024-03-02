const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split("\n");

let [girlGroupCnt, quizCnt] = input[0].split(" ").map(Number);
// 순서 팀이름/멤버 ->객체 써야 할거같은...
//{트와이스:누구,누구,누구,누구}
let girlGroup = {}
// 멤버 이름 출력, 팀의 이름 출력
let teamName = ''
for (let i=1;i<input.length-(quizCnt*2);i++){
    if(!isNaN(input[i+1].trim())){
        teamName = input[i].trim()
        girlGroup[teamName] = [];
        continue
    }
    if(isNaN(input[i].trim())){
        girlGroup[teamName].push(input[i].trim())
    }
}
let ans = ''
for (let i=input.length-(quizCnt*2); i<input.length;i++){
    if(i%2 === 0){
        continue
    }else{
        if(input[i+1].trim()==='1'){
            ans += Object.keys(girlGroup).find(key=> girlGroup[key].includes(input[i].trim())) + '\n'
        }else{
            let sortedGroup = girlGroup[input[i].trim()].sort()
            for(let name of sortedGroup){
                ans += name + '\n'
            }
        }
    }
}

console.log(ans)