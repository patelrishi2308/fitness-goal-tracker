import { GoalModel } from "./model.js";
import { GoalView } from "./view.js";

const form = document.getElementById("goal-form");

function loadGoals() {
  GoalModel.fetchAll().then(goals =>
    GoalView.renderGoals(goals, markAsAchieved)
  );
}

function markAsAchieved(id) {
  GoalModel.markAsAchieved(id).then(loadGoals);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = document.getElementById("description").value.trim();
  const category = document.getElementById("category").value;
  const repetitions = document.getElementById("repetitions").value.trim();

  if (!description || !category || !repetitions) return;

  const newGoal = {
    description,
    category,
    repetitions,
    achieved: false,
  };

  GoalModel.create(newGoal).then(() => {
    form.reset();
    loadGoals();
  });
});

loadGoals();
