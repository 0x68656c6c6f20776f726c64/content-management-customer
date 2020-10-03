import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsCard } from 'src/models/news_card';
import { InfoServices } from './InfoServices';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsCardsSubject : BehaviorSubject<NewsCard>;
  public newsCards: Observable<NewsCard>;
  private data:NewsCard[] =  [    
    { 
      image : "./../../../assets/images/slider-1.jpg",
      post_date:"2020年2月22日",
      author:"Polar Pioneers",
      title:"加拿大移民部长放风：省提名移民额明年将增加",
      description:"加拿大联邦移民部长胡森(Ahmed Hussen)昨表示，明年各省的省提名移民项目的总数将会增加，但各省的具体分配名额尚待进一步落实;不过，他预料很快将可做出决定。",
      newsId:"news1"
    },
    { 
      image : "./../../../assets/images/slider-1.jpg",
      post_date:"2020年2月22日",
      author:"Polar Pioneers",
      title:"加拿大移民部长放风：省提名移民额明年将增加",
      description:"加拿大联邦移民部长胡森(Ahmed Hussen)昨表示，明年各省的省提名移民项目的总数将会增加，但各省的具体分配名额尚待进一步落实;不过，他预料很快将可做出决定。",
      newsId:"news2"
    },
    { 
      image : "./../../../assets/images/slider-1.jpg",
      post_date:"2020年2月22日",
      author:"Polar Pioneers",
      title:"加拿大移民部长放风：省提名移民额明年将增加",
      description:"加拿大联邦移民部长胡森(Ahmed Hussen)昨表示，明年各省的省提名移民项目的总数将会增加，但各省的具体分配名额尚待进一步落实;不过，他预料很快将可做出决定。",
      newsId:"news3"
    },
    { 
      image : "./../../../assets/images/slider-1.jpg",
      post_date:"2020年2月22日",
      author:"Polar Pioneers",
      title:"加拿大移民部长放风：省提名移民额明年将增加",
      description:"加拿大联邦移民部长胡森(Ahmed Hussen)昨表示，明年各省的省提名移民项目的总数将会增加，但各省的具体分配名额尚待进一步落实;不过，他预料很快将可做出决定。",
      newsId:"news4"
    }
  ];
  
  newsPageDescription:string = "移民加拿大，是许多中国人的理想之一，也是许多赴加留学生毕业后的最重要的计划之一。那么加拿大共有多少种移民类型? 各类移民的要求又是哪些? \n 加拿大移民政策多变，根据移民局最新规定,目前加拿大移民种类共9种，人在温哥华Vanpeople网站总结了这9大类移民的简介及基本要求。以下整理的资讯仅供参考，更多信息或者最新信息请登录加拿大移民局官网查询核对";

  constructor(private infoService:InfoServices) {
      this.newsCardsSubject = new BehaviorSubject<NewsCard>(null);
      this.newsCards = this.newsCardsSubject.asObservable();
   }

   public get newsCardsValue():NewsCard{
        return this.newsCardsSubject.value;
   }

//   public getAllNews():NewsCard[]
//   {
//       let start = (pageNumber-1)*this.pageLimit;
//       let end = pageNumber*this.pageLimit>this.data.length?this.data.length:pageNumber*this.pageLimit;
//       var result:NewsCard[]=[];
//       for(let i=start;i<end;i++)
//       {
//           result.push(this.data[i]);
//       }
//       return result;
//   }

  public getAllNews()
  {
      return this.data;
  }
  public getMaximumPage()
  {
      return Math.ceil(this.data.length/this.infoService.getNewsPageLimit());
  }

  public getnewsPageDescription()
  {
    return this.newsPageDescription;
  }

  public getNewsInfoWithId(id:string)
  {
    return this.data.find(({newsId})=>newsId==id);
  }

  public getNewsHeadWithId(key:string)
  {
    return this.data.find(({newsId})=>newsId==key).title;
  }

}