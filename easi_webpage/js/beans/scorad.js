var scorad = {
    bodya: [],
    bodyparts: {},

    child: false,

    bodyvalue: function () {
        var total = 0
        for (var part in scorad.bodyparts){
            total += scorad.bodyparts[part]
        }
        return Math.min(total,100).toLocaleString(navigator.language,{
            minimumIntegerDigits: 1,
            maximumFractionDigits: 1,
            useGrouping: true
        })
    },
    eritema: "",
    edema: "",
    excoriacion: "",
    costras: "",
    liquenificacion: "",
    xerosis: "",
    prurito: "",
    sueno: "",

    result: function () {
        var sumaImg = 0;
        var result = 0;
        var r1 = this.prurito != "" ? parseFloat(this.prurito) : 0
        var r2 = this.sueno != "" ? parseFloat(this.sueno) : 0
        var r3 = parseFloat(this.bodyvalue()) // != "" ? parseFloat(this.bodyvalue) : 0
        var r4 = this.eritema != "" ? parseFloat(this.eritema) : 0
        var r5 = this.edema != "" ? parseFloat(this.edema) : 0
        var r6 = this.excoriacion != "" ? parseFloat(this.excoriacion) : 0
        var r7 = this.costras != "" ? parseFloat(this.costras) : 0
        var r8 = this.liquenificacion != "" ? parseFloat(this.liquenificacion) : 0
        var r9 = this.xerosis != "" ? parseFloat(this.xerosis) : 0
        result = parseFloat((r1 + r2) + (r3 / 5) + parseInt(7 * (r4 + r5 + r6 + r7 + r8 + r9) / 2));
        return result.toFixed(2)
    },
    result_text: function () {
        var resultv = scorad.result();
        var value = i18n[sprache]["mild_result"];

        if (resultv > 0 && resultv < 25.0){
            value = i18n[sprache]["mild"];
        } else if (resultv >= 25.0 && resultv <= 50.0){
            value = i18n[sprache]["gemassigt"];
        } else if (resultv > 50.0){
            value = i18n[sprache]["ernst"];
        }

        /*
        if (resultv < 25.0) {
            value = i18n[sprache]["mild"];
        } else if (resultv >= 25.0 && resultv <= 50.0) {
            value = i18n[sprache]["gemassigt"]
        } else if (resultv > 50.0) {
            values = i18n[sprache]["ernst"];
        } else {
            values = i18n[sprache]["mild_result"]
        }*/

        return value
    },


    result_color: function () {
        var resultv = scorad.result();
        var value = "gray";

        if (resultv == 0.0) {
            value = "black"
        } else if (resultv < 25.0) {
            value = "leve"
        } else if (resultv >= 25.0 && resultv <= 50.0) {
            value = "moderado"
        } else if (resultv > 50.0) {
            value = "grave"
        }
        return value
    },

    result_text2: function () {

        var resultv = scorad.result();
        var value = "";
        if (resultv < 25.0) {
            value = " (< 25)"
        } else if (resultv >= 25.0 && resultv <= 50.0) {
            value = " (25 - 50)"
        } else if (resultv > 50.0) {
            value = " (> 50)"
        } else {
            value = " (0 - 103)"
        }
        return value
    },
    save: function () {
        cookie.type = "scorad"
        cookie.setValues(eval(this))
    },
    destroy: function () {
        cookie.type = "scorad"
        cookie.setValues(null)
        this.init()
    },
    load: function () {
        var tmp = cookie.getValue("scorad");
        //if (tmp == null) {
        //    this.init();
        //} else {
        this.bodya = tmp["bodya"] != null ? tmp["bodya"] : []
        this.bodyparts = tmp["bodyparts"] != null ? tmp["bodyparts"] : {}
        //this.bodyvalue = tmp["bodyvalue"] != null ? tmp["bodyvalue"] : ""
        this.eritema = tmp["eritema"] != null ? tmp["eritema"] : ""
        this.edema = tmp["edema"] != null ? tmp["edema"] : ""
        this.excoriacion = tmp["excoriacion"] != null ? tmp["excoriacion"] : ""
        this.costras = tmp["costras"] != null ? tmp["costras"] : ""
        this.liquenificacion = tmp["liquenificacion"] != null ? tmp["liquenificacion"] : ""
        this.xerosis = tmp["xerosis"] != null ? tmp["xerosis"] : ""
        this.prurito = tmp["prurito"] != null ? tmp["prurito"] : ""
        this.sueno = tmp["sueno"] != null ? tmp["sueno"] : ""
        //} 
        this.child = tmp["child"] != null ? tmp["child"] : false
    },
    init: function () {
        this.bodya = []
        this.bodyparts = {}
        //this.bodyvalue = ""
        this.eritema = ""
        this.edema = ""
        this.excoriacion = ""
        this.costras = ""
        this.liquenificacion = ""
        this.xerosis = ""
        this.prurito = ""
        this.sueno = ""
        this.child = false
    }
}