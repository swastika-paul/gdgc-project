const password = document.getElementById("password");
const eyeicon = document.getElementById("eyeicon");
eyeicon.onclick = function(){
    if (password.type == "password"){
        password.type = "text";
        eyeicon.src = "https://cdn-icons-png.flaticon.com/512/829/829117.png";
    }else{
        password.type = "password";
        eyeicon.src = "https://png.pngtree.com/recommend-works/png-clipart/20240521/ourmid/pngtree-closed-eyes-icon-ad-block-png-image_12503494.png";
    }
}

  const swastika = document.getElementById("login").addEventListener("click", function () {
   const username = document.getElementById("smallbox2").value;
  const password = document.getElementById("password").value;
   
   if(username ==='' || password === ''){
     alert("Invalid credentials");
  }
  else{
    alert("login sucessfully");
   }
   
  });

  
 

