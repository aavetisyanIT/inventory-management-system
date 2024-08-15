class BankAccount {
	constructor(balance = 0, accountHolder) {
		this.balance = balance;
		this.accountHolder = accountHolder;
		this.accountNumber = Math.floor(Math.random() * 100 + 1);
	}

	deposit(depositAmount) {
		this.balance += depositAmount;
	}
	withdraw(withdrawBalance) {
		const balanceAfter = this.balance - withdrawBalance;
		if (balanceAfter < 0) return console.log('You do not have funds');
		this.balance = balanceAfter;
	}
}
