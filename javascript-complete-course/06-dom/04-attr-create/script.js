/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

     //your code here
    //haal uit het element span de waarde van het atribuut met naam data-image en steek het in de variabele image
    var image = document.getElementsByTagName("span")[1].getAttribute("data-image");
    //creeer een element met naam img en ken eht toe aan de variabele met naam elementImage
    var elementImage = document.createElement("img");
    //ken de variabele image toe aan de variabele elementImage zijn attribuut src
    elementImage.src = image;
    //adding the img through making child of elementImage to the element with id="target"
    document.getElementById("target").appendChild(elementImage);
    //removing the original element
    document.getElementById("source").remove();

})();
