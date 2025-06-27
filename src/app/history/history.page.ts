import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: false
})
export class HistoryPage implements OnInit {
  history: { expression: string, result: number }[] = [];

  constructor() {
    // Mock history data (replace with real storage in a production app)
    this.history = [
      { expression: '2 + 2', result: 4 },
      { expression: 'sin(30)', result: 0.5 }
    ];
  }
  ngOnInit() {
  }

}
