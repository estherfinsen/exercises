document.querySelectorAll("article").forEach((each) => {
  each.style.filter = "grayscale(100%)";
  each.addEventListener("pointerover", pointerOver);
  each.addEventListener("pointerout", pointerOut);
});

function pointerOver(evt) {
  console.log("CT", evt.currentTarget);
  console.log("T", evt.target);
  evt.currentTarget.style.filter = "none";
}

function pointerOut(evt) {
  evt.currentTarget.style.filter = "grayscale(100%)";
}
