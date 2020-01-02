/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Store image tag and sources in variables
    function hover(element) {
        element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
    }

    function unhover(element) {
        element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
    }

<img id="my-img" src="http://dummyimage.com/100x100/000/fff" onmouseover="hover(this);" onmouseout="unhover(this);" />


})();