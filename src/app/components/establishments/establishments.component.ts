import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { EstablishmentService } from '../../services/establishments/establishment.service';
import { Establishment } from '../../services/models/establishment.model';

@Component({
  selector: 'app-establishments',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './establishments.component.html',
  styleUrl: './establishments.component.scss'
})
export class EstablishmentsComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'address', 'phone', 'motorcycleSpots', 'carSpots'];
  dataSource: Establishment[] = [];

  constructor(
    private service: EstablishmentService
    ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: data => {
        if (data.body) {
          this.dataSource = data.body.establishments;
          console.log(this.dataSource);
          
        }
      },
      error: (err: any) => {
      }
    })
  }
}
