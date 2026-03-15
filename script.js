function generateTags(){

let orderNo=document.getElementById("orderNo").value
let customer=document.getElementById("customer").value.toUpperCase()
let delivery=document.getElementById("delivery").value

let dcQty=parseInt(document.getElementById("dcQty").value)||0
let dcStarchQty=parseInt(document.getElementById("dcStarchQty").value)||0
let dcStarchType=document.getElementById("dcStarchType").value

let wiQty=parseInt(document.getElementById("wiQty").value)||0
let wfQty=parseInt(document.getElementById("wfQty").value)||0
let siQty=parseInt(document.getElementById("siQty").value)||0

let polishQty=0
let polishField=document.getElementById("polishQty")
if(polishField){
polishQty=parseInt(polishField.value)||0
}

/* format date DD-MM-YY */
let formattedDate=""
if(delivery){
let d=new Date(delivery)
let day=("0"+d.getDate()).slice(-2)
let month=("0"+(d.getMonth()+1)).slice(-2)
let year=d.getFullYear().toString().slice(-2)
formattedDate=day+"-"+month+"-"+year
}

let garments=[]

for(let i=0;i<dcQty;i++){
garments.push({
wash:"DC",
starch:(i<dcStarchQty && dcStarchType!="") ? dcStarchType : ""
})
}

for(let i=0;i<wiQty;i++){
garments.push({wash:"WI",starch:""})
}

for(let i=0;i<wfQty;i++){
garments.push({wash:"WF",starch:""})
}

for(let i=0;i<siQty;i++){
garments.push({wash:"SI",starch:""})
}

for(let i=0;i<polishQty;i++){
garments.push({wash:"POLISH",starch:""})
}

let total=garments.length

let container=document.getElementById("tags")
container.innerHTML=""

garments.forEach(function(g,index){

let washLine=g.wash

if(g.starch){
washLine+=" ST-"+g.starch
}

let tag=document.createElement("div")
tag.className="tag"

tag.innerHTML=
"<div><b>BML</b></div>"+
"<div>"+orderNo+"</div>"+
"<div>"+customer+"</div>"+
"<div>"+washLine+"</div>"+
"<div><b>"+(index+1)+"/"+total+"</b></div>"+
"<div>"+formattedDate+"</div>"

container.appendChild(tag)

})

}

function printTags(){
window.print()
}

function refreshPage(){

document.querySelectorAll("input").forEach(function(i){
i.value=""
})

document.querySelectorAll("select").forEach(function(s){
s.selectedIndex=0
})

document.getElementById("tags").innerHTML=""

}
