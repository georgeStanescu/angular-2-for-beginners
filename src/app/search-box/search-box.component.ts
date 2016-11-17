import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'demo-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input()
  placeholder: string = 'Type your search term';

  constructor() { }

  ngOnInit() {
  }

}
