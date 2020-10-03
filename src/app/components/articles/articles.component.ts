import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articleViewModel } from 'src/models/articleViewModel';
import { ArticleServices } from 'src/services/ArticleServices';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  model:articleViewModel

  constructor(private route:ActivatedRoute,private article:ArticleServices) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.model = this.article.getContentWithId(params.get('id'));
    });
  }

}
