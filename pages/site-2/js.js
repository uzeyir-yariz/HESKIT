// küçük harflere dikkat et
function hesapla(){
    let passwordLength = document.getElementById("pass").value;
    let includeLowercase = document.getElementById("SmalTxt").checked;
    let includeUppercase = document.getElementById("BigTxt").checked;
    let includeNumbers = document.getElementById("Number").checked;
    let includeSpecialChars = document.getElementById("char").checked;

    let passwordChart = "";
    
    if (includeLowercase) {
      passwordChart += "abcdefghijklmnopqrstuvwxyz";
    }

    if (includeUppercase) {
      passwordChart += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeNumbers) {
      passwordChart += "0123456789";
    }

    if (includeSpecialChars) {
      passwordChart += ";,:.-_()%^&+!{}?@";
    }

    if (passwordChart.length === 0) {
      alert("Lütfen en az bir karakter seti seçin.");
      return;
    }

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * passwordChart.length);
      password += passwordChart[randomIndex];
    }

    document.getElementById("result").innerHTML = password + "<input type='button' id=''copy value='hello'>";
}