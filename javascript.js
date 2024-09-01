function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.value === "Hesap makinem") {
        display.value = "";  // "Sezer Pamukçu" yazısını kaldır
        display.classList.remove("sezer");  // Font boyutunu eski haline getir
    }
    display.value += value;
}

function clearDisplay() {
    let display = document.getElementById("display");
    display.value = "Hesap makinem";
    display.classList.add("sezer");  // Font boyutunu 9px olarak ayarla
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
