/**
 * Created by session2 on 10/20/15.
 */

window.addEventListener("keydown", function(e) {
    if(e.keyCode == 13) update();
}, false);

/*Get Input Elements From DOM*/
    var nameInput = document.getElementById("name");
var descriptionInput = document.getElementById("description");
var dateInput = document.getElementById("date");
var lifeInput = document.getElementById("life");
var expirationDateInput = document.getElementById("expiration_date");

    /*Get Table From DOM*/
        var tableOutput = document.getElementById("table");

    /*Main Update Function, Calls When Submit Button Is Clicked*/
        function update() {
                var newItem = getInputItem();
                updateTable(newItem);
            }

/*Get New Item From Input Form*/
    function getInputItem() {
            var item = {
                    name: nameInput.value,
                    desc: descriptionInput.value,
                    date: dateInput.value,
                    life: lifeInput.value,
                    exp: expirationDateInput.value
            };
    return item;
}

    /*Update Table With New Item*/
        function updateTable(item) {
                /*If Item Is Empty, Dont Update Table*/
                    if(item.name == "" || item.desc == "" || item.date == "" || item.life == "" || item.exp == "") return;

                    /*Create New TR And TD For Table Output*/
                        var tablerow = document.createElement("tr");
                var name = document.createElement("td");
                var description = document.createElement("td");
                var date = document.createElement("td");
                var life = document.createElement("td");
                var expirationDate = document.createElement("td");

                    /*Update New TD Elements With Item Info*/
                        name.innerHTML = item.name;
                description.innerHTML = item.desc;
                date.innerHTML = item.date;
                life.innerHTML = item.life;
                expirationDate.innerHTML = item.exp;

                    /*If Shelf Life Is Less Than 3 Days, Set Background To Red*/
                        if(parseFloat(item.life) < 3) tablerow.style.backgroundColor = "red";

                    /*Append New Elements To Table*/
                        tablerow.appendChild(name);
                tablerow.appendChild(description);
                tablerow.appendChild(date);
                tablerow.appendChild(life);
                tablerow.appendChild(expirationDate);
                tableOutput.appendChild(tablerow);
            }
