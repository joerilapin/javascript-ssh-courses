/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // event listener
    document.getElementById('run').addEventListener('click', function() {

        // on click, fetch api and read to console
        fetch('../../_shared/api.json')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                return data.heroes;
            })
            .then(objects => {
                for (let obj in objects){
                    console.log(objects[obj]);
                }
            })

    });

})();
