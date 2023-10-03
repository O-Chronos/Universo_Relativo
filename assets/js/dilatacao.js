//#region variaveis fisica

let G = 6.6743* Math.pow( 10, -11);
let C = 299792458;
let M ;
let TerraM = 5.9742*Math.pow(10, 24);
let TerraR = 6.371*Math.pow(10, 6);
let NetunoM = 1.024*Math.pow(10, 26);
let NetunoR = 2.4622*Math.pow(10, 7);
let SolM = 1.989*Math.pow(10, 30);
let SolR = 6.9634*Math.pow(10, 8);

let TerraM_2 = TerraM.toFixed(1);
let TerraR_2 = TerraR.toFixed(1);
let NetunoM_2 = NetunoM.toFixed(1);
let NetunoR_2 = NetunoR.toFixed(1);
let SolM_2 = SolM.toFixed(1);
let SolR_2 = SolR.toFixed(1);

let forcaGSol = (G*SolM)/Math.pow(SolR, 2);
let forcaGNetuno = (G*NetunoM)/Math.pow(NetunoR, 2);
let forcaGTerra = (G*TerraM)/Math.pow(TerraR, 2);


let DeltaT = 10.1;

console.log(forcaGTerra.toFixed(1));
console.log(forcaGNetuno.toFixed(1));
console.log(forcaGSol.toFixed(1));

//#endregion

//relatividade com gravidade + calculo da força gravitacional de um planeta

/*
let M1 = TerraM_2;
let r1 = TerraR_2;
let M2 = NetunoM_2;
let r2 = NetunoR_2;
let M3 = SolM_2;
let r3 = SolR_2;

let SA = 3.156*Math.pow(10, 7);

let DeltaT_1 = DeltaT * Math.sqrt(1-((2*G*M1)/(r1*Math.pow(C, 2))));
let DeltaT_2 = DeltaT * Math.sqrt(1-((2*G*M2)/(r2*Math.pow(C, 2))));
let DeltaT_3 = DeltaT * Math.sqrt(1-((2*G*M3)/(r3*Math.pow(C, 2))));
*/

//#region criação e remoção de objetos

//#region selecionar
let left_side = document.querySelector("#left_side");
let right_side = document.querySelector("#right_side");
let content = document.querySelector("#content");
let top_side = document.querySelector("#top_side");

//#endregion

//#region criar
let earth_stay = document.createElement("button");
let button_text = document.createElement("p");
let back = document.createElement("div");
let space_stay = document.createElement("button");
let form_main = document.createElement("form");
let speedster = document.createElement("div");
let speed_text = document.createElement("h1");
let speed_2 = document.createElement("label");
let speed = document.createElement("input");
let speed_button = document.createElement("input");
let speed_value = document.createElement("p");
let start_button = document.createElement("button");
let pause_button = document.createElement("button");
let start_2_button = document.createElement("button");
let reset_button = document.createElement("button");
//#endregion

//#region atributos

earth_stay.setAttribute("id", "earth-stay");

button_text.setAttribute("id", "button_text");

back.setAttribute("id", "back");

space_stay.setAttribute("id", "space-stay");

form_main.setAttribute("name", "form_main");
form_main.setAttribute("id", "buttons");

speedster.setAttribute("id", "speedster");

speed_text.setAttribute("id", "speed_text");

speed_2.setAttribute("for", "speed");
speed_2.setAttribute("id", "speed_2");

speed.setAttribute("type", "range");
speed.setAttribute("name", "speed");
speed.setAttribute("id", "speed");

speed_button.setAttribute("type", "button");
speed_button.setAttribute("id", "speed_button");

speed_value.setAttribute("id", "speed_value");

start_button.setAttribute("type", "button");
start_button.setAttribute("name", "start");
start_button.setAttribute("class", "buttons");
start_button.setAttribute("id", "start");

pause_button.setAttribute("type", "button");
pause_button.setAttribute("name", "pause");
pause_button.setAttribute("class", "buttons");
pause_button.setAttribute("id", "pause");

start_2_button.setAttribute("type", "button");
start_2_button.setAttribute("name", "start");
start_2_button.setAttribute("class", "buttons");
start_2_button.setAttribute("id", "start_2");

reset_button.setAttribute("type", "button");
reset_button.setAttribute("name", "reset");
reset_button.setAttribute("class", "buttons");
reset_button.setAttribute("id", "reset");

//#endregion

//#region setando contents

earth_stay.textContent = "Permanecer na Terra";

