


result_enabled = 0;

cookiejson = {};
cookiejson["bodya"] = [];


$(document).on("click", "ul.regla2 li", function () {
  $(this).parent().parent().find(".whiteg").removeClass("whiteg");
  $(this).toggleClass("whiteg");
  schau_ergebnis_doch_sichtbar();
});

$(document).on("click", "#resultme", function () {
  $("#closeresult").show();
  result_enabled = -1;
  $(this).addClass("showingresult");
  rechnen();
});

$(document).on("click", "#closeresult", function () {
  result_enabled = 0;
  $(this).hide();
  reset_wert();
});

$(document).on("click", "#child-checkbox", function () {
  let val = $("#child-checkbox").is(":checked");
  easi["child"] = val;
  easi.save();
  if (result_enabled) {
    rechnen();
  }
  console.log('check: ' + easi["child"]);
});

function reset_wert() {
  $("#resultme").removeClass("showingresult");
  $("#resultme").html(i18n[sprache]["ausrechnen"]);
  $("#mild_result").html(i18n[sprache]["mild_result"]);
  $("#mild_result").addClass("black").removeClass(easi.result_color);
  $("#mild_result2").html(" (0 - 72)");

  $("ul.regla2").find("li").removeClass("whiteg");
  $("body").find(".img-thumbnail").removeClass("easi-selection");

  $("#child-checkbox").prop("checked", false);
  easi.destroy();
}

$(document).on("click", ".img-thumbnail", function () {
  $(this).parent().parent().find(".img-thumbnail").removeClass("easi-selection");
  $(this).toggleClass("easi-selection");
  schau_ergebnis_doch_sichtbar();
});

function schau_ergebnis_doch_sichtbar() {
  if (result_enabled) {
    rechnen();
  }

}
$(document).on("click", ".lupa", function () {
  var bg = $(this).parent().find(".img-thumbnail").attr('rel');
  $.fancybox.open({ src: bg });
});


function rechnen() {

  cookie.type = "easi"

  $(".questions").find(".easi-selection").map(function () {
    easi[$(this).parent().parent().parent().attr("id")][$(this).parent().parent().attr("id")] = parseInt(this.innerText)
    return
  });

  $(".questions").find(".whiteg").map(function () {
    easi[$(this).parent().parent().attr("id")][$(this).parent().attr("id")] = parseInt($(this).attr("data-value"))
    return
  });
  easi.save()
  rechnen_show()
}
function rechnen_show() {
  $("#resultme").html(easi.result() == "" ? 0 : easi.result());
  $("#mild_result").html(easi.result_text)
  $("#mild_result2").html(easi.result_text2)
  $("#mild_result").addClass(easi.result_color()).removeClass("black");
}

function fill() {

  $("#child-checkbox").prop("checked", easi.child);
  $("#resultme").click();
  $.each(easi, function (i, val) {
    $.each(val, function (ii, vall) {
      if (ii == "percent") {
        $("#" + i + " li").map(function () {
          if (vall != "") {
            if (parseInt($(this).attr("data-value")) == vall) {
              $(this).addClass("whiteg");
            }
          }
        });
      } else {
        $("#" + i + " #" + ii + " li").map(function () {
          if (vall != "" || vall == 0) {
            if (parseInt($(this).find(".img-thumbnail").html()) == vall) {
              $(this).find(".img-thumbnail").addClass("easi-selection");
            }
          }
        });

      }
    });
  });

  
}
window.onload = function () {
  easi.load();
  fill();
}