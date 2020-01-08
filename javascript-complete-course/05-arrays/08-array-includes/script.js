/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        if (fruits.includes("apple",0)) {//Javascript array includes() is an inbuilt function that determines whether the
                                        // array contains the specified element or not. It returns true or false as
                                        // output depending on the result.
                                        // The includes() method is case sensitive
                                        //Syntax
                                        // array.includes(element, start)
                                        //start Optional. Default 0. At which position in the array to start the search
            return console.log("yes,there is an apple in the array");
        } else {
            return console.log("no there is no apple in the array");
        }



/* extra toevoeging om de optionele start positie te gebruiken, werkt niet...
       if (fruits.includes("apple",1)){//start Optional. Default 0. At which position in the array to start
            // the search
            return console.log("yes, there is an apple after the first position in the array");
        } else {
            return console.log("no, after the first position there are no more apples");
        }
*/

    })
})();
