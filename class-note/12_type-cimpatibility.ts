interface Dev {
    name: string;
    skill: string;
}
interface Human {
    name: string;
}

var dr: Dev
var hm: Human
// person = developer
// dr = new pr()

var add = function(a:number) {
    console.log(a);
}

var sum = function(a:number, b: number) {
}
// sum > add

sum = add

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string> 
var empty2: Empty<string> 
empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
    data: T
}
var notEmpty1: NotEmpty<string>
var notEmpty2: NotEmpty<number>
