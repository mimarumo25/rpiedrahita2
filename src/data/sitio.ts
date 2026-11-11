import imagenTrabajo from '../assets/trabajo-negocios.png';

export const firma = {
  nombre: 'RPiedrahíta',
  nombreCompleto: 'RPIEDRAHÍTA AUDITORES & ASOCIADOS S.A.S.',
  anosExperiencia: 40,
  /** Imagen de referencia; reemplazar el archivo importado para cambiarla. */
  imagenNosotros: {
    src: imagenTrabajo,
    alt: 'Imagen de referencia: profesionales colaborando en la revisión de documentos financieros en una oficina luminosa',
  },
  presentacion: [
    'Con más de cuarenta (40) años de trayectoria profesional en la firma RPIEDRAHÍTA AUDITORES & ASOCIADOS S.A.S., acompañamos a las administraciones de las empresas en el Procesamiento Integral de la Contabilidad, Gestión de los Impuestos, BPO de Nómina, Revisoría Fiscal, Debida Diligencia, Auditoría Externa e Interna, con independencia, rigor técnico y visión estratégica.',
    'Con nuestra experiencia aportamos conocimiento especializado para suministrar a los clientes y grupos de interés información financiera, contable y fiscal confiable, fortalecer el control interno y apoyar las decisiones empresariales, fundamentadas en el cumplimiento de las disposiciones legales y normativas aplicables en Colombia.',
    'Somos un aliado fiable y estratégico para la transparencia, gestión responsable y la sostenibilidad empresarial.',
  ],
  asociacion: 'RPIEDRAHÍTA es miembro de la Asociación de Firmas Multinacionales de Servicios Profesionales LEA GLOBAL, fundada en el año 1999, la cual cuenta con más de doscientos cincuenta (250) miembros en todo el mundo.',
  contacto: {
    direccionLinea1: 'Edificio Bermora, Oficina 501',
    direccionLinea2: 'Carrera 50 N° 52 – 22, Pasaje Astoria',
    ciudad: 'Medellín, Colombia',
    telefonoFijo: '(+574) 448 93 90',
    telefonoFijoHref: 'tel:+5744489390',
    whatsapp: '314 892 65 96',
    whatsappHref: 'https://wa.me/573148926596',
    whatsappMensaje: 'Hola, quisiera conocer más sobre los servicios de la firma RPiedrahíta para mi empresa.',
    email: 'contaduria@rpiedrahita.co',
    emailHref: 'mailto:contaduria@rpiedrahita.co',
    mapsEmbed: 'https://www.google.com/maps?q=Pasaje+Astoria+Carrera+50+52+Medellin&output=embed',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Pasaje+Astoria+Carrera+50+52+Medellin',
  },
} as const;

export const whatsappLink = `${firma.contacto.whatsappHref}?text=${encodeURIComponent(firma.contacto.whatsappMensaje)}`;

export const navegacion = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];
