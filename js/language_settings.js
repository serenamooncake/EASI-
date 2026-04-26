
$("#main_title").html(i18n[sprache]["main_title"])

$('*[id=mild_result]:visible').each(function () {
    $(this).html(i18n[sprache]["mild_result"])
});

$('*[id=area]:visible').each(function () {
    $(this).html(i18n[sprache]["area"])
});


$("#resultme").html(i18n[sprache]["ausrechnen"]);
$("#beschreibung").html(i18n[sprache]["beschreibung"]);
$("#oberflache").html(i18n[sprache]["oberflache"]);
$("#intensitat").html(i18n[sprache]["intensitat"]);
$("#symptome").html(i18n[sprache]["symptome"]);
$("#schlaf").html(i18n[sprache]["schlaf"]);
$("#pruritus").html(i18n[sprache]["pruritus"]);

//$("#erythema").each.html(i18n[sprache]["erythema"])
//$("#edema").html(i18n[sprache]["edema"])
//$("#excoriation").html(i18n[sprache]["excoriation"])
//$("#lichenification").html(i18n[sprache]["lichenification"])

$('*[id=erythema_title]:visible').each(function () {
    $(this).html(i18n[sprache]["erythema"])
});
$('*[id=edema_title]:visible').each(function () {
    $(this).html(i18n[sprache]["edema"])
});
$('*[id=lichenification_title]:visible').each(function () {
    $(this).html(i18n[sprache]["lichenification"])
});
$('*[id=excoriation_title]:visible').each(function () {
    $(this).html(i18n[sprache]["excoriation"])
});
$('*[id=costras_title]:visible').each(function () {
    $(this).html(i18n[sprache]["costras"])
});
$('*[id=xerosis_title]:visible').each(function () {
    $(this).html(i18n[sprache]["xerosis"])
});


$("#beschreibung_easi").html(i18n[sprache]["beschreibung_easi"]);
$("#kopf").html(i18n[sprache]["kopf"]);
$("#obere").html(i18n[sprache]["obere"]);
$("#tronk").html(i18n[sprache]["tronk"]);
$("#beine").html(i18n[sprache]["beine"]);


$("#beschreibung_dlqi").html(i18n[sprache]["beschreibung_dlqi"]);
$("#title_dlqi_picor").html(i18n[sprache]["title_dlqi_picor"]);
$("#title_dlqi_incomodo").html(i18n[sprache]["title_dlqi_incomodo"]);
$("#title_dlqi_compra").html(i18n[sprache]["title_dlqi_compra"]);
$("#title_dlqi_ropa").html(i18n[sprache]["title_dlqi_ropa"]);
$("#title_dlqi_social").html(i18n[sprache]["title_dlqi_social"]);
$("#title_dlqi_deporte").html(i18n[sprache]["title_dlqi_deporte"]);
$("#title_dlqi_trabajo").html(i18n[sprache]["title_dlqi_trabajo"]);
$("#title_dlqi_familiar").html(i18n[sprache]["title_dlqi_familiar"]);
$("#title_dlqi_sexo").html(i18n[sprache]["title_dlqi_sexo"]);
$("#title_dlqi_tratamiento").html(i18n[sprache]["title_dlqi_tratamiento"]);


//SCORAD
$("#scorad_children_label").html(i18n[sprache]["scorad_children"]);


//NRS
if (i18n[sprache]["nrs_title"]){
    $("#title_nrs").html(i18n[sprache]["nrs_title"]);
    $("#title_nrs_2").html(i18n[sprache]["nrs_title"]);
}
$("#beschreibung_nrs").html(i18n[sprache]["beschreibung_nrs"]);
$("#nrs_picor_title").html(i18n[sprache]["nrs_picor_title"]);



$("#beschreibung_poem").html(i18n[sprache]["beschreibung_poem"]);
$("#poem_picor_title").html(i18n[sprache]["poem_picor_title"]);
$("#poem_sangrado_title").html(i18n[sprache]["poem_sangrado_title"]);
$("#poem_exudacion_title").html(i18n[sprache]["poem_exudacion_title"]);
$("#poem_grietas_title").html(i18n[sprache]["poem_grietas_title"]);
$("#poem_descamacion_title").html(i18n[sprache]["poem_descamacion_title"]);
$("#poem_sequedad_title").html(i18n[sprache]["poem_sequedad_title"]);
$("#poem_sueno_title").html(i18n[sprache]["poem_sueno_title"]);
//$("#poem_option").css("display",i18n[sprache]["has_poem"] ? "block" : "none");


