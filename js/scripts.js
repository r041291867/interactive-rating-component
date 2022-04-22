let current_score = "";

function handleClick(score) {
  if (current_score === score) return;
  if (current_score) {
    setElementClassById(current_score, "");
  }
  setElementClassById(score, "orange");
  setRating(score);
}

function setRating(score) {
  document.getElementById("score").innerHTML = score;
  current_score = score;
}

function setElementClassById(id, className) {
  let el = document.getElementById(id);
  el.className = className;
}

function submitScore() {
  if (!current_score) return;
  document.getElementById("rating").style.display = "none";
  document.getElementById("thank-you").style.display = "block";
}
