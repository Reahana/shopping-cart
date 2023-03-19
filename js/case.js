function updateCaseNumber(isIncrease){
    const caseNumber = document.getElementById('case-number')
    const previousCaseNumber = parseInt(caseNumber.value );
    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumber.value = newCaseNumber;

    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
} 

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber =  updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
    
})