eventListeners();



function eventListeners(){
  document.getElementById("translate-form").addEventListener("submit",translateWord);//Çevir butonuna basılınca kelimeyi çevirmek için
//Change işlemi
document.getElementById("language").onchange = function(){
  //Select işlemleri tetiklendikçe gerçekleşecek arayüz işlemleri
  console.log("Eventt");
  ui.changeUI();
}



}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);//Gönderilen cumle ve seçilen dil
const ui = new UI();
function translateWord(e){
  translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

  translate.translateWord(function(err,response){

  if(err){
    console.log(err);
  }else{
    ui.displayTranslate(response);
  }
  });

  e.preventDefault();//Sayfa yenilenmesini önlemek için
}
