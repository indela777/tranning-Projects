const me = {
    name: 'vinod',
    expenses: [],
    print: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: +amount
        })
        return this.expenses
        
    } 
}
console.log(me.print(20, 'rent'));
