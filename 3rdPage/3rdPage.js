var testNav = 0;
function openNav() {
    if (testNav == 0) {
        document.getElementById("mysmartMenu").style.width = "150px";
        document.getElementById("main").style.marginLeft = "150px";
        document.getElementById("bg-id").style.opacity = "0.2";
        document.body.style.backgroundColor = "black";
        testNav = 1;
    } else {
        testNav = 0;
        document.getElementById("mysmartMenu").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("bg-id").style.opacity = "1";
    }
}

function closeNav() {
    document.getElementById("mysmartMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("bg-id").style.opacity = "1";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var flagTH = false;
var arrayTestTable = [];
var flagTableDisplay = false;
function addTable(clicked_id) {
    //alert("Table for " + clicked_id + "will be showed on screen ");
    for (var k = 0; k < arrayTestTable.length; k++) {
        if (arrayTestTable[k] == clicked_id) {
            flagTableDisplay = true;
        }
    }
    var myTableDiv = document.getElementById("myDynamicTable");

    var table = document.createElement('TABLE');
    table.className.replace("container");
    document.getElement
    table.border = '0';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    var tr1 = document.createElement('tr');
    tableBody.appendChild(tr1);
    // Nume de coloana

    if (flagTH == false) {
    flagTH = true;

    var th = document.createElement('th');
    th.appendChild(document.createTextNode("Name"));
    tr1.appendChild(th);

    var th = document.createElement('th');
    th.appendChild(document.createTextNode("Value"));
    tr1.appendChild(th);

    var th = document.createElement('th');
    th.appendChild(document.createTextNode("Weight"));
    th.style.alignContent = "center";
    tr1.appendChild(th);

    var th = document.createElement('th');
    th.appendChild(document.createTextNode("Effects"));
    tr1.appendChild(th);

    var th = document.createElement('th');
    th.appendChild(document.createTextNode("Type"));
    tr1.appendChild(th);
    }
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    var info = [
        "stones",
        "Stones of Barenziah",
        "200 gold",
        "0.5",
        "N/A",
        "Quest Item",

        "infinium",
        "Oghma Infinium",
        "2500",
        "1",
        "+5 in skills",
        "Book",

        "daedric",
        "Daedric Armor ",
        "7650 ",
        "96 ",
        "144 Base Armor",
        "Heavy Armor",

        "dawnbreaker",
        "Dawnbreaker",
        "740",
        "10",
        "12-Base Damage | 10-Burn Damage, and if killing undead, chance to cause a firey explosion that turns/destroys nearby undead.",
        "One-Handed | Sword Quest Item",

        "skeleton",
        "Skeleton Key",
        "0",
        "0.5",
        "Unbreakable Lockpick",
        "Quest Item",

        "giant",
        "Giant's Toe",
        "20",
        "1",
        "Alchemical Effects",
        "Drop item from Giant",

        "crimson",
        "Crimson Nirnroot",
        "10",
        "0.2",
        "Alchemical Effects",
        "Ingredient found in Blackreach",

        "treasure",
        "Treasure Map Items",
        "Varies",
        "Varies",
        "Different Items",
        "Found in different places of Sykrim",

        "miraak",
        "Miraak",
        "505-849",
        "9",
        "23-27 Base Armor",
        "Heavy Armor | Light Armor, Mask",

        "dragon",
        "Dragon Souls",
        "N/A",
        "N/A",
        "N/A",
        "Absorbed from Dragons",

        "notched",
        "Notched Pickaxe",
        "150",
        "10",
        "5 Base Damage - Raises the wielder's Smithing abilities, and does 5 shock damage to enemies on hit",
        "One-Handed | Easteregg",

        "daedra",
        "Daedra Heart",
        "250",
        "0.5",
        "Alchemical Effects",
        "Drop from Dremora",

        "konahrik",
        "Konahrik",
        "3200",
        "7",
        "24 Base Armor - When health is low, it has a chance to heal wearer and damage nearby enemies.",
        "Need to collect 10 unique masks to unlock",

        "jagged",
        "The Jagged Crown",
        "5000",
        "9",
        "23 Base Armor",
        "Heavy Armor - Unique",

        "dwarven",
        "Dwarven Black Bow of Fate",
        "1446",
        "10",
        "13 Base Damage - 50% chance for each attribute to absorb 25 pts. of Health, Stamina, and/or Magicka.",
        "Unique Dwarven Bow",

    ];
    for (let k = 0; k < info.length; k++) {
        if (info[k] == clicked_id) {
            var td = document.createElement('TD');
            td.width = '100';
            td.appendChild(document.createTextNode(info[k + 1]));
            tr.appendChild(td);
            var td = document.createElement('TD');
            td.width = '100';
            td.appendChild(document.createTextNode(info[k + 2]));
            td.style.textAlign = "center";
            tr.appendChild(td);
            var td = document.createElement('TD');
            td.width = '100';
            td.appendChild(document.createTextNode(info[k + 3]));
            td.style.textAlign = "center";
            tr.appendChild(td);
            var td = document.createElement('TD');
            td.width = '100';
            td.appendChild(document.createTextNode(info[k + 4]));
            td.style.textAlign = "center";
            tr.appendChild(td);
            var td = document.createElement('TD');
            td.width = '100';
            td.appendChild(document.createTextNode(info[k + 5]));
            tr.appendChild(td);
        }
    }

    /*
    for (var j = 0; j < 5; j++) {
        var td = document.createElement('TD');
        td.width = '75';

        //var x = document.getElementById("hidden-info stones").firstChild;
        var ctest = document.getElementsByTagName("p")[7];
        var xtest = ctest.childNodes[0].nodeValue;

        td.appendChild(document.createTextNode(xtest));
        tr.appendChild(td);
    }*/

    myTableDiv.appendChild(table);
    /* Schimbare clasa primul element creat.
    var new_class = "container";
    document.querySelector('#myDynamicTable >table').setAttribute('class', new_class);*/
}
function removeTable() {
    window.onLoad = load();
    function load() {
        var tbl = document.getElementById('myDynamicTable');
        if (tbl) tbl.parentNode.removeChild(myTableDiv);
    }
}
function deleteChild() {
    var list = document.getElementById("myDynamicTable");
    list.removeChild(list.lastChild);
    if(list.lastChild == list.childNodes[0]){
        flagTH = false;
    }
}
function clearList() {
    var list = document.getElementById("myDynamicTable");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}
function deleteChildByID() {
    var item = document.getElementById("myLI");
    item.parentNode.removeChild(item);
}
window.onload = function () {

    var buttonStones = document.getElementById("stones");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("infinium");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("treasure");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("daedric");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("dawnbreaker");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("skeleton");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("giant");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("crimson");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("miraak");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("dragon");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("notched");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("daedra");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("konahrik");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("jagged");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };

    var buttonStones = document.getElementById("dwarven");
    console.log(buttonStones);
    buttonStones.onclick = function () { addTable(this.id) };
};


function openWin() {
    myWindow = window.open("", "myWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'myWindow'</p>");
  }
  
  function closeWin() {
    myWindow.close();
  }