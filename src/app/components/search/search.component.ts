import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() orderBy;
  @Input() orderType;
  @Output () queryEvt = new EventEmitter<string>();
handleQuery(query:string){
  this.queryEvt.emit(query);

}
  constructor( query:string) { 

  }

  ngOnInit() {
  }

}
