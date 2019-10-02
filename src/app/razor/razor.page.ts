import { Component, OnInit } from '@angular/core';

declare var RazorpayCheckout: any;

@Component({
  selector: 'app-razor',
  templateUrl: './razor.page.html',
  styleUrls: ['./razor.page.scss'],
})
export class RazorPage implements OnInit {

  paymentAmount = 333;
  currency = 'INR';
  currencyIcon = '$';
  razorKey = 'rzp_test_p3NNx70zMgBF3L';

  constructor() { }

  ngOnInit() {
  }

  payWithRazor() {
const options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razorKey, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'foo',
      prefill: {
        email: 'admin@enappd.com',
        contact: '9621323231',
        name: 'Enappd'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondistion() {
          alert('dismiss;ed');
        }
      }
    };

const successCallback = (paymentId) => {
      alert('payment_id: ' + paymentId);
    };

const cancelCallback = (error) => {
      alert(error.description + ' (Error ' + error.code + ')');
    };

RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
