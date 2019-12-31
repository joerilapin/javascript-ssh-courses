/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    /* your code here
    document.getElementsByClassName.innerhtml="target";
    */
    //For loop to iterate all the classes with name target
    var changedContent = document.getElementsByClassName("target");
    for (var i = 0; i<changedContent.length; i++){
        changedContent[i].innerHTML = "Owned!";
    }

})();
