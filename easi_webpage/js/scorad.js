cosVal = {}

//Front
cosVal["head_front"] = 4.5
cosVal["trunk_front"] = 18.0
cosVal["center"] = 1.0

cosVal["left_front_arm"] = 4.5
cosVal["left_hand"] = 1.0

cosVal["right_front_arm"] = 4.5
cosVal["right_hand"] = 1.0


cosVal["left_front_leg"] = 9.0
cosVal["right_front_leg"] = 9.0

//Back
cosVal["head_back"] = 4.5
cosVal["trunk_back"] = 18.0

cosVal["left_back_arm"] = 4.5
cosVal["right_back_arm"] = 4.5

cosVal["left_back_leg"] = 9.0
cosVal["right_back_leg"] = 9.0




result_enabled = 0;


cookiejson = {};
cookiejson["bodya"] = [];
    

function ManagePercent(object, op) {
    console.log(object, op);

    original = parseFloat($(".circle").html());
    switch(op) {
        case "add":
        original += cosVal[object];
        cookiejson["bodya"].push(object);
        break;
    case "reduce":
        original -= cosVal[object];
        var index = cookiejson["bodya"].indexOf(object);
        if (index > -1) {
            cookiejson["bodya"].splice(index, 1);
        }        
        break;
    }
    $(".circle").html(Math.min(original,100));
    schau_ergebnis_doch_sichtbar();

}


$(" ul.regla2 li").click(function() {
    $(this).parent().parent().find(".whiteg").removeClass("whiteg");
    $(this).toggleClass("whiteg");
    schau_ergebnis_doch_sichtbar();
});
$("ul.regla li a").click(function() {
    $(this).parent().parent().find(".white").removeClass("white");
    $(this).toggleClass("white");
    schau_ergebnis_doch_sichtbar();

});

$("#resultme").click(function() {
    $("#closeresult").show();
    $("#mild_result").addClass("yellow").removeClass("gray");
    result_enabled = -1;
    $(this).addClass("showingresult");
    if (scorad_blatt) {
        scorad_rechnen();
    } else {
        easi_rechnen();
    }
});



$("#closeresult").click(function() {
    result_enabled = 0;
    $(this).hide();
    // reset values
    if (scorad_blatt) {
        reset_wert();
    }
})

function reset_wert() {
    $("#resultme").removeClass("showingresult");
    $("#resultme").html( i18n[sprache]["ausrechnen"] );
    $("#mild_result").html( i18n[sprache]["mild_result"] );
    $("#mild_result").addClass("gray").removeClass("yellow");
    $("#mild_result2").html(" (0 - 103)");
    nuke();
    $(".circle").html(0);
    $("ul.regla li").find("a").removeClass("white");
    $("body").find(".img-thumbnail").removeClass("white");
}


function schau_ergebnis_doch_sichtbar() {
    if (result_enabled) {
        if (scorad_blatt) {
            scorad_rechnen();
        } else {
            easi_rechnen();
        }
    }

}

function scorad_rechnen() {
    var subjective = 0;
    var intensity = 0;
    surface = $(".circle").html();
    cookie.type = "scorad"
    $(".image-selector").find(".white").map(function() {
        cookiejson[$(this).parent().parent().attr("id")] = this.innerText
        intensity = intensity + parseInt(this.innerText);
        return intensity;
    });
    $(".regla").find(".white").map(function() {
        subjective = subjective + parseInt(this.innerText);
        cookiejson[$(this).parent().parent().attr("id")] = this.innerText
        return subjective;
    });
    $("#resultme").html( subjective + (surface / 5) + parseInt(7 * intensity / 2)  );
    resultv = parseFloat($("#resultme").html());
    
    cookie.setValues(cookiejson)


    if ( resultv < 25.0) {
        $("#mild_result").html( i18n[sprache]["mild"]);
        $("#mild_result2").html( " (< 25)" );
    }else if( resultv >= 25.0 && resultv <= 50.0 ) {
        $("#mild_result").html( i18n[sprache]["gemassigt"] );
        $("#mild_result2").html( " (25 - 50)" );
    } else if( resultv > 50.0 ) {
        $("#mild_result").html( i18n[sprache]["ernst"] );
        $("#mild_result2").html( " (> 50)" );
    } else {
        $("#mild_result").html( i18n[sprache]["mild_result"] );
        $("#mild_result2").html( " (0 - 103)" );

    }
}



