function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    // 먼곳에 택배or수거가 있다면 어쨌든 가야 한다
    // 돌아와야 한다
    
    // 역순으로 탐색
    let deliverProduct = 0;
    let pickupBox = 0;
    
    // 배달+수거 하는 수가 cap보다 크면 안됨
    for(let i = n-1; i>=0; i--){
        deliverProduct += deliveries[i];
        pickupBox += pickups[i]

        while(deliverProduct >0 || pickupBox>0){
            deliverProduct -= cap
            pickupBox -= cap
            answer += ((i+1)*2)
        }
      
    }
    
    return answer;
}