import { Component, OnInit } from '@angular/core';
import { TextData } from '../../modals/text-modal'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  textData = TextData;
  constructor() { 

  }
  onAboutUs(){
    console.log('ok')
  }

  ngOnInit(): void {
  }

}
