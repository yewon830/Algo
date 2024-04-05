const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 1. 문자열 입력 받아서 배열로 변환
// 2. 다음으로 들어오는 문자열에서 what does ~가 나올때까지 문자열을 animal 배열에 받는다
// 4. input의 1번 배열을 돌면서 만약 animal 배열에 있으면 넘긴다. (삭제하ㅣ면 배열이 잘 안돈다...)
// 5. 그 배열에 없으면 result에 push

const N = Number(input[0]);
let cnt = 0;
for(let i = 0; i<N; i++){
    cnt++
    const sounds = input[cnt].trim().split(" ");
    const animalSound = [];
    cnt++
    while( input[cnt].trim() !== "what does the fox say?"){
        let temp = input[cnt].split(" ");
        animalSound.push(temp[2].trim());
        cnt++;
    }
    const result = [];
    for(let sound of sounds){
        if(!animalSound.includes(sound)){
            result.push(sound)
        }
    }
    console.log(result.join(" "))

}