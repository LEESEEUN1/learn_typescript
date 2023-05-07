interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seeun: User = {
    age: 31,
    name: '세은'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}

const _user = {
    name:'캡틴',
    age:1000
}
getUser( _user)
getUser({age:10, name:'ddd'})

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunciton {
    (a:number, b:number) : number
}

var sum: SumFunciton
sum = function(a: number, b:number) :number{
    return a+b
}

// 인덱싱
interface StringArray {
    [index: number]: string
}

var _arr: StringArray = ['a', 'b', 'c']
_arr[0] = '10'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key:string] : RegExp
}

var _obj:StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(_obj).forEach(function(value) {

})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var _seeun: Developer = {
    name: '세은이',
    age: 1,
    language: 'javascript',
}

