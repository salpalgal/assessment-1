
const form=document.querySelector("form")
const image=document.querySelector("#imageUrl")
const topText=document.querySelector("#topText")
const bottomText=document.querySelector("#bottomText")
let div=document.querySelector("#memeDisplay")
let body=document.querySelector("body")


form.addEventListener("submit", function(e){
    e.preventDefault();
    let memeContain= document.createElement("div")
    let img= document.createElement("img")
    let topCaption= document.createElement("div")
    let bottomCaption = document.createElement("div")
    let remove=document.createElement("button")
    topCaption.innerText=topText.value
    topCaption.setAttribute("id","top")
    bottomCaption.innerText=bottomText.value
    bottomCaption.setAttribute("id","bottom")
    img.src=image.value
    
    memeContain.append(img)
    memeContain.append(topCaption)
    memeContain.append(bottomCaption)
    memeContain.setAttribute("id","memeContain")
    remove.innerText="remove"
    remove.setAttribute("id","remove")
    memeContain.append(remove)
    div.append(memeContain)
    image.value=""
    topText.value=""
    bottomText.value=""
})

div.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove()
    }
})
