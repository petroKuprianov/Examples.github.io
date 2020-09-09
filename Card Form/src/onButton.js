import Creditly from './index';

$(function () {
            var grayThemeCreditly = Creditly.initialize(
                '.section.gray_theme .expiration-month-and-year',
                '.section.gray_theme .section__form-input-card',
                '.section.gray_theme .security-code',
                '.section.gray_theme .section__form-input-card');
                var disableButton = function () {
                    var testBut = document.getElementById("button_disable");
                    testBut.setAttribute('disabled', true);
                    var loader = document.getElementById("circleLoad");
                    var form = document.getElementById("formOpacity");
                    form.style.opacity = 0.1;
                    loader.style.display = "block";
                }
                var unableButton = function(){
                    var testBut = document.getElementById("button_disable");
                    testBut.removeAttribute("disabled");
                    var loader = document.getElementById("circleLoad");
                    var form = document.getElementById("formOpacity");
                    form.style.opacity = 1;
                    loader.style.display = "none";
                }

            $(".section__form-bottom-button").click(function (e) {
                e.preventDefault();

                disableButton();
                setTimeout(unableButton,2000);

                var output = grayThemeCreditly.validate();
                if (output) {
                    alert("Validated");
                    console.log(output);
                }
            });

        });