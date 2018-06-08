import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  coinDetail;

  constructor(private api: ApiService) {
    this.api.coinMessage.subscribe(message => this.coinDetail = message);
   }

  ngOnInit() {
  }

}
