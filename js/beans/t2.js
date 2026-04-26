t2 = {
  values: Array(15).fill(""),

  // Returns null, true or false
  result: function() {
    const allNull = this.values.every(item => item === "");
    if (allNull){
      return "";
    }

    return this.values.some(item => item === 1);
  },

  result_text: function(){
    let resultv = t2.result();
    let function_result = "";
    if (resultv !== "") {
      function_result = resultv ? i18n[sprache]["t2_diagnostic_yes"] : i18n[sprache]["t2_diagnostic_no"];
    }

    return function_result;
  },

  result_text2: function() {
    return ""
  },

  result_color: function() {
    let resultv = t2.result();
    let result = "gray";
    if (resultv !== "") {
      result = resultv ? "muy-grave" : "leve";
    }
    return result;
  },

  result_option: function(index) {
    let resultv = this.values[index];
    if (resultv!== "") {
      if (resultv === 0) {
        return `${i18n[sprache]["t2_no"]}`
      } else if (resultv ===1) {
        return `${i18n[sprache]["t2_yes"]} | <span style="color: red">${i18n[sprache]["t2_diagnostics"][index].replace("<br>", " ")}</span>`
      }
    }
    return "-"
  },

  save: function() {
    cookie.type = "t2"
    cookie.setValues(this)
  },

  destroy: function() {
        cookie.type = "t2"
        cookie.setValues(null)
        this.init();
  },

  load: function() {
    var tmp = cookie.getValue("t2");
    this.values = tmp["values"]
  },

  init: function() {
    this.values = Array(15).fill("")
  }
}