// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.
let elems = document.querySelectorAll('input');
for (let i = 0; i < elems.length; i++){
    elems[i].addEventListener('focusout',func)
}
function func(){
    if(this.value.length == this.dataset.length){
        this.style.borderColor = 'green'; 
    } else {
        this.style.borderColor = 'red';
    }
}