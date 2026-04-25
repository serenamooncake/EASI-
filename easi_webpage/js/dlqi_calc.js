result_enabled = 0;
    
$(" ul.regla2 li").click(function() {
    $(this).parent().parent().find(".whiteg").removeClass("whiteg");
    $(this).toggleClass("whiteg");
    schau_ergebnis_doch_sichtbar();
});

$("#resultme").click(function() {
    $("#closeresult").show();
    $("#mild_result").removeClass();
    $("#mild_result").addClass(dlqi.result_color());
    result_enabled = -1;
    $(this).addClass("showingresult");
    rechnen();
});

$("#closeresult").click(function() {
    result_enabled = 0;
    $(this).hide();
    // reset values
    reset_wert2();
})

$("#child-checkbox").click(function () {
  let val = $("#child-checkbox").is(":checked");
  dlqi["child"] = val;
  dlqi.save();
  if (result_enabled) {
    rechnen();
  }
  console.log('check: ' + dlqi["child"]);
  fillQuestions(val);
});

function reset_wert2() {
    $("#resultme").removeClass("showingresult");
    $("#resultme").html( i18n[sprache]["ausrechnen"] );
    $("#mild_result").html( i18n[sprache]["mild_result"] );

    $("#mild_result").removeClass();
    $("#mild_result").addClass("black");

    $("#mild_result2").html(" (0 - 30)");

    $("ul.regla2").find("li").removeClass("whiteg");

    $("#child-checkbox").prop("checked", false);
    dlqi.destroy();
}

function fillQuestions(isChild) {
  let sufix = isChild ? "_child" : ""

  $(".title_page").html(i18n[sprache][`dlqi_page_title${sufix}`]);
  
  $("#title_dlqi_picor").html(i18n[sprache][`title_dlqi_picor${sufix}`]);
  $("#title_dlqi_incomodo").html(i18n[sprache][`title_dlqi_incomodo${sufix}`]);
  $("#title_dlqi_compra").html(i18n[sprache][`title_dlqi_compra${sufix}`]);
  $("#title_dlqi_ropa").html(i18n[sprache][`title_dlqi_ropa${sufix}`]);
  $("#title_dlqi_social").html(i18n[sprache][`title_dlqi_social${sufix}`]);
  $("#title_dlqi_deporte").html(i18n[sprache][`title_dlqi_deporte${sufix}`]);
  $("#title_dlqi_trabajo").html(i18n[sprache][`title_dlqi_trabajo${sufix}`]);
  $("#title_dlqi_familiar").html(i18n[sprache][`title_dlqi_familiar${sufix}`]);
  $("#title_dlqi_sexo").html(i18n[sprache][`title_dlqi_sexo${sufix}`]);
  $("#title_dlqi_tratamiento").html(i18n[sprache][`title_dlqi_tratamiento${sufix}`]);
}

function schau_ergebnis_doch_sichtbar() {
    if (result_enabled) {
        rechnen();
    }
}

function rechnen() {

    $(".questions").find(".whiteg").map(function() {
        if( $(this).attr("data-value") != "" ) {
            dlqi[$(this).parent().attr("id")] = parseInt( $(this).attr("data-value") )
        }
        return;
    });

    dlqi.save()
    rechnen_show()
}

function rechnen_show() {
    $("#resultme").html( dlqi.result()== "" ? 0 : dlqi.result()  );
    $("#mild_result").html( dlqi.result_text )
    $("#mild_result2").html( dlqi.result_text2 )
    $("#mild_result").removeClass();
    $("#mild_result").addClass(dlqi.result_color());
}

function fill() {
    $("#child-checkbox").prop("checked", dlqi.child);
    fillQuestions(dlqi.child);
    $.each(dlqi, function(i, val) {
        $("#"+i+" li").map(function() {
            if ( typeof val === "number") {
                if( parseInt($(this).attr("data-value")) == val ) {
                    $(this).addClass("whiteg");
                }
            }
        });
    });
    $("#resultme").click();
}
window.onload = function() {
    dlqi.load();
    fill();
}