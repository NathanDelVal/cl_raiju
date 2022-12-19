document.addEventListener('DOMContentLoaded', () => {
    for(let btn of document.querySelectorAll('[data-target]')) {
        btn.addEventListener('click', (e) => {
            if(document.querySelector(btn.dataset.target).dataset.state == 'false') {
                document.querySelector(btn.dataset.target).dataset.state = 'true';
                if( btn.querySelector('.fa-caret-down')) {
                    btn.querySelector('.fa-caret-down').classList.add('fa-caret-up');
                    btn.querySelector('.fa-caret-down').classList.remove('fa-caret-down');
                }
            } else {
                document.querySelector(btn.dataset.target).dataset.state = 'false';
                if( btn.querySelector('.fa-caret-up')) {
                    btn.querySelector('.fa-caret-up').classList.add('fa-caret-down');
                    btn.querySelector('.fa-caret-up').classList.remove('fa-caret-up');
                }
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
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