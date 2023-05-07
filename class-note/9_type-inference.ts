// 타입 추론 기본
var a = 10

function getB(b = 10) {
    var c = 'hi'
    return c+b
}

getB(333)

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title?: string;
}

var shoppingItem: Dropdown<string> = {
    value: 'dddd',
}

// 타입 추론 기본 3
interface Dropdown2<T> {
    value: T;
    title: string;
}
interface DetailDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailDropdown<string> = {
    title: 'b',
    description: 'c',
    value: 'a', 
    tag: 'b'
}


// Best Common Type -> "|" 
var arr = [1,2,3]
var dd = [1, 'e', true]
