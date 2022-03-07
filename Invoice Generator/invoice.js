let text=[]
let cost=[]
let carwash=document.getElementById("Wash-car")
let mowlawn =document.getElementById("Mow-lawn")
let pullweed=document.getElementById("Pull-weed")
let list=document.getElementById("li")
let list2=document.getElementById("li2")
let money=document.getElementById("paisa")
let send=document.getElementById("submit")
function render_service(arr){
    let string=""
    for(let i=0;i<text.length;i++){
        string+=`
        <li>
        ${text[i]}</li>`
    }
   list.innerHTML=string
}
function render_cost(cost){
    let string=""
    for(let i=0;i<cost.length;i++){
        string+=`
        <li>
         $${cost[i]}</li>`
    }
   list2.innerHTML=string
}
carwash.addEventListener("click",function(){
    text.push("Wash Car")
    cost.push(10)
    render_service(text)
    render_cost(cost)
    total()
    carwash.disabled=true
    
})
mowlawn.addEventListener("click",function(){
    
    
    text.push("Mow Lawn")
    cost.push(20)
    render_service(text)
    render_cost(cost)
    total()
    mowlawn.disabled=true
})
pullweed.addEventListener("click",function(){
    
    text.push("Pull Weeds")
    cost.push(30)
    render_service(text)
    render_cost(cost)
    total()
    pullweed.disabled=true
    
})
function total(){
    let sum=0
    for(let i=0;i<cost.length;i++){
        sum+=cost[i]
}
money.textContent="$"+sum
}
send.addEventListener("click",function(){
    text=[]
    cost=[]
    list2.innerHTML=null 
    render_service()
    carwash.disabled=false
    mowlawn.disabled=false
    pullweed.disabled=false
    money.textContent=null
})