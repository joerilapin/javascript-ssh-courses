/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", function() {
        var opone = parseInt(document.getElementById("op-one").value);
        var optwo = parseInt(document.getElementById("op-two").value);
        alert(opone+optwo);

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var opone = parseInt(document.getElementById("op-one").value);
        var optwo = parseInt(document.getElementById("op-two").value);
        alert(opone-optwo);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var opone = parseInt(document.getElementById("op-one").value);
        var optwo = parseInt(document.getElementById("op-two").value);
        alert(opone*optwo);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var opone = parseInt(document.getElementById("op-one").value);
        var optwo = parseInt(document.getElementById("op-two").value);
        alert(opone/optwo);
    });
})();
