function playAudio(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ru-RU";
  u.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
