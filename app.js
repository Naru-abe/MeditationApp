const container = document.querySelector(".container")
const text = document.getElementById("text")

let totaleTime = 19000;
let breatheTime = totaleTime / 4.75;
let holdTime = totaleTime / 4.75 * 1.75;

meditateAnimation();

function meditateAnimation() {
  text.innerHTML = "吸って〜";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "止めて";

    setTimeout(() => {
      text.innerHTML = "吐いて〜";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(meditateAnimation, totaleTime);
