document.getElementById("btn-move").addEventListener('click',moveImages);
function moveImages () {
let Temp; /*variableauxiliar*/
let imageLeft = document.getElementById ("image-left").src;
let imageRight = document.getElementById("image-right").src;
Temp=imageLeft;
document.getElementById("image-left").src=imageRight;
document.getElementById("image-right").src=imageLeft;
}
