import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';

// components
import { UserListComponent } from 'app/user-list/user-list.component';
// modules
import { UserListRouterModule } from 'app/user-list/shared/user-list.route';
import { SharedModule } from 'app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { UserService } from 'app/user-list/shared/user.service';
import { UserDetailDialogComponent } from './user-detail-dialog/user-detail-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "@angular/material-moment-adapter";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  imports: [
    TranslateModule,
    SharedModule,
    MatDialogModule,
    UserListRouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [],
  declarations: [
    UserDetailDialogComponent,
    UserListComponent
  ],
  providers: [UserService],
  entryComponents: [UserDetailDialogComponent]
})
export class UserListModule {
}
