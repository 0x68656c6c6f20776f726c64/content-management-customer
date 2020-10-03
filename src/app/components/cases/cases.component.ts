import { Component, OnInit } from '@angular/core';
import { caseViewModel } from 'src/models/caseViewModel';
import { CasesService } from 'src/services/CasesServices';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  model:caseViewModel= new caseViewModel();

  constructor(private caseService:CasesService) { }

  ngOnInit(): void {
    this.model.cases = this.caseService.getAllCases();
  }

}
