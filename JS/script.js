

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

tpj = jQuery;
tpj.noConflict();

tpj(document).ready(function () {
    if (tpj.fn.cssOriginal !== undefined) {
        tpj.fn.css = tpj.fn.cssOriginal;
    }

    var api = tpj('.fullwidthbanner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 500,

        onHoverStop: "on",

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,

        hideThumbs: 200,
        navigationType: "bullet", 
        navigationArrows: "solo",
        navigationStyle: "round",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 30,
        navigationVOffset: -40,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,

        touchenabled: "on", 
        stopAtSlide: -1,
        stopAfterLoops: -1,

        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        hideSliderAtLimit: 0,

        fullWidth: "on",
        shadow: 0
    });

    // 🛠 Mobil Swipe (Kaydırma) Desteği
    let startX, endX;
    let threshold = 50; // Minimum kaydırma mesafesi

    tpj('.fullwidthbanner-container').on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].clientX;
    });

    tpj('.fullwidthbanner-container').on("touchmove", function (e) {
        endX = e.originalEvent.touches[0].clientX;
    });

    tpj('.fullwidthbanner-container').on("touchend", function () {
        if (startX - endX > threshold) {
            api.revnext(); // Sağa kaydırınca sonraki slayta git
        } else if (endX - startX > threshold) {
            api.revprev(); // Sola kaydırınca önceki slayta git
        }
    });
});






function mobilIndirme() {
    if (window.innerWidth <= 768) {
        window.location.href = "https://www.bilsoft.com/ucretsizmobilindirme.html";
    }
}
//GOOGLE TAG MANAGER
(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-5NDKF8K');
//END GOOGLE TAG MANAGER




/*<script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'AW-826640077');
    </script> -->*/

//META PİXEL CODE
!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '450940647119661');
fbq('track', 'PageView');
//END META PİXEL CODE  


