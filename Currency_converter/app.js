const BASE_URL =
"https://2024-03-06.currency-api.pages.dev/v1/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")

let i = 0;

for(let select of dropdown ){

    for(let code in countryList){

        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.name == "from" && code == "USD" ){

            newOption.selected = "selected";

        }

        else if (select.name == "to" && code == "INR") {

            newOption.selected = "selected";

        }
        select.append(newOption);

    }

    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    })

}

const updateFlag = (element) => {

    let currcode = element.value;
    let countryCode = countryList[currcode];
    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


const updateExchangerate = async () => {

    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let finalamount = amtval * rate;

    msg.innerText = `${amtval} ${fromCurr.value} = ${finalamount} ${toCurr.value} `;

}

window.addEventListener("load",() => {

    updateExchangerate();

})



button.addEventListener("click", (evt)=> {

    evt.preventDefault();

    updateExchangerate();
    
})

