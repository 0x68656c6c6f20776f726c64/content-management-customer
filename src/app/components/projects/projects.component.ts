import { Component, OnInit } from '@angular/core';
import { projectDetailViewModel } from 'src/models/projectViewModel';
import { ProjectServices } from 'src/services/ProjectServices';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,private projectService:ProjectServices) { }


  model:projectDetailViewModel = new projectDetailViewModel();

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.model = this.projectService.getProjectDetailWithId(params.get('id'));
    });
  }

  goEvaluation()
  {
    this.router.navigate(['/online_evaluation'],{queryParams:{id:this.model.evaluationId}});
  }

}
