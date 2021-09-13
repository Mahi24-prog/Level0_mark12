var inputValues = document.querySelectorAll(".input");
var checkBtn = document.querySelector(".submit-btn");
var result = document.querySelector(".result");


checkBtn.addEventListener("click", ()=>{
    var sqrSum = 0;
    var sqrt = 0;
    parseInt(sqrSum);
    parseInt(sqrt);
    for(i=0;i<inputValues.length;i++){
        let value = parseInt(inputValues[i].value);
        sqrSum += value * value;
    }
    sqrt = Math.sqrt(sqrSum);
    result.innerText = "The length of hypotenuse is " + sqrt;
})