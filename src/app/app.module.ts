import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {FormsModule} from '@angular/forms';
import { AppendPipe } from './Pipes/append.pipe';
import { AppendCLIPipe } from './Pipes/append-cli.pipe';
import { SummaryPipe } from './Pipes/summary.pipe';
import { PostService } from './Services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
