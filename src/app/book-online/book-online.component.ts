import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-online',
  templateUrl: './book-online.component.html',
  styleUrls: ['./book-online.component.css']
})
export class BookOnlineComponent implements OnInit {

  booking = {
    packageId: '',
    name: '',
    email: '',
    mobile: '',
    date: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.booking.packageId = this.route.snapshot.params['packageId'];
  }

  onSubmit() {
    console.log('Booking submitted:', this.booking);
    alert('Thank you for your booking request, ' + this.booking.name + '! We will contact you soon.');
    // In a real app, you would send this data to a server
  }

}
