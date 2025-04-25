export const GoalView = {
  renderGoals(goals, onMarkAchieved) {
    const goalsList = document.getElementById("goals-list");
    goalsList.innerHTML = "";

    goals.forEach((goal) => {
      const div = document.createElement("div");
      div.className = "goal";
      div.style.marginTop = "10px";
      div.style.border = "1px solid #ccc";
      div.style.borderRadius = "4px";
      div.style.backgroundColor = goal.achieved ? "lightgreen" : "#eee";
      div.style.padding = "10px";
      div.style.display = "flex";
      div.style.justifyContent = "space-between";
      div.style.alignItems = "center";

      const desc = document.createElement("span");
      desc.innerHTML = `${goal.description} - <b>${goal.category}</b> (${goal.repetitions})`;
      if (goal.achieved) desc.style.textDecoration = "line-through";

      div.appendChild(desc);

      if (!goal.achieved) {
        const button = document.createElement("button");
        button.className = "mark-btn";
        button.textContent = "Mark as Achieved";
        button.addEventListener("click", () => onMarkAchieved(goal.id));
        div.appendChild(button);
      }

      goalsList.appendChild(div);
    });
  },
};
