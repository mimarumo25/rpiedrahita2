export interface Servicio {
  /** Slug usado en la URL: /servicios/[slug] */
  slug: string;
  titulo: string;
  /** Frase corta para tarjetas y hero */
  tagline: string;
  /** Color de acento del servicio (clase tailwind o hex) */
  acento: Acento;
  /** Icono (ph: o material-symbols) */
  icono: string;
  /** Resumen breve para la tarjeta del grid */
  resumen: string;
  /** Texto del hero de la página de detalle */
  hero: {
    titulo: string;
    subtitulo: string;
  };
  /** "Acerca de este servicio" */
  acerca: string;
  /** "Objetivo principal" */
  objetivo: string;
  /** "¿Qué hacemos? / Alcance" */
  alcance: string[];
  /** "Beneficios comprobados" */
  beneficios: { titulo: string; descripcion: string; icono: string }[];
  /** "¿Para quién es este servicio?" */
  paraQuien: string[];
}

type Acento =
  | 'institu'
  | 'turquesa'
  | 'morado'
  | 'verde-est'
  | 'coral'
  | 'ambar-riesgo';

export const acentoHex: Record<Acento, string> = {
  institu: '#0070C0',
  turquesa: '#00B0F0',
  morado: '#7030A0',
  'verde-est': '#6CB83F',
  coral: '#E66C2C',
  'ambar-riesgo': '#FFC000',
};

