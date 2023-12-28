import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']  // Notice the square brackets
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q']??'';
      
      if (this.searchTerm.toLowerCase() == 'asus') {
        this.router.navigate(['/asus']);
      } else if (this.searchTerm.toLowerCase() == 'samsung' ) {
        this.router.navigate(['/samsung']); 
      }
      else if (this.searchTerm.toLowerCase() == 'acer') {
        this.router.navigate(['/acer']); 
      }
      else if (this.searchTerm.toLowerCase() == 'adidas') {
        this.router.navigate(['/adidas']); 
      }
      else if (this.searchTerm.toLowerCase() == 'applewatch') {
        this.router.navigate(['/applewatch']); 
      }
      else if (this.searchTerm.toLowerCase() == 'boat') {
        this.router.navigate(['/boat']); 
      }
      else if (this.searchTerm.toLowerCase() == 'converse') {
        this.router.navigate(['/converse']); 
      }
      else if (this.searchTerm.toLowerCase() == 'firebolt') {
        this.router.navigate(['/firebolt']); 
      }
      else if (this.searchTerm.toLowerCase() == 'galaxy book') {
        this.router.navigate(['/galaxy']); 
      }
      else if (this.searchTerm.toLowerCase() == 'galaxywatch') {
        this.router.navigate(['/galaxywatch']); 
      }
      else if (this.searchTerm.toLowerCase() == 'dell') {
        this.router.navigate(['/hp']); 
      }
      else if (this.searchTerm.toLowerCase() == 'infinix') {
        this.router.navigate(['/infinix']); 
      }
      else if (this.searchTerm.toLowerCase() == 'lenovo') {
        this.router.navigate(['/lenovo']); 
      }
      else if (this.searchTerm.toLowerCase() == 'macbook') {
        this.router.navigate(['/mac']); 
      }
      else if (this.searchTerm.toLowerCase() == 'newbalance') {
        this.router.navigate(['/newbalance']); 
      }
      else if (this.searchTerm.toLowerCase() == 'nike') {
        this.router.navigate(['/nike']); 
      }
      else if (this.searchTerm.toLowerCase() == 'noise') {
        this.router.navigate(['/noise']); 
      }
      else if (this.searchTerm.toLowerCase() == 'nothing phone' || this.searchTerm.toLowerCase() === 'nothing') {
        
        this.router.navigate(['/nothing']); 
      }
      
      else if (this.searchTerm.toLowerCase() == 'puma') {
        this.router.navigate(['/puma']); 
      }
      else if (this.searchTerm.toLowerCase() == 'realme') {
        this.router.navigate(['/realme']); 
      }
      else if (this.searchTerm.toLowerCase() == 'reebok') {
        this.router.navigate(['/reebok']); 
      }
      else if (this.searchTerm.toLowerCase() == 'shoes') {
        this.router.navigate(['/shop3']); 
      }
      else if (this.searchTerm.toLowerCase() == 'smartwatch') {
        this.router.navigate(['/shop4']); 
      }
      else if (this.searchTerm.toLowerCase() == 'laptop') {
        this.router.navigate(['/shop2']); 
      }else if (this.searchTerm.toLowerCase() == 'mobile') {
        this.router.navigate(['/shop']); 
      }
      else if (this.searchTerm.toLowerCase() == 'motorola') {
        this.router.navigate(['/motorola']); 
      }
      else{
        this.router.navigate(['/search-results']); 
      }
    });
  }
}
