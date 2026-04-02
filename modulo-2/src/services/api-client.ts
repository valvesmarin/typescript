// src/services/api-client.ts

export interface RespostaAPI<T> {
  sucesso: boolean;
  dados: T | null;
  erro?: string;
  timestamp: Date;
}

/**
 * Serviço genérico que simula chamadas a uma API ou banco de dados.
 * Usa Promise + setTimeout para simular latência de rede.
 */

export class ApiClient {
  private delay = 800; // milissegundos (simula rede)

  /**
   * Método genérico para obter qualquer recurso
   */
  
  async obterRecurso<T>(endpoint: string): Promise<RespostaAPI<T>> {
    console.log(`🔄 Buscando dados de: ${endpoint}...`);

    // Simula delay de rede
    await new Promise(resolve => setTimeout(resolve, this.delay));

    // Simulação de dados (para fins didáticos)
    const dadosFicticios = this.gerarDadosFicticios(endpoint) as T;

    return {
      sucesso: true,
      dados: dadosFicticios,
      timestamp: new Date()
    };
  }

  private gerarDadosFicticios(endpoint: string): unknown {
    if (endpoint.includes("estudiantes")) {
      return {
        id: "est-123",
        nombre: "João Silva",
        edad: 21,
        email: "joao@email.com"
      };
    }
    if (endpoint.includes("asignaturas")) {
      return {
        codigo: "MAT101",
        nombre: "Matemática Básica",
        creditos: 4
      };
    }
    return { mensagem: "Dados genéricos" };
  }
}

// Exportação padrão para facilitar uso
export const apiClient = new ApiClient();