export const servicios: Servicio[] = [
  {
    slug: 'revisoria-fiscal',
    titulo: 'Revisoría Fiscal',
    tagline: 'El control fiscal que da tranquilidad a sus socios y al Estado.',
    acento: 'institu',
    icono: 'ph:scales-bold',
    resumen:
      'Cumplimiento normativo, transparencia ante la DIAN y confianza para accionistas e inversionistas.',
    hero: {
      titulo: 'Revisoría Fiscal con autoridad y criterio',
      subtitulo:
        'Garantizamos la razonabilidad de sus estados financieros y el cumplimiento de las normas colombianas, dando tranquilidad a socios, inversionistas y entes de control.',
    },
    acerca:
      'La revisoría fiscal es el máximo órgano de vigilancia de una sociedad en Colombia. Más que un requisito legal, es el escudo que protege a la empresa frente a la DIAN, a los socios y al mercado. Nuestra firma asume este rol con independencia, criterio profesional y un conocimiento profundo de los estándares NIIF y del Estatuto Tributario.',
    objetivo:
      'Opinar con independencia y profesionalismo sobre la razonabilidad de los estados financieros y el cumplimiento de las obligaciones legales, fiscales y societarias de la empresa.',
    alcance: [
      'Dictamen profesional sobre los estados financieros consolidados e individuales.',
      'Revisión y firma de las declaraciones tributarias (IVA, Renta, Retención, ICA).',
      'Vigilancia permanente del control interno y de las operaciones societarias.',
      'Rendición del informe de gestión y del informe de control interno ante la asamblea.',
      'Verificación del cumplimiento del Estatuto Tributario, Código de Comercio y normatividad vigente.',
      'Acompañamiento en procesos de due diligence y atención a entes de control.',
    ],
    beneficios: [
      {
        titulo: 'Cumplimiento normativo real',
        descripcion: 'Cero riesgos de sanciones por incumplimiento de obligaciones fiscales o societarias.',
        icono: 'ph:shield-check-fill',
      },
      {
        titulo: 'Confianza de inversionistas',
        descripcion: 'Estados financieros con dictamen profesional que respaldan decisiones de inversión.',
        icono: 'ph:handshake-fill',
      },
      {
        titulo: 'Visibilidad gerencial',
        descripcion: 'Informes claros que permiten tomar decisiones con datos confiables y oportunos.',
        icono: 'ph:chart-line-up-fill',
      },
      {
        titulo: 'Escudo ante la DIAN',
        descripcion: 'Declaraciones revisadas que minimizan glosas, requerimientos y contingencias.',
        icono: 'ph:umbrella-fill',
      },
    ],
    paraQuien: [
      'Sociedades obligadas a tener revisor fiscal por activos, ingresos o número de empleados.',
      'Empresas con presencia de socios externos o inversionistas que exigen transparencia.',
      'Organizaciones que participan en licitaciones públicas o privadas.',
      'Compañías en proceso de expansión, fusión o búsqueda de capital.',
    ],
  },
  {
    slug: 'auditoria-interna',
    titulo: 'Auditoría Interna',
    tagline: 'El control que mejora su empresa desde adentro, todos los días.',
    acento: 'turquesa',
    icono: 'ph:chart-bar-fill',
    resumen:
      'Evaluamos procesos, controles y riesgos para fortalecer la operación y proteger los recursos.',
    hero: {
      titulo: 'Auditoría Interna que fortalece su operación',
      subtitulo:
        'Identificamos riesgos, evaluamos controles y proponemos mejoras concretas para que su empresa opere con eficiencia, transparencia y seguridad.',
    },
    acerca:
      'La auditoría interna es el sistema inmune de la organización. No busca errores para sancionar, sino oportunidades para proteger y mejorar. Nuestro enfoque combina metodologías basadas en riesgos con análisis de datos para entregar hallazgos accionables, no solo constataciones.',
    objetivo:
      'Agregar valor a la organización evaluando y mejorando la efectividad de los procesos de gestión de riesgos, control y gobierno corporativo.',
    alcance: [
      'Evaluación del sistema de control interno por procesos y áreas críticas.',
      'Auditorías operativas: compras, tesorería, inventarios, ventas y RR. HH.',
      'Auditoría de cumplimiento normativo y políticas internas.',
      'Programas anuales de auditoría basados en mapa de riesgos.',
      'Seguimiento de planes de mejora e indicadores de gestión.',
      'Auditoría forense y prevención de fraude cuando sea requerido.',
    ],
    beneficios: [
      {
        titulo: 'Menos riesgos operativos',
        descripcion: 'Detección temprana de debilidades antes de que se conviertan en pérdidas.',
        icono: 'ph:warning-octagon-fill',
      },
      {
        titulo: 'Procesos más eficientes',
        descripcion: 'Recomendaciones que optimizan tiempos, costos y uso de recursos.',
        icono: 'ph:gauge-fill',
      },
      {
        titulo: 'Prevención de fraude',
        descripcion: 'Controles disuasivos y detectivos que protegen el patrimonio de la empresa.',
        icono: 'ph:lock-key-fill',
      },
      {
        titulo: 'Cultura de control',
        descripcion: 'Equipos que interiorizan buenas prácticas y rendición de cuentas.',
        icono: 'ph:users-three-fill',
      },
    ],
    paraQuien: [
      'Empresas medianas y grandes con operaciones complejas o múltiples sedes.',
      'Organizaciones que requieren un órgano de control interno independiente.',
      'Compañías en crecimiento que necesitan ordenar sus procesos antes de escalar.',
      'Negocios familiares que profesionalizan su gobierno corporativo.',
    ],
  },
  {
    slug: 'auditoria-externa',
    titulo: 'Auditoría Externa',
    tagline: 'Una mirada independiente que valida la verdad financiera de su empresa.',
    acento: 'morado',
    icono: 'ph:clipboard-text-fill',
    resumen:
      'Examen independiente de sus estados financieros bajo NIIF, con dictamen profesional.',
    hero: {
      titulo: 'Auditoría Externa con independencia y rigor técnico',
      subtitulo:
        'Validamos la razonabilidad de sus estados financieros bajo estándares internacionales NIIF, entregando un dictamen independiente que respalda la confianza de socios, bancos y terceros.',
    },
    acerca:
      'La auditoría externa es el examen independiente que certifica que los estados financieros reflejan fielmente la realidad económica de la empresa. Bajo Normas Internacionales de Auditoría (NIA) y marcos NIIF, nuestro trabajo se traduce en un dictamen que abre puertas: créditos bancarios, procesos de venta, licitaciones y confianza institucional.',
    objetivo:
      'Emitir una opinión independiente sobre la razonabilidad de los estados financieros, expresada en un dictamen que cumple las Normas Internacionales de Auditoría.',
    alcance: [
      'Planeación y ejecución de auditoría bajo Normas Internacionales de Auditoria (NIA).',
      'Examen de estados financieros bajo NIIF plenas o para Pymes.',
      'Carta a gerencia con hallazgos, debilidades de control y recomendaciones.',
      'Dictamen de auditoría con opinión limpia, con salvedades o adversa según corresponda.',
      'Auditorías con base en análisis de datos (data analytics) y muestreo estadístico.',
      'Conciliaciones fiscales y revisión de contingencias tributarias.',
    ],
    beneficios: [
      {
        titulo: 'Dictamen confiable',
        descripcion: 'Opinión profesional que cumple exigencias de bancos, socios y entes.',
        icono: 'ph:seal-check-fill',
      },
      {
        titulo: 'Acceso al crédito',
        descripcion: 'Estados financieros auditados facilitan aprobación de créditos y líneas bancarias.',
        icono: 'ph:bank-fill',
      },
      {
        titulo: 'Preparación para venta',
        descripcion: 'Información validada que acelera procesos de due diligence y transacciones.',
        icono: 'ph:handshake-fill',
      },
      {
        titulo: 'Cumplimiento NIIF',
        descripcion: 'Garantía de aplicación correcta de las normas contables internacionales.',
        icono: 'ph:globe-hemisphere-west-fill',
      },
    ],
    paraQuien: [
      'Empresas que requieren estados financieros auditados por exigencia de bancos o socios.',
      'Organizaciones que participan en licitaciones o concursos públicos.',
      'Compañías en proceso de venta, fusión o integración de socios.',
      'Entidades sin ánimo de lucro con obligación de auditoría externa.',
    ],
  },
  {
    slug: 'outsourcing-contable',
    titulo: 'Outsourcing Contable',
    tagline: 'Toda la contabilidad de su empresa en manos expertas, sin contratar personal.',
    acento: 'verde-est',
    icono: 'ph:calculator-bold',
    resumen:
      'Registro, conciliación y generación de estados financieros con equipo experto dedicado.',
    hero: {
      titulo: 'Outsourcing Contable: toda su contabilidad, sin complicaciones',
      subtitulo:
        'Nos encargamos del registro, control y reporte contable completo de su empresa con un equipo experto dedicado, para que usted se enfoque en hacer crecer su negocio.',
    },
    acerca:
      'Tener un departamento contable eficiente es costoso y complejo: software, nómina, capacitación y rotación de personal. Con nuestro outsourcing contable, usted accede a todo un equipo de expertos a una fracción del costo, con tecnología de punta y procesos estandarizados que garantizan precisión y oportunidad.',
    objetivo:
      'Asegurar el registro, control y reporte contable de la empresa con precisión, oportunidad y cumplimiento normativo, liberando al cliente de la carga operativa.',
    alcance: [
      'Registro contable completo y oportuno de todas las operaciones.',
      'Conciliaciones bancarias, de proveedores y de clientes.',
      'Elaboración y presentación de estados financieros mensuales y anuales.',
      'Manejo de cuentas por pagar y cuentas por cobrar.',
      'Liquidación y presentación de impuestos (IVA, Retención, ICA, Renta).',
      'Soporte tecnológico en software contable y migraciones.',
    ],
    beneficios: [
      {
        titulo: 'Reducción de costos',
        descripcion: 'Acceso a un equipo experto sin la carga fija de nómina y prestaciones.',
        icono: 'ph:trend-down-fill',
      },
      {
        titulo: 'Información oportuna',
        descripcion: 'Cierres mensuales a tiempo para decidir con datos reales.',
        icono: 'ph:clock-countdown-fill',
      },
      {
        titulo: 'Cumplimiento tributario',
        descripcion: 'Impuestos calculados y presentados sin sobresaltos ni sanciones.',
        icono: 'ph:receipt-fill',
      },
      {
        titulo: 'Tecnología sin inversión',
        descripcion: 'Software y procesos de punta sin que usted pague licencias ni hardware.',
        icono: 'ph:cpu-fill',
      },
    ],
    paraQuien: [
      'Pymes y startups que no justifican un departamento contable interno.',
      'Empresas que quieren reducir costos administrativos sin perder calidad.',
      'Negocios en crecimiento que necesitan contabilidad escalable.',
      'Compañías que prefieren enfocar su talento en el core del negocio.',
    ],
  },
  {
    slug: 'outsourcing-control-interno',
    titulo: 'Outsourcing Control Interno',
    tagline: 'Diseñamos e implementamos controles que protegen su empresa cada día.',
    acento: 'coral',
    icono: 'ph:gear-six-bold',
    resumen:
      'Estructuramos manuales, políticas y controles que blindan la operación de su empresa.',
    hero: {
      titulo: 'Control Interno a la medida de su empresa',
      subtitulo:
        'Diseñamos e implementamos políticas, manuales y procedimientos que blindan su operación, previenen riesgos y crean una cultura de orden y eficiencia.',
    },
    acerca:
      'El control interno no es burocracia: es el sistema que permite que las cosas se hagan bien, siempre. Diseñamos el modelo COSO a la medida de su empresa, traduciéndolo en manuales, políticas y controles prácticos que las personas pueden realmente aplicar, no documentos que se archivan y se olvidan.',
    objetivo:
      'Diseñar, implementar y mantener un sistema de control interno eficaz que proteja los recursos, asegure la confiabilidad de la información y promueva la eficiencia operativa.',
    alcance: [
      'Diagnóstico del sistema de control interno existente.',
      'Diseño e implementación bajo el modelo COSO y marco integrado.',
      'Elaboración de manuales de funciones, procesos y políticas internas.',
      'Definición de flujos de autorización, segregación de funciones y topes.',
      'Matriz de riesgos y mapa de controles asociados.',
      'Capacitación al personal y acompañamiento en la adopción.',
    ],
    beneficios: [
      {
        titulo: 'Operación protegida',
        descripcion: 'Controles que previenen errores, fraude y pérdidas antes de que ocurran.',
        icono: 'ph:shield-fill',
      },
      {
        titulo: 'Claridad de roles',
        descripcion: 'Cada persona sabe qué hacer, cómo y bajo qué autorización.',
        icono: 'ph:identification-card-fill',
      },
      {
        titulo: 'Auditable y ordenado',
        descripcion: 'Procesos documentados que facilitan auditorías y cumplimiento normativo.',
        icono: 'ph:folder-open-fill',
      },
      {
        titulo: 'Decisión con datos',
        descripcion: 'Información confiable y oportuna para gestión gerencial.',
        icono: 'ph:presentation-chart-fill',
      },
    ],
    paraQuien: [
      'Empresas que quieren profesionalizar su gestión y dejar de operar de memoria.',
      'Negocios familiares en proceso de institucionalizarse.',
      'Organizaciones con crecimiento acelerado que necesitan orden.',
      'Compañías que deben demostrar controles a socios, bancos o entes.',
    ],
  },
  {
    slug: 'nomina',
    titulo: 'Procesamiento y Liquidación de Nómina',
    tagline: 'Nómina exacta y a tiempo, con total cumplimiento de la legislación laboral.',
    acento: 'ambar-riesgo',
    icono: 'ph:users-bold',
    resumen:
      'Liquidación de salarios, prestaciones y aportes seguridad social con precisión y cumplimiento.',
    hero: {
      titulo: 'Nómina sin errores y sin dolores de cabeza',
      subtitulo:
        'Liquidamos salarios, prestaciones sociales y aportes a seguridad social con precisión milimétrica y total cumplimiento de la legislación laboral colombiana, para que sus colaboradores siempre reciban lo justo, a tiempo.',
    },
    acerca:
      'La nómina es uno de los procesos más sensibles de cualquier empresa: involucra dinero, personas y una legislación laboral colombiana compleja y cambiante. Un error puede costar demandas, sanciones o desmotivación. Nuestro servicio combina software especializado con conocimiento experto para garantizar exactitud, oportunidad y cumplimiento total.',
    objetivo:
      'Garantizar la liquidación precisa y oportuna de la nómina y las obligaciones de seguridad social, con estricto cumplimiento de la legislación laboral colombiana.',
    alcance: [
      'Liquidación mensual de salarios, horas extras, recargos y comisiones.',
      'Cálculo y provisión de prestaciones sociales (cesantías, primas, vacaciones, intereses).',
      'Liquidación y pago de aportes a salud, pensión y ARL.',
      'Manejo de novedades: incapacidades, licencias, retiros e ingresos.',
      'Generación de certificados laborales y de ingresos.',
      'Conciliación con PILA y PILA electrónica.',
    ],
    beneficios: [
      {
        titulo: 'Exactitud garantizada',
        descripcion: 'Cálculos sin errores que protegen a la empresa de demandas y glosas.',
        icono: 'ph:target-fill',
      },
      {
        titulo: 'Cumplimiento laboral',
        descripcion: 'Aplicación correcta del Código Sustantivo del Trabajo y normatividad.',
        icono: 'ph:scales-fill',
      },
      {
        titulo: 'Colaboradores felices',
        descripcion: 'Pagos a tiempo y certificados oportunos que generan confianza.',
        icono: 'ph:smiley-fill',
      },
      {
        titulo: 'Aportes sin sanciones',
        descripcion: 'PILA presentada a tiempo, sin errores ni riesgo de multas.',
        icono: 'ph:calendar-check-fill',
      },
    ],
    paraQuien: [
      'Empresas con cualquier número de empleados que buscan tranquilidad en su nómina.',
      'Organizaciones con nóminas complejas (comisiones, turnos, convenciones).',
      'Startups y pymes que no justifican un área de gestión humana.',
      'Compañías que quieren externalizar la operación y enfocarse en el talento.',
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
