var inputAngles = document.querySelectorAll(".input");
var checkBtn = document.querySelector(".submit-btn");
var result = document.querySelector(".result")



checkBtn.addEventListener("click", ()=>{
    var angleSum = 0;
    parseInt(angleSum);
    for(i=0;i<inputAngles.length;i++){
        angleSum += parseInt(inputAngles[i].value);
    }
    if(angleSum === 180){
        result.innerText = "Yay, the angles form a triangle!";
    }else{
        result.innerText = "Oh Oh! The angle doesn't form a triangle";
    }
})