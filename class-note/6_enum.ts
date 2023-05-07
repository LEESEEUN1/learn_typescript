
enum Shoes {
    Nike,
    Adidas
}

Shoes.Adidas
let myShoes = Shoes.Nike
console.log(myShoes) // 0 -> 별도의 값을 지정하지 않았기 때문에 숫자형 enum이 됨


enum _Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

let _myShoes = _Shoes.Nike
console.log(_myShoes)



// 활용 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답');
 
    }
    if( answer === Answer.No) {
        console.log('오답');
    }
}

// askQuestion('yes')
// askQuestion('y')
// askQuestion('예스')

askQuestion(Answer.Yes)