/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var naam = prompt("Hallo, hoe heet je?", "");
    //THE PROMPT METHOD displays a dialog box that prompts the visitor for input.

    //SYNTAX: prompt(text, defaultText)

    //Parameter 	Type 	Description
    //text 	        String 	Required. The text to display in the dialog box
    //defaultText 	String 	Optional. The default input text
    //Return Value: 	A String. If the user clicks "OK", the input value is returned. If the user clicks "cancel",
    // NULL is returned. If the user clicks OK without entering any text, an empty string is returned.
    // A prompt box is often used if you want the user to input a value before entering a page.
    //
    // Note: When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering
    // an input value. DO NOT OVERUSE THIS METHOD, as it prevents the user from accessing other parts of the page until
    // the box is closed.
    alert("Hallo, " + naam);
})();
