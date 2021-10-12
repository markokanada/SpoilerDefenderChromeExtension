var Spoiler_Words = "Lorem";
var Spoiler_Change_Words = "Vigyázz Spoiler harap!";

var Elements = document.getElementsByTagName("h1");

for( let a=0; a < Elements.lenght; a++ ){
    Elements[a].innerHTML=Elements[a].innerHTML.replace(Spoiler_Words, Spoiler_Change_Words);
}