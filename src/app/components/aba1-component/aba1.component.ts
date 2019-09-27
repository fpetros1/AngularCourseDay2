import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-aba1',
    templateUrl: './aba1.component.html',
    styleUrls: [ './aba1.component.css' ]
})
export class Aba1Component implements OnInit{

    public posts: any[] = [];

    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit() {
        const url = `https://jsonplaceholder.typicode.com/posts`;

        this.httpClient.get(url).subscribe(
            (posts: any[]) => {
                this.posts = posts;
            }
        );
    }

    editarPost(id: number) {
        this.router.navigate([id], {
            relativeTo: this.activatedRoute
        });
    }
}