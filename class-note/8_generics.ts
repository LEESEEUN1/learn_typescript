// function logText(text): {
//     console.log(text)
//     return text
// }

// logText('GKGKKGGKKGKGKGKKK')
// logText(10)
// logText(true)

// function logText<T>(text: T):T {
//     console.log(text)
//     return text
// }

// logText<string>('하이')

function logText(text: string) {
    console.log(text)
    // text.split('').reverse().join('')
    return text
}

function logNumber(num: number) {
    console.log(num)
    return num
}

logText('gkgkgk')
logNumber(123)
// 유지보수 측면에서 다른 데이터 타입을 받기 위해 함수를 여러개 만들어야 하기 때문에 좋지 않음



function _logText(text: string|number) {
    console.log(text)
    // 이 경우 스트링, 숫자 둘 다 파라미터로 받을 수 있지만

    return text
}

// javascript api사용에 제한이 있음 (문자, 숫자 둘 다 쓸 수 있는 api만 사용 가능)
// const a = logText('a')
// a.split() // -> 에러발생 --> 제네릭을 사용해보자

_logText('aaaa')
_logText(123)

function genericLogText<T>(text:T):T {
    console.log(text)
    return text
}

const b = genericLogText<string>('aaaa,aaaaa')
b.split(',')

const c = genericLogText<boolean>(true)
console.log(c) // true
// 제네릭 : 함수를 호출 할 때 타입을 지정하면서 사용


// 인터페이스에 제네릭 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
// const obj: Dropdown = {value: '10', selected: false}
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = {value:'dddd', selected: true}

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): number {
    // console.log('text: ',text.length) // T가 어떤 타입일지 모르기 때문에 오류
    return text.length
}

logTextLength<string>(['hi', 'select'])
logTextLength<number>([1,2,3])

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: string;
}

function _logTextLength<T extends LengthType>(text:T):T {
    text.length.length
    return text
}
_logTextLength<LengthType>({length:'adddddddddddd'})

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T {
    return itemOption
}

// getShoppingItemOption(19)
// getShoppingItemOption<string>('dddd')
getShoppingItemOption("name")