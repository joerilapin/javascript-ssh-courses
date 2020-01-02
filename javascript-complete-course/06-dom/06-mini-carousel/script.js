/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    console.log(gallery);
    // your code here

        //  let imgUsed = document.getElementsByTagName("img")[0];
        // console.log(imgUsed);
    //  take the existing gallery array as a starting point since the 'bell' is the first
    //  element in it
        let i = 0;
    document.getElementById("next").addEventListener("click", function () {
        console.log(gallery[i]);
        if (i < 5) {
//schrijf in de HTML aan de hand van de queryselector het ide element uit de gallery
// array mbv setattribute tot i=5, dan wordt i=0 en is de cirkel rond
            document.querySelector("img").setAttribute("src", gallery[i] );
            i++;

        }
        //
        else {i = 0}

    });

})();
