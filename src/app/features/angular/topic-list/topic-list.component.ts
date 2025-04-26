import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent {
  searchTerm: string = '';
  topics = [
    {
      name: 'Signals',
      questions: [
        {
          question: '1. What are Angular Signals?',
          answer:
            'Angular signals are a specific type of variable that used to detect changes for data.$ Signal is reactive Entity that provide wrapper around a value means it holds a value it is used to track state changes and automatically update the UI. It is a new way of handling state management in Angular applications.$ Angular have by default change detection strategy even if one field changed, it re-renders the whole view of that component ().If we use Signal Angular only updates parts which is specifically connected to signal not re-renders the whole component unnecessarily.$ $ Example: Building a like button counter.$',
          code: `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-like-button',
  template: 
    <button (click)="like()">Like ({{ likes() }})</button>

})
export class LikeButtonComponent {
  likes = signal(0);

  like() {
    this.likes.update(count => count + 1);
  }
}
`,
        },
        {
          question: '2. What is a Writable Signal?',
          answer:
            'In Writable Signal we can be read and modified value by using methods like .set(), .update(), or .mutate(). $Writable signals are mutable, reactive containers for data. If Value or state changes and automatically update the UI.',
          code: ``,
        },
        {
          question: '3. What are computed signals?',
          answer:
            'Computed signals are used to derive new values from existing signals. They are read-only and automatically update when their dependencies change. $ Computed signals are useful for creating derived state or performing calculations based on other signals.computed signals can not be modified directly using .set() or .update() methods. $$ Example: we can use computed signals to calculate the total price of items in a shopping cart based on their individual prices and quantities. $  ',
          code: `import { signal, computed } from '@angular/core';

const price = signal(100);
const quantity = signal(2);

// Computed signal
const totalPrice = computed(() => price() * quantity());
`,
        },
        {
          question: '4. What is an Effect in Angular Signals?',
          answer:
            'An effect is a reactive side-effect function that runs automatically whenever the signals it depends on change. Effects are used to perform actions like updating the UI, making API calls, or triggering animations. $ Effects are useful for encapsulating side effects that should occur in response to changes in signals. $ Effects are automatically cleaned up when the component is destroyed, ensuring that they do not leak memory or cause unintended behavior.No need to manually subscribe or unsubscribe from signals. $$ Example: we can use an effect to update the UI whenever a signal changes, such as displaying a notification when a user logs in or out. $  ',
          code: `import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-login-status',
  template: 
    <h2>Login Status</h2>
    <p *ngIf="isLoggedIn()"> Logged In</p>
    <p *ngIf="!isLoggedIn()"> Logged Out</p>

    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>
  
})
export class LoginStatusComponent {
  
  // Writable signal to hold login status
  isLoggedIn = signal(false);

  constructor() {
    // Effect: Reacts whenever isLoggedIn changes
    effect(() => {
      if (this.isLoggedIn()) {
        alert('🎉 You have successfully logged in!');
      } else {
        alert('👋 You have been logged out!');
      }
    });
  }

  login() {
    this.isLoggedIn.set(true);
  }

  logout() {
    this.isLoggedIn.set(false);
  }
}
`,
        },
        {
          question: '5. What is the difference between Signals and Observables?',
          answer:
            'Signals: $Signals are synchronous reactive primitives.$They hold and expose a single value.$Components using Signals automatically update when the Signal value changes.$No need for manual subscriptions or unsubscriptions. Signals are best for local UI state, like form fields, counters, modals, toggles, and computed values.$$Observables:$ Observables are asynchronous data streams.$They emit multiple values over time.You must subscribe to Observables to receive data.Observables are ideal for async workflows, like HTTP requests, WebSocket messages, and user input events.$ Example: we can use an observable to fetch data from an API and update the UI whenever new data is received. $  ',
          code: ``,
        },
      ],
    },
    {
      name: 'Topic 2',
      questions: [{ question: 'Q2', answer: 'A2', code: 'Code2' }],
    },
    // Add more topics here
  ];
  topic: any;

  filteredTopics() {
    return this.topics.filter((t) =>
      t.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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

  // runCode(code: string) {
  //   console.log('Running code:', code);
  // }
}
