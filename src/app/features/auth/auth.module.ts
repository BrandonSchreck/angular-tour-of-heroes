import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { reducers } from './reducers';
import { AuthEffects } from './effects/auth.effects';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [
    LoginPageComponent,
    LogoutConfirmationDialogComponent,
    LoginFormComponent,
    LoginFormComponent,
    LogoutConfirmationDialogComponent,
  ],
  entryComponents: [LogoutConfirmationDialogComponent],
})
export class AuthModule {}
