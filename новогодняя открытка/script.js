(function () {
  var garland = document.getElementById("garland");
  if (garland) {
    var bounceTypes = ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9"];
    var staticTypes = ["i1", "i2", "i3", "i4", "i5", "i6"];

    for (var section = 0; section < 7; section++) {
      var inner = document.createElement("i");
      inner.className = "b-head-decor__inner";
      inner.style.left = section * 373 + "px";

      for (var i = 0; i < bounceTypes.length; i++) {
        var ball = document.createElement("div");
        ball.className = "b-ball b-ball_" + bounceTypes[i] + " b-ball_bounce";
        ball.innerHTML = '<div class="b-ball__right"></div><div class="b-ball__i"></div>';
        inner.appendChild(ball);
      }

      for (var j = 0; j < staticTypes.length; j++) {
        var decor = document.createElement("div");
        decor.className = "b-ball b-ball_" + staticTypes[j];
        decor.innerHTML = '<div class="b-ball__right"></div><div class="b-ball__i"></div>';
        inner.appendChild(decor);
      }

      garland.appendChild(inner);
    }

    function toggleBounce(element) {
      element.classList.add("bounce");
      setTimeout(function () {
        element.classList.remove("bounce");
        element.classList.add("bounce1");

        setTimeout(function () {
          element.classList.remove("bounce1");
          element.classList.add("bounce2");

          setTimeout(function () {
            element.classList.remove("bounce2");
            element.classList.add("bounce3");

            setTimeout(function () {
              element.classList.remove("bounce3");
            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }

    function ballBounce(element) {
      if (element.className.indexOf(" bounce") > -1) {
        return;
      }
      toggleBounce(element);
    }

    var balls = document.querySelectorAll(".b-ball_bounce");
    var ballSides = document.querySelectorAll(".b-ball_bounce .b-ball__right");

    for (var b = 0; b < balls.length; b++) {
      balls[b].addEventListener("mouseenter", function () {
        ballBounce(this);
      });
    }

    for (var s = 0; s < ballSides.length; s++) {
      ballSides[s].addEventListener("mouseenter", function () {
        ballBounce(this);
      });
    }
  }

  if (typeof Snow === "function") {
    new Snow({
      showSnowflakes: true,
      countSnowflake: 100,
      showSnowBalls: false
    });
  }

  var countdown = document.getElementById("countdown");

  function getNextNewYear() {
    var now = new Date();
    return new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
  }

  function formatNum(value) {
    return String(value).padStart(2, "0");
  }

  function updateCountdown() {
    if (!countdown) {
      return;
    }

    var now = new Date();
    var target = getNextNewYear();
    var diff = target - now;

    if (diff <= 0) {
      countdown.textContent = "С Новым годом!";
      return;
    }

    var totalSeconds = Math.floor(diff / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    countdown.textContent =
      days + "д " +
      formatNum(hours) + "ч " +
      formatNum(minutes) + "м " +
      formatNum(seconds) + "с";
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
