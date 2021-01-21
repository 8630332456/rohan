import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-topic-event-binding',
  templateUrl: './topic-event-binding.component.html',
  styleUrls: ['./topic-event-binding.component.scss']
})
export class TopicEventBindingComponent implements OnInit {

  name = "Rohan";
  message = "";
  constructor() { }

  ngOnInit(): void {
  }

  showMessageFromInput(input : HTMLInputElement){
    this.message = input.value;
  }

  resetName(){
    this.name="";
  }

  onInput(event : Event){
      this.name = (event.target as HTMLInputElement).value;
    }

  onBlur(event : FocusEvent){
    //type assertion
    this.name = (event.target as HTMLInputElement).value;
  }

}
