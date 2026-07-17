/**
 * Datos centralizados de la firma.
 * Editar aquí para que el cambio se propague a todo el sitio.
 */
export const firma = {
  nombre: 'RPiedrahíta',
  nombreCompleto: 'RPiedrahíta Contadores Públicos',
  anosExperiencia: 40,
  empresasProtegidas: 500,
  sanciones: 0,
  contacto: {
    direccionLinea1: 'Edificio Bermora, Oficina 501',
    direccionLinea2: 'Carrera 50 N° 52 – 22, Pasaje Astoria',
    ciudad: 'Medellín, Colombia',
    telefonoFijo: '(+574) 448 93 90',
    telefonoFijoHref: 'tel:+5744489390',
    whatsapp: '314 892 65 96',
    whatsappHref: 'https://wa.me/573148926596',
    whatsappMensaje:
      'Hola, quisiera una consulta gratuita sobre los servicios de la firma RPiedrahíta.',
    email: 'contaduria@rpiedrahita.co',
    emailHref: 'mailto:contaduria@rpiedrahita.co',
    /** Embed de Google Maps para Pasaje Astoria, Carrera 50 con Calle 52, Medellín */
    mapsEmbed:
      'https://www.google.com/maps?q=Pasaje+Astoria+Carrera+50+52+Medellin&output=embed',
  },
  redes: {
    linkedin: '#',
    instagram: '#',
    facebook: '#',
  },
} as const;

/** Enlace de WhatsApp con mensaje precargado */
export const whatsappLink = `${firma.contacto.whatsappHref}?text=${encodeURIComponent(
  firma.contacto.whatsappMensaje
)}`;
