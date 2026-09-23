"use strict";

(function () {
    let originalPositions = [];
    let daElements = document.querySelectorAll('[data-da]');
    let daElementsArray = [];
    let daMatchMedia = [];
    //Заполняем массивы
    if (daElements.length > 0) {
        let number = 0;
        for (let index = 0; index < daElements.length; index++) {
            const daElement = daElements[index];
            const daMove = daElement.getAttribute('data-da');
            if (daMove != '') {
                const daArray = daMove.split(',');
                const daPlace = daArray[1] ? daArray[1].trim() : 'last';
                const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
                const daDestination = document.querySelector('.' + daArray[0].trim())
                if (daArray.length > 0 && daDestination) {
                    daElement.setAttribute('data-da-index', number);
                    //Заполняем массив первоначальных позиций
                    originalPositions[number] = {
                        "parent": daElement.parentNode,
                        "index": indexInParent(daElement)
                    };
                    //Заполняем массив элементов 
                    daElementsArray[number] = {
                        "element": daElement,
                        "destination": document.querySelector('.' + daArray[0].trim()),
                        "place": daPlace,
                        "breakpoint": daBreakpoint
                    }
                    number++;
                }
            }
        }
        dynamicAdaptSort(daElementsArray);

        //Создаем события в точке брейкпоинта
        for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daBreakpoint = el.breakpoint;
            const daType = "max"; //Для MobileFirst поменять на min

            daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
            daMatchMedia[index].addListener(dynamicAdapt);
        }
    }
    //Основная функция
    function dynamicAdapt(e) {
        for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daElement = el.element;
            const daDestination = el.destination;
            const daPlace = el.place;
            const daBreakpoint = el.breakpoint;
            const daClassname = "_dynamic_adapt_" + daBreakpoint;

            if (daMatchMedia[index].matches) {
                //Перебрасываем элементы
                if (!daElement.classList.contains(daClassname)) {
                    let actualIndex = indexOfElements(daDestination)[daPlace];
                    if (daPlace === 'first') {
                        actualIndex = indexOfElements(daDestination)[0];
                    } else if (daPlace === 'last') {
                        actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
                    }
                    daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
                    daElement.classList.add(daClassname);
                }
            } else {
                //Возвращаем на место
                if (daElement.classList.contains(daClassname)) {
                    dynamicAdaptBack(daElement);
                    daElement.classList.remove(daClassname);
                }
            }
        }
        customAdapt();
    }

    //Вызов основной функции
    dynamicAdapt();

    //Функция возврата на место
    function dynamicAdaptBack(el) {
        const daIndex = el.getAttribute('data-da-index');
        const originalPlace = originalPositions[daIndex];
        const parentPlace = originalPlace['parent'];
        const indexPlace = originalPlace['index'];
        const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
        parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
    }
    //Функция получения индекса внутри родителя
    function indexInParent(el) {
        var children = Array.prototype.slice.call(el.parentNode.children);
        return children.indexOf(el);
    }
    //Функция получения массива индексов элементов внутри родителя 
    function indexOfElements(parent, back) {
        const children = parent.children;
        const childrenArray = [];
        for (let i = 0; i < children.length; i++) {
            const childrenElement = children[i];
            if (back) {
                childrenArray.push(i);
            } else {
                //Исключая перенесенный элемент
                if (childrenElement.getAttribute('data-da') == null) {
                    childrenArray.push(i);
                }
            }
        }
        return childrenArray;
    }
    //Сортировка объекта
    function dynamicAdaptSort(arr) {
        arr.sort(function (a, b) {
            if (a.breakpoint > b.breakpoint) {
                return -1
            } else {
                return 1
            } //Для MobileFirst поменять
        });
        arr.sort(function (a, b) {
            if (a.place > b.place) {
                return 1
            } else {
                return -1
            }
        });
    }
    //Дополнительные сценарии адаптации
    function customAdapt() {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
}());;

function ibg() {
  document.querySelectorAll(".ibg").forEach((el) => {
    if (el.querySelector("img")) {
      el.style.backgroundImage = `url("${el
        .querySelector("img")
        .getAttribute("src")}")`;
    }
  });
}

//ibg();

const burgerBtn = document.querySelector(".burder__menu"),
  menuList = document.querySelector(".header__menu--main");

burgerBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  document.body.classList.toggle('menu__active');
  menuList.classList.toggle('active');
});

function subMenuMobile() {
  $('.header__menu--top .menu-item-has-children').append('<a class="sub-m-link"></a>');
  $('.header__menu--top .menu-item-has-children .sub-m-link').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.sub-menu').toggleClass('active');
  });
}

subMenuMobile();

$("li.search a").fancybox({
  touch: false,
  animationEffect: "zoom-in-out"
});
$(".wp-block-embed__wrapper, .wp-block-video").append("<span class='play-button'></span>");
$(".play-button").click(function () {
  let iframe = $(this).parent().find('iframe');
  let video = $(this).parent().find('video');
  if (iframe.length == 1) {
    iframe[0].src += "&autoplay=1";
    $(this).hide();
  } else {
    video.get(0).play();
    $(this).hide();
  }
})

$('.sidebar__btn a').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $('.sidebar').toggleClass('active');
})


// Check if CookieYes button appear to the site, Show 
const intervalToCheckCookieBtn = setInterval(function() {
    if ($(".cky-btn-revisit").length > 0) {
        $(".cookieyes-open-preference").show();
        $('.cookieyes-open-preference a').on('click', function(e) {
            e.preventDefault();
            $('.cky-btn-revisit').trigger('click');
        });

        if($("#ckyCCPAOptOut").length > 0){
            $("#ckyCCPAOptOut").attr("aria-label", "Do not sell or share my personal information");
            $("#ckyCCPAOptOut").next(".cky-opt-out-checkbox-label").text('Save my preferences');
        }
        clearInterval(intervalToCheckCookieBtn); // Stop checking
    }
}, 200); // Check every 200ms

