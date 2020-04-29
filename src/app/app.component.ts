import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';//we are importing it to bring the data from http client module
import {without}  from 'lodash'; //we are using a library and in that library we want a function called without
//without is a lodash that is going to search for an object and return an array of object without the object that am passing along

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  
  title = 'Get Cure Early';
  theList : object[]; // here data.json file is an array of object
  modifiedList:object[];
  orderBy:string;
  orderType:string;  
  deleteApt(theApt:object){
    this.theList = without(this.theList,theApt);//here it will return new array of objects without the appointment
    this.modifiedList = without(this.theList,theApt);
  }
  searchApt(theQuery: string) {
    this.modifiedList = this.theList.filter(eachItem => {
      return (
        eachItem['petName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||//we are converting the value which user enters and whatever name in the object array to lowercase
        eachItem['ownerName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem['aptNotes']
          .toLowerCase()
          .includes(theQuery.toLowerCase())
      );
    });
  }
  addApt(theApt:object){
    this.theList.unshift(theApt);//here whatever we are receiving we are pushing at the beginnig of array of objects
    this.modifiedList.unshift(theApt);
  }
  
constructor(private http:HttpClient ){ //variable cration happens in the constructor and it initializes the variable
  this.orderBy = 'petName';
  this.orderType ='asc';

}
ngOnInit() : void{ //ngOnInit allow us to do something in the lifecycle of the component
  this.http.get<Object[]>('../assets/data.json').subscribe(data=>{ //this ngOnInit event is going to happen after varable is created for the
     //now using http get request we recieved data from data.json file to app.component.ts file
//subscribe method allows us to get the data
    //now to pass this data from ts file to sub component
 this.theList = data;
 this.modifiedList=data;
 //here we are recievig array of objects from data.json file and we are assing this data to a variable which is of type object
this.sortItems(); 
});
}
sortItems(){
  let order : number;
  if(this.orderType==='asc'){
    order=1;
  }
  else{
    order=-1;
  }
  this.modifiedList.sort((a,b)=>{
   
    if(a[this.orderBy]<b[this.orderBy].toLowerCase()){
      return -1 * order;
    }
    if(a[this.orderBy]>b[this.orderBy.toLocaleLowerCase()]){
      return 1 * order;
    }

  });
}

}