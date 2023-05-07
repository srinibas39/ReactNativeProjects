import { ReactNode, Reducer, createContext, useContext, useReducer } from "react"

const dummyExpenses = [
    {
        id: "9",
        description: "hello banana",
        amount: 20,
        date: new Date('2023-12-01')
    },
    {
        id: "1",
        description: "hello Apple",
        amount: 30,
        date: new Date('2023-12-02')
    },
    {
        id: "2",
        description: "hello grapes",
        amount: 40,
        date: new Date('2023-11-01')
    },
    {
        id: "4",
        description: "hello orange",
        amount: 50,
        date: new Date('2023-6-01')
    },
    {
        id: "5",
        description: "hello kiwi",
        amount: 60,
        date: new Date('2023-5-08')
    },

]

interface expenseType {
    id: string,
    description: string,
    amount: number,
    date: Date
}

interface ExpenseContextType {
    expenses: expenseType[],
    addExpense: (expense: expenseType) => void,
    removeExpense: (id: string) => void,
    updateExpense: (id: string, expense: expenseType) => void,
    setExpenses: (expenses: expenseType[]) => void
}

interface ExpenseContextProviderType {
    children: ReactNode
}

type ExpenseAction =
    | { type: "get"; payload: { expenses: expenseType[] } }
    | { type: "Add"; payload: { expense: expenseType } }
    | { type: "remove"; payload: { id: string } }
    | { type: "update"; payload: { id: string; expense: expenseType } };




export const ExpenseContext = createContext<ExpenseContextType>({
    expenses: [],
    addExpense: (expense) => { },
    removeExpense: (id) => { },
    updateExpense: (id, expense) => { },
    setExpenses: (expenses) => { }
})

export const ExpenseContextProvider = ({ children }: ExpenseContextProviderType) => {

    const expenseReducer = (
        state: expenseType[],
        action: ExpenseAction
    ) => {
        switch (action.type) {
            case "get":
                return action.payload.expenses.reverse()
            case "Add":
                return [...state, action?.payload?.expense];
            case "remove":
                return state.filter((expense) => expense.id !== action.payload.id);
            case "update":
                return state.map((expense) => {
                    if (expense.id === action.payload.id) {
                        return { ...expense, ...action.payload.expense };
                    }
                    return expense;
                });
            default:
                return state;
        }
    };



    const [expenseState, expenseDispatch] = useReducer(expenseReducer, [])


    const addExpense = (expense: expenseType) => {
        expenseDispatch({ type: "Add", payload: { expense } });
    };

    const removeExpense = (id: string) => {
        expenseDispatch({ type: "remove", payload: { id } });
    };

    const updateExpense = (id: string, expense: expenseType) => {
        expenseDispatch({ type: "update", payload: { id, expense } });
    };

    const setExpenses = (expenses: expenseType[]) => {
        expenseDispatch({ type: "get", payload: { expenses: expenses } });
    }

    const value = {
        expenses: expenseState,
        addExpense,
        removeExpense,
        updateExpense,
        setExpenses
    };

    return <ExpenseContext.Provider value={value}>
        {children}
    </ExpenseContext.Provider>
}

export const useExpense = () => useContext(ExpenseContext)


