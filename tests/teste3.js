let Mercurio = {

    "nome": "Mercurio",
    "imagem": "../assets/img/mercurio.png",
    "massa": 3.301,
    "expoente": 23,
    "raio": 2.44*Math.pow(10,6)

}

let Venus = {

    "nome": "Venus",
    "imagem": "../assets/img/venus.jpg",
    "massa": 4.8685,
    "expoente": 24,
    "raio": 6.052*Math.pow(10,6)

}

let Terra = {

    "nome": "Terra",
    "imagem": "../assets/img/terra.jpg",
    "massa": 5.972,
    "expoente": 24,
    "raio": 6.371*Math.pow(10,6)

}

let Marte = {

    "nome": "Marte",
    "imagem": "../assets/img/marte.jpg",
    "massa": 6.419,
    "expoente": 23,
    "raio": 3.3895*Math.pow(10,6)

}

let Jupiter = {

    "nome": "Jupiter",
    "imagem": "../assets/img/jupiter.jpg",
    "massa": 1.898,
    "expoente": 27,
    "raio": 7.1492*Math.pow(10,7)

}

let Saturno = {

    "nome": "Saturno",
    "imagem": "../assets/img/saturno.jpg",
    "massa": 5.685,
    "expoente": 26,
    "raio": 5.8232*Math.pow(10,7)

}

let Urano = {

    "nome": "Urano",
    "imagem": "../assets/img/urano.webp",
    "massa": 8.68,
    "expoente": 25,
    "raio": 2.5362*Math.pow(10,7)

}

let Netuno = {

    "nome": "Netuno",
    "imagem": "../assets/img/netuno.jpg",
    "massa": 1.24,
    "expoente": 26,
    "raio": 2.4622*Math.pow(10,7)

}

let Sol = {

    "nome": "Sol",
    "imagem": "../assets/img/sun.jpg",
    "massa": 1.99,
    "expoente": 30,
    "raio": 6.9634*Math.pow(10, 8)

}

let BlackHole = {

    "nome": "Sagitarius B",
    "imagem": "../assets/img/buraconegro.png",
    "massa": 8.5617,
    "expoente": 36,
    "raio": 2.5522*Math.pow(10, 5)

}

let universe = [Sol, Mercurio, Venus, Terra, Marte, Jupiter, Saturno, Urano, Netuno, BlackHole];




let selecao = document.querySelector("#selecao");
let nome = document.querySelector("#nome")
let massa = document.querySelector("#massa")
let raio = document.querySelector("#raio")
let number = document.querySelector("#number")
let submit = document.querySelector("#submit")
let bola1 = document.querySelector("#bola1");
let bola2 = document.querySelector("#bola2");
let bola3 = document.querySelector("#bola3")

console.log(selecao.value)

selecao.addEventListener("change", () => {

    let i = selecao.value;
    nome.textContent = `Nome: ${universe[i].nome}`
    massa.textContent = `Massa: ${universe[i].massa}*10^${universe[i].expoente}`
    raio.textContent = `Raio: ${universe[i].raio}`
    bola1.style.backgroundImage = `url(${universe[i].imagem})`

})

submit.addEventListener("click", () => {
    if (selecao.value != "" && number.value > 0){

        const G = 0.000000000066743;
        const C= 299792458;
        let i = selecao.value;
        let DeltaT = number.value;
        let M = Number(universe[i].massa);
        let r = universe[i].raio;
        let e = Number(universe[i].expoente);
        let num3 = M*Math.pow(10, e);

        let DeltaT_ = (DeltaT*Math.sqrt(1-((2*G*num3)/(C*C*r))));

        let a = DeltaT*0.433;
        let b = DeltaT_*0.210;
        let c = DeltaT*0.454

        document.documentElement.style.setProperty('--time-earth', `${DeltaT}s`);
        document.documentElement.style.setProperty('--a', `${a}s`);
        document.documentElement.style.setProperty('--b', `${b}s`);
        document.documentElement.style.setProperty('--c', `${c}s`);
        bola2.setAttribute("id", "bola2a");
        bola3.setAttribute("id", "bola3a");
        let interval = setTimeout(() => {}, a*200);
        let interval2 = setTimeout(() => {bola2.setAttribute("id", "bola2b");}, b*1900);
        let interval3 = setTimeout(() => {bola2.setAttribute("id", "bola2c");}, c*1190*1.15);
        let interval4 = setTimeout(() => {bola3.setAttribute("id", "bola3"); bola2.setAttribute("id", "bola2")}, c*2500)
    } else {

        window.alert("Escolha o Planeta/Estrela")

}
})
