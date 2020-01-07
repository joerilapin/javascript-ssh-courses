/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
        fruits.shift();//'shift' removes the first element of the array, and changes the length of the array
        fruits.pop();//'pop' removes the last element of the array and changes the length of the array
        fruits.unshift("banana");//Javascript array unshift() is an inbuilt function that adds one or more items
                    // or elements to the beginning of the array and returns the new length of the array. The unshift() method
                    // changes the length of the array directly, so it is not a pure function
        fruits.push("kiwi");//The push() method adds new items to the end of an array, and returns the new length.

    alert(fruits);

})

})();
