import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent {
  searchTerm: string = '';
  topics = [
    { name: 'Lifecycle Hooks', questions: [ {
      question: 'What is ngOnInitaaaaaaaaaaaaaaaaaaaaa b            b       bbbbbbbbbbb bbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbb?',
      answer: 'ngOnInit is a lifecycle hook that is called after the constructor...aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      code: `ngOnInit() {\n  console.log('Component initialized');\n}`,
    },] },
    { name: 'Topic 2', questions: [{ question: 'Q2', answer: 'A2', code: 'Code2' }] },
    // Add more topics here
  ];
  topic: any;

  filteredTopics() {
    return this.topics.filter(t => t.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  goToTopic(topic: any) {
    this.topic = topic;
    const element = document.getElementById(topic.name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }

  runCode(code: string) {
    console.log('Running code:', code);
  }
}
