document.querySelectorAll(".question").forEach((question) => {

    question.addEventListener("click", () => {
              const answer = question.nextElementSibling;
              const icon = question.querySelector("img");
              if(answer.style.display === "block")
              {
                answer.style.display = "none";
                icon.src = "./assets/images/icon-plus.svg";
              }
              else{
                answer.style.display= "block";
                icon.src = "./assets/images/icon-minus.svg";

              }
    });

});

