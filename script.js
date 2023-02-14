const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";
    
    let xhr = new XMLHttpRequest();//creating a new xml object
    xhr.open("POST","message.php",true);//sending post request to php file 
    xhr.onload = ()=>{//once ajax is loaded
      if(xhr.readyState == 4 && xhr.status == 200)//if ajax response status is 200 & ready status is 4 means that there is no error
      {
        let response = xhr.response; //storing ajax response in a response variable
        if(response.indexOf("Email and password field is required" != -1) || response.indexOf("Enter a valid email") || response.indexOf("Sorry, failed to send message!"))
        {
            statusTxt.style.color = "red";
        }
        else{
             form.reset();
             setTimeout(()=>{
                statusTxt.style.display = none;
             },3000)
        }
        statusTxt.innerText = response;
      }
    }
    let formData = new FormData(form);//creating new FormData obj. This is used to send form data

    xhr.send(formData);//sending form data

}