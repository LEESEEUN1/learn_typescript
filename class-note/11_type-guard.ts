interface Developer3 {
     name: string;
     skill:string;
}

interface Person3 {
    name: string;
    age: number;
}

function introduce(): Developer3 | Person3 {
    return {name: 'tony', age:30, skill: 'ddd'}
}

// var tony = introduce() as Developer
var tony = introduce()
// console.log(tony.skill) // 공통 속성만 접근할 수 있으므로 오류

if((tony as Developer3).skill) {

} else if((tony as Person3).age) {

}

// type guard에서 사용되는 키워드 -> is
function isDeveloper(target: Developer3 | Person3): target is Developer3 {
    return (target as Developer3).skill !== undefined
}

if(isDeveloper(tony)) {
    tony.skill
} else {
    tony.age
}