//common functions
function getInputValues(inputId) {
    const valueInput = document.getElementById(inputId);
    const newValueText = valueInput.value;
    const newValueAmount = parseInt(newValueText);
    valueInput.value = '';

    if (newValueAmount > 0 && newValueAmount != '') {
        return newValueAmount;
    }
    else{
        console.log('ooopppsss');
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
}

//handle calculate button
document.getElementById('calcutate-button').addEventListener('click', function() {
    //get the input values from all input field
    const newIncomeAmount = getInputValues('income-input');
    const newFoodAmount = getInputValues('food-input');
    const newRentAmount = getInputValues('rent-input');
    const newClothAmount = getInputValues('cloth-input');

    ////////update balance amount/////////
    //get the value from balance amount
    const balanceAmount = document.getElementById('current-balance');
    const previousBalanceText = balanceAmount.innerText;
    const previousBalanceAmount = parseInt(previousBalanceText);
    
    //calculate total income
    const newBalanceAmount = previousBalanceAmount + newIncomeAmount;
    balanceAmount.innerText = newBalanceAmount;
    
    ////////update expenses amount////////
    //get the value from total expanse amount
    const expenseAmount = document.getElementById('total-expense');
    const previousExpenseText = expenseAmount.innerText;
    const previousExpenseAmount = parseInt(previousExpenseText);

    //calculate total expense
    const newExpenseAmount = previousExpenseAmount + newFoodAmount + newRentAmount + newClothAmount;
    expenseAmount.innerText = newExpenseAmount;

    //calculate final balance after subtracting total expense
    const finalBalanceCalculate = newBalanceAmount - newExpenseAmount;
    balanceAmount.innerText = finalBalanceCalculate;
})

    