class BaseExpenses {
    name;
    history;
  constructor() {
    this.expenses = [];
  }

  addExpense(expense) {
    this.expenses.push(expense);
  }

  getExpenses() {
    return this.expenses;
  }
}

class ElectricityExpenses extends BaseExpenses {
    constructor() {
        super();
        this.name = 'חשמל';
        this.history = [];
    }

    
}

const ElectricityExpens = new ElectricityExpenses();