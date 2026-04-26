

result_enabled = 0;


cookiejson = {};
    

$(" ul.regla2 li").click(function() {
    $(this).parent().parent().find(".whiteg").removeClass("whiteg");
    $(this).toggleClass("whiteg");
    schau_ergebnis_doch_sichtbar();
});

$("#resultme").click(function() {
    $("#closeresult").show();
    //$("#mild_result").addClass("yellow").removeClass("gray");
    result_enabled = -1;
    $(this).addClass("showingresult");
    rechnen();
});

$("#closeresult").click(function() {
    result_enabled = 0;
    $(this).hide();
    // reset values
    reset_wert();
})

function reset_wert() {
    $("#resultme").removeClass("showingresult");
    $("#resultme").html( i18n[sprache]["ausrechnen"] );
    $("#mild_result").html( i18n[sprache]["mild_result"] );
    //$("#mild_result").addClass("gray").removeClass("yellow");
    $("#mild_result").removeClass().addClass("black")
    $("#mild_result2").html(" (0 - 20)");

    $("ul.regla2").find("li").removeClass("whiteg");
    pct.destroy();
}

function schau_ergebnis_doch_sichtbar() {
    if (result_enabled) {
        rechnen();
    }
}

function rechnen() {

    $(".questions").find(".whiteg").map(function() {
        if( $(this).attr("data-value") != "" ) {
            pct[$(this).parent().attr("id")] = parseInt( $(this).attr("data-value") )
        }
        return;
    });

    pct.save()
    rechnen_show()

}

function rechnen_show() {
    $("#resultme").html( pct.result()== "" ? 0 : pct.result() );
    $("#mild_result").html( pct.result_text() )
    $("#mild_result2").html( pct.result_text2() )
    $("#mild_result").removeClass().addClass(pct.result_color())
}

function fill() {
    $.each(pct, function(i, val) {
        $("#"+i+" li").map(function() {
            if ( typeof val === "number") {
                if( parseInt($(this).attr("data-value")) == val) {
                    $(this).addClass("whiteg");
                }
            }
        });
    });
    $("#resultme").click();
}
window.onload = function() {
    pct.load();
    fill();
}