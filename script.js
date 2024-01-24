const mainBox = document.querySelector(".main_box");
const thankBox = document.querySelector(".thankyou_box");
const sbmtBtn = document.querySelector(".submit-btn");
const rtgBtn = document.querySelectorAll(".rtng-btn")
const rating = document.getElementById("rating");

rtgBtn.forEach(element => {
    element.addEventListener("click",function(){
        let rate = element.innerHTML;
        console.log("First"+rate.length);
        sbmtBtn.addEventListener("click",function(){
            mainBox.classList.add("hide")
            thankBox.classList.remove("hide")
            rating.innerHTML = rate;
        })
    });
    
});
