document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('bill');
    const tipButtons = document.querySelectorAll('.tipPercentage');
    const customTipInput = document.querySelector('input[placeholder="Custom"]');
    const numOfPeopleInput = document.getElementById('numOfPeople');
    const tipAmountDisplay = document.getElementById('tipAmountDisplay');
    const totalDisplay = document.getElementById('Total');
    const resetButton = document.querySelector('button.col-span-2');
  
    let billValue = 0.0;
    let tipValue = 0.0;
    let numOfPeople = 1;
  
    billInput.addEventListener('input', () => {
      billValue = parseFloat(billInput.value) || 0;
      calculateTip();
    });
  
    tipButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the default form submission behavior
        // Remove active class from all buttons
        // tipButtons.forEach(btn => {
        //   btn.classList.remove('bg-lightGrayishCyan', 'text-veryDarkCyan');
        //   btn.classList.add('bg-veryDarkCyan', 'text-white'); // Reset to default button color
        // });
        // Add active class to clicked button
        button.classList.remove('bg-veryDarkCyan', 'text-white');
        button.classList.add('bg-lightGrayishCyan', 'text-veryDarkCyan');
        tipValue = parseFloat(button.getAttribute('data-value'));
        customTipInput.value = '';
        calculateTip();
      });
    });
  
    customTipInput.addEventListener('input', () => {
      // Remove active class from all buttons
    //   tipButtons.forEach(button => {
    //     button.classList.remove('bg-lightGrayishCyan', 'text-veryDarkCyan');
    //     button.classList.add('bg-veryDarkCyan', 'text-white'); // Reset to default button color
    //   });
      tipValue = parseFloat(customTipInput.value) || 0;
      calculateTip();
    });
  
    numOfPeopleInput.addEventListener('input', () => {
      numOfPeople = parseFloat(numOfPeopleInput.value) || 1;
      calculateTip();
    });
  
    resetButton.addEventListener('click', (event) => {
      event.preventDefault();  // Prevent the default form submission behavior
      billInput.value = '';
      customTipInput.value = '';
      numOfPeopleInput.value = '';
      // Remove active class from all buttons
      tipButtons.forEach(button => {
        button.classList.remove('bg-lightGrayishCyan', 'text-veryDarkCyan');
        button.classList.add('bg-veryDarkCyan', 'text-white'); // Reset to default button color
      });
      billValue = 0.0;
      tipValue = 0.0;
      numOfPeople = 1;
      updateDisplays(0.0, 0.0);
    });
  
    function calculateTip() {
      if (billValue > 0 && tipValue > 0 && numOfPeople > 0) {
        const tipAmount = (billValue * (tipValue / 100)) / numOfPeople;
        const total = (billValue + billValue * (tipValue / 100)) / numOfPeople;
        updateDisplays(tipAmount, total);
      } else {
        updateDisplays(0.0, 0.0);
      }
    }
  
    function updateDisplays(tipAmount, total) {
      tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
      totalDisplay.textContent = `$${total.toFixed(2)}`;
    }
  });
  