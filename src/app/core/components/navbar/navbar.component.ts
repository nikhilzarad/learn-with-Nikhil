import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  offcanvasEl: HTMLElement | null = null;

  ngAfterViewInit() {
    this.offcanvasEl = document.getElementById('offcanvasRight');
  }

  closeOffcanvas() {
    if (this.offcanvasEl) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(this.offcanvasEl)
        || new bootstrap.Offcanvas(this.offcanvasEl);
      bsOffcanvas.hide();
    }
  }
}
