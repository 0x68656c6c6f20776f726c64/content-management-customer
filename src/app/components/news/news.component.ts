import { Component, OnInit } from '@angular/core';
import { NewsCard } from 'src/models/news_card';
import { Router } from '@angular/router';
import {rowsAnimation} from './../../animations/Stagger';
import { NewsService } from 'src/services/newsServices';
import { InfoServices } from 'src/services/InfoServices';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [rowsAnimation]
})
export class NewsComponent implements OnInit {

  newsCards:NewsCard[];
  page:number = 1;
  defaultElevation = 2;
  maxPage:number;
  pageLimit:number;
  description:string;

  constructor(private router:Router,private news:NewsService,private info:InfoServices) {
   }

  ngOnInit(): void {
    this.maxPage = this.news.getMaximumPage()*10;
    this.newsCards = this.news.getAllNews();
    this.pageLimit = this.info.getNewsPageLimit();
    this.description = this.news.getnewsPageDescription();
  }

  selectNews(id:number)
  {
    this.router.navigateByUrl('articles/'+id);
  }
}
