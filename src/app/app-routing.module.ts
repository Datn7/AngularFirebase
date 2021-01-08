import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    data: { title: 'signin' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'signup' },
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: { title: 'reset password' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