(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 3279181, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

//<!--Start of Tawk.to Script-->

        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5aebf26e227d3d7edc24f245/1g9mgu80g';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
//<!--End of Tawk.to Script-->

 // Çarpıya tıklanınca sabit görseli gizler
 function closeFixedImage() {
    document.getElementById('fixedImage').style.display = 'none';
}

//<!-- Google Code for tawk.to Chat Conversion -->
     type="text/javascript"
        var Tawk_API = Tawk_API || {};
        Tawk_API.onChatStarted = function () {
            gtag('event', 'conversion', { 'send_to': 'AW-826640077/XGdnCKrX3agBEM2NlooD' });
        };


            //<![CDATA[
            var theForm = document.forms['form1'];
            if (!theForm) {
                theForm = document.form1;
            }
            function __doPostBack(eventTarget, eventArgument) {
                if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
                    theForm.__EVENTTARGET.value = eventTarget;
                    theForm.__EVENTARGUMENT.value = eventArgument;
                    theForm.submit();
                }
            }
            //]]>

 
            //<![CDATA[
            var __cultureInfo = { "name": "tr-TR", "numberFormat": { "CurrencyDecimalDigits": 2, "CurrencyDecimalSeparator": ",", "IsReadOnly": true, "CurrencyGroupSizes": [3], "NumberGroupSizes": [3], "PercentGroupSizes": [3], "CurrencyGroupSeparator": ".", "CurrencySymbol": "?", "NaNSymbol": "NaN", "CurrencyNegativePattern": 8, "NumberNegativePattern": 1, "PercentPositivePattern": 2, "PercentNegativePattern": 2, "NegativeInfinitySymbol": "-?", "NegativeSign": "-", "NumberDecimalDigits": 2, "NumberDecimalSeparator": ",", "NumberGroupSeparator": ".", "CurrencyPositivePattern": 3, "PositiveInfinitySymbol": "?", "PositiveSign": "+", "PercentDecimalDigits": 2, "PercentDecimalSeparator": ",", "PercentGroupSeparator": ".", "PercentSymbol": "%", "PerMilleSymbol": "?", "NativeDigits": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], "DigitSubstitution": 1 }, "dateTimeFormat": { "AMDesignator": "ÖÖ", "Calendar": { "MinSupportedDateTime": "\/Date(-62135596800000)\/", "MaxSupportedDateTime": "\/Date(253402289999999)\/", "AlgorithmType": 1, "CalendarType": 1, "Eras": [1], "TwoDigitYearMax": 2029, "IsReadOnly": true }, "DateSeparator": ".", "FirstDayOfWeek": 1, "CalendarWeekRule": 0, "FullDateTimePattern": "d MMMM yyyy dddd HH:mm:ss", "LongDatePattern": "d MMMM yyyy dddd", "LongTimePattern": "HH:mm:ss", "MonthDayPattern": "dd MMMM", "PMDesignator": "ÖS", "RFC1123Pattern": "ddd, dd MMM yyyy HH\u0027:\u0027mm\u0027:\u0027ss \u0027GMT\u0027", "ShortDatePattern": "d.MM.yyyy", "ShortTimePattern": "HH:mm", "SortableDateTimePattern": "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss", "TimeSeparator": ":", "UniversalSortableDateTimePattern": "yyyy\u0027-\u0027MM\u0027-\u0027dd HH\u0027:\u0027mm\u0027:\u0027ss\u0027Z\u0027", "YearMonthPattern": "MMMM yyyy", "AbbreviatedDayNames": ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], "ShortestDayNames": ["Pa", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"], "DayNames": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], "AbbreviatedMonthNames": ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara", ""], "MonthNames": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", ""], "IsReadOnly": true, "NativeCalendarName": "Miladi Takvim", "AbbreviatedMonthGenitiveNames": ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara", ""], "MonthGenitiveNames": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", ""] }, "eras": [1, "MS", null, 0] };//]]>
     

            //<![CDATA[
            Sys.WebForms.PageRequestManager._initialize('ctl00$ctl00$ScriptManager99', 'form1', [], [], [], 90, 'ctl00$ctl00');
            //]]>

 setTimeout(function () {
   document.getElementById('popup').style.display = 'block';
 }, 7000);

 document.getElementById('close').addEventListener('click', function () {
   document.getElementById('popup').style.display = 'none';
 });
 

 document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('active');
});
document.querySelectorAll('.mobile-dropdown > a').forEach(function (dropdownLink) {
    dropdownLink.addEventListener('click', function (event) {
        event.preventDefault(); // Sayfa yenilemeyi önler
        const dropdown = this.parentElement;
        dropdown.classList.toggle('active'); // Aktif sınıfını ekle veya çıkar
    });
});




 // Geri sayım için hedef tarih
 const hedefTarih = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0).getTime();

 // Sayaç fonksiyonu
 function geriSayim() {
     const simdikiZaman = new Date().getTime();
     const fark = hedefTarih - simdikiZaman;

     if (fark <= 0) {
         // Sayaç bittiğinde
         document.getElementById("geriSayim").innerHTML = "Mutlu Yıllar!";
         clearInterval(sayacInterval);
         return;
     }

     // Zaman birimlerini hesapla
     const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
     const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
     const saniye = Math.floor((fark % (1000 * 60)) / 1000);

     // HTML içeriğini güncelle
     document.querySelector(".timer-box.days .digits").textContent = gun;
     document.querySelector(".timer-box.hours .digits").textContent = saat;
     document.querySelector(".timer-box.minutes .digits").textContent = dakika;
     document.querySelector(".timer-box.seconds .digits").textContent = saniye;
 }

 // Her saniyede bir geri sayımı güncelle
 const sayacInterval = setInterval(geriSayim, 1000);


////////////////////////////////////////////////////////////////////////////////////////////
 document.addEventListener('DOMContentLoaded', function () {
    var otherCheckbox = document.getElementById('otherCheckbox');
    var otherInput = document.getElementById('otherInput');

    // "Diğer" kutusuna tıklanırsa metin alanı açılır
    otherCheckbox.addEventListener('change', function () {
        if (this.checked) {
            otherInput.disabled = false; // Metin kutusu aktif hale gelir
        } else {
            otherInput.disabled = true; // Metin kutusu devre dışı kalır
            otherInput.value = ""; // İçerik temizlenir
        }
    });
});







