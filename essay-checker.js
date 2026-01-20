function essayExpert(text, exam) {
  const structure = analyzeStructure(text);
  const meaning = analyzeMeaning(text);
  const language = analyzeLanguage(text);

  return {
    structure,
    meaning,
    language,
    note: "Рекомендательная проверка. Итог — за экспертом."
  };
}
