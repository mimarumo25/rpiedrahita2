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
    resumen: 'Evaluamos la razonabilidad de los estados financieros y el cumplimiento de las obligaciones legales y fiscales, con independencia y criterio profesional.',
  },
  {
    slug: 'auditoria-interna',
    titulo: 'Auditoría Interna',
    acento: '#00B0F0',
    icono: 'ph:chart-bar-fill',
    resumen: 'Evaluamos procesos, controles y riesgos para fortalecer el control interno y apoyar la mejora de la operación.',
  },
  {
    slug: 'auditoria-externa',
    titulo: 'Auditoría Externa',
    acento: '#7030A0',
    icono: 'ph:clipboard-text-fill',
    resumen: 'Examinamos los estados financieros y emitimos una opinión independiente sobre su razonabilidad, bajo las normas aplicables.',
  },
  {
    slug: 'outsourcing-contable',
    titulo: 'Outsourcing Contable y Gestión Tributaria',
    acento: '#6CB83F',
    icono: 'ph:calculator-bold',
    resumen: 'Gestionamos el registro contable, las conciliaciones, los estados financieros y las obligaciones tributarias para apoyar decisiones con información oportuna.',
  },
  {
    slug: 'outsourcing-control-interno',
    titulo: 'Outsourcing de Control Interno',
    acento: '#E66C2C',
    icono: 'ph:gear-six-bold',
    resumen: 'Diseñamos e implementamos políticas, procedimientos y controles para proteger los recursos y fortalecer la gestión empresarial.',
  },
  {
    slug: 'nomina',
    titulo: 'BPO de Nómina',
    acento: '#FFC000',
    icono: 'ph:users-bold',
    resumen: 'Procesamos salarios, prestaciones sociales y aportes a seguridad social, con atención a las novedades y obligaciones laborales.',
  },
];
