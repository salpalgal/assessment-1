
const form=document.querySelector("form")
const image=document.querySelector("#imageUrl")
const topText=document.querySelector("#topText")
const bottomText=document.querySelector("#bottomText")
let div=document.querySelector("#memeDisplay")
let body=document.querySelector("body")

function topCaptionFunc(e){
   
    let topCaption= document.createElement("div")
    topCaption.innerText=topText.value
    topCaption.setAttribute("id","top")
}
function bottomCaptionFunc(e){
   
    let bottomCaption = document.createElement("div")
    bottomCaption.innerText=bottomText.value
    bottomCaption.setAttribute("id","bottom")
}
function memeContainFunc(e){
   
    let memeContain= document.createElement("div")
    let img= document.createElement("img")
    img.src=image.value
    memeContain.append(img)
    memeContain.append(topCaptionFunc)
    memeContain.append(bottomCaptionFunc)
    memeContain.setAttribute("id","memeContain")
    
    memeContain.append(removeFunc)
}
function removeFunc(e){
    let remove=document.createElement("button")
    remove.innerText="remove"
    remove.setAttribute("id","remove")
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    div.append(memeContainFunc)
    image.value=""
    topText.value=""
    bottomText.value=""
})


div.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove()
    }
})
