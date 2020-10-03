import { Component, OnInit } from '@angular/core';
import { homeViewModel } from 'src/models/homeViewModel';
import { ProjectServices } from 'src/services/ProjectServices';
import { projectTitleItem } from 'src/models/projectViewModel';
import { InfoServices } from 'src/services/InfoServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model:homeViewModel = new homeViewModel();

  constructor(private projectService:ProjectServices,private infoService:InfoServices) { }

  ngOnInit(): void {
    this.model.projectViews = this.projectService.getItemWithCategoryKey(this.infoService.getHomeDisplayProjectKey());
  }

}
