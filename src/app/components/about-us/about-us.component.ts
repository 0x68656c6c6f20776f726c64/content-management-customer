import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { bussinessCardModel } from 'src/models/bussinessCardModel';
import { InfoServices } from 'src/services/InfoServices';
import { aboutUsViewModel } from 'src/models/aboutUsViewModel';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  about_us:FormGroup;
  model:aboutUsViewModel;
  constructor(private _formBuilder: FormBuilder,private info:InfoServices) { }

  ngOnInit(): void {
    this.about_us = this._formBuilder.group(
      {
        name:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required],
        message:['',Validators.required]
      }
    );
    this.model = this.info.getAboutUsInfo();
  }

}
