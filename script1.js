'use strict';
//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
let elems = document.querySelectorAll('input');
let id = document.getElementById('test');
for (let i = 0; i < elems.length; i++){
    elems[i].addEventListener('focusout',func);
}
function func(){
    id.innerHTML = this.value;
}
