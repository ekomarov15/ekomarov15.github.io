function autoBuild() {
  localStorage.setItem("variant", "auto");
  location.href = "exam.html";
}

function manualBuild() {
  const count = +document.getElementById("count").value;
  localStorage.setItem("variant", JSON.stringify({ count }));
  location.href = "exam.html";
}