//PDF
$("#pdf_logo").css("display",i18n[sprache]["show_pdf_logo"] ? "block" : "none");
$("#pdf_title").html(i18n[sprache]["pdf_title"]);
$("#pdf_generated_date").html(i18n[sprache]["pdf_generated_date"]);
$("#pdf_surface_affected").html(i18n[sprache]["pdf_surface_affected"]);
$("#pdf_dlqi_info").html(i18n[sprache]["pdf_dlqi_info"]);


//HOME
$("#derma_section").html(i18n[sprache]["derma_section"]);
$("#prurigo_section").html(i18n[sprache]["prurigo_section"]);

//Answers
$('li a').each(function (i) {

    //Percent Easi

    if (this.textContent == '< 10%'){
        //this.textContent = i18n[sprache]["<10"]
        this.innerHTML = i18n[sprache]["<10"]
    }

    if (this.textContent == 'de 10% a 30%') {
        this.textContent = i18n[sprache]["10-30"]
    }

    if (this.textContent == 'de 30% a 50%') {
        this.textContent = i18n[sprache]["30-50"]
    }

    if (this.textContent == 'de 50% a 70%') {
        this.textContent = i18n[sprache]["50-70"]
    }

    if (this.textContent == 'de 70% a 90%') {
        this.textContent = i18n[sprache]["70-90"]
    }

    if (this.textContent == '> 90%') {
        this.textContent = i18n[sprache][">90"]
    }

    //DLQI Selectors New

    if (this.textContent == 'Nada') {
        this.textContent = i18n[sprache]["nada"]
    }

    if (this.textContent == 'Un poco') {
        this.textContent = i18n[sprache]["poco"]
    }

    if (this.textContent == 'Bastante_dlqi') {
        this.textContent = i18n[sprache]["bastante"]
    }

    if (this.textContent == 'Mucho_dlqi') {
        this.textContent = i18n[sprache]["mucho"]
    }

    //POEM Selectors
    if (this.textContent == 'Ningún día') {
        this.textContent = i18n[sprache]["ningun_dia"]
    }

    if (this.textContent == '1-2 días') {
        this.textContent = i18n[sprache]["1-2_dia"]
    }

    if (this.textContent == '3-4 días') {
        this.textContent = i18n[sprache]["3-4_dia"]
    }

    if (this.textContent == '5-6 días') {
        this.textContent = i18n[sprache]["5-6_dia"]
    }

    if (this.textContent == 'Todos los días') {
        this.textContent = i18n[sprache]["todos_dia"]
    }

    //vIGA-AD Selectors
    if (this.textContent == 'Claro') {
        this.textContent = i18n[sprache]["viga_clara"]
    }

    if (this.textContent == 'Casi claro') {
        this.textContent = i18n[sprache]["viga_casi"]
    }

    if (this.textContent == 'Leve') {
        this.textContent = i18n[sprache]["viga_leve"]
    }

    if (this.textContent == 'Moderado') {
        this.textContent = i18n[sprache]["viga_moderada"]
    }

    if (this.textContent == 'Grave') {
        this.textContent = i18n[sprache]["viga_grave"]
    }

    if (this.textContent == 'Muy grave') {
        this.textContent = i18n[sprache]["viga_muy_grave"]
    }

});


//Index Order
if (sprache == "fr_BE" || sprache == "nl_BE"){

    $('#easi_option').css("order",0)
    $('#nrs_option').css("order",1)
    $('#scorad_option').css("order",2)
    $('#dlqi_option').css("order",3)

}

if (sprache == "nl_NL") {

    $('#easi_option').css("order",0)
    $('#scorad_option').css("order",1)
    $('#nrs_option').css("order",2)
    $('#dlqi_option').css("order",3)
    $('#viga_option').css("order",4)
    $('#adct_option').css("order",5)

}

if (sprache == "fr_FR"){
    $('#easi_option').css("order",0)
    $('#adct_option').css("order",1)
    $('#scorad_option').css("order",2)
    $('#nrs_option').css("order",3)
    $('#dlqi_option').css("order",4)
}

if (sprache == "en_MY" || sprache == "en_TH" || sprache == "en_SG") {
  $('#scorad_option').css("order",0)
  $('#easi_option').css("order",1)
  $('#viga_option').css("order",2)
  $('#dlqi_option').css("order",3)
  $('#nrs_option').css("order",4)
  $('#poem_option').css("order",5)
  $('#adct_option').css("order",6)
}