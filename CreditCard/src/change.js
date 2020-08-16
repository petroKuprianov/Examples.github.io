
window.onresize = function (){

let width = screen.width;

if(width<=576)
{
    let element1 = document.getElementById("section__form-chek-1");
    let element2 = document.getElementById("section__form-chek-2");
    let element3 = document.getElementById("section__form-chek-3");
    element1.textContent = "* Обязательное поле";
    element2.textContent = "* Обязательное поле";
    element3.textContent = "* Обязательное поле";

}
else{
    let element1 = document.getElementById("section__form-chek-1");
    let element2 = document.getElementById("section__form-chek-2");
    let element3 = document.getElementById("section__form-chek-3");
    element1.textContent = "* Поле обязательно для ввода";
    element2.textContent = "* Поле обязательно для ввода";
    element3.textContent = "* Поле обязательно для ввода";
}

}
