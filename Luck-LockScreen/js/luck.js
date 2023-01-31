let ukClicked = document.getElementById("ukClicked");
let roClicked = document.getElementById("roClicked");

function changeColorUK() {
  ukClicked.style.backgroundColor = "#F05524";
  ukClicked.style.color = "#FFFFFF";
  roClicked.style.backgroundColor = "transparent";
  roClicked.style.color = "#00000099";
}

const changeColorRo = () => {
  roClicked.style.backgroundColor = "#F05524";
  roClicked.style.color = "#FFFFFF";
  ukClicked.style.backgroundColor = "transparent";
  ukClicked.style.color = "#00000099";
};
