import { Component, ViewChild, AfterViewInit } from '@angular/core';
import{ PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

}
  /* Pipeline Stuff
  dummyText: string = " The life of bob was long and hard in the yard";
  title: string = "Angular Course"
  count: number = 28454;
  dcValue: number = 3.8465;
  price: number = 99.99;
  today: Date = new Date();
  postObj: object = {
    id: 1,
    postTitle: "Post 1"
  }
  postArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
    "post 6"
]
userdetails = {
  name: "User 1",
  city: "Newy",
  countryCode: "US"
}
  constructor(){

  }
  
  
}
*/
  /*
  name: string = "";
  email: string = "";
  address:string = "";
  userArray: Array<any> = [];
  onClick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    });
    console.log(this.userArray);
  }
  onDelete(index:any){
    this.userArray.splice(index, 1)
  }
  constructor(){

  }
}
  
  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
  objArray: Array<any> = []
  stepForm: string ="";
  isActive: boolean = true;
  constructor(){
    for(let i =0; i<this.postArray.length; i++){
      console.log(this.postArray[i]);
    }
  }
  addNew(){
    this.objArray.push({id: 6, postTitle: 'Post 6'});
  }
  onDelete(index: any){
    this.objArray.splice(index, 1);
  }
  onClick(status:any){
    this.stepForm = status;
  }

  postTitle: string = "";
  postDetails: string ="";
  imageURL: string= "";
  postURL: string= "";
  addBackground: boolean = false;
  add implements AfterViewInit to title
  title = 'AngIntro';
  parentMessage:string = 'Message changed';
  message1:string ="";
  fromChildOutput:string ="";
  message: string = "Message fronm Typescript";
  imgUrl: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAflBMVEWbWbb///+ZVbWWTrKSRrDZxeOwgcWVTLKYU7SUSbG2ismVTbL9+/307veXUbSpc8Do2+7y6/XBnNGfYLn38/mjZ7y8lc7VvuDFpNTMr9nQttzh0enu5PLTut6mbb63jMqtesPezOagY7rEotO/mdDu5fKufcPq3vCsd8KyhMbGzhRoAAAKSklEQVR4nO2da0PqvBKFS1pMY0tFLiIXRWR7+/9/8ABb0M2tT9KZAudlfda2WSSzZiaTSRRdccUVV1xxxRX/QaQJga3+Ilf6ErdA9feII503CNpJ1ReZ8pfked7rSgxKGMk94ugrrfYa20SvGcUyoxKFeUff3qq2BMwzekteCI1KFm6Mvv6x0u+bTNBLOudJUfSKvr5R5RXpFL3i/hyt9RLZE/r+ZoXvtz30ihsjNypZpDkawF3wAOIhekH7XCdRFBUdNIJJ8Ai66PmNV8lBCcMx4X8IFH4oCE+Z7KhEYW7QGPIwHxu6FWcq+Gu4NhpFmGPn3tDDz1Xwv2H6aBSNkPAAWrqzFfw17ACNYxwwDqiX5yv4a6RoHI0X74FA8s9Y8NcoWMR/7xvx0yXcP/tJtIiiWmgovkY1YUIwEEhIqYMKv59vZL40nnoqQOH3+70dm5vz8xb8NajVePawGvEjeqS3hTsVNLSHsf5+Abb6LwzzYG6x4XAsG3sBgr8GFP4eHZG5Q89r9FVHJQtoXGmO1rFs7FlH+NuAEt1gpiN9QA878wh/G9DRm6GllrFs7JlH+Nugwk9ytPEIPersI/xtQOGfAEcGZmPPP8LfRsEGVp6jhdnYkPTKiQGFv9TGmhfG9SVE+NuAwj8qUWpYKnBRgr8GFf7jOzowG3thgr8GjPiPG5GCxTIXJvhrwCKOo7EnFMaLifC3Qcd3eBpJsIyQFpmz8UZdTRpbZ7M4VdcAGPEfXiUia7XsIwsbPz+MxpNe/vO5ea93/zEezD+Ni1UTmQVLhDUOfUR6y/4/OMI3hTNfo49jv+TbYNp1hd5sgsJ/KEdr2b8HCr6J3d3wg7zgbfTpYiWWUij8+/0+mI0NS+kXyd0TC49X6A0+Ex3VhBH/gTpa9vUhgp+lj8wl/YXWY5opTCUa8e/L0boZ+lf/CN/YPkv07qDZd/IkQeHv7Vojmo31jvBtnwXGezF+lg+X4R7/cCdHm7BSGV/Bj6PAGbTG7FU6HKTCv/1/MBvrWbRnHPycYxhlwq4SFP7m1lLLmNvpJ/j2zttI70PvS3a1UeH/N0ebsWxs7lPuZhx7KEBT1k2CUcS/dbSwzN1H8Isus24IvTvJQyY0Fv2do4XZWJ8I38FohmIumV3wF36ajvOI8BOxRbZGlVMIO4AR/08dLQzOPATfVvCFDmEimCuhwt/1/Hss+MYImqEf9LpyHEHh38wK9oVY8E3E3u+N/FnMQ/KzLbBUBkf4pusR0vtBkCMY8a9CUhqcUcFXZGgBMY6o8C9rFWFwhiN8o8nQwiBK2SN46rdh6M4ZjvCtSMxxGHkkxRE4O75E08HUAC3ag0u8AlpSfjYV8js43aDgO+a2VoJYiSV0B6HhGDDBj+GqrYaBEEd0x4eBqRkVx6p4EMr8w4gfAVbpF7pi9gOh0h0q/ABQ8OEGQX0fVAoq/OVggg/7HoigrEyKAgp/KWCEDwtv/kXeC/kvvxMtx75ZILe+BFv5MNTboD2c9q1bIXr/84S2sn/wJpRhS0TMJzumZT59njmeZvZXccOqeuZm4DOhhKrAaMR/FDDCh6HeCk+R3TMxTWzn/DeVqiWUCAeY4NN9uAWa0cEQooB18UsIdZUSEH7YIwr2qFn8+jdHH2ifcTpOhCEJ4f9CtprmCxrttGTdGjuDj5JqTlZV+GHMCCPCRhMIUQKFWOrsclXhZxE+tURPSKotfNqjVKhWKdUOz2XDQ34D6MxkzE+v2EpvA7rHvx9sLsMIf4zdPctMm9Tx5SoRP4zwYyQKbx6dAhzqEzeTitTChZ/O5Bi5xV4bhWzpSlWMwj3+PWCCHxmUvfPLg7GqzdAWaDuAGfwd0CQxWme+3W5RxdNYqqtLqPDT3J4jnrV32z5LPlGs8U1YxE8bsSBj59/FB/2wt2KbaiHCj51XNJaAoZBpNBArXgsRftx4JwO1RM0AeSZRv5T3GCT8LWxeyTIOyqOS4/ByFUf+wu9RpV/+sLAermTuixkjXNy3AddoYujCAk4SHA/lzhvBc/wb8GN5BWhnHNioFzh0UjHIEn4Rv0eVPnAcQ3cGbflKC2/DvAsv4ffJndvyaCpUmsEEzSXLsX1S/T47MEDQQkMp0itZ8ggNPc7X8FwYcfnzgs8bA9kX7VbGhd/rWB5gPliYwfkm2a6ANOL3OpYHWtUEtiSPkMZMRSmiEb9X9Q5IFoVHCbZ8p78je54PZS08j+Wlf0ofGC7M4CiJoO+4BCru89wsB1PzI3ihZbO6KYocKFHxbK0LfJd2MEXALR0JU0RSqJ4S8V+kyPMg/pWiUlwpKoWuua5d0TQo0hX98rhSqvZhDQWKTHmJwiW5jioUlUfjFxSAqFCkGsaCYgHp5vYaFIHutsF15KAJhVCN+gYaFCXlv3RwSg1kSqV7QGlQBBKzzQtJzC6hQRF4ZqikgZDyTbpLlootAptEgefHQLmv5CbRChoUEYMR5gKT01vSzrUKRSTfG7YcSG8WwQ3rv1ChiGxihklz+XOlTjn8QIWieFb+0O3WbQTEyMkVz2xGo7LQygPZoF/bgkqNUHfiMFQoQnVASoV8YiWzG+hQhC5B9tZ9dG2HfHNsHYoKUv/74ekGo9Ya4fnMg9ChiB0BmXuZDXYfyfxSZhG8btzr0nrWOEKh2bMSRUSeG42ex4NZpY9Y8f4vKFEEr3p6w/EU7PEDz6h4QYsi2F30Azp6Ds1KBb8x0qMI3u8LD97QzqLSmx8raFEUOdjI4GNfD4N/YWgDG52LkdQowp0M7l9LtD9+pW0jdju/S0CNIo+a5XlyxJkxCa4PV7o/W48ij+ZFrekhkkxyw1seqlgiTYqihJ1D/0vSn323xRTJrccz8EXBnlCkyK/VXP707GyRmm8sb7rqD70OFvLrpv2gSJF3i6feeNSZ3rx8fr68TzvDmWfHBd+jthiaFEVpWMuvMHTLvycMuhTV2G5O7yZEVYpqbFqoeE29LkW1tb7MFS8sVKaorgaq74qXFSpTVFMb3qFCmuhnCMoU1dLMeaZ6Jas6RTW0BJc86rkH+hSRcqNKaKlemloLRVGh2ny/J9Z6/wDqoMgYpYtSlsgFL5TZjzooWnCkNo8kr9w5gFooikyhZI9a2qssqosivCPiiYnixc0b1EWRwvVoC39IV+2/URtFkeOdiyEeVT3GDeqjKCp4y2GC/F0z6viFGimKTCZ2PUKj0Y6UPcYN6qRosdimUnnITi1maIV6KYpSM5MgqN1VyzHuomaKFhPpvbJFyqf1TaHoBBRFJulUW21DV5cV+ov6KVpIm30MJ2mUqmzcH8EpKFqQlM2DlltvmEofginHaShakOS+vEOS9tTWaKU3OBVFy4sZoo5HQnLy2K3ZBq1BjmtoFBCukDrz0AQrrjfudN0pJtAK5nN6W4JpYA9GhDS23emofZCn/GPwp2+z08yfb5hyqH9CYW3xPJ2PmuP25P6+1Wrdv03as8Hw4cVYG5+UnnOCMUURZ993fzm3oCYuBC86v+KKK6644oor/s/xP8zvpff6nnCNAAAAAElFTkSuQmCC';
  userName: string = "";
  bool:boolean = false;
  textValue: string = "Value is coming from component";
  

  @ViewChild(PostComponent)
  childComp!: { childMessage: string; }; 

  constructor(){
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
    console.log(this.childComp)
    this.message1 = this.childComp.childMessage
  }
  reciveMessage($event: any){
    this.fromChildOutput = $event;

  }
  buttonClick(){
    console.log('Button worked')
  }
  onKeyup(){
      console.log(this.textValue);

    }
  }
  */


