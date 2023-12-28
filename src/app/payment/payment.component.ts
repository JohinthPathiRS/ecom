import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cardNumber: string='';
  expiryDate: string='';
  cvv: string='';

  constructor(private router: Router) { }
  onSubmit(form: any) {
    if (form.valid) {
      this.router.navigate(['/product']);
      alert("Payment is Successful")
      
      console.log("Form is valid. Navigating...");
    } else {
      console.log("Form is invalid.");
    }
  }
}
