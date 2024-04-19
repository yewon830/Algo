function solution(people, limit) {
    var answer = 0;
    let i = 0;
    people.sort((a,b)=>a-b);
    //i는 사람을 같이 태우는 경우.
    // 모두 각자 다른 보트에 타는 경우 - 같이 타는 경우(i)
    for(let j = people.length-1; i<j; j--){
        if(people[i]+ people[j] <= limit){
            i++
        }
    }
    return people.length - i;
}