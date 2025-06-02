import { Component } from '@angular/core';
import { blogList } from '../../../../shared/medium-blogs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  blogList = blogList;
}
