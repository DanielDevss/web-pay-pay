import { SelectOptionType } from "@/components/form/FieldSelect";

export const states = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
      'Campeche',
      'Chiapas',
      'Chihuahua',
      'Coahuila de Zaragoza',
      'Colima',
      'Ciudad de México',
      'Durango',
      'Guanajuato',
      'Guerrero',
      'Hidalgo',
      'Jalisco',
      'Estado de Mexico',
      'Michoacan de Ocampo',
      'Morelos',
      'Nayarit',
      'Nuevo Leon',
      'Oaxaca',
      'Puebla',
      'Queretaro de Arteaga',
      'Quintana Roo',
      'San Luis Potosi',
      'Sinaloa',
    'Sonora',
      'Tabasco',
      'Tamaulipas',
      'Tlaxcala',
      'Veracruz de Ignacio de la Llave',
      'Yucatan',
      'Zacatecas',
  ];

  export const statesOptions : SelectOptionType[] = states.map(state => ({value: state}));