$("[name='phone_number']").inputmask("(999) 999-9999");
                    $("[name='email']").inputmask({
                        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
                        greedy: false,
                        onBeforePaste: function (pastedValue, opts) {
                            pastedValue = pastedValue.toLowerCase();
                            return pastedValue.replace("mailto:", "");
                        },
                        definitions: {
                            '*': {
                                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                                casing: "lower"
                            }
                        }
                    });

                    $(".indirFormText").click(function () {
                        location.href = "https://bilsoft.com/indir.aspx?tip=urun&id=1";
                        setTimeout(function () {
                            window.location.href = "https://bilsoft.com/ucretsiz-muhasebe-indir.html";
                        }, 3000);
                    });

                    function Redirect() {
                        let adSoyad = $("#adSoyad").val();
                        let telefon = $("#telefon").val()
                        let email = $("#email").val();
                        let programTur = "Ucretsiz"

                        let telefonReplace1 = telefon.replaceAll("_", "");
                        let telefonReplace2 = telefonReplace1.replace("-", "");
                        let telefonReplace3 = telefonReplace2.replace("(", "");
                        let telefonReplace4 = telefonReplace3.replace(")", "");
                        let telefonReplace5 = telefonReplace4.replace(" ", "");

                        if ($("#kvkkCheck").prop("checked") == false) {
                            toastr.error("Formu göndermek için KVKK aydınlatma metnini onaylamalısınız")
                            return false;
                        }

                        if (adSoyad == "" || telefon == "") {
                            toastr.error("Formu göndermek için Ad Soyad ve Telefon alanlarını doldurmalısınız.")
                            return false;
                        }
                        if (telefonReplace5.length < 10) {
                            toastr.error("Telefon 10 haneli olmak zorundadır.")
                            return false;
                        }

                        return $.ajax({
                            type: "POST",
                            url: 'ProgramIndirForm.aspx/form_kaydet',
                            data: "{ adSoyad : '" + adSoyad + "',telefon : '" + telefon + "',email : '" + email + "',programTur : '" + programTur + "'}",
                            beforeSend: function () {
                                $(".indirFormSubmit").prop("disabled", true);
                                $(".indirFormSubmit").css('opacity', '0.7');
                                $(".indirFormSubmit").val("İndiriliyor...")
                            },
                            contentType: 'application/json; charset=utf-8',

                            success: function (result) {
                                if (result.d.basariliMi == true) {
                                    toastr.success(result.d.mesaj)
                                    location.href = "https://bilsoft.com/indir.aspx?tip=urun&id=1";
                                    $(".indirFormSubmit").prop("disabled", true);
                                    $(".indirFormSubmit").css('opacity', '0.7');
                                    $(".indirFormSubmit").val("İndiriliyor...");
                                    setTimeout(function () {
                                        window.location.href = "https://bilsoft.com/ucretsiz-muhasebe-indir.html";
                                    }, 4000);
                                }
                            },
                            error: function () {
                                debugger;
                                toastr.error("İstek hatalı");
                                $(".indirFormSubmit").prop("disabled", true);
                                $(".indirFormSubmit").css('opacity', '0.7');
                                $(".indirFormSubmit").val("İndiriliyor...");
                            }
                        });



                        // window.location = "http://localhost:54923/ProgramIndirForm.aspx?adSoyad=" + adSoyad + "&telefon=" + telefon + "&email=" + email +"";
                        // toastr.success("Form gönderildi");
                    }
                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];
                    var modal = document.getElementsByClassName("indirFormModal")[0];
                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    $("input[type='tel']").on("input", function () {
                        debugger;
                        if (this.value.charAt(1) === "0") {
                            this.value = this.value.slice(2);
                        }
                    });



 
                    



                    document.addEventListener("DOMContentLoaded", function () {
                        var slides = document.querySelectorAll(".slide");
                        slides.forEach(function (slide) {
                            slide.addEventListener("click", function () {
                                window.location.href = 'entegrasyonlar.aspx';
                            });
                        });
                    });

                    // Sayfa yüklendikten sonra çalışacak
                    document.addEventListener('DOMContentLoaded', function () {
                        // Modal kapatma butonunu bul
                        const modalCloseButton = document.querySelector('.modal-close');
                        const modal = document.getElementById('myModal');

                        // Kapatma butonuna tıklama olayını ekle
                        modalCloseButton.addEventListener('click', function () {
                            modal.style.display = "none"; // Modalı gizle
                        });
                    });
                    debugger;
                    $(document).ready(function () {

                        var checkboxes = document.querySelectorAll('.survey-checkbox');
                        var otherCheckbox = document.getElementById('otherCheckbox');
                        var otherInput = document.getElementById('otherInput');

                        // Sadece bir checkbox seçilsin
                        checkboxes.forEach(function (checkbox) {
                            checkbox.addEventListener('change', function () {
                                if (this.checked) {
                                    checkboxes.forEach(function (otherCheckbox) {
                                        if (otherCheckbox !== checkbox) {
                                            otherCheckbox.checked = false; // Diğer seçeneklerin seçimini kaldır
                                        }
                                    });
                                }
                                // Eğer "Diğer" seçeneği seçilirse, metin kutusu aktifleşir
                                if (otherCheckbox.checked) {
                                    otherInput.disabled = false; // "Diğer" seçiliyse metin kutusunu aktif yap
                                } else {
                                    otherInput.disabled = true; // "Diğer" seçili değilse metin kutusunu devre dışı bırak
                                    otherInput.value = ""; // Metin kutusu devre dışı olduğunda içeriği temizle
                                }
                            });
                        });
                        $.ajax({
                            type: "POST",
                            url: "haberler.aspx/GetHaberListesi",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (response) {
                                console.log(response)

                                var haberler = JSON.parse(response.d);
                                $('.list_doted02').empty(); // Mevcut listeyi temizle

                                $.each(haberler, function (i, haber) {
                                    // Başlığı encode ederken özel karakterleri '-' ile değiştir
                                    var haberBaslik = encodeURIComponent(haber.baslik).replace(/%[0-9A-F]{2}/gi, '');

                                    var haberLink = $('<a>', {
                                        href: 'haber-' + haber.id + '-' + haberBaslik + '.html'
                                    });

                                    var haberDiv = $('<div>', { class: 'haberDiv' });
                                    haberDiv.append($('<p>', { class: 'haberDescripton', text: haber.baslik }));
                                    haberDiv.append($('<p>', { class: 'haberTarih', text: new Date(haber.tarih).toLocaleDateString() }));
                                    console.log(haberDiv)
                                    haberLink.append(haberDiv);

                                    // Haber bilgilerini içeren <a> etiketini bir <li> içine yerleştir
                                    var listItem = $('<li>').append(haberLink);

                                    // Oluşturulan <li> etiketini listeye ekle
                                    $('.list_doted02').append(listItem);
                                });
                            },
                            error: function (error) {
                                console.log("Hata: ", error);
                            }
                        });
                    });
                    
                    






