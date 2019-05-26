function Translate(word,language){//çevirmek istediğimiz kelime ve dil
  this.apikey="trnsl.1.1.20181224T181027Z.334fa48ed0042180.2bea85bf734a9cf91f71c49fb6df20e59d27997b";
  this.word=word;
  this.language=language;

  this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateWord = function(callback){
  //Ajax İşlemlerimiz
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

this.xhr.open("GET",endpoint);//True asenkron demek



this.xhr.onload = ()=>{//requestin responsunu yakalıyoruz
  if(this.xhr.status===200){
    const json = JSON.parse(this.xhr.responseText);
const text =json.text[0];
callback(null,text);
  }else {
callback("Bir hata oluştu",null);
  }
}
this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord,newLanguage){
  this.word=newWord;
  this.language=newLanguage;
}
