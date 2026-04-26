var viga = {
    value: "",
    result: function () {
        return this.value
    },
    result_text: function () {
        var resultv = viga.result();
        var value = "";

        switch (resultv) {

            case "0":
                value = i18n[sprache]["viga_clara"]
                break;
            case "1":
                value = i18n[sprache]["viga_casi"]
                break;
            case "2":
                value = i18n[sprache]["viga_leve"]
                break;
            case "3":
                value = i18n[sprache]["viga_moderada"]
                break;
            case "4":
                value = i18n[sprache]["viga_grave"]
                break;

            default:
                value = "";

        }

        return value
    },

    result_color: function () {
        var resultv = viga.result();
        var value = "gray";

        const results = ["gray", "gray", "leve", "moderado", "grave"]
        const index = parseInt(resultv)
        return results[index]
    },

    result_info: function () {

        var resultv = viga.result();

        const index = parseInt(resultv)

        const results = [i18n[sprache]["viga_clara_info"], i18n[sprache]["viga_casi_info"],i18n[sprache]["viga_leve_info"],i18n[sprache]["viga_moderada_info"],i18n[sprache]["viga_grave_info"]]
        return results[index]
    },

    save: function () {
        cookie.type = "viga"
        cookie.setValues(this)
    },
    destroy: function () {
        cookie.type = "viga"
        cookie.setValues(null)
        this.init();
    },
    load: function () {
        var tmp = cookie.getValue("viga");
        this.value = tmp["value"]

    },
    init: function () {
        this.value = ""
    }
}