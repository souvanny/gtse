export type Categorie = 'garde-corps' | 'toiture' | 'etancheite';

export interface Realisation {
  id: string;
  src: string;
  titre: string;
  categorie: Categorie;
}

export const categories: { slug: Categorie | 'tous'; libelle: string }[] = [
  { slug: 'tous', libelle: 'Tous' },
  { slug: 'garde-corps', libelle: 'Garde-corps' },
  { slug: 'toiture', libelle: 'Toiture' },
  { slug: 'etancheite', libelle: 'Étanchéité' },
];

export const realisations: Realisation[] = [
  { id: 'gc-1', src: '/images/garde-corps-couverture.jpeg', titre: 'Garde-corps de toiture-terrasse', categorie: 'garde-corps' },
  { id: 'gc-2', src: '/images/terrasse-dalles-bois.jpeg', titre: 'Terrasse en dalles de bois sur plots', categorie: 'garde-corps' },
  { id: 'gc-3', src: '/images/chantier-1.jpeg', titre: 'Garde-corps et finitions', categorie: 'garde-corps' },
  { id: 'gc-4', src: '/images/chantier-4.jpeg', titre: 'Garde-corps sur mesure', categorie: 'garde-corps' },

  { id: 'toit-1', src: '/images/toiture-zinc.jpeg', titre: 'Toiture zinc à tasseaux', categorie: 'toiture' },
  { id: 'toit-2', src: '/images/toiture-zinc-2.jpeg', titre: 'Couverture zinc — rives et détails', categorie: 'toiture' },
  { id: 'toit-3', src: '/images/toiture-bac-acier.jpeg', titre: 'Toiture en bac acier', categorie: 'toiture' },
  { id: 'toit-4', src: '/images/gouttiere.jpeg', titre: 'Gouttières et évacuations', categorie: 'toiture' },
  { id: 'toit-5', src: '/images/chantier-2.jpeg', titre: 'Réfection de toiture', categorie: 'toiture' },
  { id: 'toit-6', src: '/images/chantier-3.jpeg', titre: 'Chantier de couverture', categorie: 'toiture' },

  { id: 'etan-1', src: '/images/etancheite-ardoisier.jpeg', titre: 'Étanchéité sur ardoisier', categorie: 'etancheite' },
  { id: 'etan-2', src: '/images/etancheite-cheminee.jpeg', titre: 'Étanchéité de souche de cheminée', categorie: 'etancheite' },
  { id: 'etan-3', src: '/images/etancheite-centre-commercial.jpeg', titre: 'Étanchéité de toiture — centre commercial', categorie: 'etancheite' },
  { id: 'etan-4', src: '/images/chantier-5.jpeg', titre: 'Travaux d’étanchéité', categorie: 'etancheite' },
  { id: 'etan-5', src: '/images/chantier-6.jpeg', titre: 'Étanchéité et relevés', categorie: 'etancheite' },
  { id: 'etan-6', src: '/images/chantier-7.jpeg', titre: 'Étanchéité de terrasse', categorie: 'etancheite' },
];
