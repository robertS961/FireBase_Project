import { Component , Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PostService} from '../Services/post.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Array<any>;
  constructor(private postService: PostService){
    //let postService = new PostService()
    this.posts = postService.postList;
  }
  ngOnInit(): void{

  }
  addNewData(){
    let newPost = {
        id: 7,
        postTitle: "Post 7"

    }
    this.postService.addPost(newPost);
  }
}

  /* export class stuff 
  title:string = "List of Posts";
  messagePost:string = 'Message Post';
  postParentMessage:string = "Message coming from the post parent";
  childMessage:string = "From child component ";
  outputChildMessage: string = 'Message from child vsia ptutput';


  @Input() fromParent!:String;
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }
  */


