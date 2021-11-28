'use strict'


let docWidth = document.documentElement.clientWidth




let infoItem = document.querySelectorAll('.idc-head__info-item')
let sildeon = function(buttons, page) {
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            page = this.getAttribute('data-slide')
            macBookSwiper.slideTo(page, 800)
        })
    })

}


// закрытие macbook info tooltip-а 
let infoCloseBtn = document.querySelector('.idc-macbook__info-btn')
let infoClose = function(btn) {
    let macbookInfo = document.querySelector('.idc-macbook__info')
    btn.addEventListener('click', function() {
        macbookInfo.classList.add('idc-info-closed')

    })
}

// скрипт для фона


let banner_resize = function() {
    var banners = [].slice.call(document.querySelectorAll('.idc-bg-wrapper'));
    banners.forEach(function(elem) {
        return elem.style.width = document.documentElement.clientWidth + 'px';
    });
}

// Функция для тултипов в адаптиве
let TooltipMobile = function(docwidth) {
        if (docwidth < 1200) {
            var MainWrapper = document.querySelector('.idc-main-wrapper');
            let AllTooltip = [].slice.call(MainWrapper.querySelectorAll('.idc-information'));
            console.log(AllTooltip);
            AllTooltip.forEach(function(elem) {
                elem.addEventListener('click', function() {
                    console.log(this);
                    elem.classList.add('open');
                })
            });
            MainWrapper.addEventListener('click', function(e) { // событие клика по веб-документу
                let ToolTipOpen = MainWrapper.querySelector('.idc-information.open')
                console.log(ToolTipOpen);
                const target = e.target;
                if (ToolTipOpen != null) {
                    if (ToolTipOpen.contains(target)) return false
                    else {
                        ToolTipOpen.classList.remove('open')
                    }
                }
            });
        } else return false;
    }
    //----------------------//


document.onreadystatechange = function() {



    if (document.readyState === 'complete') {
        // Ваш скрипт


        window.addEventListener('resize', function() {
            docWidth = document.documentElement.clientWidth
            banner_resize();
            TooltipMobile(docWidth)
        });
        banner_resize();


        // Aos 

        AOS.init({
            once: true,
        });


        // параллакс

        var rellax = new Rellax('.rellax', {
            center: true // данное свойство отвечает за корректное позиционирование элементов параллакса
        });
        // Инициализация работы тултипов c учётом тултипа сравнения в мини карточках //
        TooltipMobile(docWidth)


        // закрытие подсказки на macbook 
        infoClose(infoCloseBtn)

        // навигация по свайперу макбука 
        sildeon(infoItem)

    }

};