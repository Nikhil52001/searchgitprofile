import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { SelectorMatcher } from '@angular/compiler';


@Component({
  moduleId:module.id,
  selector: 'github',
  templateUrl: `github.component.html`  
})
export class GithubComponent  {
  user:any;  
  repos:any; 
  username:string;
  search(){    
    this.githubService.updateUsername(this.username);
    this.githubService.getUser().subscribe(user =>{
      this.user = user;
    });    
  }
 constructor( private githubService:GithubService){
  console.log("Github component Init...")  ;  
}

 }
