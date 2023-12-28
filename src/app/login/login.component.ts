import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = ''; 

  constructor(private router: Router) { }

  onSubmit(form: any) {
    console.log("Password: ", this.password);
    // Any other logic or validation

    // Navigate to the product route after form processing
    this.router.navigate(['/product']);
  }
}
