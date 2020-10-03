import { Component, OnInit } from '@angular/core';
import { sideNavViewModel } from 'src/models/sideNavViewModel';
import { InfoServices } from 'src/services/InfoServices';
import { CasesService } from 'src/services/CasesServices';
import { ProjectServices } from 'src/services/ProjectServices';
import { NewsService } from 'src/services/newsServices';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  model:sideNavViewModel = new sideNavViewModel();

  constructor(private cs:CasesService,private ps:ProjectServices,private ns:NewsService) {
   }

  ngOnInit(): void {
    this.model.projects = this.ps.getItemWithCategoryKey('hot');
    this.model.cases = this.cs.getAllCases();
    this.model.news = this.ns.getAllNews();
  }

}
