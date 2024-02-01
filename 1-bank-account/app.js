console.log("Bank Account");

// BankAccount class
// - Properties
//      - balance(defaults to 0 if not provided)
//      - accountHolder
//      - accountNumber
// - Methods
//   -deposits(amount) - increase balance by amount
//   -withdraw(amount) - decreases balance by amount
//  note: with withdraw, you can't more than the deposit and you can't take money when amount balance is less than 0. This is no sufficient fund.

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  // amt = amount
  deposit(amt) {
    this.balance = this.balance + amt;
  }

  withdraw(amt) {
    if (this.balance <= 0 || amt > this.balance) {
      console.log("You have insufficient funds");
    } else {
      this.balance = this.balance - amt;
    }
  }
}
