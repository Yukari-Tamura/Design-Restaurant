$("#demo").mouseenter(function() {
    console.log($("#demo").html().text);
    doCoolStuff;  
})

console.clear();

document.querySelector("#demo").addEventListener("mouseenter", doCoolStuff);
document.querySelector("#demo").addEventListener("mouseleave", doCoolStuff);

const tl = new TimelineMax();
tl.to(document.querySelector("#demo").children[0], 0.4, {attr:{width:220}, ease:Power4.easeInOut});
tl.to("text", 0.4, {fill:"#fff", ease:Linear.easeNone}, 0);
tl.to("polyline, line", 0.4, {x:14, ease:Power4.easeInOut}, 0);
tl.to("line", 0.4, {attr:{x2:3}, ease:Power4.easeInOut}, 0);
tl.reversed(true);

function doCoolStuff() {
  tl.reversed(!tl.reversed());
}