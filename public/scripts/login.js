let forgotPassBtn = document.getElementById("forgotPassBtn");
let retrievePassDiv = document.getElementById("retrievePassDiv");
let retrievePasswordForm = document.getElementById("retrievePasswordForm");
let loginForm = document.getElementById("loginForm");

forgotPassBtn.addEventListener("click", ()=>{
    loginForm.style.display = "none"
    retrievePassDiv.style.display = "block"
})

retrievePasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let retrievePasswordInput = document.getElementById("retrievePasswordInput").value;
    let passResetFetch = await fetch("/pass_reset", {
        method : "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          passReset:retrievePasswordInput, 
        })
    });
    let newPassData = await passResetFetch.json();
    retrievePassDiv.style.display = "none";
    let serverAnswer = document.getElementById("serverAnswer");
    serverAnswer.style.display = "block";
    let answerMessage = document.getElementById("answerMessage");
    answerMessage.innerText = newPassData.message;
});