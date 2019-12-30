/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js -   4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
        // your code here
        document.getElementById("run").addEventListener('click', checkAge);

        function checkAge() {
                console.log("test");
                let BirthDay = document.getElementById("dob-day").value;
                let BirthMonth = document.getElementById("dob-month").value;
                let BirthYear = document.getElementById("dob-year").value;
                console.log(BirthDay+" "+ BirthMonth +" "+ BirthYear);


                let date = new Date();
                console.log(date);
                let CurrentYear = date.getFullYear(); //gives present year
                console.log(CurrentYear);

                let calculate = CurrentYear - BirthYear;
                console.log(calculate);
                alert(calculate);

        }

})();

    s

