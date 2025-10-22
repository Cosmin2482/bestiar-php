import { Component, OnInit, signal, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type Slide = { src: string; alt: string; title: string; subtitle?: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf], // <- IMPORTANT pt *ngFor / *ngIf
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: Slide[] = [
    { src: 'assets/balaur.jpg', alt: 'Balaur', title: 'Balaurul din Tihuța', subtitle: 'Stăpânul flăcărilor' },
    { src: 'assets/fenrir.jpg', alt: 'Fenrir', title: 'Fenrir', subtitle: 'Lupul apocalipsei' },
    { src: 'assets/phoenix.jpg', alt: 'Phoenix', title: 'Phoenix', subtitle: 'Renaștere din cenușă' },
  ];

  idx = signal(0);
  total = computed(() => this.slides.length);
  current = computed(() => this.slides[this.idx()]);

  private timer: any;

  ngOnInit(): void { this.startAutoplay(); }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.next(), 4000);
  }
  stopAutoplay() { if (this.timer) clearInterval(this.timer); }

  next()  { this.idx.update(i => (i + 1) % this.total()); }
  prev()  { this.idx.update(i => (i - 1 + this.total()) % this.total()); }
  goto(i: number) { this.idx.set(i % this.total()); }

  // drag / swipe / keys
  private startX = 0; private dragging = false;
  onPointerDown(ev: PointerEvent) { this.dragging = true; this.startX = ev.clientX; this.stopAutoplay(); }
  onPointerUp(ev: PointerEvent) {
    if (!this.dragging) return;
    const dx = ev.clientX - this.startX;
    if (dx > 50) this.prev(); else if (dx < -50) this.next();
    this.dragging = false; this.startAutoplay();
  }
  onKey(ev: KeyboardEvent) {
    if (ev.key === 'ArrowLeft') this.prev();
    if (ev.key === 'ArrowRight') this.next();
  }
}
