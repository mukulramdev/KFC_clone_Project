let container1=document.querySelector("#cont1")
var food=JSON.parse(localStorage.getItem("localStorageItemList"))||[]


function demmy(){
    let lefty=document.createElement("div")
    let righty=document.createElement("div")
    if (food.length==0){    
    lefty.style.backgroundColor="#f8f9fa"
    lefty.style.padding = "180px 10px 20px 30px";
    var text=document.createElement("h1")
    text.innerHTML="YOUR CART IS EMPTY. LET'S START AN ORDER!"
    var buto=document.createElement("button")
    buto.innerHTML="Start Order"
    buto.addEventListener("click",function(){
        window.location.href="./menupage.html"
    })
    buto.style.backgroundColor="red"
    buto.style.color="white"
   
    let imge=document.createElement("img")
    imge.src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
    lefty.append(text,buto)
    righty.append(imge)
    righty.style.backgroundColor="#f8f9fa"
    container1.append(lefty,righty)
}
else{
   
    function display(){
        let tablu=document.querySelector("#tbody")
        food.forEach((ele,i) => {
            let tr=document.createElement("tr")
            let tid=document.createElement("td")
            tid.innerText=food
            let tim=document.createElement("td")
            let foodima=document.createElement("img")
            foodima.src=ele.image
            tim.append(foodima)
            let tna=document.createElement("td")
            tna.innerText=ele.title            
            let tpr=document.createElement("td")            
            tpr.innerText=ele.price            
            let tdel=document.createElement("td")
            let delo=document.createElement("button")
            delo.innerText=`Delete`
            delo.addEventListener("click",function(){                
                console.log(ele,i)  
                food.splice(i,1)
                localStorage.setItem("localStorageItemList",JSON.stringify(food))

window.location.reload()
                
               
            })
            tdel.append(delo)
            tr.append(tim,tna,tpr,tdel)
            tablu.append(tr)
            lefty.append(tablu)
            
        });
        calculateTotal()
    }


    function calculateTotal(){
        let total=food.reduce(function(acc,cur){
return acc+Math.round(cur.price)
        },0)
        return total        
    }
    function totally(){
        let amount=calculateTotal()+Math.floor((5 / 100) * calculateTotal()) 
        return(amount)      
    }
    totally()




display()
let box1=document.createElement("div")
box1.setAttribute("id","coupon")
box1.style.height="370px"
box1.style.width="300px";
box1.style.padding="8%";
box1.style.backgroundColor="white"
var itemC=document.createElement("h2")
itemC.innerText=`Item count : ${food.length}`


var total=document.createElement("h4")
total.innerText=`Subtotal : ${calculateTotal()}`
var tax=document.createElement("h4")
tax.innerText=`GST : ${Math.floor((5 / 100) * calculateTotal())}`
var elem = document.createElement("hr");
elem.setAttribute("width", "98%");
var pay=document.createElement("button");
pay.innerText=`Ready to Checkout`
pay.addEventListener("click",function(){
    window.location.href="./kfcPayment.html"
})
pay.setAttribute("id","pay")
var sum=document.createElement("p");
sum.innerText=`Total :${totally()}`
localStorage.setItem("sum",JSON.stringify(totally()))


var apply=document.createElement("div")
apply.setAttribute("id","apply")
var coupon=document.createElement("h2")
coupon.innerText="Apply Coupon"
// coupon.style.backgroundColor="#f2f2fa"
var Apcoupon=document.createElement("button")
Apcoupon.innerText="Apply"
Apcoupon.addEventListener("click",function(){
    Apcoupon.innerText="Applied!"
    alert("you got a 100 Rs. off")
    sum.innerText=`Total :${totally()-100 } \n Succesfully coupon applied`
    localStorage.setItem("sum",JSON.stringify(totally()-100))
})
apply.append(coupon,Apcoupon)


box1.append(itemC,apply,total,tax,elem,sum,pay)
righty.append(box1)
container1.append(lefty,righty)
}




}
demmy()
import {navbar}from "./common.js "

var navy=document.getElementById("navbar")
navy.innerHTML=navbar()
