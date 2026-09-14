import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { metiers } from '../../data/metiers';
import { realisations } from '../../data/realisations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  metiersAvecImage = metiers.map((m) => ({
    ...m,
    image: realisations.find((r) => r.categorie === m.slug)?.src ?? '',
  }));

  apercu = [
    realisations.find((r) => r.categorie === 'toiture')!,
    realisations.find((r) => r.categorie === 'garde-corps')!,
    realisations.find((r) => r.categorie === 'etancheite')!,
  ];
}
