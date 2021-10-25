var Spoiler_Words = prompt("Add meg, hogy mit nem szeretnél látni!");
var Spoiler_Change_Words = "Vigyázz Spoiler harap!";
var elements = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,li");

for( let a=0; a < elements.length; a++ ){
    if (elements[a].innerHTML.search(Spoiler_Words) != -1 && Spoiler_Words.length > 1) {
        elements[a].innerHTML = Spoiler_Change_Words;
        elements[a].style.backgroundColor = "red";
    }
}