var pct = {
  lesions_1: "",
  scratch_2: "",
  sleeping_3: "",
  quality_of_life_4: "",
  treatment_5: "",

  result: function() {
    var r1 = this.lesions_1 != "" ? this.lesions_1 : 0
    var r2 = this.scratch_2 != "" ? this.scratch_2 : 0
    var r3 = this.sleeping_3 != "" ? this.sleeping_3 : 0
    var r4 = this.quality_of_life_4 != "" ? this.quality_of_life_4 : 0
    var r5 = this.treatment_5 != "" ? this.treatment_5 : 0
    return r1 + r2 + r3 + r4 + r5
  },

  result_text: function() {
    var resultv =pct.result();
    var value = "";
    if (resultv<10) {
      value = i18n[sprache]["pct_uncontrolled"];
    } else {
      value = i18n[sprache]["pct_controlled"];
    }

    return value;
  },

  result_text2: function() {
    var resultv =pct.result();
    var value = "";
    if (resultv<10) {
      value = " <10";
    } else {
      value = " >=10";
    }

    return value;
  },

  result_color: function() {
    var resultv =pct.result();
    var value = "gray";
    if (resultv<10) {
      value = "muy-grave";
    } else {
      value = "leve";
    }
    return value;
  },

  save: function() {
    cookie.type = "pct"
    cookie.setValues(this)
  },
   
  destroy: function() {
        cookie.type = "pct"
        cookie.setValues(null)
        this.init();
    },

  result_option: function(index){
    switch (index) {
      case 0:
       options = i18n[sprache]["pct_options_1"].split(",")
       if (this.lesions_1 !== "") return options[this.lesions_1];
       break;

      case 1:
        options = i18n[sprache]["pct_options_2"].split(",")
        if (this.scratch_2 !== "") return options[this.scratch_2];
        break;

      case 2:
        options = i18n[sprache]["pct_options_3"].split(",")
        if (this.sleeping_3 !== "") return options[this.sleeping_3];
        break;

      case 3:
        options = i18n[sprache]["pct_options_4"].split(",")
        if (this.quality_of_life_4 !== "") return options[this.quality_of_life_4];
        break;

      case 4:
        options = i18n[sprache]["pct_options_5"].split(",")
        if (this.treatment_5 !== "") return options[this.treatment_5];
        break;
    }

    return "-"
  },

  load: function() {
    var tmp = cookie.getValue("pct");
    this.lesions_1 = tmp["lesions_1"]
    this.scratch_2 = tmp["scratch_2"]
    this.sleeping_3 = tmp["sleeping_3"]
    this.quality_of_life_4 = tmp["quality_of_life_4"]
    this.treatment_5 = tmp["treatment_5"]

  },

  init: function() {
    this.lesions_1 = ""
    this.scratch_2 = ""
    this.sleeping_3 = ""
    this.quality_of_life_4 = ""
    this.treatment_5 = ""
  }
}