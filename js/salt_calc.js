$(document).ready(function () {
  // 初始化滑块 - 只选择SALT页面内的
  $(".salt-selector .selector").each(function () {
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
        salt.set(region, ui.value);
        salt.save();
        // 如果已经显示结果，更新结果
        if ($("#resultme").hasClass("showingresult")) {
          rechnen_show();
        }
      }
    });
  });

  // 加载已有数据
  try {
    salt.load();
    // 设置滑块值
    for (var key in salt.bodyparts) {
      var value = salt.bodyparts[key];
      var $slider = $("#" + key + "-slider");
      if ($slider.length) {
        $slider.slider("value", value);
        $("#" + key + "-value").html(value + "%");
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
    salt.save();
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
    $(".salt-selector .selector").slider("value", 0);
    $(".salt-selector .slider-value").html("0%");

    // 清空数据
    salt.destroy();
  });

  // 放大镜点击事件
  $(".lupa").click(function () {
    var bg = $(this).parent().find(".region-thumbnail").attr('rel');
    $.fancybox.open({ src: bg });
  });
});

function rechnen_show() {
  var result = salt.result();
  var result_text = salt.result_text();
  var result_color = salt.result_color();
  var result_text2 = salt.result_text2();

  $("#resultme").html(result);
  $("#mild_result").html(result_text);
  $("#mild_result").removeClass().addClass(result_color);
  $("#mild_result2").html(result_text2);
}
