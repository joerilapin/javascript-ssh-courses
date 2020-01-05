/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here

(function() {

    // your code here

    var counter = document.getElementById("counter");
    var password = document.getElementById("pass-one");

    password.addEventListener("input", function(){

        var text = password.value.length;

        if (text>10) {
            password.value = password.value.substring(0, 10);
            text = 10
        }

        counter.innerHTML = text + "/10";


    })
})();