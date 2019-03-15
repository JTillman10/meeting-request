import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule {}
