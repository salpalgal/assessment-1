
const form=document.querySelector("form")
const image=document.querySelector("#imageUrl")
const topText=document.querySelector("#topText")
const bottomText=document.querySelector("#bottomText")
let bodyDiv=document.querySelector("#memeDisplay")
let body=document.querySelector("body")
// let memeContainer= document.createElement("div")
// memeContainer.setAttribute("id","memeContain")
// let div = document.createElement("div")
// div.setAttribute("id","memeDiv")


function createContainer(e){
    e.preventDefault()
    let memeContainer = document.createElement("div")
    memeContainer.setAttribute("id","memeContain")
    bodyDiv.append(memeContainer)
}



function topCaptionFunc(e){
    e.preventDefault()
     let topCaption= document.createElement("div")
     topCaption.innerText=topText.value
    //  let memeContainer= document.createElement("div")
    //  memeContainer.setAttribute("id","memeContain")
     let memeContainer = document.querySelector("#memeContain")
     
     memeContainer.append(topCaption)
     topCaption.setAttribute("id","top")
    //  div.append(topCaption)

     
     topText.value=""
     
 
 }

function bottomCaptionFunc(e){
   e.preventDefault()
    let bottomCaption = document.createElement("div")
    bottomCaption.innerText=bottomText.value
    // let memeContainer= document.createElement("div")
    // memeContainer.setAttribute("id","memeContain")
    let memeContainer = document.querySelector("#memeContain")
    memeContainer.append(bottomCaption)
    bottomCaption.setAttribute("id","bottom")
    // div.append(bottomCaption)
    bottomText.value=""
}
function appendImage(e){
    e.preventDefault()
    let img= document.createElement("img")
    img.src=image.value
    // let memeContainer= document.createElement("div")
    // memeContainer.setAttribute("id","memeContain")
    let memeContainer = document.querySelector("#memeContain")
     
    memeContainer.append(img)
    // div.append(img)
    // div.append(memeContainer)
    // div.appendChild(memeContainer)
    image.value=""
    
   
}

function removeFunc(e){
    e.preventDefault()
    let remove=document.createElement("button")
    remove.innerText="remove"
    // let memeContainer= document.createElement("div")
    // memeContainer.setAttribute("id","memeContain")
    let memeContainer = document.querySelector("#memeContain")
    memeContainer.append(remove)
    // div.appendChild(memeContainer)
    remove.setAttribute("id","remove")
    // div.append(remove)
}

function appendToBody(e){
    e.preventDefault();
    const memeContainer= document.querySelector("#memeContain")
    bodyDiv.append(memeContainer)
    }

// form.addEventListener("submit",appendMeme)
form.addEventListener("submit",createContainer)
form.addEventListener("submit",appendToBody)
form.addEventListener("submit",appendImage)
form.addEventListener("submit", topCaptionFunc)
form.addEventListener("submit",bottomCaptionFunc)
form.addEventListener("submit",removeFunc)



// form.addEventListener("submit", function (e){
//     e.preventDefault()
//     ;
    // image.value=""
    // topText.value=""
    // bottomText.value=""
// })
    



bodyDiv.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove()
    }
})
