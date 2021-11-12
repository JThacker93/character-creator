function changeMoonSelect() {
  if (document.getElementById("dropBox").value == "1") {
    document.getElementById("divText").innerHTML = document.getElementById(hi).innerHTML;
  } else if (document.getElementById("dropBox").value == "2") {
    document.getElementById("divText").innerHTML =
      cosmos[4].description;
  } else if (document.getElementById("dropBox").value == "3") {
    document.getElementById("divText").innerHTML =
    cosmos[5].description;
  } else if (document.getElementById("dropBox").value == "4") {
    document.getElementById("divText").innerHTML =
    cosmos[6].description;
  } else if (document.getElementById("dropBox").value == "5") {
    document.getElementById("divText").innerHTML =
    cosmos[7].description;
  } else if (document.getElementById("dropBox").value == "6") {
    document.getElementById("divText").innerHTML =
      cosmos[8].description;
  } else if (document.getElementById("dropBox").value == "7") {
    document.getElementById("divText").innerHTML =
      "This small red moon is easily identifiable in the night sky, except when the red sun is out.";
  }
}


console.log(cosmos[3].description)
module.exports = changeMoonSelect;
