const baseURL = "http://localhost:3000/goals";

export const GoalModel = {
  fetchAll: () => fetch(baseURL).then(res => res.json()),

  create: (goal) =>
    fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal),
    }).then(res => res.json()),

  markAsAchieved: (id) =>
    fetch(`${baseURL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ achieved: true }),
    }),
};
