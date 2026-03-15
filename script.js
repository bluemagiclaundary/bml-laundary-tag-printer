function generateTags(){

let orderNo=document.getElementById("orderNo").value;
let customer=document.getElementById("customer").value.toUpperCase();
let delivery=document.getElementById("delivery").value;

let dcQty=parseInt(document.getElementById("dcQty").value) || 0;
let dcStarchQty=parseInt(document.getElementById("dcStarchQty").value) || 0;
let dcStarchType=document.getElementById("dcStarchType").value;

let wiQty=parseInt(document.getElementById("wiQty").value) || 0;
let wfQty=parseInt(document.getElementById("wfQty").value) || 0;
let siQty=parseInt(document.getElementById("siQty").value) || 0;

let polishQty = 0;
let polishInput = document.getElementById("polishQty");
if(polishInput){
polishQty = parseInt(polishInput.value) || 0;
}

/* format date DD-MM-YY */

let formattedDate="";
if(delivery){
let d=new Date(delivery);
let day=("0"+d.getDate()).slice(-2);
let month=("0"+(d.getMonth()+1)).slice(-2);
let year=d.getFullYear().toString().slice(-2);
formattedDate=day+"-"+month+"-"+year;
}

let garments=[];

/* DC garments */

for(let i=0;i<dcQty;i++){
let starch="";
if(i<dcStarchQty && dcStarchType!=""){
starch=" ST-"+dcStarchType;
}
garments.push("DC"+starch);
}

/* WI garments */

for(let i=0;i<wiQty;i++){
garments.push("WI");
}

/* WF garments */

for(let i=0;i<wfQty;i++){
garments.push("WF");
}

/* SI garments */

for(let i=0;i<siQty;i++){
garments.push("SI");
}

/* POLISH garments */

for(let i=0;i<polishQty;i++){
garments.push("POLISH");
}

let total=garments.length;

let container=document.getElementById("tags");
container.innerHTML="";

garments.forEach(function(wash,index){

let tag=document.createElement("div");
tag.className="tag";

tag.innerHTML=
"<div><b>BML</b></div>"+
"<div>"+orderNo+"</div>"+
"<div>"+customer+"</div>"+
"<div>"+wash+"</div>"+
"<div><b>"+(index+1)+"/"+total+"</b></div>"+
"<div>"+formattedDate+"</div>";

container.appendChild(tag);

});

}

function printTags(){
window.print();
}

function refreshPage(){

document.querySelectorAll("input").forEach(function(i){
i.value="";
});

document.querySelectorAll("select").forEach(function(s){
s.selectedIndex=0;
});

document.getElementById("tags").innerHTML="";

}
