$(document).ready(function () {
  // 初始化滑块
  $(".aas-selector .selector").each(function () {
    var $slider = $(this);
    var maxVal = parseInt($slider.data("max"));
    var region = $slider.data("region");

    $slider.slider({
      range: "max",
      max: maxVal,
      min: 0,
      value: 0,
      orientation: "horizontal",
      slide: function (event, ui) {
        $("#" + region + "-value").html(ui.value + "%");
      },
      change: function (event, ui) {
        aas.set(region, ui.value);
        aas.save();
        // 如果已经显示结果，更新结果
        if ($("#resultme").hasClass("showingresult")) {
          rechnen_show();
        }
      }
    });
  });

  // 加载已有数据
  try {
    aas.load();
    // 设置滑块值
    for (var key in aas.bodyparts) {
      var value = aas.bodyparts[key];
      var $slider = $("#" + key + "-slider");
      if ($slider.length) {
        $slider.slider("value", value);
        $("#" + key + "-value").html(value + "%");
      }
    }
    // 设置factor复选框
    for (var factor in aas.factors) {
      if (aas.factors[factor]) {
        $("#factor_" + factor).prop("checked", true);
      }
    }
  } catch (e) {
    console.log(e);
  }

  // 初始显示
  $("#closeresult").hide();

  // 绑定点击事件
  $("#resultme").on("click", function () {
    $("#closeresult").show();

    // 设置为显示结果状态
    $(this).addClass("showingresult");

    // 保存数据并显示结果
    aas.save();
    rechnen_show();
  });

  $("#closeresult").on("click", function () {
    // 重置状态
    $("#resultme").removeClass("showingresult");
    $("#resultme").html("计算");
    $("#mild_result").html("结果：");
    $("#mild_result").removeClass().addClass("black");
    $("#mild_result2").html(" (0 - 100)");
    $("#closeresult").hide();

    // 重置所有滑块
    $(".aas-selector .selector").slider("value", 0);
    $(".aas-selector .slider-value").html("0%");

    // 重置所有复选框
    $(".aas-factor-item input[type='checkbox']").prop("checked", false);

    // 清空数据
    aas.destroy();
  });

  // 放大镜点击事件
  $(document).on("click", ".lupa", function () {
    var bg = $(this).parent().find(".region-thumbnail").attr("rel");
    $.fancybox.open({ src: bg });
  });

  // 复选框点击事件
  $(".aas-factor-item input[type='checkbox']").on("change", function () {
    var factor = $(this).data("factor");
    var checked = $(this).is(":checked");
    aas.setFactor(factor, checked);
    aas.save();

    // 如果已经显示结果，更新结果
    if ($("#resultme").hasClass("showingresult")) {
      rechnen_show();
    }
  });
});

function rechnen_show() {
  var result = aas.result();
  var result_text = aas.result_text();
  var result_color = aas.result_color();
  var result_text2 = aas.result_text2();

  $("#resultme").html(result);
  $("#mild_result").html(result_text);
  $("#mild_result").removeClass().addClass(result_color);
  $("#mild_result2").html(result_text2);
}
