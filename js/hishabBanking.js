//handle calculate button
document.getElementById('calcutate-button').addEventListener('click', function() {
    //get the input value from income amount
    const incomeInput = document.getElementById('income-input');
    const newIncomeText = incomeInput.value;
    const newIncomeAmount = parseInt(newIncomeText);
    incomeInput.value = '';

    //get the input value from food amount
    const foodInput = document.getElementById('food-input');
    const newFoodText = foodInput.value;
    const newFoodAmount = parseInt(newFoodText);
    foodInput.value = '';

    //get the input value from rent amount
    const rentInput = document.getElementById('rent-input');
    const newRentText = rentInput.value;
    const newRentAmount = parseInt(newRentText);
    rentInput.value = '';

    //get the input value from clothes amount
    const clothInput = document.getElementById('cloth-input');
    const newClothText = clothInput.value;
    const newClothAmount = parseInt(newClothText);
    clothInput.value = '';

    ////////update balance amount/////////
    //get the value from balance amount
    const balanceAmount = document.getElementById('current-balance');
    const previousBalanceText = balanceAmount.innerText;
    const previousBalanceAmount = parseInt(previousBalanceText);

    const newBalanceAmount = previousBalanceAmount + newIncomeAmount;
    balanceAmount.innerText = newBalanceAmount;
    
    ////////update expenses amount////////
    //get the value from total expanse amount
    const expenseAmount = document.getElementById('total-expense');
    const previousExpenseText = expenseAmount.innerText;
    const previousExpenseAmount = parseInt(previousExpenseText);

    const newExpenseAmount = previousExpenseAmount + newFoodAmount + newRentAmount + newClothAmount;
    expenseAmount.innerText = newExpenseAmount;

    //calculate final balance after subtracting total expense
    const finalBalanceCalculate = newBalanceAmount - newExpenseAmount;
    balanceAmount.innerText = finalBalanceCalculate;
})

    