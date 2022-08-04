var fullBox=document.getElementById("newsBox")
getData()
async function getData(){
    let rnum= Math.floor((Math.random()*100)+1)
    try {
        let url = `http://localhost:3000/articles?_limit=100`
        let readUrl = `http://localhost:3000/articles?_limit=10&_start=${rnum}`
        let res = await fetch(url)
        let read = await fetch(readUrl)
        let data = await res.json()
        let sideData = await read.json()
        // console.log(data[6].title);
        display(data,sideData)
    } catch (error) {
        console.log(error);
        
    }
}


function display(data,sideData){
    let country ="India"
data.map(function(elem){
    //box==> Containing all single news
    let box = document.getElementById("newsBox")   
   
   //Single==>Holding 1 news
   let single = document.createElement("div")
   single.setAttribute("id","single")
   //pic==>img of the news
   let pic =document.createElement("div")
   pic.setAttribute("id","pic")
   //details==> have the text content of the news
   let details = document.createElement("div")
   details.setAttribute("id","details")

    let name = document.createElement("p")
    let tittle = document.createElement("h4")
    let img = document.createElement("img")
    img.setAttribute("class","img")
    if(elem.country ==country){
        name.textContent = elem.description+" "+elem.description
        tittle.innerText = elem.title
        img.setAttribute("src",elem.urlToImage)
        // console.log(tittle,name);
        pic.append(img)
        details.append(tittle,name)
        single.append(pic,details)
        // let line = document.createElement("hr")
        // single.append(line)
        box.append(single)
    }
    
})

//side==>this is for "Read this" block 
let side = document.createElement("aside")
let head = document.createElement("h3")
head.textContent = "READ THIS"

side.append(head)
sideData.map(function(elem){
let sideBox= document.getElementById("sideBox")
let indiv = document.createElement("div")
indiv.setAttribute("id","innerdiv")
let pic =document.createElement("div")
   pic.setAttribute("id","sidepic")
let img = document.createElement("img")
img.setAttribute("class","sideimg")
img.setAttribute("src",elem.urlToImage)
let allList = document.createElement("ul")
console.log(elem);
//list for each side data
    var li = document.createElement("li")
    li.textContent = elem.title
    

allList.appendChild(li)
pic.append(img)
indiv.append(pic,allList)
side.append(indiv)
sideBox.append(side)
})

}