import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router:Router, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  goToUrl2(){
    (<any>window).ga('send', 'event', {
      eventCategory: 'o_que_e',
      eventLabel: 'link',
      eventAction: 'eventAction',
      eventValue: 10
    });
    this.document.location.href = 'https://hotm.art/o_que_e_dieta_de_21_dias';
  }
  goToUrl3(){
    (<any>window).ga('send', 'event', {
      eventCategory: 'Descubra',
      eventLabel: 'link',
      eventAction: 'eventAction',
      eventValue: 10
    });
    this.document.location.href = 'https://go.hotmart.com/O16610107O?ap=49ae';
  }
  goToUrl4(){
    (<any>window).ga('send', 'event', {
      eventCategory: 'quiz',
      eventLabel: 'link',
      eventAction: 'eventAction',
      eventValue: 10
    });
    this.document.location.href = 'https://go.hotmart.com/O16610107O?ap=b30a';
  }
  goToUrl5(){
    (<any>window).ga('send', 'event', {
      eventCategory: 'Saiba Mais',
      eventLabel: 'link',
      eventAction: 'eventAction',
      eventValue: 10
    });
    this.document.location.href = 'https://go.hotmart.com/O16610107O?ap=c2c5';
  }
  

}
