interface __Person {
    name: string;
    age: number;
}

type _Person = {
    name: string;
    age: number;
}

let __seeun: __Person = {
    name: '세은이',
    age: 11,
}

let __seeun2: _Person = {
    name: '세은이',
    age: 11,
}

// 타입과 인터페이스는 마우스 올렸을때 뜨는 형식이 다르다

type MyString = string;
var str: MyString = 'hello'

type Todo = {id:string; titile:string; done: boolean}
function getTodo(todo: Todo): void {
    console.log('todo : ',todo)
}

// 인터페이스와 타입 별칭의 차이점
// 타입 별칭은 새로운 값을 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 의미를 부여하는 것