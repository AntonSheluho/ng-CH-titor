import { registerAction } from './../../store/actions/register.action';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private store: Store
    ) { }

    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: '',
            password: '',
        })
        console.log(this.form.valid)
    }

    onSubmit() {
        console.log(this.form.valid)
        this.store.dispatch(registerAction(this.form.value))
    }
}