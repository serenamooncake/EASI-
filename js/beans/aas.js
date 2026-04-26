var aas = {
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

  factors: {
    psychosocial: false,
    eyebrows: false,
    treatment: false,
    rapid: false
  },

  save: function () {
    cookie.type = "aas";
    cookie.setValues(eval(this));
  },

  load: function () {
    var tmp = cookie.getValue("aas");
    if (tmp != null) {
      this.bodyparts = tmp["bodyparts"] != null ? tmp["bodyparts"] : {};
      this.occipital = tmp["occipital"] != null ? tmp["occipital"] : 0;
      this.left_temporal = tmp["left_temporal"] != null ? tmp["left_temporal"] : 0;
      this.right_temporal = tmp["right_temporal"] != null ? tmp["right_temporal"] : 0;
      this.vertex = tmp["vertex"] != null ? tmp["vertex"] : 0;
      this.factors = tmp["factors"] != null ? tmp["factors"] : {
        psychosocial: false,
        eyebrows: false,
        treatment: false,
        rapid: false
      };
    }
  },

  destroy: function () {
    cookie.type = "aas";
    cookie.setValues(null);
    this.init();
  },

  init: function () {
    this.occipital = 0;
    this.left_temporal = 0;
    this.right_temporal = 0;
    this.vertex = 0;
    this.bodyparts = {
      occipital: 0,
      left_temporal: 0,
      right_temporal: 0,
      vertex: 0
    };
    this.factors = {
      psychosocial: false,
      eyebrows: false,
      treatment: false,
      rapid: false
    };
  },

  set: function (part, value) {
    this.bodyparts[part] = value;
    this[part] = value;
  },

  setFactor: function (factor, value) {
    this.factors[factor] = value;
  },

  getFactorCount: function () {
    var count = 0;
    if (this.factors.psychosocial) count++;
    if (this.factors.eyebrows) count++;
    if (this.factors.treatment) count++;
    if (this.factors.rapid) count++;
    return count;
  },

  result: function () {
    var total =
      this.bodyparts.occipital +
      this.bodyparts.left_temporal +
      this.bodyparts.right_temporal +
      this.bodyparts.vertex;

    return Math.round(total * 100) / 100;
  },

  result_text: function () {
    var result = this.result();
    var hasFactors = this.getFactorCount() > 0;

    if (hasFactors) {
      if (result <= 0) {
        return i18n[sprache]["aas_mild"];
      } else if (result <= 20) {
        return i18n[sprache]["aas_moderate"];
      } else if (result <= 50) {
        return i18n[sprache]["aas_severe"];
      } else {
        return i18n[sprache]["aas_very_severe"];
      }
    } else {
      if (result <= 0) {
        return i18n[sprache]["aas_mild"];
      } else if (result <= 20) {
        return i18n[sprache]["aas_mild"];
      } else if (result <= 50) {
        return i18n[sprache]["aas_moderate"];
      } else if (result <= 75) {
        return i18n[sprache]["aas_severe"];
      } else {
        return i18n[sprache]["aas_very_severe"];
      }
    }
  },

  result_text2: function () {
    var result = this.result();
    var factorCount = this.getFactorCount();
    var text = "";

    if (result <= 0) {
      text = " (0)";
    } else if (result <= 20) {
      text = " (1-20)";
    } else if (result <= 50) {
      text = " (21-50)";
    } else if (result <= 75) {
      text = " (51-75)";
    } else {
      text = " (76-100)";
    }

    if (factorCount > 0) {
      text += " +" + factorCount + i18n[sprache]["aas_factors"];
    }

    return text;
  },

  result_color: function () {
    var result = this.result();
    var hasFactors = this.getFactorCount() > 0;

    if (hasFactors) {
      if (result <= 0) {
        return "black";
      } else if (result <= 20) {
        return "moderado";
      } else if (result <= 50) {
        return "grave";
      } else {
        return "muy-grave";
      }
    } else {
      if (result <= 0) {
        return "black";
      } else if (result <= 20) {
        return "leve";
      } else if (result <= 50) {
        return "moderado";
      } else if (result <= 75) {
        return "grave";
      } else {
        return "muy-grave";
      }
    }
  }
};
