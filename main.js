       
        let emailInput =document.getElementById("emailID")
        let passInput =document.getElementById("passId")
        let nameInput =document.getElementById("nameId")
        let NemailInput =document.getElementById("NemailID")
        let NpassInput =document.getElementById("NpassId")

   
        
        
        const emailRegex = /^[\w\-._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;    
       
       let loginButton = document.querySelector("button")
        let  signUPlink = document.querySelector("a")
        let signIN = document.querySelector("#B1")
        let login = document.querySelector(".login") ; 
        let signUP = document.querySelector(".signUP") ;
        let Home = document.querySelector(".Home") ;
        let cartoona ;

        if (localStorage.getItem("ourStorage")== null) {
            cartoona = []; 
        } 
        else {
            cartoona = JSON.parse(localStorage.getItem("ourStorage"))
        }

        loginButton.addEventListener("click",function(){
            
            let email = emailInput.value
             let pass = passInput.value 
            let x ;
             for (let i = 0; i < cartoona.length; i++) {
                if (email==cartoona[i].Nemail && pass== cartoona[i].Npass) {
                     x=  cartoona[i].name
                     Home.classList.toggle("d-none")
                     login.classList.toggle("d-none")
                }
               
               
                
             }
           
          
             document.querySelector(".Home h1").innerHTML = `welcome ${x}`
             clearInputs ()
        })



        signUPlink.addEventListener("click",function(){
            login.classList.toggle("d-none")
            signUP.classList.toggle("d-none")


        })

        signIN.addEventListener("click",function(){
            signUP.classList.toggle("d-none")
             login.classList.toggle("d-none")

            
        })




        function Adduser() {
            let name = nameInput.value 
            let Nemail = NemailInput.value
            let Npass = NpassInput.value 
            
            if (emailRegex.test(Nemail)) {
                let oneUser ={  name , Nemail , Npass
                }
                cartoona.push(oneUser)
                clearInputs ()
                localStorage.setItem("ourStorage",JSON.stringify(cartoona))
              } else {
                alert("Invalid email address!");
              }

              signUP.classList.toggle("d-none")
              login.classList.toggle("d-none")
 
            
        }

        function clearInputs () {
            nameInput.value = "";
            NemailInput.value = ""
            NpassInput.value = ""
            emailInput.value = ""
            passInput.value = ""
        }

       function logOut() {
            Home.classList.toggle("d-none")
            login.classList.toggle("d-none")
        }

        