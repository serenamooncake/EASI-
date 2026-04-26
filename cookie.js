var cookie = {
    type: "",
    values: "",
    getValues: function() {
        return document.cookie;
    },
    setValues: function(objvalue) {
        //document.cookie = this.type+"="+JSON.stringify(objvalue);
        sessionStorage.setItem(this.type,JSON.stringify(objvalue))
    },
    getValue(calculator) {
        var data = sessionStorage.getItem(calculator);
        return JSON.parse(data);
        /*
        var acokies = cookie.getValues().split(";");
        for ( var i=0; i<acokies.length;i++) {
            var cc = acokies[i].split("=")[0].trim()
            if (cc == calculator) {
                return JSON.parse(acokies[i].split("=")[1]);
            }
    
        }*/
    }

}