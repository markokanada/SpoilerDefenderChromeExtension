var Spoiler_Words = [];
var Spoiler_Change_Words = "Vigyázz Spoiler harap!";
var NumberOfSpoilers = 0;


var elements = document.querySelectorAll("h1,h2,h3,h4,h5,h6,li,a")
while (true) {
    let current = prompt("Add meg, hogy mit nem szeretnél látni! Ne adj meg semmit, ha nem szeretnél több kulcsszót megadni! Ha szeretnéd visszaállítani, a kulcsszavakat írd be /-l a kulcsszót.");
    if (current == "") {
        break;
    }
    if (current.charAt(0) == "/") {
        replace();
        break;

    } else {
        Spoiler_Words.push(current);
    }
}
for (let i = 0; i < Spoiler_Words.length; i++) {
    for (let a = 0; a < elements.length; a++) {
        if (elements[a].innerHTML.search(Spoiler_Words[i]) != -1 && Spoiler_Words[i].length > 1) {
            let old = [elements[a]]
            let oldcolor = [elements[a].style.backgroundColor];
            oldcolor[a] = elements[a].style.backgroundColor;
            old[a] = elements[a].innerHTML;
            elements[a].innerHTML = Spoiler_Change_Words;
            elements[a].style.backgroundColor = "red";
            NumberOfSpoilers++;
            console.log(old);

            function replace() {
                elements[a].innerHTML = old[a];
                elements[a].style.backgroundColor = oldcolor[a];
                console.log(old);
            }
        }
    }
}
alert("A Spoiler Defender Extension " + NumberOfSpoilers + " spoilertől védett meg téged.");