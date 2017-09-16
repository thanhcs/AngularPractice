import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'framework-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app works!';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    // This for dealing with the full URL to the page.
    if (!this.router.navigated) {

      console.log(window.location.pathname);
      if (!this.checkPlant(window.location.pathname)) {
        console.log('WRong plant', window.location.pathname);
        this.router.navigate(['thanh/ideas']);
      }
    }

    // This will check if the name exist in array.
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(
      (event: NavigationEnd) => {
        console.log(this.router);
        console.log(this.route);
        console.log(event);

        if (!this.checkPlant(event.urlAfterRedirects)) {
          console.log('WRong plant');
          this.router.navigate(['thanh/ideas']);
        }
      }
    );
  }

  private checkPlant(url: string) {
    const texts = ['abc', 'game', 'thanh'];

    const nextSlash = url.indexOf('/', 1);
    const currentPlant = url.substring(1, nextSlash);
    console.log(currentPlant);

    return texts.some((element, index, array) => {
      console.log('element: ' + element)
      console.log(texts);
      console.log(texts.indexOf(currentPlant));
      return texts.indexOf(currentPlant) !== -1;
    })
  }
}
