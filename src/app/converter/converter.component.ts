import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class Converter implements OnInit {
  hectValue: number;

    hectoConvert(teaspoons) {
      alert(teaspoons/20288.4);
    }

    // novemdecConvert() {
    //   const result = (number * 5) / (Math.pow(10, 60));
    // }



  ngOnInit() {
  }

}
