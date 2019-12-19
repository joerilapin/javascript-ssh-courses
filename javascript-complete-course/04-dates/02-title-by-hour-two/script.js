/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure  (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("target").innerHTML = greeting();           /*deze commando zet de waarde uit de
                                                                                   functie
                                                                                    greeting in de HTML, in de p tag met
                                                                                    id= target
                                                                                 */

    function greeting () {                                                        //begin van de functie
        let d = new Date();                                                       /*wat doet new Date()Thu Dec 19 2019
                                                                                     15:17:54 GMT+0100
                                                                                    (Central European Standard Time)
                                                                                 */
        let m = d.getMinutes();                                                  /*getminutes haalt de minuten uit varia-
                                                                                    bele d
                                                                                 */
        let hm = d.getHours()+m;
        let ref = d.setHours(17, 30, 0);                           /*setHours steekt het uur in varia-
                                                                                    bele ref
                                                                                 */


        if (hm < ref) {                                                         //het criterium
            return "Hello";
        } else {
            return "Good evening";
        }
    }


})();