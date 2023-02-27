// hesaplama bölümü 

// 5 yıldan fazla kirada ise %50 zam yapabilir 
// 5 yıldan az kirada ise %25 zam yapabilir

function hesapla(){
    // değişkenler
    
    var yilList = document.getElementById("yil_list");
    let select_yil = yilList.options[yilList.selectedIndex].value;
    // console.log(selectyil); [çalışıyor :D]

    var ayList = document.getElementById("ay_list");
    let select_ay = ayList.options[ayList.selectedIndex].value;
    // console.log(select_ay); [çalışıyor :D]

    const now = new Date();
    const YIL = now.getFullYear();
    const AY = now.getMonth() + 1;

    var topYil = select_yil - YIL;
    var topAy = select_ay - AY;

}