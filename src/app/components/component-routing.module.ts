import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  
import {MatProgressBarModule} from '@angular/material/progress-bar';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations:[DashboardComponent],
  imports: [RouterModule.forChild(routes),CommonModule,MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,MatCardModule,
    FormsModule,
    ReactiveFormsModule,MatTableModule,
    MatProgressBarModule],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
