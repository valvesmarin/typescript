// src/index.ts
import { Estudiante, Asignatura, EstadoMatricula, generarReporte } from './domain/types/index';
import { apiClient, RespostaAPI } from './services/api-client';

// ==================== Dados de exemplo ====================
const estudante: Estudiante = {
  id: "est-001",
  nombre: "Maria Oliveira",
  edad: 22,
  email: "maria@universidade.edu"
};

const asignaturas: Asignatura[] = [
  { codigo: "MAT101", nombre: "Matemática", creditos: 4 },
  { codigo: "FIS202", nombre: "Física", creditos: 5 }
];

// ==================== Estados da Matrícula (União Discriminada) ====================
const matriculaAtiva: EstadoMatricula = {
  tipo: "ACTIVA",
  estudiante: estudante,
  asignaturas,
  fechaInicio: new Date()
};

const matriculaSuspendida: EstadoMatricula = {
  tipo: "SUSPENDIDA",
  estudiante: estudante,
  motivo: "Falta de pagamento",
  fechaSuspension: new Date()
};

const matriculaFinalizada: EstadoMatricula = {
  tipo: "FINALIZADA",
  estudiante: estudante,
  notaMedia: 8.7,
  fechaFinalizacion: new Date()
};

// ==================== Testes ====================
console.log("=== RELATÓRIOS DE MATRÍCULA ===");
console.log(generarReporte(matriculaAtiva));
console.log(generarReporte(matriculaSuspendida));
console.log(generarReporte(matriculaFinalizada));

console.log("\n=== TESTE DO SERVIÇO GENÉRICO ===");

async function testarApi() {
  const respostaEstudante = await apiClient.obterRecurso<Estudiante>("estudiantes/1");
  const respostaAsignatura = await apiClient.obterRecurso<Asignatura>("asignaturas/MAT101");

  console.log("✅ Resposta do estudante:", respostaEstudante);
  console.log("✅ Resposta da asignatura:", respostaAsignatura);
}

testarApi();