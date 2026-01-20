function playAudio(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ru-RU";
  speechSynthesis.speak(u);
}

