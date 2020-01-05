/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here  |  (https://www.mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/)

    var pass_one = document.getElementById("pass-one");
    var validity = document.getElementById("validity");

    pass_one.addEventListener("input", function(){

        var password = pass_one.value;
        var numbers = 0;

        for (var i = 0 ; i < password.length; i++){
            /*In Javascript, the exclamation mark (“!”) symbol, called a “bang,” is the logical “not” operator.
            Placed in front of a boolean value it will reverse the value, returning the opposite.
           The charAt() method returns the character at the specified index in a string. & ! gives the opposite*/
            if (!isNaN(password.charAt(i))){
                numbers++
            }
        }
        //the if...else... condition for the password: length max 8 and at least 2 numbers
        if (password.length >= 8 && numbers >= 2){
            validity.innerHTML = "Ok"
        }
        else {
            validity.innerHTML = "Not ok"
        }

    })

})();