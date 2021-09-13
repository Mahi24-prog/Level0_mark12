var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var side3 = document.querySelector("#side3");
var calculateBtn = document.querySelector(".submit-btn");
var result = document.querySelector(".result");


function calculateArea(){
    var A = Number(side1.value)
    var B = Number(side2.value)
    var C = Number(side3.value)

    var area = 0;

    if (A+B>C && A+C>B && B+C>A){
        var S = A+B+C/2;
        var area = Math.sqrt(S*(S-A)*(S-B)*(S-C)).toFixed(4);
        result.innerText = `Area of a triangle using heron's formula is ${area} units`;
    }else{
        result.innerText = "Enter valid side lengths such that each side lengths";
    }
}


calculateBtn.addEventListener("click",calculateArea);

