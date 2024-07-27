const bill = document.getElementById("bill");
const tipPercentage = document.querySelector(".tipPercentage");
const numOfPeople = document.getElementById("numOfPeople");
const tipAmountDisplay = document.getElementById("tipAmount");
const Total = documnet.getElementById("total");

function tipCalculator() {

    const tipAmount = ( bill * (tipPercentage / 100 ));
    const totalAmount = (bill + tipAmount) / numOfPeople;
    const tipPerPerson = tipAmount / numOfPeople ;

    tipAmountDisplay.textContent = `$${tipPerPerson}`;
    Total.textContent = `$${totalAmount}`   
}
bill.addEventListener('input', tipCalculator );
numOfPeople.addEventListener('input', tipCalculator );
tipPercentage.array.forEach(button => {
    button.addEventListener('click', ()=>{
        tipPercentage.forEach(btn => btn.classList.remove('active'));
        button.classList.add("active");
        tipCalculator();
        })
    });