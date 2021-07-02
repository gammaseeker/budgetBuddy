/**
 * Represents an income item
 */
interface IIncome {
    email: string;
    title: string;
    amount: number;
    date: Date;
}

export default IIncome;