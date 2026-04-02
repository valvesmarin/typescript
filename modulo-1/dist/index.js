// src/index.ts
import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils';
const dados = [10, 20, 30, 40, 50, 100, 200];
// Testes
console.log("📊 Dados:", dados);
console.log("📈 Média:", calcularMedia(dados));
console.log("📍 Mediana:", calcularMediana(dados));
console.log("🔥 Atípicos (acima de 80):", filtrarAtipicos(dados, 80));
// Teste com array vazio
console.log("\n🔍 Teste com array vazio:");
console.log("Média:", calcularMedia([]));
console.log("Mediana:", calcularMediana([]));
