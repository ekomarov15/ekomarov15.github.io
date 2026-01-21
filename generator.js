// generator.js
import { bank } from "bank.js";

function random(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateVariant(){
  const variant = [];

  // 1 — изложение
  variant.push({
    number: 1,
    data: random(bank.task1)
  });

  // 2–12 — тест
  for(let i = 2; i <= 12; i++){
    variant.push({
      number: i,
      data: random(bank.tests[i])
    });
  }

  // 13 — сочинение
  variant.push({
    number: 13,
    data: random(bank.task13)
  });

  return variant;
}
