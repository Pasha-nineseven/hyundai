// Bug fix - Ie Flicker
try {
    document.execCommand('BackgroundImageCache', false, true);
} catch (e) {};


// Safety
// slider
$(function() {
    var _s = $("#safety_slider");
    var _t;
    _s.slider({
        range: "min",
        value: 0,
        min: 0,
        max: 800,
        slide: function(event, ui) {
            _s.attr("current", ui.value);
            exeSlider(ui.value);
            stopSlide();
        }
    });
    _s.attr("current", 0);

    function autoSlide() {
        var _o = $(".pip.contents_safety .scene_wrap");
        _o.find(".controls a.play").hide();
        _o.find(".controls a.stop").show();
        _t = setTimeout(function() {
            if (parseInt(_s.attr("current")) < 800) {
                _s.slider("value", (parseInt(_s.attr("current")) + 1));
                _s.attr("current", (parseInt(_s.attr("current")) + 1));
                exeSlider((parseInt(_s.attr("current"))));
                autoSlide();
            } else {
                clearTimeout(_t);
            }
        }, 25);
    }

    function stopSlide() {
        var _o = $(".pip.contents_safety .scene_wrap");
        _o.find(".controls a.play").show();
        _o.find(".controls a.stop").hide();
        clearTimeout(_t);
    }

    function nextSlide() {
        stopSlide();
        var a = parseInt(parseInt(_s.attr("current")) / 200); // 0 ~ 3
        if (a < 3) a = a + 1;
        else a = 0;
        _s.slider("value", (a) * 200);
        _s.attr("current", (a) * 200);
        exeSlider((parseInt(_s.attr("current"))));
        autoSlide();
    }

    function exeSlider(va) {
        var _e = parseInt((va - 0) / 200);
        var _o = $(".pip.contents_safety .scene_wrap");
        // slider text color
        var _st = _o.find(".slider_wrap .slider_text");
        _st.find("ul li").each(function() {
            if ($(this).index() == _e && !$(this).hasClass("on")) $(this).addClass("on");
            if ($(this).index() != _e && $(this).hasClass("on")) $(this).removeClass("on");
        });
        if (va == 800) _st.find("ul li").removeClass("on").eq(4).addClass("on");
        // .text_wrap - move this in exeMotions()
        /*
         var _sl = $(".pip.contents_safety .scene_wrap .text_wrap ul li");
         _sl.hide().eq(_e).show();
         */
        // exe motion
        exeMotions(va);
    }

    function exeMotions(va) {
        var _a = parseInt(va / 200);
        var s1 = $(".pip.contents_safety .scene_wrap .scene.scene1");
        var s2 = $(".pip.contents_safety .scene_wrap .scene.scene2");
        var s3 = $(".pip.contents_safety .scene_wrap .scene.scene3");
        var s4 = $(".pip.contents_safety .scene_wrap .scene.scene4");
        var _sTxt = $(".pip.contents_safety .scene_wrap .text_wrap ul li");
        s1.hide();
        s2.hide();
        s3.hide();
        s4.hide();
        _sTxt.hide();
        if (_a == 0) { // 0 ~ 199
            s1.show();
            $(".pip.contents_safety .scene_wrap").removeClass("black");
            var n = va - 0;
            if (n < 10) { // show
                var m = n - 0; // 0~9
                _sTxt.hide().eq(0).show();
                s1.css({
                    opacity: 1
                });
                s1.find(".mycar div").css("visibility", "hidden").eq(0).css("visibility", "visible");
                s1.find(".yourcar div").css("visibility", "hidden");
            } else if (n < 170) { // ani
                var m = n - 10; // 0 ~ 169
                _sTxt.hide().eq(0).show();
                s1.css({
                    opacity: 1
                });
                var o = Math.floor(m / 10),
                    carO = o >= s1.find(".mycar div").length ? 14 : o
                s1.find(".mycar div").css("visibility", "hidden").eq(carO).css("visibility", "visible");
                if (m >= 50) {
                    s1.find(".yourcar div").css("visibility", "hidden").eq(carO - 5).css("visibility", "visible")
                } else {
                    s1.find(".yourcar div").css("visibility", "hidden");
                }
            } else if (n < 190) { // delay
                var m = n - 170; // 0~189
                _sTxt.hide().eq(0).show();
                s1.css({
                    opacity: 1
                });
                s1.find(".mycar div").css("visibility", "hidden").eq(14).css("visibility", "visible");
                s1.find(".yourcar div").css("visibility", "hidden").eq(10).css("visibility", "visible");
            } else { // hide
                var m = n - 190; // 0~9
                s1.css({
                    opacity: (1 / (m))
                });
                s1.find(".mycar div").css("visibility", "hidden").eq(14).css("visibility", "visible");
                s1.find(".yourcar div").css("visibility", "hidden").eq(10).css("visibility", "visible");
            }
            return false;
        } else if (_a == 1) { // 200 ~ 299
            s2.show();
            $(".pip.contents_safety .scene_wrap").removeClass("black");
            var n = va - 200;
            if (n < 10) { // show
                var m = n - 0; // 0~9
                _sTxt.hide().eq(1).show();
                //s2.css({opacity:(1/(9-n))});
                s2.css({
                    opacity: 1
                });
                s2.find(".bg .bg1").css("visibility", "visible");
                s2.find(".bg .bg2").css("visibility", "hidden");
                s2.find(".info .info1").css("visibility", "visible");
                s2.find(".info .info2").css("visibility", "hidden");
                s2.find(".line .line1").css("visibility", "visible");
                s2.find(".line .line2").css("visibility", "hidden");
                s2.find(".line .line3").css("visibility", "hidden");
                s2.find(".line .line4").css("visibility", "hidden");
                s2.find(".yourcar").css({
                    left: "1258px"
                });
            } else if (n < 170) { // ani
                var m = n - 10; // 0 ~ 169
                _sTxt.hide().eq(1).show();
                s2.css({
                    opacity: 1
                });
                if ((parseInt(m / 10)) % 2 == 0) {
                    s2.find(".bg .bg1").css("visibility", "visible");
                    s2.find(".bg .bg2").css("visibility", "hidden");
                } else {
                    s2.find(".bg .bg1").css("visibility", "hidden");
                    s2.find(".bg .bg2").css("visibility", "visible");
                }
                if (m < 90) {
                    s2.find(".info .info1").css("visibility", "visible");
                    s2.find(".info .info2").css("visibility", "hidden");
                } else {
                    s2.find(".info .info1").css("visibility", "hidden");
                    s2.find(".info .info2").css("visibility", "visible");
                }
                if ((parseInt(m / 10)) % 4 == 0) {
                    s2.find(".line .line1").css("visibility", "visible");
                    s2.find(".line .line2").css("visibility", "hidden");
                    s2.find(".line .line3").css("visibility", "hidden");
                    s2.find(".line .line4").css("visibility", "hidden");
                } else if ((parseInt(m / 10)) % 4 == 2) {
                    s2.find(".line .line1").css("visibility", "hidden");
                    s2.find(".line .line2").css("visibility", "visible");
                    s2.find(".line .line3").css("visibility", "hidden");
                    s2.find(".line .line4").css("visibility", "hidden");
                } else if ((parseInt(m / 10)) % 4 == 3) {
                    s2.find(".line .line1").css("visibility", "hidden");
                    s2.find(".line .line2").css("visibility", "hidden");
                    s2.find(".line .line3").css("visibility", "visible");
                    s2.find(".line .line4").css("visibility", "hidden");
                } else {
                    s2.find(".line .line1").css("visibility", "hidden");
                    s2.find(".line .line2").css("visibility", "hidden");
                    s2.find(".line .line3").css("visibility", "hidden");
                    s2.find(".line .line4").css("visibility", "visible");
                }
                if (m < 60) {
                    s2.find(".yourcar").css({
                        left: "1258px"
                    });
                } else if (m < 70) {
                    s2.find(".yourcar").css({
                        left: "1207px"
                    });
                } else if (m < 80) {
                    s2.find(".yourcar").css({
                        left: "1146px"
                    });
                } else if (m < 90) {
                    s2.find(".yourcar").css({
                        left: "1065px"
                    });
                } else if (m < 100) {
                    s2.find(".yourcar").css({
                        left: "976px"
                    });
                } else {
                    s2.find(".yourcar").css({
                        left: "876px"
                    });
                }
            } else if (n < 190) { // delay
                _sTxt.hide().eq(1).show();
                var m = n - 170; // 0~189
                s2.css({
                    opacity: 1
                });
                s2.find(".bg .bg1").css("visibility", "visible");
                s2.find(".bg .bg2").css("visibility", "hidden");
                s2.find(".info .info1").css("visibility", "hidden");
                s2.find(".info .info2").css("visibility", "visible");
                s2.find(".line .line1").css("visibility", "visible");
                s2.find(".line .line2").css("visibility", "hidden");
                s2.find(".line .line3").css("visibility", "hidden");
                s2.find(".line .line4").css("visibility", "hidden");
                s2.find(".yourcar").css({
                    left: "876px"
                });
            } else { // hide
                var m = n - 190; // 0~9
                s2.css({
                    opacity: (1 / (m))
                });
                s2.find(".bg .bg1").css("visibility", "visible");
                s2.find(".bg .bg2").css("visibility", "hidden");
                s2.find(".info .info1").css("visibility", "hidden");
                s2.find(".info .info2").css("visibility", "visible");
                s2.find(".line .line1").css("visibility", "visible");
                s2.find(".line .line2").css("visibility", "hidden");
                s2.find(".line .line3").css("visibility", "hidden");
                s2.find(".line .line4").css("visibility", "hidden");
                s2.find(".yourcar").css({
                    left: "876px"
                });
            }
            return false;
        } else if (_a == 2) {
            s3.show();
            $(".pip.contents_safety .scene_wrap").removeClass("black");
            var n = va - 400;
            if (n < 10) { // show
                var m = n - 0; // 0~9
                _sTxt.hide().eq(2).show();
                //s3.css({opacity:(1/(9-n))});
                s3.css({
                    opacity: 1
                });
                s3.find(".bg .bg1").css("visibility", "visible");
                s3.find(".bg .bg2").css("visibility", "hidden");
                s3.find(".line .line1").css("visibility", "visible");
                s3.find(".line .line2").css("visibility", "hidden");
                s3.find(".line .line3").css("visibility", "hidden");
                s3.find(".line .line4").css("visibility", "hidden");
                s3.find(".yourcar").css({
                    left: "1258px"
                });
            } else if (n < 170) { // ani
                var m = n - 10; // 0~159
                _sTxt.hide().eq(2).show();
                s3.css({
                    opacity: 1
                });
                if ((parseInt(m / 10)) % 2 == 0) {
                    s3.find(".bg .bg1").css("visibility", "visible");
                    s3.find(".bg .bg2").css("visibility", "hidden");
                } else {
                    s3.find(".bg .bg1").css("visibility", "hidden");
                    s3.find(".bg .bg2").css("visibility", "visible");
                }
                if ((parseInt(m / 10)) % 4 == 0) {
                    s3.find(".line .line1").css("visibility", "visible");
                    s3.find(".line .line2").css("visibility", "hidden");
                    s3.find(".line .line3").css("visibility", "hidden");
                    s3.find(".line .line4").css("visibility", "hidden");
                } else if ((parseInt(m / 10)) % 4 == 1) {
                    s3.find(".line .line1").css("visibility", "hidden");
                    s3.find(".line .line2").css("visibility", "visible");
                    s3.find(".line .line3").css("visibility", "hidden");
                    s3.find(".line .line4").css("visibility", "hidden");
                } else if ((parseInt(m / 10)) % 4 == 2) {
                    s3.find(".line .line1").css("visibility", "hidden");
                    s3.find(".line .line2").css("visibility", "hidden");
                    s3.find(".line .line3").css("visibility", "visible");
                    s3.find(".line .line4").css("visibility", "hidden");
                } else {
                    s3.find(".line .line1").css("visibility", "hidden");
                    s3.find(".line .line2").css("visibility", "hidden");
                    s3.find(".line .line3").css("visibility", "hidden");
                    s3.find(".line .line4").css("visibility", "visible");
                }
                var o = Math.floor(m / 10);
                if (o < 6) {
                    s3.find(".mycar").css("margin-top", 0);
                    s3.find(".info div").hide().eq(0).show();
                    s3.find(".red").hide();
                } else if (o == 6) {
                    s3.find(".mycar").css("margin-top", "-10px");
                    s3.find(".info div").hide().eq(0).show();
                    s3.find(".red").hide();
                } else if (o == 7) {
                    s3.find(".mycar").css("margin-top", "-20px");
                    s3.find(".info div").hide().eq(0).show();
                    s3.find(".red").hide();
                } else if (o == 8) {
                    s3.find(".mycar").css("margin-top", "-30px");
                    s3.find(".info div").hide().eq(1).show();
                    s3.find(".red").hide();
                } else if (o == 9) {
                    s3.find(".mycar").css("margin-top", "-40px");
                    s3.find(".info div").hide().eq(1).show();
                    s3.find(".red").show();
                } else if (o == 10) {
                    s3.find(".mycar").css("margin-top", "-40px");
                    s3.find(".info div").hide().eq(1).show();
                    s3.find(".red").show();
                } else if (o == 11) {
                    s3.find(".mycar").css("margin-top", "-40px");
                    s3.find(".info div").hide().eq(1).show();
                    s3.find(".red").show();
                } else if (o == 12) {
                    s3.find(".mycar").css("margin-top", "-30px");
                    s3.find(".info div").hide().eq(1).show();
                    s3.find(".red").show();
                } else if (o == 13) {
                    s3.find(".mycar").css("margin-top", "-20px");
                    s3.find(".info div").hide().eq(0).show();
                    s3.find(".red").hide();
                } else if (o == 14) {
                    s3.find(".mycar").css("margin-top", "-10px");
                    s3.find(".info div").hide().eq(0).show();
                    s3.find(".red").hide();
                } else if (o == 15) {
                    s3.find(".mycar").css("margin-top", 0);
                    s3.find(".info div").hide().eq(0).show();
                    s3.find(".red").hide();
                }
            } else if (n < 190) { // delay
                _sTxt.hide().eq(2).show();
                var m = n - 170; // 0~19
                s3.css({
                    opacity: 1
                });
                s3.find(".bg .bg1").css("visibility", "visible");
                s3.find(".bg .bg2").css("visibility", "hidden");
                s3.find(".line .line1").css("visibility", "visible");
                s3.find(".line .line2").css("visibility", "hidden");
                s3.find(".line .line3").css("visibility", "hidden");
                s3.find(".line .line4").css("visibility", "hidden");
            } else { // hide
                var m = n - 190; // 0~9
                s3.css({
                    opacity: (1 / (m))
                });
                s3.find(".bg .bg1").css("visibility", "visible");
                s3.find(".bg .bg2").css("visibility", "hidden");
                s3.find(".line .line1").css("visibility", "visible");
                s3.find(".line .line2").css("visibility", "hidden");
                s3.find(".line .line3").css("visibility", "hidden");
                s3.find(".line .line4").css("visibility", "hidden");
            }
            return false;
        } else if (_a == 3) {
            s4.show();
            $(".pip.contents_safety .scene_wrap").addClass("black");
            var n = va - 600;
            if (n < 10) { // show
                var m = n - 0; // 0~9
                s4.css({
                    opacity: (1 / (9 - n))
                });
                s4.find(".mycar div").css("visibility", "hidden").eq(0).css("visibility", "visible");
            } else if (n < 170) { // ani
                var m = n - 10; // 0 ~ 169
                _sTxt.hide().eq(3).show();
                s4.css({
                    opacity: 1
                });
                var o = Math.floor(m / 10);
                s4.find(".mycar div").css("visibility", "hidden").eq(o).css("visibility", "visible");
            } else if (n < 190) { // delay
                var m = n - 170; // 0~189
                _sTxt.hide().eq(3).show();
                s4.css({
                    opacity: 1
                });
                s4.find(".mycar div").css("visibility", "hidden").eq(15).css("visibility", "visible");
            } else { // hide
                var m = n - 190; // 0~9
                s4.css({
                    opacity: (1 / (m))
                });
                s4.find(".mycar div").css("visibility", "hidden").eq(15).css("visibility", "visible");
            }
        }
        if (va == 800) { // last
            var _o = $(".pip.contents_safety .scene_wrap");
            _o.delay(1).animate({
                opacity: 1
            }, 1, function() {
                _s.slider("value", 0);
                _s.attr("current", 0);
                stopSlide();
                exeSlider(0);
            });
            return false;
        }
    }
    var _c = $(".pip.contents_safety .scene_wrap");
    _c.find(".controls a.play").click(function() {
        autoSlide();
        return false;
    });
    _c.find(".controls a.stop").click(function() {
        stopSlide();
        return false;
    });
    _c.find(".controls a.next").click(function() {
        nextSlide();
        return false;
    });
});

