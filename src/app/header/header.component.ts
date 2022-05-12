import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() emitFilterPosts = new EventEmitter<string>();
  filterValue: string = '';

  constructor() { }

  onInputValue() {
    if(this.filterValue.length >= 3) {
      this.emitFilterPosts.emit(this.filterValue)
      console.log(this.filterValue)
    }
  }

  ngOnInit(): void {
  }

}
