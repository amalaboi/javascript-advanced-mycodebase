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
    //   only deposit if amount > 0... you can deposit negative numbers
    if (amt > 0) {
      console.log(`NAME: ${this.accountHolder}`);
      console.log(`ACCOUNT NUMBER: ${this.accountNumber}`);
      this.balance = this.balance + amt;
      console.log(`You deposited £${amt}.  `);
      console.log(`New balance is: £${this.balance}`);
    } else {
      console.log("Can't deposit a negative amount");
    }
  }

  withdraw(amt) {
    console.log(`NAME: ${this.accountHolder}`);
    console.log(`ACCOUNT NUMBER: ${this.accountNumber}`);
    if (this.balance <= 0 || amt > this.balance) {
      console.log("You have insufficient funds");
    } else {
      this.balance = this.balance - amt;
      console.log(`You withdrew £${amt}.  `);
      console.log(`New balance is: £${this.balance}`);
    }
  }
}

// test
let bankerA = new BankAccount("345de2wsq", "Segun Oguntade", 200);
let bankerB = new BankAccount("Klem23455sd", "Ganiyu Gbadamosi");

bankerA.withdraw(75.34);
bankerB.withdraw(90);
bankerB.deposit(160);
bankerB.withdraw(90);
