import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { metiers } from '../../data/metiers';
import { realisations } from '../../data/realisations';

@Component({
  selector: 'app-metiers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './metiers.component.html',
  styleUrls: ['./metiers.component.scss'],
})
export class MetiersComponent {
  metiersAvecImage = metiers.map((m) => ({
    ...m,
    image: realisations.find((r) => r.categorie === m.slug)?.src ?? '',
  }));

  etapes = [
    {
      titre: 'Écoute & visite',
      texte: 'Nous étudions votre besoin et nous déplaçons pour évaluer l’ouvrage.',
    },
    {
      titre: 'Devis détaillé',
      texte: 'Un chiffrage clair et transparent, sans engagement.',
    },
    {
      titre: 'Réalisation',
      texte: 'Une exécution soignée, dans le respect des normes et des délais.',
    },
    {
      titre: 'Livraison',
      texte: 'Réception des travaux et conseils d’entretien.',
    },
  ];
}
