window.onload = function(){
    doldur();
}

function kont(){
    let txt = document.getElementById("kira").value;
    if(txt == ""){
        alert("KİRA BÖLÜMÜNÜ BOŞ BIRAKTINIZ");
    }

    else if(txt <= 800){
        alert("hmm...");
        hesaplama();
    }

    else if(txt >= 100000){
        alert("!!!");
        hesaplama();
    }

    else{
        hesaplama();
    }
}

function hesaplama(){
    let YIL, AY, AYFark, YILFark, Mkira, Ykira;

    // değişkenleri seç
    let yilList = document.getElementById("yil_list");
    let ayList = document.getElementById("ay_list");
    let kirabedeli = document.getElementById("kira").value;
    let simdikiTarih = new Date();

    // seçilen yıl ve ay değerlerini al
    YIL = parseInt(yilList.options[yilList.selectedIndex].value);
    AY = parseInt(ayList.options[ayList.selectedIndex].value);

    // ay ve yıl farkını hesapla
    AYFark = simdikiTarih.getMonth() + 1 - AY;
    YILFark = simdikiTarih.getFullYear() - YIL;

    // kira artışı hesapla
    if (YILFark >= 5) {
        Mkira = kirabedeli * 1.5;
    }else if(YILFark <= 5) {
        Mkira = kirabedeli * 1.25;
    }else if(YILFark == 0){
        
    }

    // zam oranını ay bazında hesapla
    Ykira = Mkira / 12;
    Ykira = Ykira.toFixed(2); // virgülden sonra 2 basamak kullan

    // sonuçları yazdır
    document.getElementById("sonuc").innerHTML = "Kira Bedeli: " + kirabedeli + " TL<br><br>" + "Yeni Kira Bedeli: " + Mkira.toFixed(2) + " TL<br><br>" + "Aylık Artış: " + Ykira + " TL";
}






function doldur(){
    /* bu kodlar ay bölümünü dolduracaktır */

    // değerler
    let aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    let ayList = document.getElementById("ay_list")

    for(let i = 0; i < aylar.length; i++){
        let option = document.createElement("option");
        option.text = aylar[i];
        option.value = i + 1;
        ayList.add(option);
    }

    let yilList = document.getElementById("yil_list");
    let simdikiTarih = new Date();
    let nowdate = simdikiTarih.getFullYear();

    // doldurma bölümü
    for(let i = nowdate; i >= 2000; i--){
        let option = document.createElement("option");
        option.text = i;
        option.value = i;
        yilList.add(option);
    }
}
