const Modal = {
    open(){
        //abrir modal
        //adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },

    close(){
        //fechar modal
        //remover a class active do modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}
const transactions = [
    {
    id: 1,
    description:'Luz',
    amount: -50000,
    date:'23/01/2021'
    },
    {
    id: 1,
    description:'WebSite',
    amount: -500000,
    date:'23/01/2021'},
    {
        id: 2,
        description:'Internet',
        amount: -20000,
        date:'23/01/2021',
    },
    ]
const Transaction = {
    incomes(){
        //somar as entradas 
    },
    expenses(){
        //somar as saídas
    },
    total(){
        //incomes - expenses
    },
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction){
        const html=`
        <td class="description">${transactions.description}</td>
        <td class="expense">${transactions.amount}</td>
        <td class="date">${transactions.date}</td>
        <td>
        <img src="img/minus.svg" alt="Remove transação>
        </td>
        `
        return html
    }
}

DOM.addTransaction(transactions[0])