//region variaveis

var buttons = document.querySelectorAll(".buttons");
var right_side = document.querySelector("#right-side");
var left_side = document.querySelector("#left-side-0");
var planets = document.querySelectorAll(".planeta")
var title_box = document.querySelector("#title-box");
var button_box = document.querySelector("#buttons-box");
var content_1 = document.querySelector("#content_1")

//endregion

//region content_1

//region botoes

buttons[0].addEventListener("click", ()=>{

    content_1.setAttribute("id", "content_1_off");
    setTimeout(()=>{right_side.removeChild(content_1);}, 500);
    content_start.setAttribute("id", "content_start");
    setTimeout(()=>{right_side.setAttribute("id","right-side-2")},500);
    setTimeout(()=>{left_side.setAttribute("id","left-side-2")},300)
    setTimeout(()=>{right_side.appendChild(content_start)}, 500);


})

buttons[1].addEventListener("click", ()=>{

    console.log("project")

})

buttons[2].addEventListener("click", ()=>{

    console.log("more")

})

//endregion

//endregion

//region content_2

var content_start = document.createElement("div");
var title_box_start = document.createElement("div");
var title_experiment = document.createElement("h1");
var buttons_box_start = document.createElement("div");
var button_experimento_1 = document.createElement("button");
var button_experimento_2 = document.createElement("button");
var button_exit = document.createElement("button");

content_start.setAttribute("id", "content_start");
title_box_start.setAttribute("id", "title-box-start");
title_experiment.setAttribute("id", "title-experiment");
buttons_box_start.setAttribute("id", "buttons-box-start");
button_experimento_1.setAttribute("id", "experimento_1");
button_experimento_1.setAttribute("class", "buttons");
button_experimento_2.setAttribute("id", "experimento_2");
button_experimento_2.setAttribute("class", "buttons");
button_exit.setAttribute("id", "exit_button");
button_exit.setAttribute("class", "buttons");

title_experiment.textContent = "Experimentos";
button_experimento_1.textContent = "Dilatação Temporal";
button_experimento_2.textContent = "Tecido do Espaço-Tempo";
button_exit.textContent = "Voltar";

title_box_start.appendChild(title_experiment);
buttons_box_start.appendChild(button_experimento_1);
buttons_box_start.appendChild(button_experimento_2);
buttons_box_start.appendChild(button_exit);

content_start.appendChild(title_box_start);
content_start.appendChild(buttons_box_start);

button_exit.addEventListener("click", ()=>{

    content_start.setAttribute("id", "content_start_off");
    setTimeout(()=>{right_side.removeChild(content_start);}, 300);
    content_1.setAttribute("id", "content_1");
    setTimeout(()=>{right_side.setAttribute("id","right-side")},500);
    setTimeout(()=>{left_side.setAttribute("id","left-side-1")},300);
    setTimeout(()=>{right_side.appendChild(content_1)},500)

})

button_experimento_1.addEventListener("click", ()=>{

    window.location.href = "assets/html/experimento_dilatacao.html";

})

//endregion
