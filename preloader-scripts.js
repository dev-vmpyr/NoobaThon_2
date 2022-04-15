var loader = document.getElementById("preloader");

setTimeout(() => {
    loader.style.display = "none";
}, 2000);

var title1 = "NATIONAL INSTITUTE OF TECHNOLOGY, WARANGAL";
var title2 = "A PLACE OF CULTURAL DIVERSITY ";
var title3 = "A PLACE TO GAIN VALUABLE EXPERIENCES ";


let frontspeed = 100;
let backspeed = 20;
let text = document.getElementById("text-animation");
let i = 0;
function animator(title, pos) {
    if (pos) {
        text.innerHTML += title.charAt(i);
        i++;
        if (title.length > i) {
            setTimeout(() => {
                animator(title, true);
            }, frontspeed);
        }
        else{
            setTimeout(() => {
                animator(title,false)                
            }, 2000);
        }
    }
    else {
        text.innerHTML = text.innerHTML.slice(0,text.innerHTML.length-1)
        i--;
        if (i != 0) {
            setTimeout(() => {
                animator(title, false);
            }, backspeed);
        }
        else{
            if(title == title1){
                animator(title2,true)
            }
            else if(title == title2){
                animator(title3,true)
            }
            else{
                animator(title1,true)
            }
        }
    }
}
setTimeout(() => {
    animator(title1, true);    
}, 3000);