var nrs = {
    picor: "",
    result: function() {
        return this.picor
    },
    save: function() {
        cookie.type = "nrs"
        cookie.setValues(this)
    },
    destroy: function() {
        cookie.type = "nrs"
        cookie.setValues(null)
        this.init();
    },
    load: function() {
        var tmp = cookie.getValue("nrs");
        this.picor = tmp["picor"]

    },
    init: function() {
        this.picor = ""
    
    }
}