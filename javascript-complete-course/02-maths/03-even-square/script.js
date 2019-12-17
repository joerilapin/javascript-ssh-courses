/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*
(function() {

   document.getElementById("run").addEventListener("click", function() {

        // your code here
       let varKwadraat;
        for (var i = 1: i<22;i ++){
             varKwadraat===i*i;
            window.print (varKwadraat);
        }

    });
9
})();
*/
(function() {

    document.getElementById("run").addEventListener("click", function() {

        var square;
/* de lus gaat door tot het kwadraat van een getal tussen 1 en 21 niet groter is dan 21 door i*i<21 */

        for (i =1; i*i < 21; i ++){

            square = i*i;

/*ik voorzie een spatie opdat de getallen niet tegen mekaar zouden plakken*/
/*wat zou ik moeten schrijven als code om de kwadraten onder mekaar te zetten?---> writeln*??? die doet het niet??*/

            document.writeln(square + " ");

        }

    });

})();

