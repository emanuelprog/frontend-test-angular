import { Routes } from '@angular/router';
import { EstablishmentsComponent } from './components/establishments/establishments.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

export const routes: Routes = [
  { path: 'establishments', component: EstablishmentsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '', redirectTo: '/establishments', pathMatch: 'full' },
  { path: '**', redirectTo: 'establishments' }
];

