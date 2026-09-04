function speakBirthday() {
  const speech = new SpeechSynthesisUtterance("Happy Birthday");
  speech.lang = "en-US";
  speech.rate = 0.85;
  speech.pitch = 1.1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function celebrate() {
  document.getElementById("message").innerHTML =
    "🎉🎈 Have a wonderful birthday! 🎈🎉";

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");

    confetti.innerHTML = "🎊";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-30px";
    confetti.style.fontSize = "25px";
    confetti.style.transition = "transform 3s linear";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.transform =
        `translateY(110vh) rotate(${Math.random() * 720}deg)`;
    }, 50);

    setTimeout(() => {
      confetti.remove();
    }, 3200);
  }

  speakBirthday();
}
