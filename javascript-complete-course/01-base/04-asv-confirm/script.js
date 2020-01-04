/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var age = prompt("What's your age?", "");
    var gender = prompt("What's your gender?", "")
    var hometown = prompt("what's your hometown", "");
    var varConfirm = confirm("click 'yes' or 'cancel'");//confirm its return value is a boolean type
                                                        //https://www.w3schools.com/jsref/met_win_confirm.asp


    alert("your age is "+age+
        ", your gender is "+gender+
        ", your hometown is "+hometown
    );

 if (varConfirm ===false){
     location.reload();
   }
   else{
      alert("dank u") ;
   }



})();
