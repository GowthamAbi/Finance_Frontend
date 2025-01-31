import React, { useEffect, useState } from "react";
import axios from "axios";

const GoalList = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get("/api/goals");
        setGoals(response.data);
      } catch (err) {
        console.error("Error fetching goals:", err);
      }
    };
    fetchGoals();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Goals List</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal._id} className="mb-2">
            <span className="font-bold">{goal.name}</span>: ${goal.targetAmount} (Deadline: {new Date(goal.deadline).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;