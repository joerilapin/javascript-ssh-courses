/* becode/javascript
 *
 * /01-base/01-var-alert/script.js - 1.1: var & alert
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// your code here

//function declaration / function statement
(function(mijneerstevariabele) {
    //bunch of code as needed
    let whatever = "Hello World!!!";//LET VARIABLE, similar to const, however let variable can be re-assigned but not re-declared

    alert(whatever);                /*SEE INFRA*/

    console.log(whatever);          //testing with CONSOLE.LOG; go in the console after running the program,
                                    // right-click and choose 'inspect element', then from the menu choose 'console'
    var mijneerstevariabele="Hello, World";//VAR THE MOST COMMON VARIABLE. Can be re-assigned but only accessed
                                            // within a function. Variables defined with var move to the top( what top?? when
                                            //  code is executed
    alert(mijneerstevariabele); /*ALERT BOX
                                THE ALERT() METHOD displays an alert box with a specified message and an OK button.
                                An alert box is often used if you want to make sure information comes through to the user.
                                Note: The alert box takes the focus away from the current window, and forces the browser
                                to read the message. Do not overuse this method, as it prevents the user from accessing
                                other parts of the page until the box is closed.

                                Syntax alert(message)

                                Parameter 	Type 	Description
                                message 	String 	Optional. Specifies the text to display in the alert box, or an
                                object converted into a string and displayed

                                Return Value: 	No return value
                                */
    console.log(mijneerstevariabele);//testing, see remark supra

    //invoke (run / call) a function
    return mijneerstevariabele;     /*JavaScript passes a value from a function back to the code that called it by
                                    using the RETURN STATEMENT. The value to be returned is specified in the return.
                                    That value can be a constant value,a variable, or a calculation where the result
                                    of the calculation is returned*/
})();
