import { Component } from '@angular/core';
import { ReportService } from '../../services/reports/report.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private reportService: ReportService, private snackBar: MatSnackBar) {}

  getSummary() {
    this.reportService.getParkingSummary(this.establishmentId).subscribe({
      next: (data) => {
        this.summary = data;
      },
      error: (err) => {
        this.onMessage(err.error.message, '', 2000);
      }
    });
  }

  getHourlySummary() {
    this.reportService.getHourlyParkingSummary(this.establishmentId).subscribe({
      next: (data) => {
        this.hourlySummary = data;
      },
      error: (err) => {
        this.onMessage(err.error.message, '', 2000);
      }
    });
  }

  getVehicleMovements() {
    this.reportService.getVehicleMovementReport(this.establishmentId, this.startDate, this.endDate).subscribe({
      next: (data) => {
        this.vehicleMovements = data;
      },
      error: (err) => {
        this.onMessage(err.error.message, '', 2000);
      }
    });
  }

  private onMessage(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, { duration: duration, verticalPosition: 'top', horizontalPosition: 'left' })
  }
}
