import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent

    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
    declarations: [
        RegisterComponent,
    ],
})
export class AuthModule {

}