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
  uniterms: any[] = [];
  selectedUniterm: any = null;

  private apiUrl = 'http://localhost:3333/uniterms';

  constructor(private http: HttpClient, private store: FormStoreService) {}

  ngOnInit(): void {
    this.loadUniterms();
  }

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

  selectUniterm(uniterm: any): void {
    this.selectedUniterm = uniterm;
    this.store.setForm(uniterm);
  }
}
