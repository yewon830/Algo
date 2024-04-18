function solution(arr) {
    var answer = 0;
    //몰라 일단 생각나는 거는 배열을 오름차순으로 정렬해서
    //배열의 제일 큰 값의 배수가 다른 수의 배수가 되는지 확인.
    arr.sort((a,b)=>a-b);
    let i = 1;
    while(true){
        let flag = true;
        for(let j=1;j<arr.length;j++){
            if((arr[0]*i)%arr[j]!==0){
                flag = false;
                break
            }
        }
        if(flag){
            answer = arr[0] * i
            break
        }
        i++
    }
    return answer;
}