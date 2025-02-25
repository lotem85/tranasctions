// write your code here

const containsSubstringBothWays = (transactionName, search) => {

  if(transactionName.includes(search)){
    return true;
  }
  if(transactionName.includes(search.split('').reverse().join(''))){
    return true;
  }
  return false;

}
const isSalaryTransction = (transaction) => {
  return transaction.name.includes('משכורת');
};

const isExpenseTransaction = (transaction) => {
  return transaction.name.includes('הוצאה');
};

const getTransactionsToCalaculate = (transactions, currentMonth) => { 
  return transactions.filter((transaction) => {
  const transactionDate = new Date(transaction.date);
  const filterDate = new Date(currentMonth);
  return transactionDate < filterDate;
});
}

const getPredictedSalary = (transactions, month) => {
  const transactionToCalaculate = getTransactionsToCalaculate(transactions, month);
  const salaries = {}; 
  transactionToCalaculate.forEach(transaction => {
    if (isSalaryTransction(transaction)) {
        const employer = transaction.name;
        const amount = transaction.incomeAmount;

        if (!salaries[employer]) {
            salaries[employer] = {count: 0, total: 0, date : '1970-01-01'};
        }

        salaries[employer].count++;
        if(transaction.date > salaries[employer].date){
          salaries[employer].date = transaction.date;
          salaries[employer].total = amount;
        }
    }
});

let predictedSalary = 0;

Object.keys(salaries).forEach(employer => {
    if (salaries[employer].count >= 2) {
        predictedSalary += salaries[employer].total; 
    }
});

return predictedSalary;

};

const getPredictedMortgage = (transactions) =>{
  const predictedMortgage = {amount: 0, date: new Date('1970-01-01')};
  transactions.forEach(transaction => {
    if (containsSubstringBothWays(transaction.name, 'משכנתא')) {
      const transactionDate = new Date(transaction.date);
      if (transactionDate > predictedMortgage.date) {
        predictedMortgage.amount = transaction.billingAmount;
        predictedMortgage.date = transaction
      }
    }
  }); 

  return predictedMortgage.amount
}

const getPredictedElectricityExpenses = (transactions) => {
  const electricityBills = transactions
        .filter(txn => containsSubstringBothWays(txn.name, 'חשמל'))
        .map(txn => txn.billingAmount);

    if (electricityBills.length === 0) return 0;

    const total = electricityBills.reduce((sum, amount) => sum + amount, 0);
    return total / electricityBills.length;


}

/**
 * calculate the predicted expenses
 * @param {*} transactions 
 * @param {*} month 
 * @returns 
 */
const getPredictedExpenses = (transactions, month) => {
  const transactionToCalaculate = getTransactionsToCalaculate(transactions, month);
  const predictedMortgage = getPredictedMortgage(transactionToCalaculate);
  const predictedElectricity = getPredictedElectricityExpenses(transactionToCalaculate);
  const predictedExpenses = predictedMortgage + predictedElectricity;


  return predictedExpenses;


};

function getPredictedAmount(transactions, month = '2022-04') {
  const predictedSallary = getPredictedSalary(transactions, month);
  const predictedExpenses = getPredictedExpenses(transactions, month);
  const predictedAmount = predictedSallary - predictedExpenses;
  return predictedAmount;
}

module.exports = {
  getPredictedAmount,
};
