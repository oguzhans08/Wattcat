$(document).ready(function(){ // jquery başlama kodu
    // ETİKET GİRİŞ KUTUSU AÇILMASI BAŞLA


  

// KAYIT OLMA VE GİRİŞ YAPMA EKRANININ AÇILMASI İÇİN BİT.


// ------------------------------                 KAYIT VE GİRİŞ İŞLEMLERİ BAŞLA              ---------------------------------------

var kaydiniz_tamamlandi = document.querySelector(".kaydiniz_tamamlandi");
var kaydiniz_tamamlanmadi = document.querySelector(".kaydiniz_tamamlanmadi");
var kayit_ol_gonder = document.querySelector(".kayit_ol_gonder"); // Formdaki "Kayıt Ol" Butonu
var cont = document.querySelector("#cont"); // inerHTML yapılacak div#cont
var gecerli_mail = "";
var gecerli_sifre = "";


  e_mail.onchange = function (){

    var e_mail = document.querySelector("#e_mail");
    var email_value = document.querySelector("#e_mail").value;
    email_value += " ";
    var gmail_kismi = email_value.slice(-11,-1);
    // var olusturulan_sifre = sifre_olustur.value;


          if (gmail_kismi != "@gmail.com") {
                cont.innerHTML = '<div class="kaydiniz_tamamlanmadi">Lütfen Geçerli Bir E-Posta Adresi Girin (gmail uzantılı)</div>';
                sifre_olustur.setAttribute("style","cursor:not-allowed");
                sifre_olustur.setAttribute("title","Öncelikle E-Posta Adresinizi Girin");
                sifre_olustur.setAttribute("maxlength","0");
        } else if(gmail_kismi == "@gmail.com"){
          sifre_olustur.removeAttribute("style");
          sifre_olustur.removeAttribute("title");
          sifre_olustur.removeAttribute("maxlength");
            
          kayit_ol_gonder.onclick = function(){
            var sifre_olustur = document.querySelector("#sifre_olustur");
            if(sifre_olustur.value.length < 6){
                 cont.innerHTML = '<div class="kaydiniz_tamamlandi">Şifreniz En Az 6 Karakter Olmalıdır</div>';
            }else if (sifre_olustur.value.length >15){
                 cont.innerHTML = '<div class="kaydiniz_tamamlandi">Şifreniz 15 Karakterden Fazla Olamaz</div>';
            }else {
                  cont.innerHTML = '<div class="kaydiniz_tamamlandi">Kaydınız Başarıyla Tamamlandı</div>';
                  $('.kayit_ol_gonder').parent().fadeOut(800); // formun kapanması için
                  gecerli_mail = email_value;
                  gecerli_sifre = sifre_olustur.value;
            }
          } // fonksyion kapanışı      
        } // else if kapanışı  
  }

var kayit_ol_gonder_giris = document.querySelector(".kayit_ol_gonder_giris");
var sifre_olustur_giris = document.querySelector("#sifre_olustur_giris");
var e_mail_giris = document.querySelector("#e_mail_giris");

e_mail_giris.onchange = function(){

  if((e_mail_giris.value + " ") != gecerli_mail){
         cont.innerHTML = '<div class="kaydiniz_tamamlandi">Böyle Bir Hesap Bulunamadı</div>';
         sifre_olustur_giris.setAttribute("style","cursor:not-allowed");
         sifre_olustur_giris.setAttribute("title","Öncelikle E-Posta Adresinizi Girin");
         sifre_olustur_giris.setAttribute("maxlength","0");
  } else {
    sifre_olustur_giris.removeAttribute("style");
    sifre_olustur_giris.removeAttribute("title");
    sifre_olustur_giris.removeAttribute("maxlength");
  }

}

var giris_yap = document.querySelector(".giris_yap");
var kayit_ol = document.querySelector(".kayit_ol a");

kayit_ol_gonder_giris.onclick = function(){
  if(sifre_olustur_giris.value != gecerli_sifre || sifre_olustur_giris.value == ""){
      cont.innerHTML = 'Girilen Şifre Yanlış</div>';
     
} else {
      cont.innerHTML = '<div class="kaydiniz_tamamlandi">Başarıyla Giriş Yaptınız. Siteye Devam Edebilirsiniz.</div>';
      kayit_ol.innerText = e_mail_giris.value;  // Ekranın sol üstünde Kayıt Ol yerine kullanıcının girdiği email yazılır
      giris_yap.setAttribute("style","display:none"); // Ekranın sol üstünde Giriş Yap yazısının yok olması için
      $('.kayit_ol_gonder_giris').parent().fadeOut(800); // formun kapanması için
      document.body.setAttribute("style","overflow:auto");
}
}


// ------------------------------                 KAYIT VE GİRİŞ İŞLEMLERİ BİTİŞ              ---------------------------------------





      $('.yeni_etiket_ekle').click(function(){
        $('.etiket_gir_container').fadeIn(500);
      });

    // ETİKET GİRİŞ KUTUSU AÇILMASI BİTİŞ


      // ETİKET GİRİŞ BAŞLA
      $("#etiket_ekle_buton").click(function(){
        $('.yeni_etiket_ekle').before('<a href="#" class="etiket">'+$('#etiket_giris').val()+'</a>');
        $('.anasayfa_notlar').last().after('<div class="anasayfa_notlar"><div class="not_ekle_cont"><div class="not_ekle">+</div></div><div class="not_giris_ekrani"><div class="not_baslik_gir">Başlık Girin</div><input type="text" id="not_baslik_gir"><div class="notunu_gir">Notunuzu Girin</div><textarea id="notunu_gir"></textarea><div class="notu_kaydet">KAYDET</div><div class="not_giris_ekrani_kapat">✕</div></div></div>');
        $('.anasayfa_notlar').last().before('<div class="etiketine_sahip">'+$('#etiket_giris').val()+'</div>');
        $('.etiket_gir_container').fadeOut(500);
        $('#etiket_giris').val('');
    });

    // çarpı kapama
    $('.etiket_gir_kapat').click(function(){
      $('.etiket_gir_container').fadeOut(500);
    });

      //ETİKET GİRİŞ BİTİŞ




// NOT GİRİŞ BAŞLA

$('.not_ekle').click(function(){
  document.body.setAttribute("style","overflow:hidden"); // not giriş bölümü açılınca sayfa kaydırma çubuğunun gizlenmesi için
  $(this).parent().next().fadeIn(200);   // kendi tıklandığı bölümdeki not giriş sayfasının açılması için
});


// NOTU KAYDET'E TIKLAYINCA NOTUN YERİNE EKLENMESİ BAŞLA

$(".not_ekle_cont + .not_giris_ekrani .notu_kaydet").click(function(){
  $(this).parent().prev().before('<div class="not_kutu"><div class="acilir_not_menusu">    <div class="renk"><i class="fas fa-palette"></i></div><div class="buyult"><i class="fas fa-expand"></i></div><div class="edit"><i class="fas fa-pen"></i></div><div class="sil"><i class="fas fa-trash"></i></div></div> <div class="renkler"><div class="renk1"></div><div class="renk2"></div><div class="renk3"></div><div class="renk4"></div><div class="renk5"></div><div class="renk6"></div><div class="renk7"></div><div class="renk8"></div><div class="renk9"></div><div class="renk10"></div></div><div class="baslik">'+$('#not_baslik_gir').val()+' </div><div class="not">'+$('#notunu_gir').text()+'</div></div>');
  $(".not_giris_ekrani").fadeOut(200);
  $('#not_baslik_gir').val('');
  $('#notunu_gir').text("");
  document.body.setAttribute("style","overflow:auto"); // not giriş bölümü kapatılınca sayfa kaydırma çubuğunun tekrar gelmesi için
  
});

// NOTU KAYDET'E TIKLAYINCA NOTUN YERİNE EKLENMESİ BİT

// NOT SİLME BAŞLA

$('.sil').click(notu_sil);

function notu_sil(){
   $(this).parent().parent().fadeOut(500);
}
// NOT SİLME BİT

// NOT GİRİŞ EKRANINDA ÇARPIYA BASINCA KAPANMASI İÇİN BAŞLA

$('.not_giris_ekrani_kapat').click(function(){
  $(".not_giris_ekrani").fadeOut(200);
  document.body.setAttribute("style","overflow:auto"); // çarpıya basıp kapatınca scroll çubuğu geri geliyor
});

// NOT GİRİŞ EKRANINDA ÇARPIYA BASINCA KAPANMASI İÇİN BİT

// NOTUN RENGİNİ DEĞİŞTİRME KODLARI BAŞ.


$('.renk').click(function(){
  $(this).parent().next().toggleClass('grid');
  $(this).parent().toggleClass('opacity1');
});

$('.renk1').click(function(){
  $(this).parent().parent().css('background','linear-gradient(120deg, #f6d365 0%, #fda085 100%)');
});

$('.renk2').click(function(){
  $(this).parent().parent().css('background','linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)');
});

$('.renk3').click(function(){
  $(this).parent().parent().css('background','linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)');
});

$('.renk4').click(function(){
  $(this).parent().parent().css('background','linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)');
});

$('.renk5').click(function(){
  $(this).parent().parent().css('background','linear-gradient(to right, #4facfe 0%, #00f2fe 100%)');
});

$('.renk6').click(function(){
  $(this).parent().parent().css('background','linear-gradient(to top, #30cfd0 0%, #330867 100%)');
});

$('.renk7').click(function(){
  $(this).parent().parent().css('background','linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)');
});

$('.renk8').click(function(){
  $(this).parent().parent().css('background','linear-gradient(to top, #c471f5 0%, #fa71cd 100%)');
});

$('.renk9').click(function(){
  $(this).parent().parent().css('background','linear-gradient(to top, #0ba360 0%, #3cba92 100%)');
});

$('.renk10').click(function(){
  $(this).parent().parent().css('background','linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)');
});

// NOTUN RENGİNİ DEĞİŞTİRME KODLARI BİT.





// CSS ÖZEL SAYFA JS KODLARI BAŞLA

$('.g1').click(function(){
  $('.listele').addClass('listele1').removeClass('listele2');
  $(this).addClass('secilen_goruntu');
  $('.g2, .g3').removeClass('secilen_goruntu');
});

$('.g3').click(function(){
  $('.listele').addClass('listele2').removeClass('listele1');
  $(this).addClass('secilen_goruntu');
  $('.g2, .g1').removeClass('secilen_goruntu');
});

$('.g2').click(function(){
  $(this).addClass('secilen_goruntu');
  $('.g3, .g1').removeClass('secilen_goruntu');
  $('.listele').removeClass('listele1');
  $('.listele').removeClass('listele2');
});

$('.genislet').click(function(){
  $('.genisletilen_not').fadeIn(300);

  let basligi_al = $(this).prev().prev().prev().text();
  $('.genisletilen_not > .baslik').text(basligi_al);

  let icerigi_al = $(this).prev().text();
  $('.genisletilen_not > .icerik').text(icerigi_al);
  
});

$('.kapat').click(function(){
  $('.genisletilen_not').fadeOut(300);
})
// CSS ÖZEL SAYFA JS ÖZEL KODLARI BİT

$('.sayfa_ici_not_ekle').click(function(){
  $("body").addClass("overflow-hidden"); // not giriş bölümü açılınca sayfa kaydırma çubuğunun gizlenmesi için
  $('.css_notlari .not_giris_ekrani').fadeIn(300);
});

// NOTU KAYDET'E TIKLAYINCA NOTUN YERİNE EKLENMESİ BAŞLA

$(".css_notlari .not_giris_ekrani .notu_kaydet").click(function(){
  $(".listele .birnot").first().before('<div class="birnot"><div class="baslik">'+$('#not_baslik_gir').val()+' </div><div class="line"></div><div class="icerik">'+$('#notunu_gir').text() +'</div><div class="genislet"></div><div class="tarih"></div></div>');
  $(".not_giris_ekrani").fadeOut(200);
  $('#not_baslik_gir').val('');
  $('#notunu_gir').text();
  $("body").removeClass("overflow-hidden"); // not giriş bölümü kapatılınca sayfa kaydırma çubuğunun tekrar gelmesi için
});

// NOTU KAYDET'E TIKLAYINCA NOTUN YERİNE EKLENMESİ BİT






// BU SCROLL KODLARI https://github.com/der-p0l/JS-Hide-Show-Header-On-Scroll  adresinden alınmıştır....   BAŞLANGIÇ

        // initiate variables
        // px from top of the user's window of last tick
        var scrollBefore = window.pageYOffset;
        
        // px from top of the user's window
        var scrollNow = window.pageYOffset;
        
        // scrolling direction
        var scrollDir = "up";
        
        // px moved since last direction change
        var scrollTotalDiff = 0;
        
        // scroll function that is fired on every "tick" the user scrolls
        document.addEventListener("scroll", function() {
            // header element
            var header = document.getElementById("header");
            
            // header height in px
            var headerHeight = header.offsetHeight;
            
            // px that header is from top - can be negative or 0
            var headerTop = header.offsetTop;
            
            // negative px to fully hide the header
            var headerHiddenPx = -1 * headerHeight;
            // it can be "expanded" if the header uses box shadows or something like that
            // var headerHiddenPx = (-1 * headerHeight) - PxToAdd;
            // replacing PxToAdd to some px we want to expand
            
            // update scrollNow
            scrollNow = window.pageYOffset;
            
            // difference of px between now and last tick
            var scrollDiff = scrollNow - scrollBefore;
            
            // if user is on top
            if(scrollNow <= 0) {
                // set fully visible
                header.style.top = "0px";
            } else {
                // if scrolling down
                if(scrollDiff > 0) {
                    // if last direction was the opposite
                    if(scrollDir == "up") {
                        scrollTotalDiff = headerTop;
                    }
                    // update scroll total difference
                    scrollTotalDiff = scrollTotalDiff - scrollDiff;
                    
                    // if header is hiding
                    if(scrollTotalDiff > headerHiddenPx) {
                        // use scrollTotalDiff
                        header.style.top = scrollTotalDiff + "px";
                        
                    // if header is already hidden
                    } else {
                        // use headerHiddenPx - we don't need to keep going
                        header.style.top = headerHiddenPx + "px";
                    }
                    
                    // update scroll direction
                    scrollDir = "down";
                    
                // if scrolling up
                } else if(scrollDiff < 0) {
                    // if last direction was the opposite
                    if(scrollDir == "down") {
                        scrollTotalDiff = headerTop;
                    }
                    // update scroll total difference
                    scrollTotalDiff = scrollTotalDiff - scrollDiff;
                    
                    // if header is becoming visible
                    if(scrollTotalDiff < 0) {
                        // use scrollTotalDiff
                        header.style.top = scrollTotalDiff + "px";
                        
                    // if header is already visible
                    } else {
                        // use 0px - we don't need to keep going
                        header.style.top = "0px";
                    }
                    
                    // update scroll direction
                    scrollDir = "up";
                }
            }
            
            // update last tick to now
            scrollBefore = scrollNow;
        });

// BU SCROLL KODLARI https://github.com/der-p0l/JS-Hide-Show-Header-On-Scroll  adresinden alınmıştır....   BİTİŞ


var typed = new Typed('#typed', {
  strings: ["Notlarınızı Kolayca Düzende Tutun","İstediğiniz Renkle Renklendirin","Şık ve Materyal Tasarımlı","Basit ve Sade Kullanımlı","<span style='font-weight:500'>HARİKA NOTLAR</span>","Harika Notlar Almaya Başlayın !",""],
  typeSpeed:60,
  backSpeed: 60,
  backDelay: 1200,
  startDelay:1000,
  loop:true
});



}); // jquery kapanış kodu (elleme)
