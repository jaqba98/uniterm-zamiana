import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormStoreService } from '../service/form-store.service';

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './database.component.html',
  styleUrl: './database.component.scss',
})
export class DatabaseComponent implements OnInit {
  uniterms: any[] = []; // Tablica przechowująca unitermy
  selectedUniterm: any = null; // Wybrany uniterm

  private apiUrl = 'http://localhost:3333/uniterms'; // URL backendu

  constructor(private http: HttpClient, private store: FormStoreService) {}

  ngOnInit(): void {
    // Możesz wywołać loadUniterms() tutaj lub z przycisku
    this.loadUniterms();
  }

  // Pobierz dane z bazy danych
  loadUniterms(): void {
    console.log('Ładowanie unitermów...');
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.uniterms = data;
        console.log('Załadowano unitermy:', data);
      },
      error: (err) => {
        console.error('Błąd podczas ładowania unitermów:', err);
      },
    });
  }

  // Wybierz uniterm i wykonaj dalszą logikę
  selectUniterm(uniterm: any): void {
    this.selectedUniterm = uniterm;
    this.store.setForm(uniterm);
    // Możesz tutaj wykonać dowolną akcję z wybranym unitermem
  }
}
