$(document).ready(function () {
    $("#loading").fadeOut(3000, function () {
        $("body").css({ overflow: "auto" })
        $(".navMenu ul li a").click(function () {
            let myHref = $(this).attr("href");
            $("body,html").animate({ scrollTop: $(myHref).offset().top }, 1000)
        })
        $(".upPage").click(function () {
            $("body ,html").animate({ scrollTop: 0 }, 2000)
        })
        let navHeight = $(".item-sidenav").height();
        $(".menu").click(function () {
            if (navHeight > 400) {

                $(".nav").slideUp(1000);
                navHeight = 55;

            }
            else if (navHeight < 70) {

                $(".nav").slideDown(1000);
                navHeight = 550;
            }
        })

        $(".myServise").click(function () {
            let myId = $(this).attr("id");
            $(this).addClass("Active").siblings().removeClass("Active");
            $(".description").hide(1000);
            $("#" + myId + "-description").slideDown(1000);

        })

        AOS.init();
        $('.owl-carousel').owlCarousel({
            rtl: true,
            loop: true,

            margin: 30,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        })

        $("#list li a").click(function () {
            let dataChose = $(this).attr("data-filter");
            if (dataChose == "all") {
                $(".filter").show(1000);
            } else {
                $('.filter').not("." + dataChose).hide(1000);
                $('.filter').filter("." + dataChose).show(1000);
            }
        })
        $("#list li a").click(function () {
            $(this).addClass("activeX");
            $("#list li a").not(this).removeClass('activeX');

        })

        let myProg = $(".prog").offset().top;
        $(window).scroll(function () {
            let myWind = $(window).scrollTop();
            if (myWind > myProg) {
                $('#bar1').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });

                $('#bar2').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar3').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar4').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar5').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar7').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar8').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar9').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar10').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar11').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar12').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar13').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar14').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar15').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });
                $('#bar17').barfiller({

                    // color of bar
                    barColor: '#ef0d33',

                    // shows a tooltip
                    tooltip: false,

                    // duration in ms
                    duration: 700,

                    // re-animate on resize
                    animateOnResize: false,

                    // custom symbol
                    symbol: "%"

                });

            }
        })


        var typed = new Typed('.element', {
            strings: [ "Dr. Mazin Al-Helou"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });


        let contSectionOffset = $(".contSection").offset().top;
        $(window).scroll(function () {
            let myWindow = $(window).scrollTop();
            if (myWindow > contSectionOffset) {
                function inc1() {
                    let num1 = $("#oneCount").text();
                    if (num1 < 200) {
                        num1++;
                        clearInterval(inc1)
                    }
                    $("#oneCount").text(num1)


                }
                setInterval(inc1, 400);
                function inc2() {
                    let num2 = $("#twoCount").text();
                    if (num2 < 200) {
                        num2++;
                        clearInterval(inc2)
                    }
                    $("#twoCount").text(num2)


                }
                setInterval(inc2, 400);
                function inc3() {
                    let num3 = $("#threeCount").text();
                    if (num3 < 200) {
                        num3++;
                        clearInterval(inc3)
                    }
                    $("#threeCount").text(num3)


                }
                setInterval(inc3, 400);

                function inc4() {
                    let num4 = $("#fourCount").text();
                    if (num4 < 200) {
                        num4++;
                        clearInterval(inc4)
                    }
                    $("#fourCount").text(num4)


                }
                setInterval(inc4, 400);
            }
        })
        function validName(name) {
            let nameRegex = /^[A-zا-ي]{2,}$/;
            if (nameRegex.test(name)) {
                return true;
            } else {
                return false;
            }
        }
        function validEmail(email) {
            let emailRegex = /^[A-z][A-z0-9]{2,}@(yahoo|gmail).com$/;
            if (emailRegex.test(email)) {
                return true;
            } else {
                return false;
            }
        }
        $("#inpName").keyup(function () {
            let nameValue = $("#inpName").val();
            if (validName(nameValue) == true) {
                $("#erorrName").css("display", "none")
                $("#send").removeAttr("disabled")

            }
            else {
                $("#erorrName").css("display", "block")
                $("#send").attr("disabled", "true")

            }
        })

        $("#inpEmail").keyup(function () {
            let emailValue = $("#inpEmail").val();
            if (validEmail(emailValue) == true) {
                $("#erorrEmail").css("display", "none")
                $("#send").removeAttr("disabled")

            }
            else {
                $("#erorrEmail").css("display", "block")
                $("#send").attr("disabled", "true")
            }
        })

        $("#messageInp").keyup(function () {
            $("#manyChar").css("display", "block")
            let manyCharMax = $(this).attr("maxlength");
            let manyChar = document.getElementById("messageInp").value;
            let x = manyChar.length;
            $("#manyChar").text(manyCharMax - x)
            if (manyCharMax - x == 0) {
                $("#manyChar").css("color", "#ef0d33")
            } else {
                $("#manyChar").css("color", "#888")

            }
        })


    })

})
