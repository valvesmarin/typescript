// src/math-utils.ts

/**
 * Calcula a média aritmética de um array de números.
 * Retorna null se o array estiver vazio.
 */
export function calcularMedia(numeros: number[]): number | null {
  if (numeros.length === 0) return null;
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  return soma / numeros.length;
}

/**
 * Calcula a mediana de um array de números.
 * Retorna null se o array estiver vazio.
 */
export function calcularMediana(numeros: number[]): number | null {
  if (numeros.length === 0) return null;

  const sorted = [...numeros].sort((a, b) => a - b);
  const meio = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[meio - 1] + sorted[meio]) / 2;
  }
  return sorted[meio];
}

/**
 * Filtra números que estão acima de um determinado limite (atípicos).
 */
export function filtrarAtipicos(numeros: number[], limite: number): number[] {
  return numeros.filter(num => num > limite);
}