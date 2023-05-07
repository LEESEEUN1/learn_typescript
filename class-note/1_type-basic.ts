// 기본적인 타입에 대해서 알아보자

// JS 문자열 선언
// var str = 'hello'

// TS 문자열 선언
const str: string = 'hello'

// TS 숫자
let num: number = 1

// TS 배열
let arr: Array<number> = [1, 2, 3]
let heroes: Array<string> = ['cap', 'b', 'c']
let items: number[] = [1, 2, 3]

// TS 튜플 -> 배열의 인덱스별 타입까지 지정하는 것
let address: [string, number, string] = ['gangnam', 100, 'c']

// TS 객체
let obj: object = {}
// let person: object = {
// 	name: 'capt',
// 	age: 100,
// }
let person: { name?: string; age?: number } = {
	name: 'capt',
	age: 100,
}

// TS 진위값
let show: boolean = true
