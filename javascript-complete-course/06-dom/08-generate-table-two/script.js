/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var joeriTable=document.createElement("table");
    joeriTable.setAttribute("id","tableid");
    document.body.appendChild(joeriTable);

    var joeriCell=[];
    var joeriResults;

    for(i=0;i<10;i++) {
            joeriCell [i] = document.createElement("tr");
            joeriCell [i].setAttribute("id", "rowid" + i);
            document.getElementById("tableid").appendChild(joeriCell[i]);

            joeriCol=[];
            for (j = 0; j < 10; j++) {
            joeriCol[j] = document.createElement("td");
            document.getElementById("rowid"+i).appendChild(joeriCol [j]);

                joeriResults =  (i +1) *  (j +1);
                joeriCol[j].innerHTML = joeriResults;
        }
    }
    document.getElementById("target").appendChild(joeriTable);
})();
