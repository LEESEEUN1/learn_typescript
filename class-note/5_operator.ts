// function logMessage (value: any) {
//     console.log(value)
// }

// union type ->  타입 하나 이상 쓰는것
var se: string |  number | boolean

function logMessage(value:string | number) {
    console.log(value);

    if(typeof value === 'number') {
        value.toLocaleString()
    }

    if(typeof value === 'string') {
        value.toString()
    }
    throw new TypeError('value must be string or number')
}

logMessage('hello')
logMessage(100)

interface _Developer {
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

// 타입의 공통 속성(보장된 속성)만 쓸 수 있음
function askSomeone(someone: _Developer | Person) {
    someone.name
    // if( typeof someone === _Developer ) {
    // }
}
askSomeone({name: 'ddd', skill: 'java'})
askSomeone({name:'bbb', age:3000})

// Intersaction
var capt: string & number & boolean

function _askSomeone(someone: _Developer & Person) {
    someone
    someone.name
    someone.skill
    someone.age
}

_askSomeone({name: 'ddd', skill: 'java', age:3000})