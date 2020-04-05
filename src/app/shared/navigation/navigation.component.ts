import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { 

  }
  isNotFound() {
    // return true if the current page is Index
 return this.router.url.match('^/index$');
 }
    isIndexView() {
       // return true if the current page is Index
    return this.router.url.match('^/explore$');
    }
    isRegisterVerigicationView(){
        // return true if the current page is Index
    return this.router.url.match('^/tubeKids/registration$');
    }
    isDashboardView() {
      // return true if the current page is home
   return this.router.url.match('^/tubekids/Dashboard$');
   }



  ngOnInit(): void {
  }

}
