particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

const voyager = $("#rot8");

$(window).scroll(function (e) {
    // console.log("test", e);

    if ($(this).scrollTop() > 0) {
        voyager.addClass("rotating");
    } else {
        voyager.removeClass("rotating");
    }
});

var timer;

document.addEventListener("wheel", function (e) {

    if (e.type != "wheel") {
        return;
    }

    if (timer !== undefined) {
        clearTimeout(timer);
    }

    timer = setTimeout(function () {
        // voyager.style.animationPlayState = 'paused';
        voyager.removeClass("rotating");
    }, 50);

    let delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;
    delta = delta * -12.5;

    document.documentElement.scrollTop -= delta;
    // safari needs also this
    document.body.scrollTop -= delta;
    e.preventDefault();
});
