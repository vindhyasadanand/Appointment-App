import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
//input is imported when we bring a component from another component
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input () aptList; // we are receiving this property as an input from app component.ts file 
  @Output() deleteEvt = new EventEmitter(); 
  //we use @output to send something from this component
  //we created an event and its of type new eventemitter
  
  handleDelete(theApt:object){
    //this event is going to recieve an object 
    //now to delete an object from array of objects so we want to send information from this component and broadcast the changes into parent component
    this.deleteEvt.emit(theApt);
    //in appcomponent.ts file we need to capture this event
    
    
  }
  constructor() { }

  ngOnInit() {
  }

}
