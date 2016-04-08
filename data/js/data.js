$(function () {

  var mainHeader = {title: "Ты сегодня покормил кота?"};

  // CatfoodObject Defaults

  var defaultPreheader = "Сказочное заморское яство";
  var defaultCatfoodHeader = "Нямушка";
  var defaultScale = "кг";
  var defaultCallToAction = "Чего сидишь? Порадуй котэ, <a href='#'>купи</a>";
  var defaultBackground = "data/cat.png";

  var catfoodObject = {
    catfood: [
      {
        preheader: defaultPreheader,
        header: defaultCatfoodHeader,
        content: "с фуа-гра",
        quantity: "10 порций",
        present: "мышь в подарок",
        weight: "0,5",
        scale: defaultScale,
        background: defaultBackground,
        callToAction: defaultCallToAction
      },
      { 
        preheader: defaultPreheader,
        header: defaultCatfoodHeader,
        content: "с рыбой",
        quantity: "40 порций",
        present: "2 мыши в подарок",
        weight: "2",
        scale: defaultScale,
        background: defaultBackground,
        callToAction: defaultCallToAction
      },
      { 
        preheader: defaultPreheader,
        header: defaultCatfoodHeader,
        content: "с курой",
        quantity: "100 порций",
        present: "2 мыши в подарок<br>заказчик доволен",
        weight: "5",
        scale: defaultScale,
        background: defaultBackground,
        callToAction: defaultCallToAction
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
