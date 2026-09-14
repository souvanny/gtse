import { Component, HostListener } from '@angular/core';
import {
  Categorie,
  Realisation,
  categories,
  realisations,
} from '../../data/realisations';

@Component({
  selector: 'app-realisations',
  standalone: true,
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss'],
})
export class RealisationsComponent {
  categories = categories;
  realisations = realisations;
  filtre: Categorie | 'tous' = 'tous';
  lightboxIndex: number | null = null;

  get filtrees(): Realisation[] {
    return this.filtre === 'tous'
      ? this.realisations
      : this.realisations.filter((r) => r.categorie === this.filtre);
  }

  get lightbox(): Realisation | null {
    return this.lightboxIndex === null ? null : this.filtrees[this.lightboxIndex];
  }

  categorieLabel(slug: Categorie): string {
    return categories.find((c) => c.slug === slug)?.libelle ?? '';
  }

  setFiltre(f: Categorie | 'tous'): void {
    this.filtre = f;
    this.fermer();
  }

  ouvrir(r: Realisation): void {
    this.lightboxIndex = this.filtrees.indexOf(r);
  }

  fermer(): void {
    this.lightboxIndex = null;
  }

  precedente(): void {
    if (this.lightboxIndex === null) return;
    const total = this.filtrees.length;
    this.lightboxIndex = (this.lightboxIndex - 1 + total) % total;
  }

  suivante(): void {
    if (this.lightboxIndex === null) return;
    const total = this.filtrees.length;
    this.lightboxIndex = (this.lightboxIndex + 1) % total;
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.lightboxIndex === null) return;
    if (event.key === 'Escape') this.fermer();
    if (event.key === 'ArrowLeft') this.precedente();
    if (event.key === 'ArrowRight') this.suivante();
  }
}
