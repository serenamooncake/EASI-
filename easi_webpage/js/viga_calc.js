result_enabled = 0;
current_value = undefined;
cookiejson = {};

$("#viga-selector .row").click(function () {

    const circle = $(this).find(".viga-circle")
    const text = $(this).find(".viga-text")
    const info = $(this).find(".viga-info")

    const val = circle.html()
    current_value = val

    selectItem($(this))

    showResult()

})




$("#resultme").click(function () {

    //$("#closeresult").show();
    result_enabled = -1;
    //$(this).addClass("showingresult");
    //rechnen();
    showResult();
});

$("#closeresult").click(function () {
    result_enabled = 0;
    $(this).hide();
    // reset values
    reset_wert();
})


function removeSelection() {

    $("#viga-selector").find(".viga-circle-selected").removeClass("viga-circle-selected")
    $("#viga-selector").find(".viga-text-selected").removeClass("viga-text-selected")
    $("#viga-selector").find(".viga-info-selected").removeClass("viga-info-selected")

}

function selectItem(item) {

    removeSelection()

    item.find(".viga-circle").addClass("viga-circle-selected")
    item.find(".viga-text").addClass("viga-text-selected")
    item.find(".viga-info").addClass("viga-info-selected")

}


function showResult() {

    if (result_enabled && current_value) {

        $("#closeresult").show();
        $("#resultme").addClass("showingresult");

        viga.value = current_value;
        viga.save();

        $("#resultme").html(viga.result() == "" ? 0 : viga.result());
        $("#mild_result").html( viga.result_text )
        $("#mild_result").removeClass().addClass(viga.result_color)
    }


}


function reset_wert() {
    $("#resultme").removeClass("showingresult");
    $("#resultme").html(i18n[sprache]["ausrechnen"]);
    $("#mild_result").html( i18n[sprache]["mild_result"] );
    $("#mild_result").removeClass().addClass("black")

    removeSelection();

    current_value = undefined;
    viga.destroy();
}


function fill() {

    const items = $("#viga-selector").find(".viga-item")
    items.each(function () {

        const circle = $(this).find(".viga-circle")
        if (circle.html() == viga.value) {
            
            selectItem($(this));

            current_value = viga.value;
            result_enabled = -1;
            showResult();

        }

    });

}

window.onload = function () {

    viga.load();
    fill();

}