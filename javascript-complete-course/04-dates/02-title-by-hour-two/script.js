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

    document.getElementById("target").innerHTML = greeting();           /*deze commando zet de waarde uit de functie
                                                                                    greeting in de HTML, in de p tag met
                                                                                    id= target
                                                                                 */

    function greeting () {                                                        //begin van de functie
        let d = new Date();
        let m = d.getMinutes();
        let hm = d.getHours()+m;
        let ref = d.setHours(17, 30, 0);


        if (hm < ref) {
            return "Hello";
        } else {
            return "Good evening";
        }
    }


})();