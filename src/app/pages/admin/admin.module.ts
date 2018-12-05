import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [AdminComponent]
})
export class AdminModule {}
