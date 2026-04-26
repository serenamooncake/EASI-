var salt = {
    occipital: 0,
    left_temporal: 0,
    right_temporal: 0,
    vertex: 0,

    bodyparts: {
        occipital: 0,
        left_temporal: 0,
        right_temporal: 0,
        vertex: 0
    },

    save: function () {
        cookie.type = "salt"
        cookie.setValues(eval(this))
    },

    load: function () {
        var tmp = cookie.getValue("salt");
        if (tmp != null) {
            this.bodyparts = tmp["bodyparts"] != null ? tmp["bodyparts"] : {};
            this.occipital = tmp["occipital"] != null ? tmp["occipital"] : 0;
            this.left_temporal = tmp["left_temporal"] != null ? tmp["left_temporal"] : 0;
            this.right_temporal = tmp["right_temporal"] != null ? tmp["right_temporal"] : 0;
            this.vertex = tmp["vertex"] != null ? tmp["vertex"] : 0;
        }
    },

    destroy: function () {
        cookie.type = "salt"
        cookie.setValues(null)
        this.init()
    },

    init: function () {
        this.occipital = 0
        this.left_temporal = 0
        this.right_temporal = 0
        this.vertex = 0
        this.bodyparts = {
            occipital: 0,
            left_temporal: 0,
            right_temporal: 0,
            vertex: 0
        }
    },

    set: function (part, value) {
        this.bodyparts[part] = value
        this[part] = value
    },

    result: function () {
        var total =
            this.bodyparts.occipital +
            this.bodyparts.left_temporal +
            this.bodyparts.right_temporal +
            this.bodyparts.vertex;

        return Math.round(total * 100) / 100
    },

    result_text: function () {
        var resultv = salt.result();
        var value = "";

        if (resultv <= 0) {
            value = "无脱发"
        } else if (resultv <= 20) {
            value = "轻度"
        } else if (resultv <= 50) {
            value = "中度"
        } else if (resultv <= 75) {
            value = "重度"
        } else {
            value = "极重度"
        }

        return value
    },

    result_color: function () {
        var resultv = salt.result();
        var value = "gray";

        if (resultv <= 0) {
            value = "black"
        } else if (resultv <= 20) {
            value = "leve"
        } else if (resultv <= 50) {
            value = "moderado"
        } else if (resultv <= 75) {
            value = "grave"
        } else {
            value = "muy-grave"
        }
        return value
    },

    result_text2: function () {
        var resultv = salt.result();
        var value = "";
        if (resultv <= 0) {
            value = " (0)"
        } else if (resultv <= 20) {
            value = " (1-20)"
        } else if (resultv <= 50) {
            value = " (21-50)"
        } else if (resultv <= 75) {
            value = " (51-75)"
        } else {
            value = " (76-100)"
        }

        return value
    }
}
