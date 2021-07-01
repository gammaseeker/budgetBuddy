/**
 * Represents an expense item
 */
interface IExpense {
    email: string;
    title: string;
    expenseType: string; // Discrete values: living, leisure, misc, debt
    amount: number;
}

export default IExpense;