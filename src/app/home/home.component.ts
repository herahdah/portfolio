import { Component } from '@angular/core';

import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { link } from 'node:fs';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

  animations: [
    trigger('flipIn', [
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ opacity: 0, transform: 'rotateX(-90deg)', offset: 0 }),
          style({ opacity: 0.5, transform: 'rotateX(20deg)', offset: 0.7 }),
          style({ opacity: 1, transform: 'rotateX(0)', offset: 1 })
        ]))
      ])
    ]),
  
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-50px) scale(0.8)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
      ])
    ])
  ]
  


})


export class HomeComponent {
  name = "{S-O}";


  projects = [
    {
      title: 'GRADING SYSTEM',
      description: 'A system designed to automate and manage student grading efficiently.',
      image: 'assets/grading.PNG',
      link:'https://grading-system-gold.vercel.app/'
    },
    {
      title: 'FITNESS APP',
      description: 'An interactive app for tracking workouts, setting goals, and monitoring fitness progress.',
      image: 'assets/training.PNG',
      link:"https://trainingstudio-studio.vercel.app/"
    },
    {
      title: 'FORM VALIDATION',
      description: 'A user-friendly form validation system ensuring accurate and secure data entry.',
      image: 'assets/form.PNG',
      link:"https://form-two-jet-14.vercel.app/"
    },
  ];
}
