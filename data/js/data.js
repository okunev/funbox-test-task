$(function () {

  var mainHeader = {title: "Ты сегодня покормил кота?"};

  // CatfoodObject Defaults

  var defaultPreheader = "Сказочное заморское яство";
  var defaultHoverPreheader = "Котэ не одобряет?";
  var defaultCatfoodHeader = "Нямушка";
  var defaultScale = "кг";
  var defaultCallToAction = "Чего сидишь? Порадуй котэ, ";
  var defaultBackground = "data/cat.png";

  var catfoodObject = {
    catfood: [
      {
        content: "с фуа-гра",
        id: 1,
        preheader: defaultPreheader,
        hoverPreheader: defaultHoverPreheader,
        header: defaultCatfoodHeader,
        quantity: "10 порций",
        present: "мышь в подарок",
        weight: "0,5",
        scale: defaultScale,
        background: defaultBackground,
        callToAction: defaultCallToAction,
        active: "Печень утки разварная с артишоками.",
        disabledText: "Печалька, с фуа-гра закончился.",
        disabled: ""
      },
      { 
        content: "с рыбой",
        id: 2,
        preheader: defaultPreheader,
        hoverPreheader: defaultHoverPreheader,
        header: defaultCatfoodHeader,
        quantity: "40 порций",
        present: "2 мыши в подарок",
        weight: "2",
        scale: defaultScale,
        background: defaultBackground,
        callToAction: defaultCallToAction,
        active: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        disabledText: "Печалька, с рыбой закончился.",
        disabled: ""
      },
      { 
        content: "с курой",
        id: 3,
        preheader: defaultPreheader,
        hoverPreheader: defaultHoverPreheader,
        header: defaultCatfoodHeader,
        quantity: "100 порций",
        present: "2 мыши в подарок",
        bonus: "заказчик доволен",
        weight: "5",
        scale: defaultScale,
        background: defaultBackground,
        callToAction: defaultCallToAction,
        active: "Филе из циплят с трюфелями в бульоне",
        disabledText: "Печалька, с курой закончился.",
        disabled: "disabled"
      }
    ]
  };

  Handlebars.registerHelper('each', function(context, options) {
    var ret = "";
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + options.fn(context[i]);
    }
    return ret;
  });

  // header

  var headerTemplate = $("#header-template").html();
  var headerCompiled = Handlebars.compile(headerTemplate);
  var headerData = headerCompiled(mainHeader);
  $('.header').html(headerData);


  // catfood

  var catfoodTemplate = $("#catfood-template").html();
  var catfoodCompiled = Handlebars.compile(catfoodTemplate);
  var catfoodData = catfoodCompiled(catfoodObject);
  $('.cards').html(catfoodData);

});
