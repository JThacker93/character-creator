function changeMoonSelect() {
  if (document.getElementById("dropBox").value == "1") {
    document.getElementById("divText").innerHTML =
      "The small green moon is barely a dot in the night sky.";
  } else if (document.getElementById("dropBox").value == "2") {
    document.getElementById("divText").innerHTML =
      "The largest of the moons, Udreth-Sol is only visible during the day, standing out like a dark grey scar across an otherwise blue sky.";
  } else if (document.getElementById("dropBox").value == "3") {
    document.getElementById("divText").innerHTML =
      "Half the size of Udreth-Sol, yet still larger than the rest, Zyry has a warm yellow light which halos the moon at night.";
  } else if (document.getElementById("dropBox").value == "4") {
    document.getElementById("divText").innerHTML =
      "Pan-shi is easily mistaken to its sister moon, Sen-Shi, as they share equal color and size. The two white moons have opposing orbits and never appear together.";
  } else if (document.getElementById("dropBox").value == "5") {
    document.getElementById("divText").innerHTML =
      "Blue moon with 3 visible rings forming a halo around her.";
  } else if (document.getElementById("dropBox").value == "6") {
    document.getElementById("divText").innerHTML =
      "Identical to Pan-Shi, when looked extremely closely, the patterns on the face of Sen-shi are upside down to Pan-Shi.";
  } else if (document.getElementById("dropBox").value == "7") {
    document.getElementById("divText").innerHTML =
      "This small red moon is easily identifiable in the night sky, except when the red sun is out.";
  }
}

module.exports = changeMoonSelect;
