result_enabled = 0;

$(" ul.regla2 li").click(function () {
  $(this).parent().parent().find(".whiteg").removeClass("whiteg");
  $(this).toggleClass("whiteg");

  let id = $(this).parent().attr("id");
  let index = parseInt(id.split("_")[1], 10) - 1;
  t2.values[index] = parseInt($(this).attr("data-value"));
  t2.save();

  schau_ergebnis_doch_sichtbar();
});

$("#resultme").click(function () {
  $("#closeresult").show();
  //$("#mild_result").addClass("yellow").removeClass("gray");

  result_enabled = -1;
  $(this).addClass("showingresult");
  rechnen();
});

$("#closeresult").click(function () {
  result_enabled = 0;
  $(this).hide();
  // reset values
  reset_wert();
})

function reset_wert() {
  $("#resultme").removeClass("showingresult");
  $("#resultme").html(i18n[sprache]["ausrechnen"]);
  $("#mild_result").html(i18n[sprache]["mild_result"]);
  $("#mild_result").removeClass().addClass("black")
  $("#mild_result2").html(" ");

  $("ul.regla2").find("li").removeClass("whiteg");

  for (i = 1; i<= 15; i++) {
    $("#t2_diagnostic_"+i).css("color","transparent");
  }
  t2.destroy();
}

function schau_ergebnis_doch_sichtbar() {
  if (result_enabled) {
    rechnen();
  }
}

function rechnen() {
  $(".questions").find(".whiteg").each(function () {
    if ($(this).attr("data-value") !== "") {
      let id = $(this).parent().attr("id");
      let index = parseInt(id.split("_")[1], 10) - 1;
      let value = parseInt($(this).attr("data-value"))
      //t2.values[index] = value;
      $("#t2_diagnostic_"+(index+1)).css("color", value === 1 ? "red" :"transparent");
    }

  });

  t2.save()
  rechnen_show()

}

function rechnen_show() {
  $("#resultme").html("&nbsp;");
  $("#mild_result").html(t2.result_text)
  $("#mild_result2").html(t2.result_text2)
  $("#mild_result").removeClass().addClass(t2.result_color)
}

function fill() {
  for (i = 1; i<= 15; i++) {
    $("#t2_diagnostic_"+i).css("color","transparent");
    let val = t2.values[i-1];
    if (val !== "") {
      let id = "#t2_" + i + " li"
      $(id).each(function () {
        if (parseInt($(this).attr("data-value")) == val) {
          $(this).addClass("whiteg");
        }
      })
    }
  }
  $("#resultme").click();
}

window.onload = function () {
  t2.load();
  fill();
}