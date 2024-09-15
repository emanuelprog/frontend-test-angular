import { Component } from '@angular/core';
import { ReportService } from '../../services/reports/report.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  establishmentId: string = '';
  startDate: string = '';
  endDate: string = '';

  summary: any;
  hourlySummary: any;
  vehicleMovements: any;

  constructor(private reportService: ReportService) {}

  getSummary() {
    this.reportService.getParkingSummary(this.establishmentId).subscribe({
      next: (data) => {
        this.summary = data;
      },
      error: (err) => {
        console.error('Error fetching parking summary:', err);
      }
    });
  }

  getHourlySummary() {
    this.reportService.getHourlyParkingSummary(this.establishmentId).subscribe({
      next: (data) => {
        this.hourlySummary = data;
      },
      error: (err) => {
        console.error('Error fetching hourly parking summary:', err);
      }
    });
  }

  getVehicleMovements() {
    this.reportService.getVehicleMovementReport(this.establishmentId, this.startDate, this.endDate).subscribe({
      next: (data) => {
        this.vehicleMovements = data;
      },
      error: (err) => {
        console.error('Error fetching vehicle movement report:', err);
      }
    });
  }
}
