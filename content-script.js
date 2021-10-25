var Spoiler_Words = [];
var Spoiler_Change_Words = "Vigyázz Spoiler harap!";
var elements = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,li,a");
var NumberOfSpoilers = 0;

while (true) {
    let current = prompt("Add meg, hogy mit nem szeretnél látni! Ne adj meg semmit, ha nem szeretnél több kulcsszót megadni!");
    if (current == "") {
        break;
    }else{
        Spoiler_Words.push(current);    
    }
}
for (let i = 0; i < Spoiler_Words.length; i++) {
    for( let a=0; a < elements.length; a++ ){
        if (elements[a].innerHTML.search(Spoiler_Words[i]) != -1 && Spoiler_Words[i].length > 1) {
            elements[a].innerHTML = Spoiler_Change_Words;
            elements[a].style.backgroundColor = "red";
            NumberOfSpoilers ++;
        }
    }
}
alert("A Spoiler Defender Extension " + NumberOfSpoilers + " spoilertől védett meg téged.");