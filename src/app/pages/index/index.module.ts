import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [CommonModule, IndexRoutingModule, NgxPaginationModule],
  declarations: [IndexComponent]
})
export class IndexModule {}
