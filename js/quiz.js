var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector(".submit-btn");
var result = document.querySelector(".result")

const answerList = ["90°","right angled", "one right angle", "12, 16, 20", "Equilateral triangle"];

submitBtn.addEventListener("click",()=>{
    var score = 0;
    var index = 0;
    var userAns = new FormData(quizForm);
    for(var i of userAns.values()){
        if(i===answerList[index]){
            score += 1;
        }
        index += 1;  
    }
    result.innerText = "The score is "+score;
    result.scrollIntoView();
})

