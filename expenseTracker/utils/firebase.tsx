import axios from "axios"

const url = "https://expenseapp-904d0-default-rtdb.firebaseio.com/";

interface Expense {
    description: string,
    amount: number,
    date: Date
}

export const post = async (expense: Expense) => {
    const res = await axios.post(`${url}/expenses.json`, expense);
    const id = res.data.name;
    return id;
}

export const get = async () => {
    const res = await axios.get(`${url}/expenses.json`);
    // transform object into array 
    // return res.data
    const expenses = [];
    for (let key in res.data) {
        const expensesObj = {
            id: key,
            amount: res.data[key].amount,
            date: new Date(res.data[key].date),
            description: res.data[key].description
        }
        expenses.push(expensesObj)
    }

     return expenses;

}

export const update = async (id: string, expense: Expense) => {
    const res = await axios.put(`${url}/expenses/${id}.json`, expense);
    return res;
}

export const remove = async (id: string) => {
    const res = await axios.delete(`${url}/expenses/${id}.json`);
    return res;
}