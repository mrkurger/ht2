import { Component, OnInit } from '@angular/core';
import { AdvertismentService } from './advertisment.service.js';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.css']
})
export class AdvertismentComponent implements OnInit {
  advertisements: any[] = [];

  constructor(private advertisementService: AdvertismentService) { }

  ngOnInit() {
    this.advertisementService.getAdvertisments().subscribe(
      (data: any[]) => {
        this.advertisements = data;
      }
    );
  }
}
