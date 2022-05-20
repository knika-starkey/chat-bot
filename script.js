$(function () {
  const phrases = [
    "Наш менеджер перезвонит Вам в ближайшее время!",
    "Уточнить детали можно по телефону 123456789",
    "Оставайтесь на связи!",
    "Сегодня прекрасная погода!",
    "С Вами очень приятно общаться!",
  ];
  const hello = "Привет, я бот Пятница!";
  const goodbye = "До свидания!";
  const bye = "Пока!";

  function rPhrases() {
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  $("h1").css("color", "red");
  $("#answers").append(`<div class="bot_answ">${hello}</div>`);

  $("#chatbot").click(function () {
    $(this).toggleClass("show");
  });
  $("#answers").click(function () {
    return false;
  });
  $("#question").click(function () {
    return false;
  });
  $("#ok").click(function () {
    let q = $("#question").val();
    $("#question").val("");
    //alert(q);
    if (q.trim() != "") {
      $("#answers").append(`<div class="human_answ">${q.trim()}</div>`);
      //q = q.toLowerCase();
      let byeLowerCase = bye.substring(0, bye.length - 1).toLowerCase();
      let goodbyeLowerCase = goodbye
        .substring(0, goodbye.length - 1)
        .toLowerCase();
      let helloLowerCase = goodbye.substring(0, hello.length - 1).toLowerCase();
      setTimeout(function () {
        if (q.toLowerCase().search(byeLowerCase) != -1) {
          $("#answers").append(`<div class="bot_answ">${bye}</div>`);
        } else if (q.toLowerCase().search(goodbyeLowerCase) != -1) {
          $("#answers").append(`<div class="bot_answ">${goodbye}</div>`);
        } else if (
          q.toLowerCase().search("привет") != -1 ||
          q.toLowerCase().search("здравствуйте") != -1
        ) {
          $("#answers").append(`<div class="bot_answ" ">${hello}</div>`);
        } else {
          $("#answers").append(`<div class="bot_answ">${rPhrases()}</div>`);
        }
        let chatbot = document.getElementById("chatbot");
        $("#chatbot").animate(
          {
            scrollTop: chatbot.scrollHeight - chatbot.clientHeight,
          },
          500
        );
      }, 1000);
    }

    return false;
  });
  $("#question").keypress("keyup", function (event) {
    if (event.keyCode == 13) {
      $("#ok").click();
      return false;
    }
  });
});
