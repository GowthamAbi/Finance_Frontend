import React, { useEffect, useState } from "react";
import axios from "axios";

const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const response = await axios.get("/api/budgets");
        setBudgets(response.data);
      } catch (err) {
        console.error("Error fetching budgets:", err);
      }
    };
    fetchBudgets();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Budgets List</h2>
      <ul>
        {budgets.map((budget) => (
          <li key={budget._id} className="mb-2">
            <span className="font-bold">{budget.category}</span>: ${budget.limit} (Spent: ${budget.spent})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;