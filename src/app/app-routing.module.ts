import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { EvalComponentModule } from 'projects/eval-component/src/public_api';
//import { EvalComponentModule } from 'eval-component';

//Layouts
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

//Shared components
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { ListRepliesComponent } from './components/list-replies/list-replies.component';

//Routed pages
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { WpPageComponent } from './pages/wp-page/wp-page.component';
import { WpPostComponent } from './pages/wp-post/wp-post.component';
import { WpListPostsComponent } from './pages/wp-list-posts/wp-list-posts.component';

import { WpResolver } from './services/wp-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: { pages: WpResolver },
    data: {
      title: 'Home',
      url: 'pages',
      setParams: {
        _embed: 1,
        slug: 'angular-test'
      },
      cache: true
    }
  },
  {
    path: 'blog',
    component: WpListPostsComponent,
    resolve: { posts: WpResolver },
    data: {
      url: 'posts',
      setParams: {
        _embed: 1
      },
      cache: true,
      title: 'Blog'
    }
  },
  {
    path: 'page/:slug',
    component: WpPageComponent,
    resolve: { pages: WpResolver },
    data: {
      url: 'pages',
      setParams: {
        _embed: 1
      },
      paramMap: {
        slug: 'slug'
      }
    }
  },
  {
    path: 'post/:slug',
    component: WpPostComponent,
    resolve: { posts: WpResolver },
    data: {
      url: 'posts',
      setParams: {
        _embed: 1
      },
      paramMap: {
        slug: 'slug'
      }
    }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HeaderComponent, outlet: 'header' },
  { path: '', component: FooterComponent, outlet: 'footer' },
  { path: '**', component: NotFoundComponent, data: { title: '404 Not Found' } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule,
    EvalComponentModule,
    MDBBootstrapModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    FormsModule,
    AuthenticationComponent,
    UserListComponent,
    PostNewComponent
  ],
  declarations: [
    AuthenticationComponent,
    UserListComponent,
    PostNewComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WpPageComponent,
    ListRepliesComponent,
    NotFoundComponent,
    WpPostComponent,
    WpListPostsComponent
  ],
  providers: [WpResolver],
  schemas: [
    /*NO_ERRORS_SCHEMA*/
  ]
})
export class AppRoutingModule {}
