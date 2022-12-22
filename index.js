document.addEventListener('DOMContentLoaded', () => {
    for (let btn of document.querySelectorAll('[data-target]')) {
        btn.addEventListener('click', (e) => {
            if (document.querySelector(btn.dataset.target).dataset.state == 'false') {
                document.querySelector(btn.dataset.target).dataset.state = 'true';
                if (btn.querySelector('.fa-caret-down')) {
                    btn.querySelector('.fa-caret-down').classList.add('fa-caret-up');
                    btn.querySelector('.fa-caret-down').classList.remove('fa-caret-down');
                }
            } else {
                document.querySelector(btn.dataset.target).dataset.state = 'false';
                if (btn.querySelector('.fa-caret-up')) {
                    btn.querySelector('.fa-caret-up').classList.add('fa-caret-down');
                    btn.querySelector('.fa-caret-up').classList.remove('fa-caret-up');
                }
            }
        });
    }
    var rua = 'Rua Mario Neves, 221';
    var bairro = 'Ilha da Conceição';
    var cidade = 'Niterói';

    rua.replace(',', '');
    rua.replace(' ', '_');
    bairro.replace(',', '');
    bairro.replace(' ', '_');
    cidade.replace(',', '');
    cidade.replace(' ', '_');

    contentString = 
    "<div style='padding: 5px;letter-spacing:.5px'>" +
    "<h2>CL Raiju</h2>" +
    "</div>";

    var address = rua + ', ' + bairro + ', ' + cidade;
    var map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 16,
        scrollwheel: false //desabilita zoom com scroll
        // disableDefaultUI: true, //desabilita botoes no mapa
    });

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            // ######PARTE AONDE CLICA-SE NO MARKER E APARECE UM TEXTO NO BALÃO
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                ariaLabel: 'CL Raiju'
            });
            var marker = new google.maps.Marker({
                position: results[0].geometry.location, //posição daonde o marker ficará
                map: map,
                title: 'CL Raiju',
                animation: google.maps.Animation.DROP //animacao do marker OUTRAS ANIMAÇÕES: BOUNCE,
            });
            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                });
            });
            /* ##### PARTE AONDE EXECUTA A FUNÇÃO DO CLICK NO MARKER PARA APARECER O TEXTO DO SPAN ACIMA
          google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
            }); */
            map.setCenter(results[0].geometry.location);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    var swiperTexto = new Swiper('.swiper-text', {
        // Optional parameters
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
    var swiperCard = new Swiper('.swiper-card', {
        // Optional parameters
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
    var swiperGellery = new Swiper('.swiper-gallery', {
        // Optional parameters
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})