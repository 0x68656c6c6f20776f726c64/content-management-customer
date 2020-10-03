import { Component, OnInit } from '@angular/core';
import { footerViewModel } from 'src/models/footerViewModel';
import { InfoServices } from 'src/services/InfoServices';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data:footerViewModel

  constructor(private infoService:InfoServices) { }

  ngOnInit(): void {
    this.data = this.infoService.getFooterInfo();
  }

}
