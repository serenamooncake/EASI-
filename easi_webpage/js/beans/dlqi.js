var dlqi = {
    picor : "",
    incomodo: "",
    compra: "",
    ropa: "",
    social: "",
    deporte: "",
    trabajo: "",
    familiar: "",
    sexo: "",
    tratamiento: "",

    child: false,

    result: function() {

        var r1 = this.picor != "" ? this.picor : 0
        var r2 = this.incomodo != "" ? this.incomodo : 0
        var r3 = this.compra != "" ? this.compra : 0
        var r4 = this.ropa != "" ? this.ropa : 0
        var r5 = this.social != "" ? this.social : 0
        var r6 = this.deporte != "" ? this.deporte : 0
        var r7 = this.trabajo != "" ? this.trabajo : 0
        var r8 = this.familiar != "" ? this.familiar : 0
        var r9 = this.sexo != "" ? this.sexo : 0
        var r10 = this.tratamiento != "" ? this.tratamiento : 0

        return r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + r10
    },
    result_text: function() {
        var resultv =dlqi.result();
        var value = "";

        if (resultv <= 1) {
            value = i18n[sprache]["dlqi_result_0_1"]
        } else if (resultv <= 5){
            value = i18n[sprache]["dlqi_result_2_5"]
        } else if (resultv <= 10){
            value = i18n[sprache]["dlqi_result_6_10"]
        } else if (resultv <= 20.0){
            value = i18n[sprache]["dlqi_result_11_20"]
        } else { 
            value =  i18n[sprache]["dlqi_result_21_30"]
        }
        return value
    },
    result_color: function(){
        var resultv =dlqi.result();
        var value = "gray";

        if (resultv <= 1) {
            value = "black"
        } else if (resultv <= 5.0){
            value = "gray"
        } else if (resultv <= 10.0){
            value = "moderado"
        } else if (resultv <= 20.0){
            value = "grave"
        } else {
            value = "muy-grave"
        }

        return value
    },
    result_text2: function() {
        var resultv = dlqi.result();
        var value = "";
        if (resultv <= 1) {
            value = " (0 - 1)"
        } else if (resultv <= 5){
            value = " (2 - 5)"
        } else if (resultv <= 10){
            value = " (6 - 10)"
        } else if (resultv <= 20.0){
            value = " (11 - 20)"
        } else {
            value = " (21 - 30)"
        }
        return value
    },
    save: function() {
        cookie.type = "dlqi"
        cookie.setValues(this)
    },
    destroy: function() {
        cookie.type = "dlqi"
        cookie.setValues(null)
        this.init()
    },
    load: function() {
        var tmp = cookie.getValue("dlqi");
        this.picor = tmp["picor"]
        this.incomodo = tmp["incomodo"]
        this.compra = tmp["compra"]
        this.ropa = tmp["ropa"]
        this.social = tmp["social"]
        this.deporte = tmp["deporte"]
        this.trabajo = tmp["trabajo"]
        this.familiar = tmp["familiar"]
        this.sexo = tmp["sexo"]
        this.tratamiento = tmp["tratamiento"]
        this.child = tmp["child"]
    },
    init: function() {
        this.picor = ""
        this.incomodo = ""
        this.compra = ""
        this.ropa = ""
        this.social = ""
        this.deporte = ""
        this.trabajo = ""
        this.familiar = ""
        this.sexo = ""
        this.tratamiento = ""
        this.child = false
    }
}