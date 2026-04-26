
//Adult
var adultVal = {}
//Front
adultVal["head_front"] = 4.5
adultVal["trunk_front"] = 18.0
adultVal["center"] = 1.0

adultVal["left_front_arm"] = 4.5
adultVal["left_hand"] = 1.0

adultVal["right_front_arm"] = 4.5
adultVal["right_hand"] = 1.0

adultVal["left_front_leg"] = 9.0
adultVal["right_front_leg"] = 9.0

//Back 
adultVal["head_back"] = 4.5
adultVal["trunk_back"] = 18.0

adultVal["left_back_arm"] = 4.5
adultVal["right_back_arm"] = 4.5

adultVal["left_back_leg"] = 9.0
adultVal["right_back_leg"] = 9.0

//Children
var childVal = {}
childVal["head_front"] = 8.5
childVal["trunk_front"] = 18.0
childVal["center"] = 1.0

childVal["left_front_arm"] = 4.5
childVal["left_hand"] = 1.0

childVal["right_front_arm"] = 4.5
childVal["right_hand"] = 1.0


childVal["left_front_leg"] = 6.0
childVal["right_front_leg"] = 6.0

//Back
childVal["head_back"] = 8.5
childVal["trunk_back"] = 18.0

childVal["left_back_arm"] = 4.5
childVal["right_back_arm"] = 4.5

childVal["left_back_leg"] = 6.0
childVal["right_back_leg"] = 6.0


var cosMaxVal = {}
//Front
cosMaxVal["head_front"] = 4.5
cosMaxVal["trunk_front"] = 18.0
cosMaxVal["center"] = 1.0

cosMaxVal["left_front_arm"] = 4.5
cosMaxVal["left_hand"] = 1.0

cosMaxVal["right_front_arm"] = 4.5
cosMaxVal["right_hand"] = 1.0

cosMaxVal["left_front_leg"] = 9.0
cosMaxVal["right_front_leg"] = 9.0

//Back 
cosMaxVal["head_back"] = 4.5
cosMaxVal["trunk_back"] = 18.0

cosMaxVal["left_back_arm"] = 4.5
cosMaxVal["right_back_arm"] = 4.5

cosMaxVal["left_back_leg"] = 9.0
cosMaxVal["right_back_leg"] = 9.0

var cosVal = {}
//Front
cosVal["head_front"] = 4.5
cosVal["trunk_front"] = 18.0
cosVal["center"] = 1.0

cosVal["left_front_arm"] = 4.5
cosVal["left_hand"] = 1.0

cosVal["right_front_arm"] = 4.5
cosVal["right_hand"] = 1.0


cosVal["left_front_leg"] = 9.0
cosVal["right_front_leg"] = 9.0

//Back
cosVal["head_back"] = 4.5
cosVal["trunk_back"] = 18.0

cosVal["left_back_arm"] = 4.5
cosVal["right_back_arm"] = 4.5

cosVal["left_back_leg"] = 9.0
cosVal["right_back_leg"] = 9.0


result_enabled = 0;


var maxValue = 100,
  $slider = $('<div class="selector">').slider({
    range: "max",
    max: maxValue,
    min: 0,
    value: 0,
    orientation: "horizontal",
  });

var ph = $('#pop-holder');
ph.popover({
  trigger: 'manual',
  title: 'Superficie',
  content: $slider,
  animation: true,
  html: true
});


$('body').on('mouseup', function (e) {

  /*
  var target = e.target.nodeName
  if (target != "path") {
      $slider.detach();
      ph.popover('hide')
      console.log(target)
      console.log("Popover Hiden")
  }*/


  if ($(e.target).data('toggle') !== 'popover'
    && $(e.target).parents('.popover.in').length === 0) {
    $slider.detach();
    ph.popover('hide');

  }

});


function cosToSlider(cos_val, cosMaxVal) {
  return (cos_val * 100) / cosMaxVal;
}

function SliderToCos(slider_val, cosMaxVal) {
  return (slider_val * cosMaxVal) / 100;
}

function setNodeSelected(node, selected) {
  //node.setAttribute('fill', selected ? '#423f3c' : '#9C948C');

  //node.setAttribute('fill-opacity', selected ? '1.0' : '0.3')
  node.setAttribute('fill', selected ? i18n[sprache]["selection_color"] : '#E1DFDC');

}

