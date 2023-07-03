class BankAccount {
  constructor(customername = String, balance = 0) {
    this.customername = this.customername;
    this.accountnumber = Date.now();
    this.balance = balance;
    this.deposit = function (amount) {
      this.balance = this.balance + amount;
    };
  }
}
const bank = new BankAccount("SarojGurung", 1000);
bank.deposit(1000);
console.log(bank);
const accounts = [];
const form = document.querySelector("#Bank-list");
const Name = document.querySelector("#Cname");
const Balance = document.querySelector("#Cbalance");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bank = new BankAccount(Name.value, +Balance.value);
  accounts.push(bank);
  console.log(bank);
});
const form2 = document.querySelector("#deposit-list");
const Id = document.querySelector("#Cid");
const Deposit = document.querySelector("#Cdeposit");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  if (bank.accountnumber === +Id) {
    bank.accountnumber = bank.accountnumber + Deposit.value;
  }
  console.log(bank);
});
