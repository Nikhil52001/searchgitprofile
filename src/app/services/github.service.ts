import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username='nikhil52001';
    private client_id='20d4fa878e5eba50273c';
    private client_secret='a27687f6422b374a3b122e4cdc57a54c077e0dc1';

    constructor(private http:Http){
        console.log('Github Service init...');
    }

    getUser(){
        return this.http.get("https://api.github.com/users/"+this.username)
        .map(res => res.json());
    }

    updateUsername(username:string){
        this.username=username;
    }
}