function setCircle(value) {

  $(".circle").html(value);
  const surface = parseFloat($(".circle").html());
  $(".circle").css("background-color", surface > 0.09 ? i18n[sprache]["selection_color"] : "#E1DFDC");

}

function setPartValue(name, value) {

  if (value > 0.09) {
    scorad.bodyparts[name] = value
  } else /*if (scorad.bodyparts[name] != undefined)*/ {
    delete scorad.bodyparts[name]
  }

  scorad.save()

}

function presentPopover(node, event) {

  const part_name = node.getAttribute('stroke-opacity');
  const part_max = cosVal[part_name];

  console.log("presentPopover: " + part_name)

  var currentValue = scorad.bodyparts[part_name] == undefined ? part_max : scorad.bodyparts[part_name];
  setNodeSelected(node, currentValue > 0);
  setPartValue(part_name, currentValue);
  schau_ergebnis_doch_sichtbar()
  //$(".circle").html(scorad.bodyvalue);
  setCircle(scorad.bodyvalue)

  console.log(part_name + " " + currentValue)
  console.log(cosToSlider(currentValue, part_max))


  $('#pop-holder').attr('data-original-title', currentValue + " %");
  ph[0].style.left = event.x + 'px';
  ph[0].style.top = event.y + 'px';
  ph.popover('show');

  $(".selector").slider({
    min: 0,
    max: 100,
    value: cosToSlider(currentValue, part_max)
  });


  $(".selector").slider({

    change: function (event, ui) {
      ph.popover('show')
    },
    /*
    change: function (event, ui) {

        const newPartValue = SliderToCos(ui.value,part_max)
        $('#pop-holder').attr('data-original-title', newPartValue + " %");
        ph.popover('show')

        setNodeSelected(node,newPartValue > 0)
        setPartValue(part_name,newPartValue)

        schau_ergebnis_doch_sichtbar();
        scorad.save();

        console.log("Change: " + part_name);

    },*/
    slide: function (event, ui) {

      const newPartValue = SliderToCos(ui.value, part_max)
      $('#pop-holder').attr('data-original-title', newPartValue + " %");
      ph.popover('show')

      setNodeSelected(node, newPartValue > 0)
      setPartValue(part_name, newPartValue)

      //$(".circle").html(scorad.bodyvalue);
      setCircle(scorad.bodyvalue)
      schau_ergebnis_doch_sichtbar();
      scorad.save();

    }
  });


}

/*
function ManagePercent(object, op) {

    original = parseFloat($(".circle").html());
    switch (op) {
        case "add":
            original += cosVal[object];
            scorad.bodya.push(object);
            break;
        case "reduce":
            original -= cosVal[object];
            var index = scorad.bodya.indexOf(object);
            if (index > -1) {
                scorad.bodya.splice(index, 1);
            }
            break;
    }
    scorad.bodyvalue = Math.min(original, 100);
    $(".circle").html(scorad.bodyvalue);
    schau_ergebnis_doch_sichtbar();

}

*/

$(document).on("click", "ul.regla li a", function () {
  $(this).parent().parent().find(".white").removeClass("white");
  $(this).toggleClass("white");
  schau_ergebnis_doch_sichtbar();
});

$(document).on("click", "#resultme", function () {
  $("#closeresult").show();
  result_enabled = -1;
  $(this).addClass("showingresult");
  scorad_rechnen();
});

$(document).on("click", "#child-checkbox", function () {
  let isChild = $("#child-checkbox").is(":checked");

  $("#resultme").removeClass("showingresult");
  $("#resultme").html(i18n[sprache]["ausrechnen"]);
  $("#mild_result").html(i18n[sprache]["mild_result"]);

  $("#mild_result").removeClass().addClass("black");

  $("#mild_result2").html(" (0 - 103)");
  nuke();
  setCircle(0);
  $("ul.regla li").find("a").removeClass("white");
  $("body").find(".img-thumbnail").removeClass("easi-selection");
  $("#closeresult").hide();

  scorad.init();

  scorad["child"] = isChild;
  scorad.save();

  cosVal = isChild ? childVal : adultVal;
  cosMaxVal = isChild ? childVal : adultVal;
  result_enabled = 0;
});

$(document).on("click", "#closeresult", function () {
  result_enabled = 0;
  $(this).hide();
  reset_wert();
});

