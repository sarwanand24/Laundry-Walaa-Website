  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCDqQzRmuFOXQgfc12PIxzCDcHIJcIUW0I",
    authDomain: "laundry-walaa.firebaseapp.com",
    projectId: "laundry-walaa",
    storageBucket: "laundry-walaa.appspot.com",
    messagingSenderId: "164078565347",
    appId: "1:164078565347:web:f7169029dad99f15fa52d6",
    measurementId: "G-54QCKHK71N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


        import{ getDatabase, ref, set, child, get}
        from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

        const database = getDatabase();
        const auth = getAuth(app);


        const name = document.getElementById("nameInp");
        const mobile = document.getElementById("mobInp");
        const address = document.getElementById("addressInp");
        const submit = document.getElementById("submit");
        const date1 = document.getElementById("dateInp");

        function write(){

if(name.value!="" && mobile.value!="" &&  address.value!=""){

  var j = Math.random() * 100;
  j = Math.floor(j);


const db = getDatabase();
set(ref(db, "UsersList/"+ name.value+j),{
Name: name.value,
Address: address.value,
Date: date1.value,
Mobile: mobile.value,
});


swal({
title: "Hurray!",
text: "Order Confirmed!",
icon: "success",
button: "Next",
});

document.getElementById("form").style.display = "block";
    document.getElementById("details").style.display = "none";

}
else{
swal({
text: "Please Fill All Fields",
});
}
        }

        submit.addEventListener("click", write);


        var element1 = document.getElementById("nav");
        document.getElementById("arrow").addEventListener("click", function(){
         element1.classList.toggle("show");
        })

        let text = document.getElementById("text");
        let text1 = document.getElementById("text1");
        let punch = document.getElementById("punch");
        let bird1 = document.getElementById("bird1");
        let bird2 = document.getElementById("bird2");
        let hang1 = document.getElementById("hang1");
        let washmach = document.getElementById("washmach");
        let btn1 = document.getElementById("btn1");
        let rocks = document.getElementById("rocks");
        let forest = document.getElementById("forest");
        let water = document.getElementById("water");
        let header = document.getElementById("header");
        let sec = document.getElementById("sec");

        let element2 = document.getElementById("flag");

        const fadeElements = document.querySelectorAll(".p");
        const picslider1 = document.querySelectorAll(".hang-slide");
        var ani = document.querySelectorAll(".ani");

        var lastScroll = 0;

        window.addEventListener("scroll" , function(){
            let value = window.scrollY;
            var picto = document.querySelector(".hang-slide");

            punch.style.marginTop = value * 2 + "px";
            text.style.marginTop = value * 2 + "px";
            text1.style.marginTop = value * 2 + "px";
            bird1.style.top = value * -1.5 + "px";
            bird1.style.left = value * 1 + "px";
            bird2.style.top = value * -1 + "px";
            bird2.style.left = value * -2 + "px";
            btn1.style.marginTop = value * 1 + "px";
            rocks.style.top = value * -0.11 + "px";
            forest.style.top = value * 0.10 + "px";

            fadeElements.forEach(element => {
            let elementPos2 = element.getBoundingClientRect().top;
            if (elementPos2 <= 565){
                element.classList.add("fade");
            }
            else{
                element.classList.remove("fade");
            }
        })

        picslider1.forEach(element => {
            let elementPos3 = element.getBoundingClientRect().top;
            if (elementPos3 <= 550){
                picto.classList.add("sl2");
            }
            else{
                picto.classList.remove("sl2");
            }
        })

        ani.forEach(element => {
             let currentScroll = window.scrollY;
            if (currentScroll > 0 && lastScroll <= currentScroll){
                 lastScroll = currentScroll;
                element.style.animationName = "bubbles";
            }
            else{
                element.style.animationName = "";
            }
        })
           
            let elementPos = element2.getBoundingClientRect().top;
            if (elementPos <= 50){
               document.getElementById("arrow").style.color = "white"; 
               document.getElementById("sd-logo").style.color = "white"; 
               document.getElementById("img1").classList.add("sl1");
            }
            else{
                document.getElementById("arrow").style.color = "black";
                document.getElementById("sd-logo").style.color = "teal";  
                document.getElementById("img1").classList.remove("sl1");
            }
        })

        document.getElementById("scroll-top").addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
   })

   document.getElementById("btn1").addEventListener("click", function(){
    document.getElementById("form").style.display = "none";
    document.getElementById("details").style.display = "block";
   })

   document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("form").style.display = "none";
   document.getElementById("details").style.display = "block";
  })
