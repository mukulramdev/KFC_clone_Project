const productContainers=[...document.querySelectorAll('#product-container')];
    const nxtBtn=[...document.querySelectorAll('#nxt-btn')];
    const preBtn=[...document.querySelectorAll('#pre-btn')];

    productContainers.forEach((item,i)=>{
        let containerDimensions=item.getBoundingClientRect();
        let containerWidth=containerDimensions.width;
         nxtBtn[i].addEventListener('click',()=>{
            item.scrollLeft+=containerWidth;
         })
         preBtn[i].addEventListener('click',()=>{
            item.scrollLeft-=containerWidth;
         })
    })

    document.querySelector(".toggle-btn").addEventListener("click",function(){
      window.location.href="./hamburger.html"
    })
    // import {footer} from "./footer.js"
    // document.getElementById(footer).innerHTML=footer();