space_stay.textContent = "Entrar na Nave"; 

speed_text.textContent = "Escolha a velocidade da viagem:";

start_button.textContent = "Começar";

pause_button.textContent = "Pausar";

start_2_button.textContent = "Retomar";

reset_button.textContent = "Zerar";

speed_value.textContent = `${speed.value}%`;

speed.addEventListener("input", (event)=>{

    speed_value.textContent = `${event.target.value}%`;

});

//#endregion

//#region inserindo objetos

earth_stay.insertAdjacentElement("beforeend", button_text)

left_side.insertAdjacentElement("afterbegin", earth_stay);

content.insertAdjacentElement("afterbegin", space_stay);

speedster.insertAdjacentElement("beforeend", speed_text);
speedster.insertAdjacentElement("beforeend", speed_2);
speedster.insertAdjacentElement("beforeend", speed);
speedster.insertAdjacentElement("beforeend", speed_button);
speedster.insertAdjacentElement("beforeend", speed_value);

form_main.insertAdjacentElement("beforeend", speedster);

//#endregion

//#region botões

earth_stay.addEventListener("click", ()=>{

    left_side.setAttribute("id", "left_side_on");
    content.setAttribute("id", "content");
    top_side.insertAdjacentElement("beforeend", form_main);
    left_side.removeChild(earth_stay);
    content.removeChild(space_stay);

})

space_stay.addEventListener("click", ()=>{

    content.setAttribute("id", "content_on_1");
    left_side.setAttribute("id", "left_side");
    top_side.insertAdjacentElement("beforeend", form_main);
    left_side.removeChild(earth_stay);
    content.removeChild(space_stay);

})

//#endregion

//#endregion

//#region timer

let v;
let DeltaT_;
v = C*0.5;
DeltaT_ = DeltaT / (Math.sqrt(1 - Math.pow(v / C, 2)));

let hour_earth = 0;
let minute_earth = 0;
let second_earth = 0;
let millisecond_earth = 0;
let hour_other = 0;
let minute_other = 0;
let second_other = 0;
let millisecond_other = 0;

let cron_earth;
let cron_other;

start_button.addEventListener("click", starter);
document.form_main.pause_button.onclick = () => pause();
document.form_main.reset_button.onclick = () => reset();

function starter() {

    console.log(DeltaT_1)
    console.log(DeltaT_2)
    pause();
    cron_earth = setInterval(() => { timer_earth(); }, DeltaT_1);
    cron_other = setInterval(() => { timer_other(); }, DeltaT_);
}

function pause() {
    clearInterval(cron_earth);
    clearInterval(cron_other);
}

function reset() {
     hour_earth = 0;
     minute_earth = 0;
     second_earth = 0;
     millisecond_earth = 0;
     hour_other = 0;
     minute_other = 0;
     second_other = 0;
     millisecond_other = 0;
     document.getElementById('hour-other').innerText = '00';
     document.getElementById('minute-other').innerText = '00';
     document.getElementById('second-other').innerText = '00';
     document.getElementById('millisecond-other').innerText = '000';

    document.getElementById('hour-earth').innerText = '00';
    document.getElementById('minute-earth').innerText = '00';
    document.getElementById('second-earth').innerText = '00';
    document.getElementById('millisecond-earth').innerText = '000';
    
}
function timer_earth() {
    if ((millisecond_earth += 10) === 1000) {
        millisecond_earth = 0;
        second_earth++;
    }
    if (second_earth === 60) {
        second_earth = 0;
        minute_earth++;
    }
    if (minute_earth === 60) {
        minute_earth = 0;
        hour_earth++;
    }
    document.getElementById('hour-earth').innerText = returnData(hour_earth);
    document.getElementById('minute-earth').innerText = returnData(minute_earth);
    document.getElementById('second-earth').innerText = returnData(second_earth);
    document.getElementById('millisecond-earth').innerText = returnData(millisecond_earth);
    }
function timer_other() {


    if ((millisecond_other += 10) === 1000) {
        millisecond_other = 0;
        second_other++;
    }
    if (second_other === 60) {
        second_other = 0;
        minute_other++;
    }
    if (minute_other === 60) {
        minute_other = 0;
        hour_other++;
    }
    document.getElementById('hour-other').innerText = returnData(hour_other);
    document.getElementById('minute-other').innerText = returnData(minute_other);
    document.getElementById('second-other').innerText = returnData(second_other);
    document.getElementById('millisecond-other').innerText = returnData(millisecond_other);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}

//#endregion
