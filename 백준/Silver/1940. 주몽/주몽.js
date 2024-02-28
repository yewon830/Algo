const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split("\n");

// 두 재료 합쳐서 M이 되면 갑옷. 

let resourceCnt = Number(input[0])
let armorGoal = Number(input[1])
let numArr = input[2].split(" ").map(Number).sort((a,b)=>a-b);

//투 포인터 : 정렬 후 
// 양 끝에서 둘의 합이 M이 되면 1 더하고 위치를 한 칸씩 옮긴다.
//만약 둘의 합이 m보다 작으면, 왼쪽값이 더 커져야하므로(정렬된 상태니까) 한칸 이동
//만약 값이 m보다 크면, right의 값을 작게 만든다.

let answer = 0
//위치 같아지면 끝일랑가
let pointerL = 0;
let pointerR = resourceCnt-1;
while(pointerL < pointerR){
    if(numArr[pointerL] + numArr[pointerR] === armorGoal){
        answer += 1
        pointerL += 1
        pointerR -= 1
    }else if(numArr[pointerL] + numArr[pointerR] > armorGoal){
        pointerR -= 1
    }else{
        pointerL += 1
    }
}

console.log(answer)