import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { VERSION } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  version = VERSION;
  mode = 'side'
  opened = false;
  layoutGap = '64';
  fixedInViewport = true;

  constructor(private bpo: BreakpointObserver) { } 

  scrollTo(elementId) {
    this.opened = false;
    (<any>window).ga('send', 'event', {
      eventCategory: elementId,
      eventLabel: 'scrollTo',
      eventAction: 'scrollTo',
      eventValue: 10
    });
    let element = document.getElementById(elementId);
      document.querySelector('.mat-sidenav-content').scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    
    //element.scrollTop += 30;
  }



 

  public ngOnInit(): void {
    const breakpoints = Object.keys(Breakpoints).map(key => Breakpoints[key])
    this.bpo.observe(breakpoints)
    .pipe(map(bst => bst.matches))
    .subscribe(matched => {
      

      console.log('matched');

      this.determineSidenavMode();
      this.determineLayoutGap();
    });
  }

  private determineSidenavMode(): void {
    if (this.isExtraSmallDevice() || this.isSmallDevice()) {
        this.fixedInViewport = false;
        this.mode = 'over';
        this.opened = false;
        return;
    }

    this.fixedInViewport = true;
    this.mode = 'side';
}

private determineLayoutGap(): void {
    if (this.isExtraSmallDevice() || this.isSmallDevice()) {
        this.layoutGap = '0';
        return;
    }

    this.layoutGap = '64';
}

  public isExtraSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.XSmall);
  }

  public isSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.Small)
  }

}
