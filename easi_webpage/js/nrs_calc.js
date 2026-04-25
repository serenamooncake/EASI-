


result_enabled = 0;
cookiejson = {};

$("ul.regla li").click(function() {
    $(this).parent().parent().find(".white").removeClass("white");
    $(this).toggleClass("white");
    schau_ergebnis_doch_sichtbar();

});

$("#resultme").click(function() {
    $("#closeresult").show();
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

    $("ul.regla").find("li").removeClass("white");
    nrs.destroy();
}

function schau_ergebnis_doch_sichtbar() {
    if (result_enabled) {
        rechnen();
    }

}

function rechnen() {

    $(".questions").find(".white").map(function() {
        if( $(this).attr("data-value") != "" ) {
            nrs[$(this).parent().attr("id")] = parseInt( $(this).attr("data-value") )
        }
        return;
    });
    nrs.save();
    rechnen_show();

}
function rechnen_show() {
    $("#resultme").html( nrs.result()== "" ? 0 : nrs.result() );
}

function fill() {
    $.each(nrs, function(i, val) {
        $("#"+i+" li").map(function() {
            if( val != "" ) {
                if( parseInt($(this).attr("data-value")) == val) {
                    $(this).addClass("white");
                }
            }
        });
    });
    $("#resultme").click();
}
window.onload = function() {
    nrs.load();
    fill();
}