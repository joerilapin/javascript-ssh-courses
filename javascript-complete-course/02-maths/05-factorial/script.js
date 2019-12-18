/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    
    // to get the value of an input: document.getElementById("element-id").value



        // your code here
        document.getElementById("run").addEventListener("click", function() {

            let input = document.getElementById('number').value;

            let number = parseInt(input);

            let result = factorial(number);

            document.write(result);



    });

})();

function factorial(number){
    if (number > 0 && number <= 1){

        return 1;
    }

    else {

        return number * factorial(number-1);
    }

}
