// küçük harflere dikkat et
function hesapla(){
    let pasword_lenght = document.getElementById("pass").value;

    let smal_text = document.getElementById("SmalTxt").checked;
    let big_text = document.getElementById("BigTxt").checked; 
    let number = document.getElementById("Number").checked; 
    let chart = document.getElementById("char").checked;

    let password_chart = "";



    // if(smal_text == true && big_text == false && ){}


    // if(smal_text == true){
    //     password_chart = "abcdefghijklmnopqrstuvwxyz";
    // }
    
    // else if(big_text == true){
    //     if(big_text == true && smal_text == true){password_chart = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";} 

    //     else{password_chart = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
    // }
    
    // else if(number == true){
        
    //     if(number == true && smal_text == true && big_text == true){password_chart = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";}
    //     else if(number == true && smal_text == true && big_text == false){password_chart = "abcdefghijklmnopqrstuvwxyz0123456789";}
    //     else if(number == false && smal_text == true && big_text == false){password_chart = "abcdefghijklmnopqrstuvwxyz";}
        
    //     else{password_chart = "0123456789";}

    // }
    
    // else if(chart == true){
    //     password_chart = ";,:.-_()%^&+!{}?@";
    // }
    
    // else{alert("her hangi bir hata oluştu lütfen iletişime geçin");}



    console.log(password_chart);
    // console.log(pasword_lenght);
}