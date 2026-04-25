var easi = {
    cabeza : {},
    brazos : {},
    tronco: {},
    piernas: {},

    child: false,
    
    result: function() {
        var sumaImg = 0;
        var result = 0;
        var isChild = this.child;
        var multiplier;
        
        for (x in this.cabeza) {
            if (x != "percent") {
                sumaImg += this.cabeza[x]
            }
        } 
        multiplier = isChild ? 0.2 : 0.1;
        result = parseFloat((sumaImg * multiplier * (this.cabeza["percent"] == null ? 0 : this.cabeza["percent"]) ))
        
        sumaImg = 0;
        for (x in this.brazos) {
            if (x != "percent") {
                sumaImg += this.brazos[x]
            }
        } 

       
        result += parseFloat((sumaImg * 0.2 * (this.brazos["percent"] == null ? 0 : this.brazos["percent"]) ))
        
        sumaImg = 0;
        for (x in this.tronco) {
            if (x != "percent") {
                sumaImg += this.tronco[x]
            }
        } 
        result += parseFloat((sumaImg * 0.3 * (this.tronco["percent"] == null ? 0 : this.tronco["percent"]) ))

        sumaImg = 0;
        for (x in this.piernas) {
            if (x != "percent") {
                sumaImg += this.piernas[x]
            }
        } 
        multiplier = isChild ? 0.3 : 0.4;
        result += parseFloat((sumaImg * multiplier * (this.piernas["percent"] == null ? 0.0 : this.piernas["percent"]) ))
        
        //result = result.toPrecision(2)
        console.log(result, result.toFixed(2))
        return result.toFixed(2)
    },
    result_text: function() {
        var resultv =easi.result();
        var value = "";

        /*
        if (resultv == 0.0) {
            value =  i18n["es"]["mild"]
        } else if (resultv <= 1.0){
            value =  i18n["es"]["mild"]
        } else if (resultv <= 7.0){
            value = i18n["es"]["mild"]
        } else if (resultv <= 21.0){
            value = i18n["es"]["gemassigt"]
        } else if (resultv <= 50.0){
            value = i18n["es"]["ernst"]
        }else{
            value = i18n["es"]["ernst"]
        }*/

        if (resultv == 0.0) {
            value = i18n[sprache]["mild_result"];
        } else if (resultv <= 7.0){
            value = i18n[sprache]["mild"];
        } else if (resultv > 7.0 && resultv <= 21.0){
            value = i18n[sprache]["gemassigt"];
        } else if (resultv > 21.0){
            value = i18n[sprache]["ernst"];
        }

        return value
    },

    result_color: function(){
        var resultv =easi.result();
        var value = "gray";

        if (resultv == 0.0) {
            value = "black"
        } else if (resultv <= 7.0){
            value = "leve"
        } else if (resultv > 7.0 && resultv <= 21.0){
            value = "moderado"
        } else if (resultv > 21.0){
            value = "grave"
        }
        return value
    },

    result_text2: function() {

        var resultv = easi.result();
        var value = "";
        if (resultv == 0.0) {
            value = " (<= 7)"
        } else if (resultv <= 1.0){
            value = " (<= 7)"
        } else if (resultv <= 7.0){
            value = " (<= 7)"
        } else if (resultv <= 21.0){
            value = " (7.1 - 21.0)"
        } else if (resultv <= 50.0){
            value = " (> 21.0)"
        }else{
            value = " (> 21.0)"
    
        }

        return value
    },
    save: function() {
        cookie.type = "easi"
        cookie.setValues(eval(this))
    },
    destroy: function() {
        cookie.type = "easi"
        cookie.setValues(null)
        this.init()
    },
    load: function() {
        var tmp = cookie.getValue("easi");
        this.cabeza = tmp["cabeza"]
        this.brazos = tmp["brazos"]
        this.tronco = tmp["tronco"]
        this.piernas = tmp["piernas"]

        this.child = tmp["child"]

    },
    init: function() {
        this.cabeza = {}
        this.brazos = {}
        this.tronco = {}
        this.piernas = {}
        this.child = false
    }
}