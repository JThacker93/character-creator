function updateModifiers(){
    //convert ability scores into modifiers

    let strScore = document.getElementsById("strScore").value;
    document.getElementById("strMod").value = Math.floor((strScore - 10)/2);
}












module.exports = updateModifiers()