function reset_wert() {
  $("#resultme").removeClass("showingresult");
  $("#resultme").html(i18n[sprache]["ausrechnen"]);
  $("#mild_result").html(i18n[sprache]["mild_result"]);

  $("#mild_result").removeClass().addClass("black");

  $("#mild_result2").html(" (0 - 103)");
  nuke();
  setCircle(0);
  $("ul.regla li").find("a").removeClass("white");
  $("body").find(".img-thumbnail").removeClass("easi-selection");
  $("#child-checkbox").prop("checked", false);

  scorad.destroy();
}

$(document).on("click", ".img-thumbnail", function () {
  $(this).parent().parent().find(".img-thumbnail").removeClass("easi-selection");
  $(this).toggleClass("easi-selection");
  schau_ergebnis_doch_sichtbar();
});

function schau_ergebnis_doch_sichtbar() {
  if (result_enabled) {
    scorad_rechnen();
  }

}
$(document).on("click", ".lupa", function () {
  var bg = $(this).parent().find(".img-thumbnail").attr('rel');
  $.fancybox.open({ src: bg });
});

function scorad_rechnen() {
  var subjective = 0;
  var intensity = 0;
  surface = $(".circle").html();
  $(".image-selector").find(".easi-selection").map(function () {
    scorad[$(this).parent().parent().attr("id")] = parseInt(this.innerText)
    return;
  });
  $(".regla").find(".white").map(function () {
    scorad[$(this).parent().parent().attr("id")] = this.innerText
    return;
  });

  scorad.save()
  rechnen_show()

}
function rechnen_show() {
  //$(".circle").html(scorad.bodyvalue == "" ? 0 : scorad.bodyvalue);

  setCircle(scorad.bodyvalue);

  $("#resultme").html(scorad.result() == "" ? 0 : scorad.result());
  $("#mild_result").html(scorad.result_text());
  $("#mild_result2").html(scorad.result_text2());

  $("#mild_result").removeClass()
  $("#mild_result").addClass(scorad.result_color());

}

function fill() {
  // fill el cos

  /*
  console.log(scorad.bodya.length);
  for (var i = 0; i <= scorad.bodya.length; i++) {
      if (scorad.bodya[i] != null) {
          eval(scorad.bodya[i]).node.setAttribute("fill", "#423f3c");
      }
  }*/
  for (var part in scorad.bodyparts) {
    eval(part).node.setAttribute("fill", i18n[sprache]["selection_color"]);
  }


  $("#eritema li .img-thumbnail").map(function () {
    if (scorad.eritema != "") {
      if (parseInt(this.innerText) == scorad.eritema) {
        $(this).addClass("easi-selection");
      }
    }
  });
  $("#edema li .img-thumbnail").map(function () {
    if (scorad.edema != "") {
      if (parseInt(this.innerText) == scorad.edema) {
        $(this).addClass("easi-selection");
      }
    }
  });
  $("#costras li .img-thumbnail").map(function () {
    if (scorad.costras != "") {
      if (parseInt(this.innerText) == scorad.costras) {
        $(this).addClass("easi-selection");
      }
    }
  });
  $("#excoriacion li .img-thumbnail").map(function () {
    if (scorad.excoriacion != "") {
      if (parseInt(this.innerText) == scorad.excoriacion) {
        $(this).addClass("easi-selection");
      }
    }
  });
  $("#liquenificacion li .img-thumbnail").map(function () {
    if (scorad.liquenificacion != "") {
      if (parseInt(this.innerText) == scorad.liquenificacion) {
        $(this).addClass("easi-selection");
      }
    }
  });
  $("#xerosis li .img-thumbnail").map(function () {
    if (scorad.xerosis != "") {
      if (parseInt(this.innerText) == scorad.xerosis) {
        $(this).addClass("easi-selection");
      }
    }
  });

  // fill el prurito
  $("#prurito li").map(function () {
    if (scorad.prurito != "") {
      if (parseInt(this.innerText) == scorad.prurito) {
        $(this).addClass("white");
      }
    }
  });

  $("#sueno li").map(function () {
    if (scorad.sueno != "") {
      if (parseInt(this.innerText) == scorad.sueno) {
        $(this).addClass("white");
      }
    }
  });

  $("#child-checkbox").prop("checked", scorad.child);


  $("#resultme").click();
}
window.onload = function () {

  scorad.load();
  fill();

}

window.onbeforeunload = function () {

  if (!result_enabled) {
    scorad.destroy();
  }

}