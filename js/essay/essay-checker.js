function checkEssay(text) {
  return {
    words: text.split(/\s+/).length,
    hasOpinion: /я считаю|по моему мнению/i.test(text),
    note: "Рекомендательная проверка (ФИПИ)"
  };
}
