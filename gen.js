generateOGEVariant() {
  return {
    task1: random(bank.oge.task1.texts),
    task2: random(bank.oge.part2.task2_orfoepia),
    task3: random(bank.oge.part2.task3_lexica),
    ...
    task12: random(bank.oge.part2.task12_text),
    task13: randomChoice([
      random(bank.oge.task13[13_1]),
      random(bank.oge.task13[13_2]),
      random(bank.oge.task13[13_3])
    ])
  }
}
