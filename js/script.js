// Kalkulasi BMI //
let heightInput = document.querySelector("#height-input");
let weightInput = document.querySelector("#weight-input");
let calculateButton = document.querySelector("#calculate");
let result = document.querySelector("#result");
let statement = document.querySelector("#result-statement");
let BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    height = heightInput.value;
    weight = weightInput.value;
    
    if (height === "" || isNaN(height)) {
         alert("Mohon isi tinggi badan").return();
    } else if (weight === "" || isNaN(weight)) {
         alert("Mohon isi berat badan").return();
    }

    BMI = weight/((height**2) / 10000).toFixed(2); 
    result.innerText = " BMI anda : " + BMI.toFixed(2);

    if(BMI < 18.5){
        statement.innerText = "BMI anda termasuk kategori kurus";    
    }else if((BMI >= 18.5) && (BMI <= 24.9)){
        statement.innerText = "BMI anda termasuk kategori normal";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "BMI anda termasuk kategori gemuk";
    }else{
        statement.innerText = "BMI anda termasuk kategori obesitas";
      }
   } )

// Fungsi gender  //
function genderResult() {
   var  gender = document.getElementsByName('gender');

   for (i = 0; i < gender.length; i++) {
       if (gender[i].checked) {
           document.getElementById("gender-result").innerHTML
               = "Gender : " + gender[i].value;
       } 
   }   
}

// Fungsi usia  //
   function ageResult() {
      var age = parseInt (document.getElementById('age-input').value);
      if(age == "")     
         return true;
      if (isNaN(age)||age<=10||age>100)
         { 
         alert("minimal umur adalah 10 tahun");
         return false;
         } else {
               document.getElementById("age-result").innerHTML
               = "Usia :" + age;
         }
      }

// Fungsi validasi semua input  //
   function emptyCheck() {
      if (height =='' || weight =='' || gender =='' || age =='') {
         return;
      }
   }

 
