function generateTags(){

let orderNo=document.getElementById("orderNo").value
let customer=document.getElementById("customer").value
let delivery=document.getElementById("delivery").value

let dcQty=parseInt(document.getElementById("dcQty").value)||0
let dcStarchQty=parseInt(document.getElementById("dcStarchQty").value)||0
let dcStarchType=document.getElementById("dcStarchType").value

let wiQty=parseInt(document.getElementById("wiQty").value)||0
let wfQty=parseInt(document.getElementById("wfQty").value)||0
let siQty=parseInt(document.getElementById("siQty").value)||0

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

let total=garments.length

let container=document.getElementById("tags")
container.innerHTML=""

garments.forEach((g,index)=>{

let starchLine=""
if(g.starch){
starchLine="<div>STARCH "+g.starch+"</div>"
}

let tag=document.createElement("div")
tag.className="tag"

tag.innerHTML=`

<div><b>BML</b></div>
<div>${orderNo}</div>
<div>${customer}</div>
<div>${g.wash}</div>
${starchLine}
<div><b>${index+1}/${total}</b></div>
<div>${delivery}</div>
`

container.appendChild(tag)

})

}

function printTags(){
window.print()
}

function refreshPage(){

document.querySelectorAll("input").forEach(i=>i.value="")
document.querySelectorAll("select").forEach(s=>s.selectedIndex=0)
document.getElementById("tags").innerHTML=""

}
