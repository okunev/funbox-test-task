    // берём элемент

    var navElement = document.getElementById('navline');


    // при скролле
    window.onscroll = function() {

      // pageYOffset — количество пикселов, на которое проскролили страницу по Y

      // navElement имеет fixed и pageYOffset меньше topY
      // удаляем fixed, верхний край окна режет шапку
      if (id-1.classList.contains('fixed') && window.pageYOffset < topY) {
        navElement.classList.remove('fixed');

      // прокрутили больше, чем top Y
      } else if (window.pageYOffset > topY) {
        navElement.classList.add('fixed');
      }
    };
