// Dropdown menue script taken from http://www.htmldog.com/articles/suckerfish/dropdowns/
// To modify the behaviour and apearance of the dropdown menues goto /styles/nav.css

sfHover = function() {
	var sfEls = document.getElementById("nav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

    function start_loop() {
        $j('#cntrl_play').hide();
        $j(control.concat(current)).removeClass("cntrl_active");
        hide_element(feature.concat(current));
        current = next;
        $j(control.concat(next)).addClass("cntrl_active");
        if (current == 4) {
            next = 1;
        } else {
            next = current + 1;
        }
        if (current == 1) {
            previous = 4;
        } else {
            previous = current - 1;

        }
        show_element(feature.concat(current));
        t = setTimeout("start_loop()",8000);

    }

    function restart_loop() {
        // this is required to avoid odd behavior if Play is clicked when not paused
        $j('#cntrl_pause').show();
        $j('#cntrl_play').hide();
        clearTimeout(t);
        $j(control.concat(current)).removeClass("cntrl_active");
        hide_element(feature.concat(current));
        if (current == 4) {
            next = 1;
        } else {
            next = current + 1;
        }
        if (current == 1) {
            previous = 4;
        } else {
            previous = current - 1;
        }

        current = next;
        $j(control.concat(current)).addClass("cntrl_active");
        show_element(feature.concat(current));
        t = setTimeout("restart_loop()",8000);

    }

    function show_element(div) {
        $j(div).fadeIn("slow");

    }

    function hide_element(div) {
        $j(div).hide();

    }

    function stop_loop() {
        $j('#cntrl_pause').hide();
        $j('#cntrl_play').show();
        clearTimeout(t);

    }

    function switch_pane(div) {
        stop_loop();
        $j("#cntrl_1").removeClass("cntrl_active");
        $j("#feature_1").hide();
        $j("#cntrl_2").removeClass("cntrl_active");
        $j("#feature_2").hide();
        $j("#cntrl_3").removeClass("cntrl_active");
        $j("#feature_3").hide();
        $j("#cntrl_4").removeClass("cntrl_active");
        $j("#feature_4").hide();

        current = div - 1;

        $j(control.concat(div)).addClass("cntrl_active");
        show_element(feature.concat(div));

    }