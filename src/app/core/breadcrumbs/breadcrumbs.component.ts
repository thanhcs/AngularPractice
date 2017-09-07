import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from './breadcrumb.interface';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'framework-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';

  public breadcrumbs: Breadcrumb[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {

    // subscribe to the NavigationEnd event
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      // set breadcrumbs
      const root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {

    // get the child routes
    const childrenRoutes: ActivatedRoute[] = route.children;

    // return if route ends
    if (childrenRoutes.length === 0) {
      return breadcrumbs;
    }

    // go through all chilren
    for (const child of childrenRoutes) {

      // check if the child is the primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      // custom data property - breadcrumb - is specified in the route
      if (!child.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // get route's URL
      const routeUrl = child.snapshot.url.map(segment => segment.path).join('/');

      // skip redirect routing
      if (routeUrl === '') {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // append route's url to url
      url += `/${routeUrl}`;

      // add new breadcrumb
      const breadcrumb: Breadcrumb = {
        label: child.snapshot.data[this.ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };

      console.log(breadcrumb);

      breadcrumbs.push(breadcrumb);

      // recursive call
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
