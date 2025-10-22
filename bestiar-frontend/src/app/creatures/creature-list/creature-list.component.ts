import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

type Creature = {
  id: number;
  name: string;
  origin: string;
  powers: string[];
  image: string;
  dangerLevel: number;
};

@Component({
  selector: 'app-creature-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss']
})
export class CreatureListComponent implements OnInit {
  creatures: Creature[] = [];

  ngOnInit(): void {
    // mock până legăm API-ul
    this.creatures = [
      { id: 1, name: 'Balaurul din Tihuța', origin: 'România', powers: ['Foc','Zbor'], image: 'assets/balaur.jpg', dangerLevel: 8 },
      { id: 2, name: 'Fenrir', origin: 'Scandinavia', powers: ['Forță','Nemurire'], image: 'assets/fenrir.jpg', dangerLevel: 9 }
    ];
  }
}
