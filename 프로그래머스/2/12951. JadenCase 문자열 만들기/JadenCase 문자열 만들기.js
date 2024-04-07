
function solution(s) {
    var answer = '';
    let stringArr = s.split(" ");
    const newStringArr = stringArr.map(word=>{
        //공백이 아니고 숫자 아니고
        let char = '';
        if(word){
            if(isNaN(word[0])){
            char += word[0].toUpperCase();
            }else{
            char += word[0]
            } 
            for(let i=1; i<word.length;i++){
                char += word[i].toLowerCase()
            }
        }
        return char;
    })
    answer = newStringArr.join(" ");
    return answer;
}
// 모든 단어의 첫문자가 대문자고 나머지는 소문자. 
//