function calculateRewardPoints(price) {
    if (price >=50 && price < 100) {
        return price 50;
    } else if (price >100){
        return (2*(price 100) + 50);
    }
    return 0;
}

class Transaction {
    constructor(price) {
        this.price = price;
        this.reward = calculateRewards(price);
        this.transactionDate = new Date();
    }
}

class TransactionList {
    constructor() {
        this.list = [];
    }

    getLast3MonthsList() {
        var today = new Date();
        const threeOldDate = today.setMonth(today.getMonth() - 3);
        let filteredList = this.list.filter(trans => trans.transactionDate > threeOldDate);
        return filteredList.sort((a,b) => b.transactionDate - a.transactionDate);
    }

    getAllTransactions() {
        return this.list.sort((a,b) => b.transactionDate-a.transactionDate);
    }

    addTransaction(price) {
        const transaction = new Transaction(price);
        this.list.push(transaction);
    }

    getTotalRewardPoints() {
        return this.list.length ? this.list.reduce((acc,key)=>key.rewards+acc, 0) : 0;
    }

    rewardPerMonth() {
        let last3MonthRewards = [];
        for(let i=0; i<3; i++) {
            let filteredList = this.list.filter(trans => trans.transactionDate.getMonth() == (new Date).getMonth() - i );
            last3MonthRewards[i] = filteredList.reduce((acc,key)=>key.rewards+acc,0);
        }
        return last3MonthRewards;
    }
}