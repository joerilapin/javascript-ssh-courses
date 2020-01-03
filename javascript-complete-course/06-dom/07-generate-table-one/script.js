/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//I took this code from Ivo and i asked him to explain it to me...

//ik maak een variabele Salitable met de waarde '<table></table>;'
var Salitable = document.createElement("table");
//ik voeg het attribuut id met naam tableid aan de table tag toe: <table id="tableid"></table>
Salitable.setAttribute("id" , "tableid");
//ik voeg het nu toe aan het HTML document/body?????
document.body.appendChild(Salitable);
//alternative would be document.getelementid(id="target").appendchild(salitable)


//de var emmacell is een array met 10 elementen, aan elke cel kennen we <tr></tr> toe via een for loop
// <tr></tr>
//  ...(10 times)
// <tr></tr>
var emmacell = [];
for (i = 0 ; i < 10 ; i++ ) {
    emmacell [i] = document.createElement("tr");
//in het element met id tableid  (Salitable) steken we <tr></tr>, 10 keer
    document.getElementById("tableid").appendChild(emmacell [i]);
    //nu steken we de waarden in de emmacellen via innerhtml
    emmacell [i].innerHTML = "BeCode" +i;
}


document.getElementById("target").appendChild(Salitable);