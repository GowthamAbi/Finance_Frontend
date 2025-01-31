import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import BudgetForm from "../components/BudgetForm";
import GoalForm from "../components/GoalForm";
import ExpenseList from "../components/ExpenseList";
import BudgetList from "../components/BudgetList";
import GoalList from "../components/GoalList";
import Reports from "../components/Reports";

const Dashboard = () => {
  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-6 p-6">
  {/* Left Section - Forms */}
  <div className="md:w-1/3 bg-white p-6 shadow-lg rounded-2xl">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">Manage Finances</h2>
    <div className="space-y-4">
      <ExpenseForm />
      <BudgetForm />
      <GoalForm />
    </div>
  </div>

  {/* Right Section - Lists & Reports (Stacked) */}
  <div className="md:w-2/3 space-y-6">
    {/* Expense List */}
    <div className="bg-white p-6 shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Expense List</h2>
      <ExpenseList />
    </div>

    {/* Budget List */}
    <div className="bg-white p-6 shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Budget List</h2>
      <BudgetList />
    </div>

    {/* Goal List */}
    <div className="bg-white p-6 shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Goal List</h2>
      <GoalList />
    </div>

    {/* Reports */}
    <div className="bg-white p-6 shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Reports</h2>
      <Reports />
    </div>
  </div>
</div>


    </div>
  );
};

export default Dashboard;