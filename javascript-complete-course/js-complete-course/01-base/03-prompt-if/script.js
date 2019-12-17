/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
    var naam = prompt("Do you want some cake, y or n?", "");
    console.log(naam);
    if (naam==="y"){
        alert("congratulations");
    }
    else alert("more cake for me then :p !");
})();