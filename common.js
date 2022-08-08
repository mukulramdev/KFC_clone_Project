function footer(){
    return `
    <div class="footer-col">
    <h4>Legal</h4>
    <ul>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="disclaimer.html">Disclaimer</a></li>
        <li><a href="cautionNotice.html">Caution Notice</a></li>
    </ul>
</div>
<div class="footer-col">
    <h4>KFC India</h4>
    <ul>
        <li><a href="aboutkfc.html">About KFC</a></li>
        <li><a href="#">KFC care</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="#">Our Golden Past</a></li>
    </ul>
</div>
<div class="footer-col">
    <!-- <span><i class="fa-solid fa-location-dot"></i>KFC</span> -->
    <ul id="underline">
        <li><a href="#"><i class="fa-solid fa-location-dot"></i>Find a KFC</a></li>
    </ul>
</div>
</div>
</div>
<div class="playstore">
<a href="https://play.google.com/store/apps/details?id=com.yum.kfc" target="_blank"><img
    src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
    alt="playstore"></a>
</div>
<div class="appstore">
<a href="https://apps.apple.com/in/app/kfc-india/id915824379" target="_blank"> <img
    src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
    alt="appstore"></a>
</div>
</div>
<div class="foot-col-sol">
<div class="copyright">
</div>
<div class="social-links">
<a href="https://www.instagram.com/kfcindia_official/" target="_blank"><i
    class="fab fa-instagram"></i></a>
<a href="https://www.facebook.com/KFCIndia" target="_blank"><i class="fab fa-facebook-f"></i></a>
<a href="https://twitter.com/KFC_India" target="_blank"><i class="fab fa-twitter"></i></a>
</div>
</div>
</footer>
`
}

function navbar(){
    return `
     <div id="header-pic"><img src="https://images.ctfassets.net/wtodlh47qxpt/7aV9O0UN4Qq2GY2RBpsGNj/8e844fa7f19eb224b01ea6db475c8f50/FREE_ZINGER_375x121px.jpg"></div>
     <div id="resNav">
        <div class="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg">
        
        <img class="bucket" src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg">
    
    </div>
    
    <div id="nav">
        <div id="firstHalf">
            <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg">
            <a href="./menupage.html"><p>Menu</p></a>
            <a href="./deals.html"><p> Deals<p></a>
        </div>
        <div id="secondHalf">
            <div>
                <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg">
                
                <a href="./signup.html"><h4>Sign In</h4></a>
            </div>    
            <p id="rupee"> </p>
            <a href="./cart.html">
            <img class="bucket" src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg">
            </a>
            
        </div>
    </div>`
}
export {footer,navbar}
