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

let starchLine=""

if(i<=starchQty){
starchLine="<div>STARCH</div>"
}

let tag=document.createElement("div")
tag.className="tag"

tag.innerHTML=
`

<div><b>BML</b></div>
<div>${orderNo}</div>
<div>${customer}</div>
<div>${wash}</div>
${starchLine}
<div><b>${i}/${qty}</b></div>
<div>${delivery}</div>
`

container.appendChild(tag)

}

}

function printTags(){
window.print()
}

