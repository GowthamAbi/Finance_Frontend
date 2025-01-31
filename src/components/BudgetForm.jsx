import React, { useState } from "react";
import axios from "axios";

const BudgetForm = () => {
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/budgets", { category, limit });
      alert("Budget created successfully!");
    } catch (err) {
      alert("Error creating budget");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Limit"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Budget
      </button>
    </form>
  );
};

export default BudgetForm;