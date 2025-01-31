import React, { useEffect, useState } from "react";
import axios from "axios";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("/api/expenses");
        setExpenses(response.data);
      } catch (err) {
        console.error("Error fetching expenses:", err);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ExpensesList</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id} className="mb-2">
            <span className="font-bold">{expense.category}</span>: ${expense.amount} - {expense.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;