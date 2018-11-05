/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function changeLabel() {
                var butom = document.getElementById("stratme");
                if (butom.value == "Start")
                    butom.value = "Stop";
                else
                    butom.value = "Start"
            }

function  getTime(){
    var minutes = 1000 * 60;
    var d = new Date();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var t = d.getTime();
    var dat = new Date(2018, 11, 24, 10, 33, 30, 0);
    
}

function showTimer(selector, seconds) {
                var startTime = Date.now();
                var time = document.getElementById("ch1");
                var interval;

                function showRemaining() {
                    var delta = time.value - startTime;     // milliseconds
                    //Date.now() 
                    var deltaSeconds = delta / (1000);
                    if (deltaSeconds < seconds) {
                        // display minutes remaining
                        $(selector).text(Math.round(seconds - deltaSeconds));
                    } else {
                        $(selector).text(0);
                        clearInterval(interval);
                    }
                }

                interval = setInterval(showRemaining, 500);
                showRemaining();
            }

            function callCount() {
                showTimer("#countdown", 25);
            }
            ;