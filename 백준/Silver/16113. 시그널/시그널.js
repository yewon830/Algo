const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

//1. 길이는 5의 배수
//2. 다섯개로 쪼개서 row로 배치
//3. 숫자 사이 공백 있음. (열이 전부.) 


// 이차원 배열 형성.
//숫자를 딕셔너리로 1:1 배치 해야할듯. 포함여부가 아니라 일치해야 함.

const N = Number(input[0]);
const code = input[1];
const board = [];

//while문은 i가 0에서 < N/5
//만약에 #이 있으면, 거기서부터
//3열을 봐서 0에서 2까지 ~ 거기서 8칸을 더한거를 5번 

const signal = {0:'####.##.##.####',1:'#####',2:'###..#####..###',3:'###..####..####',
    4:'#.##.####..#..#',5:'####..###..####',6:'####..####.####',7:'###..#..#..#..#',
    8:'####.#####.####',9:'####.####..####'}

// 이거만 빼내서 문자열에 추가.
// 그랬을 때 딕셔너리에 있는 값이면 그 키를 출력
// i + 4 해서 이미 본 건 건너뜀
// continue


// 만약 검은색으로 시작했는데 저 모든게 아니면, 1임
// i + 2
let i = 0;
let result = '';
while(i<N/5){
    if(code[i]==='#'){
        if(i+1>=N/5 || i+2 >= N/5){
            result += '1';
            break
        }else{
            let [j,k,l] = [i, i+1, i+2];
            let tempNum = code[j]+code[k]+code[l];
            for(let m=0; m<4; m++){
                j += N/5
                k += N/5
                l += N/5
                tempNum += code[j]+code[k]+code[l];
            }
            if(Object.values(signal).includes(tempNum)){
                const findNum = Object.keys(signal).find(key=> signal[key]===tempNum);
                result += findNum.toString();
                i += 4
            }else{
                result += '1';
                i += 2
            }
        }
    }else{
        i++
    }

}
console.log(result)
