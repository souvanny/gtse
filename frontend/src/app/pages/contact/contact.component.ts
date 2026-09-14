import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  nom = '';
  email = '';
  telephone = '';
  message = '';

  envoyer(): void {
    const sujet = encodeURIComponent(`Demande de devis — ${this.nom}`);
    const corps = encodeURIComponent(
      `Nom : ${this.nom}\nEmail : ${this.email}\nTéléphone : ${this.telephone}\n\n${this.message}`
    );
    window.location.href = `mailto:contact@gtse.fr?subject=${sujet}&body=${corps}`;
  }
}
