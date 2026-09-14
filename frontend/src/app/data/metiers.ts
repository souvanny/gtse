export interface Metier {
  slug: string;
  nom: string;
  accroche: string;
  description: string;
  points: string[];
}

export const metiers: Metier[] = [
  {
    slug: 'garde-corps',
    nom: 'Garde-corps',
    accroche: 'Sécurité et élégance pour vos terrasses, balcons et toitures.',
    description:
      'Nous concevons et posons des garde-corps sur mesure, en aluminium, acier ou inox, pour sécuriser vos toitures accessibles, terrasses, balcons et escaliers. Chaque ouvrage est dimensionné selon les normes en vigueur et s’intègre harmonieusement à votre bâtiment.',
    points: [
      'Garde-corps aluminium, acier, inox ou verre',
      'Conception sur mesure et mise aux normes',
      'Pose sur toiture-terrasse, balcon et escalier',
    ],
  },
  {
    slug: 'toiture',
    nom: 'Toiture',
    accroche: 'Couverture, zinguerie et rénovation, du neuf à la réfection.',
    description:
      'De la couverture neuve à la rénovation complète, nous intervenons sur tous types de toitures : zinc, bac acier, ardoise. Nous assurons également la zinguerie, la pose de gouttières et l’ensemble des travaux qui font d’une toiture un ouvrage durable et étanche.',
    points: [
      'Couverture zinc, bac acier et ardoise',
      'Zinguerie, gouttières et évacuations',
      'Réfection, isolation et points singuliers',
    ],
  },
  {
    slug: 'etancheite',
    nom: 'Étanchéité',
    accroche: 'Des toitures plates et terrasses parfaitement étanches.',
    description:
      'Spécialistes de l’étanchéité, nous traitons toitures-terrasses, toitures plates et points singuliers : relevés, chéneaux, acrotères, souches de cheminée. Nous détectons et réparons les infiltrations pour garantir un ouvrage pérenne, quelle que soit sa configuration.',
    points: [
      'Membranes bitumineuses et synthétiques',
      'Relevés, chéneaux et acrotères',
      'Traitement des infiltrations et points singuliers',
    ],
  },
];
