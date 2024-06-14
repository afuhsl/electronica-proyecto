import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListComponent } from './components/list/list.component';
import { MatCardModule } from '@angular/material/card';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    InfoComponent,
    FormComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class InfoModule { }
