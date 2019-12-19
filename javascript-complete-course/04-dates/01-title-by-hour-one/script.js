/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later .



    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

/*GOOGLE-LOG
 //hoe haal ik de tijd op? -->https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
 // Set variable to current date and time, new Date() 	Current date and time
        var todaysDate = new Date();
        Sometimes it may be necessary to extract only part of a date, and the built-in   get methods   are the tool you will use to achieve this.

        var actualHour = todaysDate.getHours();
        Where get is used to retrieve a specific component from a date, set is used to modify components of a date
 */
    (function() {
    document.getElementById("target").innerHTML = greeting();

    function greeting() {
        var todaysDate = new Date();
        var actualHour = todaysDate.getHours();
        var refHour = setHours(18,0,0);
        /*18h00 moet hier komen maar hoe? -->w3schools Set the time to 15:35:01
        var d = new Date();
        d.setHours(15, 35, 1);
        */
        if (actualHour<refHour){
            return "Hello";
        }
        else{
           return "good evening";
        }
        }







})();
