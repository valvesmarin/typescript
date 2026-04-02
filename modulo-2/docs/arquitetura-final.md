 Arquitectura Final - Módulo 2 (TypeScript)

 1. ¿Por qué elegí interface en lugar de type?

- Usé interface para Estudiante y Asignatura porque son entidades del dominio (modelos de negocio).  
  Las interfaces permiten *declaration merging* y son la opción recomendada para orientación a objetos.

- Usé type para EstadoMatricula porque es una Unión Discriminada (el patrón más potente de TypeScript).

 2. Unión Discriminada (Tagged Union)

Es el patrón más importante utilizado en este módulo.  
La propiedad tipo actúa como discriminante, permitiendo que TypeScript haga *narrowing* seguro en el switch.

 3. Análisis Exhaustivo con never

La función generarReporte utiliza never en el caso default del switch.  
Esto garantiza que, si en el futuro agrego un nuevo estado de matrícula, el compilador **me obligue** a actualizar la función.

 4. Genéricos y RespuestaAPI<T>

Creé un servicio genérico ApiClient con el método obtenerRecurso<T>().  
Esto permite reutilizar el mismo código para cualquier tipo de dato manteniendo total seguridad de tipos.

 5. Ventajas frente a JavaScript puro

- Errores detectados en tiempo de compilación (no en runtime)
- Código mucho más legible y auto-documentado
- Refactorización segura
- Escalabilidad para proyectos grandes

**Conclusión:** TypeScript transformó el código de “funciona la mayoría de las veces” a “funciona siempre y de forma predecible”.

---

**Alumno:** Vitor  
**Fecha:** 02 de abril de 2026