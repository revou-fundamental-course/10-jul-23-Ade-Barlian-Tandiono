function calculateBMI() {
   event.preventDefault(); //Mencegah terjadinya event bawaan dari sebuah DOM
   let form = document.querySelector("#container");
   let hasil = document.querySelector("#result-container");
   var gender = document.querySelector('input[name="gender"]:checked');    
   var age = document.getElementById("age-input").value;
   var weight = document.getElementById("weight-input").value;
   var height = document.getElementById("height-input").value;

   // Validasi form
   if(gender != null) { //Mencegah null error radio button
     gender = document.querySelector('input[name="gender"]:checked').value;
   } else {
     gender = "";
   }  

   if (age == "" || age == 0 || isNaN(age)) {    
      alert("Usia wajib diisi dengan benar","age-input");
    } else if (age < 20) {
      alert("Kalkulator BMI ini hanya untuk orang dewasa minimal 20 tahun keatas","age-input");    
    }else if (gender == "") {
      alert("Jenis kelamin wajib diisi dengan benar","male");        
    } else if (weight == "" || weight == 0 || weight < 0 || isNaN(weight)) {
      alert("Berat badan wajib diisi dengan benar","weight-input");    
    } else if (height == "" || height == 0 || height < 0 || isNaN(height)) {
      alert("Tinggi badan wajib diisi dengan benar","height-input");    
    } else {
      // Konversi cm to m
      meter = height / 100;
      // Hitung kuadrat
      kuadrat = meter * meter;
      // Hitung BMI
      bmi = weight / kuadrat;

      if (bmi < 18.5) {
         statusbb = "BMI anda termasuk kategori kurus";   
     } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
         statusbb = "BMI anda termasuk kategori normal";
     } else if ((bmi >= 25) && (bmi <= 29.9 )) {
         statusbb = "BMI anda termasuk kategori gemuk";
     } else {
         statusbb = "BMI anda termasuk kategori obesitas";
       }


       document.querySelector("#age-result").innerHTML = "Usia : " + age;
       document.querySelector("#gender-result").innerHTML = "Gender : " + gender;
       document.querySelector("#result").innerHTML = "BMI : " + bmi.toFixed(1);
       document.querySelector("#result-statement").innerHTML = statusbb;
   }
}