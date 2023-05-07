// 타입 단언(type assertion) -> 타입스크립트보다 개발자가 타입을 단언해주는 것
var c;
c = 20
c = 'a'
var b = c as string;

// DOM API 조작할때 잘 쓰임
// <div id="app">hi</div>
var div = document.querySelector('#app')
var _div = document.querySelector('div')
