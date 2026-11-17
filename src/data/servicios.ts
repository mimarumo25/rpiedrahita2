export interface Servicio {
  /** Identificador estable de la tarjeta y de las redirecciones antiguas. */
  slug: string;
  titulo: string;
  acento: string;
  icono: string;
  resumen: string;
}

export const servicios: Servicio[] = [
  {
    slug: 'revisoria-fiscal',
    titulo: 'Revisoría Fiscal',
    acento: '#0070C0',
    icono: 'ph:scales-bold',
    resumen: 'La Revisoría Fiscal en Colombia es un mecanismo de fiscalización establecido por la Ley 43 de 1990, equivalente al auditor externo en otros países. El Artículo 10 de esta ley otorga al Contador Público la facultad de dar fe pública sobre los actos propios de la profesión contable.\n\nSu función principal es emitir una opinión independiente sobre la razonabilidad de los Estados Financieros presentados por la administración de las empresas ante las Asambleas de Accionistas, entidades del Estado y organismos de control.\n\nAsimismo, evalúa el cumplimiento de las normas legales y regulatorias y la efectividad del sistema de control interno, con el fin de garantizar la confiabilidad de la información financiera.',
  },
  {
    slug: 'outsourcing-control-interno',
    titulo: 'Outsourcing de Control Interno',
    acento: '#E66C2C',
    icono: 'ph:gear-six-bold',
    resumen: 'El outsourcing de Auditoría Interna es una herramienta gerencial cada vez más utilizada para apoyar a las organizaciones en la articulación de sus procesos administrativos y el logro de sus objetivos.\n\nMediante la aplicación de prácticas internacionales de auditoría, permite evaluar de forma permanente los riesgos que pueden afectarlas y desarrollar planes de prevención que faciliten la toma de decisiones para mitigarlos.',
  },
  {
    slug: 'outsourcing-contable',
    titulo: 'Outsourcing Contable y Gestión Tributaria',
    acento: '#6CB83F',
    icono: 'ph:calculator-bold',
    resumen: 'Es una alternativa estratégica que permite a los administradores enfocarse en el desarrollo del objeto social de la empresa.\n\nEste servicio incluye la codificación, digitación y procesamiento de los registros contables, que sirven de base para la elaboración e interpretación de reportes de información financiera y tributaria, necesarios para la toma de decisiones.',
  },
  {
    slug: 'auditoria-interna',
    titulo: 'Auditoría Interna',
    acento: '#00B0F0',
    icono: 'ph:chart-bar-fill',
    resumen: 'La Auditoría Interna está orientada a evaluar los procesos de gestión de riesgos, control y gobierno corporativo, con el fin de identificar oportunidades de mejora que contribuyan al cumplimiento de los objetivos de la organización.\n\nA través de nuestro servicio de outsourcing, ponemos a disposición de las empresas talento humano especializado para el desarrollo de esta función.',
  },
  {
    slug: 'nomina',
    titulo: 'BPO de Nómina',
    acento: '#FFC000',
    icono: 'ph:users-bold',
    resumen: 'A través de este servicio, RPIEDRAHÍTA realiza el procesamiento y la liquidación de nómina y demás conceptos salariales de los empleados, detallando los devengos y deducciones correspondientes a cada trabajador, incluyendo aquellos destinados al cumplimiento de las obligaciones fiscales y de seguridad social.',
  },
  {
    slug: 'auditoria-externa',
    titulo: 'Auditoría Externa',
    acento: '#7030A0',
    icono: 'ph:clipboard-text-fill',
    resumen: 'Tiene por objeto verificar la razonabilidad, integridad y autenticidad de las cifras presentadas en los Estados Financieros básicos, consolidados o de propósito especial, preparados de acuerdo con el marco de información financiera adoptado por la administración.',
  },
];
