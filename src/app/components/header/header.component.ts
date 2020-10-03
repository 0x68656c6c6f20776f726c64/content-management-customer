import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { headerViewModel, bannerItem } from 'src/models/headerViewModel';
import { InfoServices } from 'src/services/InfoServices';
import { ProjectServices } from 'src/services/ProjectServices';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  model:headerViewModel = new headerViewModel;

  constructor(private projectServices:ProjectServices,private infoServices:InfoServices) {
  }

  ngOnInit(): void {
    this.model.bannerObjects = this.infoServices.getBanners();
    this.model.logoImage = this.infoServices.getLogo();
    this.model.projectInfo = this.projectServices.getProjectCategoryItem();
  }
}
