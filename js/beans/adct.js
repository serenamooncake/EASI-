var adct = {
    //value: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    result: function(){

        var r1 = this.q1 != "" ? this.q1 : 0
        var r2 = this.q2 != "" ? this.q2 : 0
        var r3 = this.q3 != "" ? this.q3 : 0
        var r4 = this.q4 != "" ? this.q4 : 0
        var r5 = this.q5 != "" ? this.q5 : 0
        var r6 = this.q6 != "" ? this.q6 : 0

        return r1 + r2 + r3 + r4 + r5 + r6
    },
    result_text: function(){

        return adct.adct_controlled() ? i18n[sprache]["adct_well_controlled"] : i18n[sprache]["adct_not_well_controlled"]

    },
    result_text2: function(){
        var result = adct.result();
        value = "";
        if (result<= 6) {
            value =  " (0 - 6)";
        } else if (result >= 7) {
            value = " (7 - 24)";
        } else {
            value = " (0 - 24)";
        }
        return value;
    },
    result_color: function(){
        return adct.adct_controlled() ? "leve" : "muy-grave"
    },
    adct_controlled: function(){

        var resultv = adct.result();
        
        if (resultv > 6 ) {
            return false;
        }

        /*
        if (adct.q1 >= 2) {
            return false
        }

        if (adct.q2 >= 2) {
            return false
        }

        if (adct.q3 >= 2) {
            return false
        }

        if (adct.q4 >= 1) {
            return false
        }

        if (adct.q5 >= 2) {
            return false
        }

        if (adct.q6 >= 2) {
            return false
        }*/

        return true

    },
    result_info: function(){


    },
    save: function(){
        cookie.type = "adct"
        cookie.setValues(this)
    },
    destroy: function(){
        cookie.type ="adct"
        cookie.setValues(null)
        this.init();
    },
    load: function(){
        var tmp = cookie.getValue("adct")
        this.q1 = tmp["q1"]
        this.q2 = tmp["q2"]
        this.q3 = tmp["q3"]
        this.q4 = tmp["q4"]
        this.q5 = tmp["q5"]
        this.q6 = tmp["q6"]
    },
    init: function(){
        this.q1 = ""
        this.q2 = ""
        this.q3 = ""
        this.q4 = ""
        this.q5 = ""
        this.q6 = ""
    }


}