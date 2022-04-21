let rating_score = 0;

function setRating(score) {
  let el = document.getElementById(score)
  el.className = "orange"
  // el.innerText = score;
  // rating_score = score;
}

function submitScore() {
  document.getElementById('rating').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';
}