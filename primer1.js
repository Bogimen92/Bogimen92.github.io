const buttonIzracunaj = document.getElementById("izracunaj");
const inputRange = document.getElementById("percent");
const spanRangeValue = document.getElementById("rangeValue");

function porezEvent() {
    
    spanRangeValue.innerText = inputRange.value;
}


function izracunaj() {
    const spanRezultat = document.getElementById("rezultat")
    const inputRange = document.getElementById("percent");
    const inputCena = document.getElementById("cena")
    if (inputCena.value == ""){
        spanRezultat.innerHTML = "<i style=color:red;>Unesite cenu</i>"
    } else {
        const cena = Number(inputCena.value)
        const porez = Number(inputRange.value) / 100
        spanRezultat.innerHTML = cena + cena * porez
    }

   
}
spanRangeValue.innerText = inputRange.value;
inputRange.onmousemove = porezEvent
buttonIzracunaj.onclick = izracunaj