//google ozel arama
(function () {
    var cx = '010988755304072146472:m3aoq0tjr2g';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();







function Redirect() {
    // Seçili checkbox'ı bul
    const selectedCheckbox = document.querySelector('.survey-checkbox:checked'); // Seçili checkbox
    let descriptionDiger = "";

    // Eğer "Diğer" seçeneği seçildiyse metin alanının değerini al
    if (selectedCheckbox && selectedCheckbox.value === "diger") {
        descriptionDiger = document.getElementById('otherInput').value; // "Diğer" kısmındaki metin
    }

    // Eğer herhangi bir checkbox seçilmemişse hata mesajı göster
    if (!selectedCheckbox) {
        toastr.error("Anket boş gönderilemez");
        return;
    }

    // IP adresini al ve işlem tamamlandığında yönlendirme yap
    $.getJSON("https://jsonip.com?callback=?", function (data) {
        var ipAdress = data.ip; // IP adresini değişkene atıyoruz

        // URL parametrelerini hazırla
        const queryString = `?selectedItem=${selectedCheckbox.value}&diger=${encodeURIComponent(descriptionDiger)}&ipadress=${encodeURIComponent(ipAdress)}`;

        // Sunucuya yönlendirme
        window.location.href = "/AnketMailGonder.aspx" + queryString;

        // Başarı mesajı göster
        toastr.success("Anket gönderildi");

        // Modalı kapatma
        document.getElementById("myModal").style.display = "none";
    });
}








//<!--    Modal çerez kontrolü-- >
                                  /*  < !--$(document).ready(function () {
                -->
                                        < !-- // Çerez kontrolü: Modal daha önce gösterilmiş mi? -->
                                        < !-- var modalShown = getCookie("modalShown"); -->

                                        < !-- // Eğer çerez yoksa modalı göster ve çerezi ayarla -->
                                        < !-- if (!modalShown) {
                    -->
                                            < !--openModal(); // Modalı aç -->
                                            < !--setCookie("modalShown", "true", 30); // Modalı gösterdikten sonra 30 gün boyunca çerez sakla -->
                                        < !-- } -->

                                        < !-- // Modal açılmasını tetikle -->
                                        < !-- function openModal() {
                        -->
                                            < !--$("#myModal").css("display", "block"); -->
                                        < !-- } -->

                                        < !-- // Modalı kapatma işlevi -->
                                        < !--$(".modal-close").click(function () {
                            -->
                                            < !--$("#myModal").css("display", "none"); -->
                                        < !-- }); -->

                                        < !-- // Modal dışına tıklandığında kapatma işlevi -->
                                        < !--$(window).click(function (event) {
                                -->
                                            < !-- if (event.target.id === "myModal") {
                                    -->
                                                < !--$("#myModal").css("display", "none"); -->
                                            < !-- } -->
                                        < !-- }); -->
                                    < !-- }); -->*/

                // Çerez ayarlama fonksiyonu
                function setCookie(name, value, days) {
                    var expires = "";
                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                        expires = "; expires=" + date.toUTCString();
                    }
                    document.cookie = name + "=" + (value || "") + expires + "; path=/";
                }

            // Çerez okuma fonksiyonu
            function getCookie(name) {
                var nameEQ = name + "=";
                var ca = decodeURIComponent(document.cookie).split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }






 
 
            
/*<!--<script>


            $(document).ready(function () {
                // IP adresini al ve modal içindeki span'a ekle
                $.getJSON("https://jsonip.com?callback=?", function (data) {
                    $(".ip").text(data.ip);
                });

                // Kapatma butonuna tıklayınca modal kapanacak
                $(".modalClose").click(function () {
                    $('#myModal').css("display", "none");
                });

                // IP kontrolü ve anket işleyişi
                $('input[type=checkbox][name=diger]').change(function () {
                    if (this.checked) {
                        $(".digerValue").removeAttr('disabled');
                    } else {
                        $(".digerValue").attr('disabled', 'disabled');
                        $(".digerValue").val("");
                    }
                });

                //// Anket Gönderme
                //function Redirect() {
                //    if (document.querySelector('.anket:checked')) {
                //        const selectedItem = document.querySelector('.anket:checked').value;
                //        let descriptionDiger = "";
                //        if (selectedItem == "Diger") {
                //            descriptionDiger = $('#digerDecription').val();
                //        }
                //        const ipAdress = $('.ip').text();
                //        window.location = "/AnketMailGonder.aspx?selectedItem=" + selectedItem + "&diger=" + descriptionDiger + "&ipadress=" + ipAdress;
                //        toastr.success("Anket gönderildi");
                //        // Modalı kapat
                //        $("#myModal").css("display", "none");
                //    } else {
                //        toastr.error("Anket boş gönderilemez");
                //    }
                //}
            });
        </script>-->
        <!--<script type="text/javascript">
            $(document).ready(function () {
                countdown();
                const countContainer = document.querySelector(".countdown-parent-div");

                $(".indirForm").click(function () {
                    $("#indirFormModal").css("display", "block");
                    $("#adSoyad").focus();
                });

                $("li[data-link]").on("click touchend", function () {
                    window.location.href = $(this).data("link");
                });

                // Çerez kontrolü yaparak modal gösterimi yönetme
                if (getCookie("anketModal") !== "True") {
                    // Çerez yoksa veya 'True' değilse modalı göster
                    setTimeout(function () {
                        $("#myModal").css("display", "block");
                        // Modal gösterildikten sonra çerezi ayarla
                        setCookie('anketModal', 'True', 30); // 30 gün boyunca çerez saklanacak
                    }, 1000); // Modalı 1 saniye sonra göster
                }

                $(".modalClose").click(function () {
                    $('#myModal').css("display", "none");
                });

                var span = document.getElementsByClassName("close")[0];
                span.onclick = function () {
                    modal.style.display = "none";
                    document.cookie = "anketModal=True; expires=Thu, 18 Dec 2022 12:00:00 UTC";
                    createCookie("anketModal", "True", 1);
                }

                var modalImage = document.getElementById("efaturaModal");
                modalImage.onclick = function () {
                    document.cookie = "anketModal=True; expires=Thu, 18 Dec 2022 12:00:00 UTC";
                }

                $("#myModal").click(function (ev) {
                    if (ev.target != this) return;
                    $('#myModal').css("display", "none");
                    createCookie("anketModal", "True", 99);
                });

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 100) {
                        $('.scrollup').fadeIn();
                    } else {
                        $('.scrollup').fadeOut();
                    }
                });

                $('.scrollup').click(function () {
                    $("html, body").animate({ scrollTop: 0 }, 500);
                    return false;
                });
            });

            function countdown() {
                const endDate = new Date("2024-12-31 23:59:59").getTime();
                const timer = setInterval(function () {
                    const now = new Date().getTime();
                    const timeRemaining = endDate - now;

                    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                    document.getElementById("days").innerText = days;
                    document.getElementById("hours").innerText = hours;
                    document.getElementById("minutes").innerText = minutes;
                    document.getElementById("seconds").innerText = seconds;

                    if (timeRemaining < 0) {
                        clearInterval(timer);
                        document.getElementById("days").innerText = "0";
                        document.getElementById("hours").innerText = "0";
                        document.getElementById("minutes").innerText = "0";
                        document.getElementById("seconds").innerText = "0";
                    }
                }, 1000);
            }

            function setCookie(name, value, days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "") + expires + "; path=/";
            }

            function getCookie(name) {
                var nameEQ = name + "=";
                var ca = decodeURIComponent(document.cookie).split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }
            function createCookie(name, value, days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toGMTString();
                }
                document.cookie = name + "=" + value + expires + "; path=/";
            }
            function setImportantCss(element, property, value) {
                element.style.setProperty(property, value, 'important');
            }

            // Kullanımı:
            setImportantCss(document.getElementById('myModal'), 'display', 'block');

        </script>--> */ 
        
        




 
        function CookiesPolicy() {
            var basrili = "basarili";
            $.ajax({
                type: 'POST',
                url: 'default.aspx/CookiePlicy',
                data: '{ basariDurumu : "' + basrili + '" }',
                contentType: "application/json; charset=utf-8",
                //data: { data: "basarili" },
                success: function (data) {
                    console.log(data)
                    if (data != null && data.d == "1") {
                        $("#cookiePoliciy").remove();
                    }
                },
                error: function (err) {

                }
            });
        }
        
        




        var countDownDate = new Date("December 31, 2023 23:59:59").getTime();

        var x = setInterval(function () {
            var now = new Date().getTime();

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var daysDiv = document.getElementsByClassName("days")[0];
            daysDiv.getElementsByClassName("digits")[0].innerHTML = days;
            var hoursDiv = document.getElementsByClassName("hours")[0];
            hoursDiv.getElementsByClassName("digits")[0].innerHTML = hours;
            var minutesDiv = document.getElementsByClassName("minutes")[0];
            minutesDiv.getElementsByClassName("digits")[0].innerHTML = minutes;
            var secondsDiv = document.getElementsByClassName("seconds")[0];
            secondsDiv.getElementsByClassName("digits")[0].innerHTML = seconds;


            if (distance < 0) {
                clearInterval(x);
                //document.getElementById("geriSayim").innerHTML = "<div>BİTTİ</div>";

                daysDiv.getElementsByClassName("digits")[0].innerHTML = 0;

                hoursDiv.getElementsByClassName("digits")[0].innerHTML = 0;

                minutesDiv.getElementsByClassName("digits")[0].innerHTML = 0;

                secondsDiv.getElementsByClassName("digits")[0].innerHTML = 0;
            }


        }, 1000);

        $(function () {
            setTimeout(function () {
                var height1 = $('#js-resize').parent('li').find('img').height();
                $('#js-resize').height(height1)
            }, 500)

            $(window).resize(function () {
                var height = $('#js-resize').parent('li').find('img').height();
                $('#js-resize').height(height)
            })
            $('#js-resize').on('click', function () {
                var url = $(this).data('url');
                $(location).attr('href', url);
            })

        })




        

        //<!-- jquery jcarousel -->
      

            jQuery(document).ready(function () {
                jQuery('#mycarousel').jcarousel();
            });
            jQuery(document).ready(function () {
                jQuery('#mycarouseltwo').jcarousel();
            });

            jQuery(document).ready(function () {
                jQuery('#mycarouselthree').jcarousel();
            });

            jQuery(document).ready(function () {
                jQuery('#mycarouselfour').jcarousel();
            });






            
            //<!-- REVOLUTION SLIDER -->
         
                var tpj = jQuery;
                tpj.noConflict();
                tpj(document).ready(function () {
                    if (tpj.fn.cssOriginal != undefined)
                        tpj.fn.css = tpj.fn.cssOriginal;
    
                    var api = tpj('.fullwidthbanner').revolution(
                        {
                            delay: 9000,
                            startwidth: 1170,
                            startheight: 500,
    
                            onHoverStop: "on",						// Stop Banner Timet at Hover on Slide on/off
    
                            thumbWidth: 100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                            thumbHeight: 50,
                            thumbAmount: 3,
    
                            hideThumbs: 200,
                            navigationType: "none",				// bullet, thumb, none
                            navigationArrows: "solo",				// nexttobullets, solo (old name verticalcentered), none
    
                            navigationStyle: "round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
    
    
                            navigationHAlign: "center",				// Vertical Align top,center,bottom
                            navigationVAlign: "bottom",					// Horizontal Align left,center,right
                            navigationHOffset: 30,
                            navigationVOffset: -40,
    
                            soloArrowLeftHalign: "left",
                            soloArrowLeftValign: "center",
                            soloArrowLeftHOffset: 0,
                            soloArrowLeftVOffset: 0,
    
                            soloArrowRightHalign: "right",
                            soloArrowRightValign: "center",
                            soloArrowRightHOffset: 0,
                            soloArrowRightVOffset: 0,
    
                            touchenabled: "on",						// Enable Swipe Function : on/off
    
    
                            stopAtSlide: -1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
                            stopAfterLoops: -1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
    
                            hideCaptionAtLimit: 0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
                            hideAllCaptionAtLilmit: 0,				// Hide all The Captions if Width of Browser is less then this value
                            hideSliderAtLimit: 0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
    
    
                            fullWidth: "on",
    
                            shadow: 0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
    
                        });
                });







                //<!-- testimonials -->
                 
                    //<![CDATA[
                    $(window).load(function () {
                        $(".controlls li a").click(function (e) {
                            e.preventDefault();
                            var id = $(this).attr('class');
                            $('#slider div:visible').fadeOut(500, function () {
                                $('div#' + id).fadeIn();
                            })
                        });
                    });//]]>
            
                    

 
                    


            // //  google anlystik bilsoft.com icin

            //     (function (i, s, o, g, r, a, m) {
            //         i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            //             (i[r].q = i[r].q || []).push(arguments)
            //         }, i[r].l = 1 * new Date(); a = s.createElement(o),
            //             m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            //     })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            // ga('create', 'UA-101239906-1', 'auto');
            // ga('send', 'pageview');

            function PopupCenter(url, title, w, h) {
                // Fixes dual-screen position                         Most browsers      Firefox
                var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
                var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

                var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
                var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

                var left = ((width / 2) - (w / 2)) + dualScreenLeft;
                var top = ((height / 2) - (h / 2)) + dualScreenTop;
                var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
                // Puts focus on the newWindow
                if (window.focus) {
                    newWindow.focus();
                }
            }

            $("#btnOnlineMuh").on("click", function () {
                window.open('http://app.bilsoft.com', '_blank');
            });










        
               
     