import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgethomeComponent } from './budgethome/budgethome.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { LoginComponent } from './login/login.component';
import { SavingsComponent } from './savings/savings.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'budgethome', component: BudgethomeComponent},
  {path:'expenditure', component: ExpenditureComponent},
  {path:'savings', component: SavingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
