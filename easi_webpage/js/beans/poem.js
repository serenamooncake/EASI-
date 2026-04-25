var poem = {
    picor : "",
    sangrado: "",
    exudacion: "",
    grietas: "",
    descamacion: "",
    sequedad: "",
    sueno: "",
    result: function() {
        var r1 = this.picor != "" ? this.picor : 0
        var r2 = this.sangrado != "" ? this.sangrado : 0
        var r3 = this.exudacion != "" ? this.exudacion : 0
        var r4 = this.grietas != "" ? this.grietas : 0
        var r5 = this.descamacion != "" ? this.descamacion : 0
        var r6 = this.sequedad != "" ? this.sequedad : 0
        var r7 = this.sueno != "" ? this.sueno : 0

        return r1 + r2 + r3 + r4 + r5 + r6 + r7
    },
    result_text: function() {
        var resultv =poem.result();
        var value = "";
        if (resultv <= 2) {
            value = i18n["es"]["nichts"]
        } else if (resultv <= 7){
            value = i18n["es"]["mild"]
        } else if (resultv <= 16){
            value = i18n["es"]["gemassigt"]
        } else if (resultv <= 24){
            value = i18n["es"]["ernst"]
        } else { 
            value =  i18n["es"]["sehrernst"]
        }
        return value
    },
    result_text2: function() {
        var resultv = poem.result();
        var value = "";
        if (resultv <= 2) {
            value = " (0 - 2)"
        } else if (resultv <= 7){
            value = " (3 - 7)"
        } else if (resultv <= 16){
            value = " (8 - 16)"
        } else if (resultv <= 24){
            value = " (17 - 24)"
        } else {
            value = " (25 - 28)"
        }
        return value
    },
    result_color: function(){
        var resultv =poem.result();
        var value = "gray";

        if (resultv <= 2) {
            value = "black"
        } else if (resultv <= 7){
            value = "leve"
        } else if (resultv <= 16){
            value = "moderado"
        } else if (resultv <= 24){
            value = "grave"
        } else {
            value = "muy-grave"
        }

        return value
    },
    save: function() {
        cookie.type = "poem"
        cookie.setValues(this)
    },
    destroy: function() {
        cookie.type = "poem"
        cookie.setValues(null)
        this.init();
    },
    load: function() {
        var tmp = cookie.getValue("poem");
        this.picor = tmp["picor"]
        this.sangrado = tmp["sangrado"]
        this.exudacion = tmp["exudacion"]
        this.grietas = tmp["grietas"]
        this.descamacion = tmp["descamacion"]
        this.sequedad = tmp["sequedad"]
        this.sueno = tmp["sueno"]

    },
    init: function() {
        this.picor = ""
        this.sangrado = ""
        this.exudacion = ""
        this.grietas = ""
        this.descamacion = ""
        this.sequedad = ""
        this.sueno = ""
    
    }
}