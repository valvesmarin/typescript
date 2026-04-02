// src/domain/types/index.ts

// Entidades do domínio - Sistema Universitário

export interface Estudiante {
  readonly id: string;
  nombre: string;
  edad: number;
  email: string;
}

export interface Asignatura {
  readonly codigo: string;
  nombre: string;
  creditos: number;
}

// União Discriminada (Tagged Union) - Estado da Matrícula
export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;

interface MatriculaActiva {
  tipo: "ACTIVA";
  estudiante: Estudiante;
  asignaturas: Asignatura[];
  fechaInicio: Date;
}

interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  estudiante: Estudiante;
  motivo: string;
  fechaSuspension: Date;
}

interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  estudiante: Estudiante;
  notaMedia: number;
  fechaFinalizacion: Date;
}

// Função que utiliza a união discriminada
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula ativa do estudante ${estado.estudiante.nombre} com ${estado.asignaturas.length} asignaturas.`;

    case "SUSPENDIDA":
      return `Matrícula suspendida do estudante ${estado.estudiante.nombre}. Motivo: ${estado.motivo}`;

    case "FINALIZADA":
      return `Matrícula finalizada do estudante ${estado.estudiante.nombre} com nota média ${estado.notaMedia.toFixed(2)}`;

    default:
      // Análise exaustiva com never (melhoria que o chefe pediu)
      const _exhaustiveCheck: never = estado;
      return "Estado desconhecido";
  }
}