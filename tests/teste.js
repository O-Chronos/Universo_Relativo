




//region calculos


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

console.log(forcaGTerra.toFixed(1));
console.log(forcaGNetuno.toFixed(1));
console.log(forcaGSol.toFixed(1));

//relatividade com gravidade + calculo da força gravitacional de um planeta
let DeltaT = 10.1;
let M1 = TerraM_2;
let r1 = TerraR_2;
let M2 = NetunoM_2;
let r2 = NetunoR_2;
let M3 = SolM_2;
let r3 = SolR_2;

let SA = 3.156*Math.pow(10, 7);
//DeltaT = SA;

let DeltaT_1 = DeltaT * Math.sqrt(1-((2*G*M1)/(r1*Math.pow(C, 2))));
let DeltaT_2 = DeltaT * Math.sqrt(1-((2*G*M2)/(r2*Math.pow(C, 2))));
let DeltaT_3 = DeltaT * Math.sqrt(1-((2*G*M3)/(r3*Math.pow(C, 2))));

//endregion



let v;
let DeltaT_;
v = C*0.999;
DeltaT_ = DeltaT / (Math.sqrt(1 - Math.pow(v / C, 2)));

//region relogios diferentes
/*
let hour_earth = 0;
let minute_earth = 0;
let second_earth = 0;
let millisecond_earth = 0;
let hour_other = 0;
let minute_other = 0;
let second_other = 0;
let millisecond_other = 0;

let start = document.querySelector("#start");

let cron_earth;
let cron_other;

start.addEventListener("click", starter);
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

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
    document.getElementById('hour-earth').innerText = '00';
    document.getElementById('minute-earth').innerText = '00';
    document.getElementById('second-earth').innerText = '00';
    document.getElementById('millisecond-earth').innerText = '000';
    document.getElementById('hour-other').innerText = '00';
    document.getElementById('minute-other').innerText = '00';
    document.getElementById('second-other').innerText = '00';
    document.getElementById('millisecond-other').innerText = '000';
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
*/
//endregion

//region quadrados

let texto = document.querySelector("#numero");
let botao = document.querySelector("#botao");
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let quadrado1 = document.querySelector("#quadrado1");
let quadrado2 = document.querySelector("#quadrado2");
let cont1= 0;
let cont2= 0;
let valor1_style = window.getComputedStyle(quadrado1);
let valor2_style = window.getComputedStyle(quadrado2)
let cont = false;



    botao.addEventListener("click", () => {

        quadrado1.setAttribute("id", "quadrado1");
        quadrado2.setAttribute("id", "quadrado2");
        let b = texto.value;
        DeltaT = b;
        DeltaT_ = DeltaT / (Math.sqrt(1 - Math.pow(v / C, 2)));
        document.documentElement.style.setProperty('--time-earth', `${b}s`);
        document.documentElement.style.setProperty('--time-other', `${DeltaT_}s`);
        quadrado1.setAttribute("id", "quadrado1-start");
        quadrado2.setAttribute("id", "quadrado2-start");

    })

//endregion