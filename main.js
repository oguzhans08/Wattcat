function sifre()
{
	var kullanici, sifre;
	kullanici=prompt("Lütfen kullanici adinizi giriniz:");
	sifre=prompt("Lütfen şifrenizi giriniz:")
	for(var i=1; i<=3; i++)
	{
	if(kullanici!="orhan" || sifre!="123")
	{
		alert("Yanlış kullanıcı adı ya da şifre");
			kullanici=prompt("Kullanici adinizi tekrar giriniz");
			sifre=prompt("Sifrenizi tekrar giriniz");									
         }
	else
	{  
             alert("Tebrikler doğru giriş");
	     break;
	}
        }
}