const main = document.getElementById('main');
const qna = document.getElementById('qna');



function begin(){
    // main.style.display = "none";
    // qna.style.display = "block";
    main.style.animation = "fadeOut 1s";
    setTimeout(function(){
        qna.style.animation = "fadeIn 1s";
    
    },450)

    setTimeout(function(){
        main.style.display = "none";
        qna.style.display = "block";
    },900)

    

}
function goNext(index){
    var q = document.querySelector('.qBox');
    q.textContent = qnaList[index].q;
    // addAnswer(qnaList[0].a[0].answer);
    // addAnswer(qnaList[0].a[1].answer);
    // addAnswer(qnaList[0].a[2].answer);
    for(let i in qnaList[index].a) {
        addAnswer(qnaList[index].a[i].answer, index);
    }

}
function addAnswer(answerText) {
    var a =document.querySelector('.answerBox');
    var answer = document.createElement('button');
    a.appendChild(answer);
    answer.textContent = answerText;
    GamepadButton.addEventListener('click', function(e){
        // e.target.style.display = 'none';
        e.target.parentNode.querySelectorAll('*').forEach(n =>n.remove());
        goNext(++qIdx)
                    });

}

let qIdx = 0;
goNext(qIdx);