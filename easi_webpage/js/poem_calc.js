

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
    $("#mild_result2").html(" (0 - 28)");

    $("ul.regla2").find("li").removeClass("whiteg");
    poem.destroy();
}

function schau_ergebnis_doch_sichtbar() {
    if (result_enabled) {
        rechnen();
    }
}

function rechnen() {

    $(".questions").find(".whiteg").map(function() {
        if( $(this).attr("data-value") != "" ) {
            poem[$(this).parent().attr("id")] = parseInt( $(this).attr("data-value") )
        }
        return;
    });

    poem.save()
    rechnen_show()

}

function rechnen_show() {
    $("#resultme").html( poem.result()== "" ? 0 : poem.result() );
    $("#mild_result").html( poem.result_text )
    $("#mild_result2").html( poem.result_text2 )
    $("#mild_result").removeClass().addClass(poem.result_color)
}

function fill() {
    $.each(poem, function(i, val) {
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
    poem.load();
    fill();
}