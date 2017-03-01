import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/let';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ]
})
export class LayoutComponent implements OnInit {

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http
      .get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
      .forEach(_ => console.log(_));
  }

}
