var Spoiler_Words = [];
var Spoiler_Change_Words = "Vigyázz Spoiler harap!";
var NumberOfSpoilers = 0;
var elements = document.querySelectorAll("h1,h2,h3,h4,h5,h6,li,a,p");
var old = [];
var oldcolor = [];

//Removing old button
var btn_old = document.getElementById("SpoilerButton");
if(btn_old != null){
    btn_old.remove();
}

//Create button
var btn = document.createElement("button");
btn.innerHTML = "Szeretném látni a spoilereket!";
btn.type = "submit";
btn.setAttribute("id", "SpoilerButton");
btn.style.backgroundColor = "grey";
btn.style.width = "200px";
btn.style.height = "150px";
btn.style.fontSize = "20px";
btn.style.borderRadius = "15px";
btn.onclick = function () {
    replace();
}

document.body.appendChild(btn);

//Getting spoiler keywords (input)
while (true) {
    let current = prompt("Add meg, hogy mit nem szeretnél látni! Ne adj meg semmit, ha nem szeretnél több kulcsszót megadni!");
    if (current == "") {
        break;
    } else {
        Spoiler_Words.push(current);
    }
}

//Hiding spoilers (output)
for (let i = 0; i < Spoiler_Words.length; i++) {
    for (let a = 0; a < elements.length; a++) {
        oldcolor.push(elements[a].style.backgroundColor);
        old.push(elements[a].innerHTML);
        if (elements[a].innerHTML.search(Spoiler_Words[i]) != -1 && Spoiler_Words[i].length > 1) {
            elements[a].innerHTML = Spoiler_Change_Words;
            elements[a].style.backgroundColor = "red";
            NumberOfSpoilers++;            
        }
    }
}

function replace() {
    for (let a = 0; a < old.length; a++) {
        elements[a].innerHTML = old[a];
        elements[a].style.backgroundColor = oldcolor[a];
    }
}

//Alerts
alert("A Spoiler Defender Extension " + NumberOfSpoilers + " spoilertől védett meg téged.");
alert("Az oldal alján a gombbal állíthatod vissza a spoilerekkel teli nézetbe.");