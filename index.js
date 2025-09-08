var form = document.getElementById("sheet-db")
form.addEventListener("submit", e=>{
    e.preventDefault()
    fetch(form.action,{
        method:"POST",
        body: new FormData(document.getElementById("sheet-db")),
    }).then((html) =>{
        window.open('message.html','_blank');
    });
})

function validate()
{
   var fnamep = /^[A-Za-z]+$/

   var lnamep = /^[A-Za-z]+$/
   
   var php = /^[6-9]{1}[0-9]{9}$/


   var fnamev = document.getElementById("fname").value
   var lnamev = document.getElementById("lname").value
   var email = document.getElementById("email").value
   var phv = document.getElementById("phnum").value
   var msgv = document.getElementById("message").value
   if(fnamev == "")
   {
    document.getElementById("msg").innerHTML="Enter the Firsr name."
    return false
   }
   if(fnamev.match(fnamep))
   true;
else
   {
    document.getElementById("msg").innerHTML="Enter a valid First name."
    return false
   }
   
   if(lnamev == "")
   {
    document.getElementById("msg1").innerHTML="Enter the Last name."
    return false
   }
   if(lnamev.match(lnamep))
   true;
else
   {
    document.getElementById("msg1").innerHTML="Enter a valid Last name."
    return false
   }

   if(email == "")
   {
    document.getElementById("msg2").innerHTML="Enter the Email."
    return false
   }

   if(phv == "")
   {
    document.getElementById("msg3").innerHTML="Enter the Phone Number."
    return false
   }
   if(phv.match(php))
   true;
else
   {
    document.getElementById("msg3").innerHTML="Enter a valid Phone Number."
    return false
   }

   if(msgv == "")
   {
    document.getElementById("msg4").innerHTML="Enter your Message."
    return false
   }
}
