function generateTags(){

let orderNo=document.getElementById("orderNo").value
let customer=document.getElementById("customer").value
let wash=document.getElementById("wash").value
let delivery=document.getElementById("delivery").value
let qty=parseInt(document.getElementById("qty").value)
let starchQty=parseInt(document.getElementById("starchQty").value)

let container=document.getElementById("tags")
container.innerHTML=""

for(let i=1;i<=qty;i++){

let starchText=""

if(i<=starchQty){
starchText="STARCH"
}

let tag=document.createElement("div")
tag.className="tag"

tag.innerHTML=`<b>BML</b><br>
${orderNo}<br>
${customer}<br>
${wash}<br>
${starchText ? starchText + "<br>" : ""}
${delivery}<br> <b>${i}/${qty}</b>`

container.appendChild(tag)

}

}

function printTags(){
window.print()
}

