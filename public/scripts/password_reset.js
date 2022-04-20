let passwordResetForm = document.getElementById("passwordResetForm");
passwordResetForm.addEventListener("submit", async (e)=> {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let url = window.location.href
    let resetCode = url.slice(url.length-128);
    let emaiVerification = await fetch("/password_reset_verification", {
        method : "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          email:email,
          resetCode:resetCode 
        })
    });
    let response = await emaiVerification.json();
    console.log("The response from the server is:");
    console.log(response);
    
    let loginDiv = document.getElementById("loginDiv");
    loginDiv.style.display = "none";

    let messageText = document.getElementById("messageText");
    if(response.status){
        passwordResetForm.submit();
        messageText.innerText = response.message;
    } else {
        messageText.innerText = response.message;
        let getNewCode = document.getElementById("getNewCode");
        getNewCode.addEventListener("click", ()=>{
            let retrievePasswordInput = document.getElementById("email").value;
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
            getNewCode.value = newPassData.message;
        })
        getNewCode.style.display = "block";
    }
})