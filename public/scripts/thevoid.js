window.onload = function() {
    let eliminateRowTd = document.querySelectorAll('.deleteThisRowElement');
    eliminateRowTd.forEach((td)=>{
        td.addEventListener('click', async ()=>{
            if(confirm('are you sure you want to send this recommendation to the void?')){
                let recommendationid = td.parentElement.dataset.recommendationid;
                let response = await fetch("/sendRecommendationToTheVoid", {
                    method : "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({recommendationForVoid:recommendationid})
                  });
                  let message = await response.json();
                  console.log(message)
            }
        })
    })
}