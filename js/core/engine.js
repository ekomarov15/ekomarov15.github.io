function getExamStructure() {
  return localStorage.getItem("examType") === "oge"
    ? OGE_STRUCTURE
    : EGE_STRUCTURE;
}

function getTaskBank() {
  return localStorage.getItem("examType") === "oge"
    ? OGE_TASKS
    : EGE_TASKS;
}
