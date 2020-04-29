import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  showForm: boolean;
  @Output() addEvt = new EventEmitter(); 
  toggleAptDisplay(){
this.showForm = !this.showForm;

  }
  handledAdd(formInfo:any){
    const tempItem : object ={
      petName : formInfo.petName,
      ownerName : formInfo.ownerName,
      aptDate : formInfo.aptDate + ' ' + formInfo.aptTime,
      aptNotes : formInfo.aptNotes
     };
     this.addEvt.emit(tempItem);
     this.showForm = !this.showForm; //if any one are not filling the form and then they are trying to submit thatcase it will simply close the form
  }
  constructor() { 
    this.showForm = true;
  }

  ngOnInit() {
  }

}
