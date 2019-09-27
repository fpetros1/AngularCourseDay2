import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-detalhar-post',
    templateUrl: './detalhar-post.component.html'
})
export class DetalharPostComponent implements OnInit{

    public formularioPost: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private httpClient: HttpClient,
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {

        this.formularioPost = this.formBuilder.group({
            'postId': [],
            'postTitle': [],
            'postBody': []
        });

        this.activatedRoute.params.subscribe(
            (params) => {
                const postId = params['id'];
                const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        
                this.httpClient.get(url).subscribe(
                    (post: any) => {
                        this.formularioPost.patchValue({
                            'postId': post.id,
                            'postTitle': post.title,
                            'postBody': post.body
                        });
                    }
                );
            }
        );

    }

}