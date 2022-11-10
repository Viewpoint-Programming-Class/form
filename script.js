//data - is an array of objects

let companies = [
    {
        name: "JP Morgan Chase",
        price: 117.2,
        isUsComapny: true,
        ticker: "JPM",
    },
    {
        name: "Deutsche Bank AG",
        price: 9.62,
        isUsComapny: false,
        ticker: "DB",
    },
    {
        name: "Fidelity National Financial Inc",
        price: 39.82,
        isUsComapny: true,
        ticker: "FNF",
    },
    {
        name: "MasterCard",
        price: 297.77,
        isUsComapny: true,
        ticker: 'MA'
    }
];

function showForm(){
    document.getElementById('stockExachangeForm').style.display = 'block';
}

function formSubmitted(){
    
}

//declare and initialize variables

function startProgram(){

    let numbersOfShares;
    let dollarAmountToDeposit;

    //this is a string using the backtics ``
    const WELCOME_MESSAGE = `Welcome to our Stock Exchange Program!
    We currently support ${companies.length} companies.`;
    let HOW_MANY_SHARES;
    let companyIndex;

    alert(WELCOME_MESSAGE);

    companyIndex = prompt('Which company would you like to buy shares from? (the index, 0, 1, or2)')



    validateInput(companyIndex);

    //we are reducing the index by 1, because arrays in Javascript are 0-based
    companyIndex--;

    HOW_MANY_SHARES = `How many shares of ${companies[companyIndex].name} do you like to purchase?`;

    //ask the user how many stocks he wants to purchase.
    numbersOfShares = prompt(HOW_MANY_SHARES);

    validateInput(numbersOfShares);

    //
    let totalPrice = multiply(numbersOfShares, companies[companyIndex].price);

    dollarAmountToDeposit = prompt(`Total price is: $${totalPrice}.
    How much do you want to deposit?`);

    dollarAmountToDeposit = Number(dollarAmountToDeposit);

    let hasEnoughMoney = totalPrice < dollarAmountToDeposit;

    if (hasEnoughMoney) {
        alert(`Purchased!`);
    } else {
        alert("You do not have enough money");
    }

}

function throwAndAlert() {
    alert("You have entered invalid input!");
    throw "INVALID_INPUT";
}

function multiply(num1, num2){
    return num1 * num2;
}

function validateInput(userInput) {
    //we are converting from a string to a number
    userInput = Number(userInput);
    let isInvalidInput = isNaN(userInput);
    if ( isInvalidInput ) {
        throwAndAlert();
    }
}