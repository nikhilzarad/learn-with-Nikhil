import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
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
    //Angular Signals

    {
      name: 'Angular Signals',
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
          question:
            '5. What is the difference between Signals and Observables?',
          answer:
            'Signals: $Signals are synchronous reactive primitives.$They hold and expose a single value.$Components using Signals automatically update when the Signal value changes.$No need for manual subscriptions or unsubscriptions. Signals are best for local UI state, like form fields, counters, modals, toggles, and computed values.$$Observables:$ Observables are asynchronous data streams.$They emit multiple values over time.You must subscribe to Observables to receive data.Observables are ideal for async workflows, like HTTP requests, WebSocket messages, and user input events.$ Example: we can use an observable to fetch data from an API and update the UI whenever new data is received. $  ',
          code: ``,
        },
      ],
    },
    //Angular Lifecycle Hooks
    {
      name: 'Lifecycle Hooks',
      questions: [
        {
          question: '1. What are Lifecycle Hooks in Angular?',
          answer:
            'lifecycle hooks are special methods that get called automatically by Angular at different stages of a component or directives life cycle. lifecycle  hooks are used to determine when a component is created, updated, or destroyed and to perform specific actions at those stages. $ Angular provides several lifecycle hooks, each with its own purpose and timing.',
          code: '',
        },
        {
          question: '2. List of All Lifecycle Hooks (in order)',
          answer:
            'ngOnChanges | Called before ngOnInit and whenever @input data-bound properties change $$ngOnInit | Called once after the first ngOnChanges. It is used for component initialization  $$ngDoCheck | Called during every change detection run, after ngOnChanges and ngOnInit. It is used for custom change detection $$ngAfterContentInit | Called once after the first ngDoCheck. It is used to perform actions after content projection $$ngAfterContentChecked | Called after ngAfterContentInit and every subsequent ngDoCheck. It is used to perform actions after projected content has been checked $$ngAfterViewInit | Called once after the first ngAfterContentChecked. It is used to perform actions after the view and child views have been initialized $$ngAfterViewChecked | Called after ngAfterViewInit and every subsequent ngAfterContentChecked. It is used to perform actions after the view and child views have been checked $$ngOnDestroy | Called just before Angular destroys the directive or component. It is used for cleanup logic, such as unsubscribing from observables or detaching event handlers',
          code: '',
        },
        {
          question: '3. What is the Constructor?',
          answer:
            'The constructor is not a lifecycle hook, but called only once when the component is created.Constructor is a special method that is called when an instance of a class is created. $constructor is used to inject dependencies and initialize properties. $$ Example: we can use the constructor to inject a service and initialize a property with its value. $  ',
          code: ` userName: string;

  constructor(private userService: UserService) {
    // ✅ Inject service
    // ✅ Initialize property immediately
    const user = this.userService.getUser();
    this.userName = user.name;
    console.log('User initialized in constructor:', this.userName);
  }`,
        },
        {
          question: '4. What is ngOnChanges() in Angular?',
          answer:
            'ngOnChanges() is a lifecycle hook that is called before ngOnInit and whenever @Input properties change. It is used to respond to changes in input properties and perform actions based on those changes. $$ Example: we can use ngOnChanges() to update the UI or perform calculations whenever an input property changes. $  ',
          code: `// parent.component.ts
  price = 100;

  //child.component.ts

  @Input() productPrice: number;
  discountedPrice: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productPrice']) {
      const newPrice = changes['productPrice'].currentValue;
      this.calculateDiscount(newPrice);
    }
  }

  calculateDiscount(price: number) {
    this.discountedPrice = price - (price * 0.10); // 10% discount
  }
}
// Original Price: 100
// Discounted Price (10% off): 90
`,
        },
        {
          question: '5. What is ngOnInit() in Angular?',
          answer:
            "ngOnInit() is a lifecycle hook that is called once after ngOnChanges(). It is used to perform component initialization tasks, such as fetching data, setting up subscriptions, and initializing properties. $ngOnInit() is a good place to put any setup logic that requires the component's view to be fully initialized. $$ Example: we can use ngOnInit() to fetch data from a service and initialize properties. $  ",
          code: `ngOnInit() {

         // Example: Fetching data from a service
          
           this.dataService.getData().subscribe(data => {
              this.data = data;
           });

          // Example: Initializing properties
          this.title = 'My Component';
          this.isLoading = true;

          // Example: Setting up subscriptions
          this.subscription = this.dataService.data$.subscribe(data => {
            this.data = data;
          }
          );
        }`,
        },
        {
          question: '6. What is ngDoCheck() in Angular?',
          answer:
            'ngDoCheck() is a lifecycle hook that is called during every change detection run, after ngOnChanges and ngOnInit. $It is used for custom change detection and to perform actions based on changes in the component or its children. $ngDoCheck() is useful for detecting changes that Angular does not automatically detect, such as changes to mutable objects or arrays. $$ Example: we can use ngDoCheck() to compare the current and previous values of an object and perform actions based on the comparison. $  ',
          code: `ngDoCheck() {
          // Example: Custom change detection logic
          if (this.previousValue !== this.currentValue) {
            console.log('Value changed:', this.currentValue);
          }
          this.previousValue = this.currentValue;
        }`,
        },
        {
          question: '7. What is ngAfterContentInit() in Angular?',
          answer:
            'ngAfterContentInit() is a lifecycle hook that is called once after the first ngDoCheck(). It is used to perform actions after external content has been projected into the component. $ngAfterContentInit() is useful for accessing and manipulating projected content, such as child components or templates. <ng-content> is used to project content into a component. $$ Example: we can use ngAfterContentInit() to access and manipulate projected content, such as child components or templates. $  ',
          code: `viewChild('content', { static: true }) contentElement!: ElementRef;

        ngAfterContentInit() {
          // Example: Accessing projected content
          const projectedContent = this.contentElement.nativeElement;
          console.log('Projected content:', projectedContent);
        }`,
        },
        {
          question: '8. What is ngAfterContentChecked() in Angular?',
          answer:
            'ngAfterContentChecked() is a lifecycle hook that is called after ngAfterContentInit and every subsequent ngDoCheck(). It is used to perform actions after projected content has been checked by Angular. $ngAfterContentChecked() is useful for performing actions based on changes in projected content, such as updating the UI or triggering animations. $$ Example: we can use ngAfterContentChecked() to update the UI or trigger animations based on changes in projected content. $  ',
          code: `ngAfterContentChecked() {
          // Example: Triggering animations based on projected content
          this.animateProjectedContent();
        }`,
        },
        {
          question: '9. What is ngAfterViewInit() in Angular?',
          answer:
            'ngAfterViewInit() is a lifecycle hook that is called once after the first ngAfterContentChecked(). It is used to perform actions after the view and child views have been initialized or fully rendered. $ngAfterViewInit() is useful for accessing and manipulating child components or templates, such as setting properties or calling methods. $$ Example: we can use ngAfterViewInit() to access and manipulate child components or templates, such as setting properties or calling methods. $  ',
          code: `ngAfterViewInit() {
          // Example: Accessing child components
          const childComponent = this.childComponentRef.instance;
          childComponent.someMethod();
        }`,
        },
        {
          question: '10. What is ngAfterViewChecked() in Angular?',
          answer:
            'ngAfterViewChecked() is a lifecycle hook that is called after ngAfterViewInit and every subsequent ngAfterContentChecked(). It is used to perform actions after the view and child views have been checked by Angular. $ngAfterViewChecked() is useful for performing actions based on changes in the view or child views, such as updating the UI or triggering animations. $$ Example: we can use ngAfterViewChecked() to update the UI or trigger animations based on changes in the view or child views. $  ',
          code: `ngAfterViewChecked() {
          // Example: Triggering animations based on view changes
          this.animateViewChanges();
        }`,
        },
        {
          question: '11. What is ngOnDestroy() in Angular?',
          answer:
            'ngOnDestroy() is a lifecycle hook that is called just before Angular destroys the directive or component. It is used for cleanup logic, such as unsubscribing from observables, detaching event handlers, and releasing resources. $ngOnDestroy() is important for preventing memory leaks and ensuring that resources are properly released when a component is destroyed. $$ Example: we can use ngOnDestroy() to unsubscribe from observables and release resources when a component is destroyed. $  ',
          code: `ngOnDestroy() {
          // Example: Unsubscribing from observables
          this.subscription.unsubscribe();
        }
          `,
        },
      ],
    },
    //Angular Routing
    {
      name: 'Angular Routing',
      questions: [
        {
          question: '1. What is Angular Routing?',
          answer:
            'Angular routing is a feature that is used to navigate between different views or components in an Angular application. It allows developers to create single-page applications (SPAs) where the content is dynamically loaded without full page reloads. $ Angular routing is managed by the RouterModule, which provides services, directives, and components for implementing routing in an Angular application. $ When a user clicks a link or navigates to a specific URL, the Router matches the URL to a defined route and loads the corresponding component. $ Angular routing also supports features like lazy loading, route guards, and parameterized routes, making it a powerful tool for building complex applications.',
          code: '',
        },
        {
          question: '2. What is RouterModule?',
          answer:
            'RouterModule is an Angular module that provides the necessary services, directives, and components for implementing routing in an Angular application. It is part of the @angular/router package and must be imported into the root module or any feature module where routing is needed. $ RouterModule provides the Router service, which is responsible for managing navigation and state in an application, as well as directives like routerLink and routerOutlet for creating links and displaying routed components.',
          code: ' import { RouterModule } from "@angular/router";',
        },
        {
          question: '3. What is RouterOutlet?',
          answer:
            'RouterOutlet is a directive provided by the RouterModule that acts as a placeholder for displaying routed components in an Angular application. It is used to define where the routed component should be rendered in the template. $ When a user navigates to a specific route, the Router service replaces the content of the RouterOutlet with the corresponding component associated with that route.',
          code: ' <router-outlet></router-outlet>',
        },
        {
          question: '4. What is routerLink?',
          answer:
            'RouterLink is a directive provided by the RouterModule that allows developers to create links to different routes in an Angular application. It is used to bind a route path to an anchor tag or any other HTML element, enabling navigation between different views without full page reloads. $ When a user clicks on a RouterLink, the Router service updates the URL and loads the corresponding component associated with that route. $ RouterLink can also accept route parameters and query parameters, making it flexible for dynamic routing.',
          code: ` <a [routerLink]="['/products', product.id]">View Product</a>`,
        },
        {
          question: '5. What is a Route?',
          answer:
            'A route is a configuration object that defines the mapping between a URL path and a component in an Angular application. It specifies the path to match, the component to load, and any additional data or guards associated with that route. $ Routes are defined in an array and passed to the RouterModule using the forRoot() or forChild() methods. $ When a user navigates to a specific URL, the Router service matches the URL to the defined routes and loads the corresponding component.',
          code: `const routes: Routes = [
          {path: 'products', component: ProductsComponent},
          ];`,
        },
        {
          question: '6. What is a Route Event?',
          answer:
            'Route events are events which are emitted by the Router service during the navigation process in an Angular application. These events provide information about the current navigation state, such as when a route is activated, deactivated, or when navigation starts or ends. $ Route events can be used to perform actions based on the navigation state, such as logging, analytics, or triggering animations. $ Angular provides several built-in route events, including NavigationStart, NavigationEnd, NavigationCancel, and NavigationError. $$ Example: we are biulding E-commerce application.when user navigates to product page to product details page. Application need to show loading spinner until product details page is fully loaded. $in this case we can use NavigationStart and NavigationEnd events to show and hide the loading spinner. $',
          code: `import { Router, NavigationStart } from '@angular/router';
            this.router.events.subscribe(event => {
              if (event instanceof NavigationStart) {
                this.showLoadingSpinner = true;
              } else if (event instanceof NavigationEnd) {
                this.showLoadingSpinner = false;
              }
            }
            `,
        },
        {
          question: '7. What is RouterLinkActive?',
          answer:
            'RouterLinkActive is a directive provided by the RouterModule that allows developers to add CSS classes to an element when its associated RouterLink is active. It is used to highlight the currently active link in a navigation menu or list. $ RouterLinkActive can accept one or more CSS classes to apply when the link is active, making it easy to style active links.',
          code: ` <a [routerLink]="['/products']" routerLinkActive="active">Products</a>`,
        },
        {
          question: '8. What is Router State?',
          answer:
            'Router state is the current state of the Router service in an Angular application. $ Router state is used to manage navigation and track the current location in the application. $ The Router service provides methods to access the router state, such as getCurrentNavigation() and getCurrentUrl(). ',
          code: `import { Router } from '@angular/router';`,
        },
        {
          question: '9. What is Wildcard Route?',
          answer:
            'Wildcard routes are typically used to handle 404 Not Found pages or redirect users to a specific route when they navigate to an undefined URL. $ Wildcard routes are defined using the ** path. $ When a user navigates to a URL that does not match any defined routes, the Router service will load the component associated with the wildcard route. $ Wildcard routes should be defined last in the routes array to ensure that they do not override other routes.',
          code: `const routes: Routes = [
          {path: '**', component: PageNotFoundComponent}`,
        },
        {
          question: '10. What is Route Guard?',
          answer:
            'Route guards are used to control access to routes in an Angular application. They are used to protect routes from unauthorized access, prevent navigation to certain routes, or perform checks before allowing navigation. $ Route guards are implemented as services that implement one or more of the following interfaces: CanActivate, CanDeactivate, Resolve, and CanLoad. $ Route guards can be applied to individual routes or groups of routes in the routing configuration. $$ CanActivate: Used to determine if a route can be activated. $$ Example: we can use CanActivate to check if a user is logged in before allowing access to a protected route. Suppose we have a route for the admin dashboard that should only be accessible to logged-in users. We can use CanActivate to check if the user is authenticated before allowing access to the route. $$ CanDeactivate: Used to determine if a route can be deactivated. $$ Example: Suppose we have a route for editing a user profile. We can use CanDeactivate to prompt the user to save changes before leaving the route. $$ CanLoad: Used to determine if a route can be loaded. $$ Example: we can use CanLoad to check if a user has the necessary permissions to load a lazy-loaded module. suppose we have a lazy-loaded module for the admin dashboard that should only be accessible to users with admin privileges. We can use CanLoad to check if the user has the necessary permissions before loading the module. $$ Resolve: Used to resolve data before activating a route. $$ Example: we can use Resolve to fetch data from a service before activating a route. Suppose we have a route for displaying product details. We can use Resolve to fetch the product data from a service before activating the route. $  ',
          code: `import { Injectable } from '@angular/core';
          import { CanActivate, CanDeactivate, Resolve, CanLoad } from '@angular/router';
          import { AuthService } from './auth.service';
          const routes: Routes = [
          {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
        ]
        @Injectable({
          providedIn: 'root'
        })
        export class AuthGuard implements CanActivate {
          constructor(private authService: AuthService) {}
          canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            // Check if user is logged in
            return this.authService.isLoggedIn();
          
          }
          `,
        },
        {
          question: '11. What is Lazy Loading?',
          answer:
            'Lazy loading is a technique used to load modules or components on demand, rather than loading them all at once when the application starts. $ Lazy loading improves the performance and loading time of an Angular application by reducing the initial bundle size. $ Lazy loading is useful for large applications with multiple modules or features that are not needed immediately. $$ Example: we can use lazy loading to load a feature module only when the user navigates to that feature.Suppose we have a product feature module for managing products that is not needed until the user navigates to the products page. We can use lazy loading to load the products module only when the user navigates to the products page. $  ',
          code: `const routes: Routes = [
          {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)}]`,
        },
        {
          question: '12. What is Eager Loading?',
          answer:
            'Eager loading is the default behavior of Angular, where all modules and components are loaded at once when the application starts. $ Eager loading is useful for small applications or when all modules and components are needed immediately. $ Eager loading can lead to longer loading times and larger bundle sizes for large applications with multiple modules or features. $$ Example: we can use eager loading to load all modules and components at once when the application starts. Suppose we have two feature modules, one for managing products and another for managing orders. We can use eager loading to load both modules at once when the application starts. $  ',
          code: `const routes: Routes = [
          {path: 'products', component: ProductsComponent},
          {path: 'orders', component: OrdersComponent}
          ]`,
        },
        {
          question: '13. What is Preloading Strategy?',
          answer:
            'Preloading strategy is a technique used to load lazy-loaded modules in the background after the application has been loaded. $ Preloading strategy improves the performance and loading time of an Angular application by reducing the initial bundle size and loading lazy-loaded modules in the background. $$Example: we can use preloading strategy to load lazy-loaded modules in the background after the application has been loaded. Suppose we have a product feature module for managing products and an order feature module for managing orders. We can use preloading strategy to load both modules in the background after the application has been loaded. $  ',
          code: `const routes: Routes = [
          {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),data: { preload: true }},
        ]`,
        },
        {
          question: '14. What is Auxiliary Routes?',
          answer:
            'Auxiliary routes are used to load multiple components in the same view or page in an Angular application. $ Auxiliary routes are defined using the (:) syntax in the route path. $ Auxiliary routes are useful for displaying multiple components in the same view or page, such as displaying a sidebar or a modal dialog. $$ Example: we can use auxiliary routes to load multiple components in the same view or page. Suppose we have a product feature module for managing products and an order feature module for managing orders. We can use auxiliary routes to load both modules in the same view or page. $  ',
          code: `const routes: Routes = [
          {path: 'products', component: ProductsComponent, outlet: 'sidebar'},
        ]
          Navigate to the auxiliary route using the routerLink directive:
          <a [routerLink]="[{ outlets: { sidebar: ['products'] } }]">Products</a>`,
        },
        {
          question: '15. What is Route parameter?',
          answer:
            'Route parameters are used to pass dynamic values in the URL path of a route. $ Route parameters are defined using the (:) syntax in the route path. $ Route parameters are useful for passing dynamic values, such as IDs or slugs, in the URL path of a route. $$ Example: Suppose we have a product feature module for managing products. We can use route parameters to pass the product ID in the URL path of the route. $  ',
          code: ` const routes: Routes = [
          {path: 'products/:id', component: ProductDetailsComponent},
        ]
          constructor(private route: ActivatedRoute) {}
          ngOnInit() {
            this.route.params.subscribe(params => {
              const productId = params['id'];
              // Fetch product details using the productId
            });
          }`,
        },
        {
          question: '16. What is Query parameter?',
          answer:
            'Query parameters are used to pass additional values in the URL after the ? symbol. $ Query parameters are defined using the ?key=value syntax in the URL. $ Query parameters are useful for passing additional values, such as filters or sorting options, in the URL. $$ Example: we can use query parameters to pass additional values, such as filters or sorting options, in the URL. $  ',
          code: ` constructor(private route: ActivatedRoute) {}
          ngOnInit() {
            this.route.queryParams.subscribe(params => {
              const filter = params['filter'];
              const sort = params['sort'];
              // Fetch products using the filter and sort options
            });
          }`,
        },
      ],
    },
    //State Management
    {
      name: 'State Management',
      questions: [
        {
          question: '1. What is State Management in Angular?',
          answer:
            'State management is the process of managing the state of an application, including data, UI state, and application logic. $ It is used to store, retrieve, and update and share data between components and services.',
          code: ``,
        },
        {
          question: '2. Why is State Management Important?',
          answer:
            'State management is important for maintaining a consistent and predictable application state, especially in large applications with multiple components and services. $ It helps to avoid data inconsistencies, improve performance, and simplify debugging and testing.',
          code: ``,
        },
        {
          question: ' what is different way to manage state in angular?',
          answer:
            'There are several ways to manage state in Angular applications, including: $ 1. Local component state: Each component can manage its own state using properties and methods. using @Input and @Output decorators to pass data between parent and child components. $$ 2. Services: Services can be used to share state between components and manage application-wide state. Services can use RxJS subjects or BehaviorSubjects to create observables for state changes. $$ 3. State management libraries: Libraries like NgRx, Akita, NGXS, and MobX provide more advanced state management solutions for larger applications. These libraries offer features like centralized stores, actions, reducers, and selectors to manage application state more effectively. $$ 4. Signals: Signals are a new way to manage state in Angular applications. They are reactive primitives that allow components to automatically update when the signal value changes. Signals can be used for local UI state, computed values, and more. $$ 5. NgRx Component Store: NgRx Component Store is a lightweight state management solution for managing local component state in Angular applications. It provides a simple API for creating stores and managing state without the complexity of NgRx. $  ',
        },
        {
          question: '4. What is NgRx?',
          answer:
            'NgRx is a popular state management library for Angular applications that is based on the Redux pattern. $ It provides a centralized store for managing application state, actions for updating state, and selectors for retrieving state. $ NgRx also includes features like effects for handling side effects and devtools for debugging and monitoring state changes.',
          code: ``,
        },
        {
          question: '5. What is Redux?',
          answer:
            'Redux is a predictable state container for JavaScript applications that is based on the Flux architecture. $ It provides a centralized store for managing application state, actions for updating state, and reducers for processing actions and updating the store. $ Redux is often used with React but can be used with any JavaScript framework or library.',
          code: ``,
        },
        {
          question: '6. What is a Store in NgRx?',
          answer:
            'A store is a centralized container for managing application state in NgRx. $ It holds the current state of the application and provides methods for updating and retrieving state. $ The store is immutable, meaning that state can only be updated by dispatching actions and processing them with reducers.',
          code: ``,
        },
        {
          question: '7. What are Actions in NgRx?',
          answer:
            'Actions are payloads of information that send data from the application to the store in NgRx. $ They are used to describe events that occur in the application, such as user interactions or API responses. $ Actions are dispatched to the store to trigger state updates and are processed by reducers to update the state.',
          code: ``,
        },
        {
          question: '8. What are Reducers in NgRx?',
          answer:
            'Reducers are pure functions that take the current state and an action as input and return a new state as output in NgRx. $ They are used to process actions and update the store based on the action type and payload. $ Reducers must not mutate the current state and should always return a new state object.',
          code: ``,
        },
        {
          question: '9. What are Selectors in NgRx?',
          answer:
            'Selectors are pure functions that take the store state as input and return a derived state or a specific slice of the state as output in NgRx. $ They are used to retrieve data from the store and can be composed to create more complex selectors. $ Selectors help to improve performance by memoizing results and reducing unnecessary re-renders of components.',
          code: ``,
        },
        {
          question: '10. What are Effects in NgRx?',
          answer:
            'Effects are used to handle side effects in NgRx, such as API calls, navigation, or logging. $ They listen for specific actions dispatched to the store and perform asynchronous operations based on those actions. $ Effects can also dispatch new actions to update the store based on the result of the side effect.',
          code: ``,
        },
      ],
    },
    //Performance Optimization
    {
      name: 'Performance Optimization',
      questions: [
        {
          question: '1. What is Performance Optimization in Angular?',
          answer:
            'Performance optimization is the process of improving the performance and efficiency of an Angular application. $ it used to reduce loading times, improve rendering speed, and enhance the overall user experience. $ Performance optimization is important for ensuring that an application runs smoothly and efficiently, especially in large applications with complex components and data.',
          code: ``,
        },
        {
          question:
            '2. what are the different ways to optimize performance in Angular?',
          answer:
            'There are several ways to optimize performance in Angular applications, including: $ 1. Change detection strategy: Use OnPush change detection strategy to reduce the number of change detection cycles and improve performance. $$ 2. Lazy loading: Use lazy loading to load modules and components on demand, reducing the initial bundle size and improving loading times. $$ 3. TrackBy function: Use TrackBy function with ngFor directive to improve rendering performance by tracking changes in lists and preventing unnecessary re-renders. $$ 4. Pure pipes: Use pure pipes to optimize data transformations and prevent unnecessary recalculations. $$ 5. AOT compilation: Use Ahead-of-Time (AOT) compilation to pre-compile templates and improve loading times. $$ 6. Service workers: Use service workers to cache assets and improve offline performance. $$ 7. Web workers: Use web workers to offload heavy computations and improve performance. $  ',
          code: ``,
        },
        {
          question: '3. What is Change Detection in Angular?',
          answer:
            'Use OnPush change detection strategy to reduce the number of change detection cycles and improve performance. it check for changes only when the input properties change or when an event occurs. $$ Example: suppose we have a component that receives input properties from its parent component. We can use OnPush change detection strategy to optimize performance by checking for changes only when the input properties change or when an event occurs. $  ',
          code: `import { ChangeDetectionStrategy } from '@angular/core';
          @Component({
            selector: 'app-my-component',
            templateUrl: './my-component.component.html',
            styleUrls: ['./my-component.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush,
          })
        `,
        },
        {
          question: '4. What is TrackBy function in Angular?',
          answer:
            'TrackBy function is used with ngFor directive to improve performance when rendering lists of items. it helps Angular to identify and track items in the list, reducing the number of DOM manipulations and improving rendering speed. $$ Example: suppose we have a list of products that we want to render using ngFor directive. We can use trackBy function to optimize performance by helping Angular to identify and track items in the list. $  ',
          code: `*ngFor="let product of products; trackBy: trackByProductId"`,
        },
        {
          question: '5. What is AOT compilation in Angular?',
          answer:
            'AOT compilation is a technique used to pre-compile templates and components at build time, rather than at runtime. it helps to reduce loading times and improve rendering speed by eliminating the need for runtime compilation. $$ Example: suppose we have a large application with multiple components and templates. We can use AOT compilation to optimize performance by pre-compiling templates and components at build time, reducing loading times and improving rendering speed. $  ',
          code: `ng build --prod --aot`,
        },
        {
          question: '6. What is RXJS operators in Angular?',
          answer:
            'RXJS operators are used to optimize performance when handling user input and events. it helps to reduce the number of events and improve performance by controlling the frequency of events. $$ Example: suppose we have a search input field that triggers an API call on every keystroke. We can use debounceTime operator to optimize performance by reducing the number of API calls and improving performance. $  ',
          code: `import { debounceTime } from 'rxjs/operators';
          this.searchInput.valueChanges.pipe(debounceTime(300)).subscribe(value => {
            // Perform search operation
          });`,
        },
        {
          question: '7. What is Angular Universal?',
          answer:
            'Angular Universal is a technology that enables server-side rendering (SSR) for Angular applications. it helps to improve loading times and SEO by rendering the application on the server before sending it to the client. $$ Example: suppose we have a large application with multiple components and templates. We can use Angular Universal to optimize performance by enabling server-side rendering (SSR) for the application, improving loading times and SEO. $  ',
          code: `ng add @nguniversal/express-engine`,
        },
        {
          question: '8. What is pure pipes in Angular?',
          answer:
            'Pure pipes are used to optimize performance when transforming data in templates. it helps to reduce the number of change detection cycles and improve performance by caching the results of the pipe. $$ Example: suppose we have a component that transforms data using a custom pipe. We can use pure pipes to optimize performance by reducing the number of change detection cycles and improving performance. $  ',
          code: `@Pipe({ name: 'myPipe', pure: true })`,
        },
        {
          question: '9. What is Image optimization in Angular?',
          answer:
            'Image optimization is the process of reducing the size of images and assets to improve loading times and performance. it helps to reduce the size of images and assets, improving loading times and performance. $$ Example: suppose we have a large application with multiple images and assets. We can optimize images and assets to improve performance by reducing the size of images and assets, improving loading times and performance. $  ',
          code: `ng build --prod --optimization`,
        },
        {
          question: '10. What is Web Workers in Angular?',
          answer:
            'Web Workers are a browser feature that allows you to run scripts in background threads. In Angular, Web Workers are used to offload CPU-intensive tasks so the main thread (UI) remains responsive. $ Web Workers are useful for performing heavy computations, such as data processing or image manipulation, without blocking the UI thread. $$ Example: usecases of Web Workers in Angular include: $ 1. Data processing: If you have a large dataset that needs to be processed, you can use a Web Worker to perform the processing in the background while keeping the UI responsive. $ 2. Image manipulation: If you need to perform image processing tasks, such as resizing or filtering, you can use a Web Worker to offload the processing to a separate thread. $ 3. Complex calculations: If you have complex calculations that take a long time to complete, you can use a Web Worker to perform the calculations in the background without blocking the UI thread. $  ',
          code: ``,
        },
        {
          question: '11. What is Service Workers in Angular?',
          answer:
            'Service Workers are a script that runs in the background of your web application and acts as a proxy between your application and the network. In Angular, Service Workers are used to enable offline capabilities and improve performance by caching assets and API responses. $ Service Workers are useful for creating Progressive Web Apps (PWAs) that can work offline and provide a better user experience. $$ Example: usecases of Service Workers in Angular include: $ 1. Offline capabilities: If you want your application to work offline, you can use a Service Worker to cache assets and API responses so that they are available when the user is offline. $ 2. Background sync: If you want to synchronize data with the server when the user comes back online, you can use a Service Worker to perform background sync operations. $ 3. Push notifications: If you want to send push notifications to users, you can use a Service Worker to handle push notifications and display them to the user. $  ',
          code: ``,
        },
      ],
    },
    //CI/CD
    {
      name: 'CI/CD',
      questions: [
        {
          question: '1. What is CI/CD?',
          answer:
            'CI/CD stands for Continuous Integration and Continuous Deployment. It is a set of practices and tools that enable developers to automate the process of integrating code changes, testing, and deploying applications. $ CI/CD helps to improve the speed and quality of software delivery by automating repetitive tasks and reducing manual errors.',
          code: ``,
        },
        {
          question: '2. What is Continuous Integration (CI)?',
          answer:
            'Continuous Integration (CI) is the practice of automatically integrating code changes from multiple developers into a shared repository. $ CI helps to detect and fix integration issues early in the development process by running automated tests and building the application whenever code changes are made.',
          code: ``,
        },
        {
          question: '3. What is Continuous Deployment (CD)?',
          answer:
            'Continuous Deployment (CD) is the practice of automatically deploying code changes to production environments after passing automated tests. $ CD helps to reduce the time and effort required to deploy applications by automating the deployment process and ensuring that only tested and verified code is deployed to production.',
          code: ``,
        },
        {
          question: '4. What are the benefits of CI/CD?',
          answer:
            'The benefits of CI/CD include: $ 1. Faster delivery: CI/CD helps to speed up the software delivery process by automating repetitive tasks and reducing manual errors. $ 2. Improved quality: CI/CD helps to improve the quality of software by running automated tests and ensuring that only tested and verified code is deployed to production. $ 3. Reduced risk: CI/CD helps to reduce the risk of deployment failures by automating the deployment process and ensuring that only tested and verified code is deployed to production. $ 4. Better collaboration: CI/CD helps to improve collaboration between developers, testers, and operations teams by providing a shared platform for integrating code changes, testing, and deploying applications. $ 5. Increased efficiency: CI/CD helps to increase efficiency by automating repetitive tasks and reducing manual errors, allowing developers to focus on writing code and delivering value to customers. $  ',
          code: ``,
        },
        {
          question: '5. What are some popular CI/CD tools?',
          answer:
            'Some popular CI/CD tools include Jenkins, Travis CI, CircleCI, GitLab CI/CD, Azure DevOps, and AWS CodePipeline. These tools provide features for automating the build, test, and deployment processes in CI/CD pipelines.',
          code: ``,
        },
        {
          question: '6. What is a CI/CD pipeline?',
          answer:
            'A CI/CD pipeline is a set of automated processes that enable developers to integrate code changes, run tests, and deploy applications in a continuous manner. A typical CI/CD pipeline includes stages for building the application, running tests, deploying to staging environments, and deploying to production environments.',
          code: ``,
        },
        {
          question: '7. What is a build server?',
          answer:
            'A build server is a server that is responsible for building and testing applications in a CI/CD pipeline. Build servers automatically trigger builds whenever code changes are made and run automated tests to ensure that the application is functioning correctly before deploying it to production environments.',
          code: ``,
        },
        {
          question: '8. What is a deployment server?',
          answer:
            'A deployment server is a server that is responsible for deploying applications to production environments in a CI/CD pipeline. Deployment servers automatically trigger deployments whenever code changes are made and ensure that the application is functioning correctly after deployment.',
          code: ``,
        },
        {
          question: '9. What is a rollback?',
          answer:
            'A rollback is the process of reverting an application to a previous version in case of deployment failures or issues. Rollbacks are an important part of CI/CD pipelines as they help to ensure that applications can be quickly restored to a stable state in case of issues.',
          code: ``,
        },
        {
          question: '10. What is linting?',
          answer:
            'Linting is the process of analyzing code for potential errors, style issues, and best practices. Linting tools help to enforce coding standards and improve code quality by identifying and fixing issues in the codebase.',
          code: `ng lint`,
        },
        {
          question: '11. What are the steps in a CI/CD pipeline?',
          answer:
            'The steps in a CI/CD pipeline typically include: $ 1. Code commit: Developers commit code changes to a shared repository. $ 2. Build: The CI/CD pipeline automatically triggers a build process to compile the application and run automated tests. $ 3. Test: The CI/CD pipeline runs automated tests to ensure that the application is functioning correctly. $ 4. Deploy: The CI/CD pipeline automatically deploys the application to staging environments for further testing. $ 5. Production deployment: After passing all tests, the CI/CD pipeline automatically deploys the application to production environments. $ 6. Monitoring: The CI/CD pipeline monitors the application for issues and performance metrics after deployment. $ 7. Rollback: In case of deployment failures or issues, the CI/CD pipeline can automatically roll back the application to a previous version. $  ',
          code: ``,
        },
      ],
    },
    //WCAG Accessibility
    {
      name: 'WCAG Accessibility',
      questions: [
        {
          question: '1. What is WCAG Accessibility?',
          answer:
            'WCAG (Web Content Accessibility Guidelines) is a International standard which is developed by the World Wide Web Consortium (W3C) to provide guidelines for making web content more accessible to people with disabilities. ',
          code: ``,
        },
        {
          question: '2. What are the principles of WCAG?',
          answer:
            'The principles of WCAG are: $ 1. Perceivable: Content must be presented in a way that can be perceived by all users, including those with visual, auditory, or cognitive disabilities. $ 2. Operable: Content must be operable by all users, including those who use assistive technologies or have limited mobility. $ 3. Understandable: Content must be understandable to all users, including those with cognitive disabilities. $ 4. Robust: Content must be robust enough to work with current and future technologies, including assistive technologies. $  ',
          code: ``,
        },
        {
          question: '3. What are the levels of WCAG conformance?',
          answer:
            'The levels of WCAG conformance are: $ 1. Level A: The minimum level of conformance that must be met for a website to be considered accessible. $ 2. Level AA: The intermediate level of conformance that addresses the most common accessibility issues. $ 3. Level AAA: The highest level of conformance that addresses all accessibility issues but may not be achievable for all content. $  ',
          code: ``,
        },
        {
          question: '4. What are some common WCAG success criteria?',
          answer:
            'Some common WCAG success criteria include: $ 1. Text alternatives for non-text content (Level A) $ 2. Captions for audio and video content (Level A) $ 3. Keyboard accessibility (Level A) $ 4. Color contrast (Level AA) $ 5. Resizable text (Level AA) $ 6. Clear navigation and headings (Level AA) $ 7. Error identification and suggestions (Level AA) $ 8. Accessible forms (Level AA) $ 9. Accessible tables (Level AA) $ 10. Accessible multimedia content (Level AAA) $Aria attributes for dynamic content (Level A) $  ',
        },

        {
          question: '5. What are some tools for testing WCAG accessibility?',
          answer:
            'Some tools for testing WCAG accessibility include: $ 1. WAVE: A web accessibility evaluation tool that provides visual feedback on accessibility issues. $ 2. Axe: An accessibility testing tool that integrates with browser developer tools and provides automated testing for WCAG compliance. $ 3. Lighthouse: A performance and accessibility testing tool built into Chrome DevTools that provides audits for WCAG compliance. $ 4. JAWS: A screen reader that can be used to test the accessibility of web content for visually impaired users. $ 5. NVDA: A free and open-source screen reader that can be used to test the accessibility of web content for visually impaired users. $  ',
          code: ``,
        },

        {
          question: '6. What are some best practices for WCAG accessibility?',
          answer:
            'Some best practices for WCAG accessibility include: $ 1. Use semantic HTML to structure content and provide meaning. $ 2. Provide text alternatives for non-text content, such as images and videos. $ 3. Ensure keyboard accessibility for all interactive elements. $ 4. Use sufficient color contrast between text and background colors. $ 5. Provide clear navigation and headings to help users understand the structure of the content. $ 6. Use ARIA attributes to enhance accessibility for dynamic content. $ 7. Test web content with assistive technologies and real users with disabilities to ensure accessibility. $  ',
          code: ``,
        },

        {
          question: '7. What is ARIA?',
          answer:
            'ARIA (Accessible Rich Internet Applications) is a set of attributes that can be added to HTML elements to enhance accessibility for users with disabilities. $ ARIA attributes provide additional information about the role, state, and properties of elements, making it easier for assistive technologies to interpret and interact with web content.',
          code: ``,
        },
        {
          question: '8. Manual Testing vs Automated Testing for WCAG',
          answer:
            'Manual testing involves using assistive technologies and real users with disabilities to test the accessibility of web content. Automated testing involves using tools and scripts to test the accessibility of web content. $ Both manual and automated testing are important for ensuring WCAG compliance, as automated tools may not catch all accessibility issues. $ Manual testing is essential for understanding the user experience and identifying issues that may not be detected by automated tools. $ Automated testing is useful for quickly identifying common accessibility issues and providing a baseline for manual testing. $',
        },
      ],
    },
    // CORS Error
    {
      name: 'CORS Error',
      questions: [
        {
          question: '1. What is CORS?',
          answer:
            'CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to prevent unauthorized access to resources from different origins. $ CORS allows servers to specify which origins are allowed to access their resources, enabling secure cross-origin requests.',
          code: ``,
        },
        {
          question: '2. What is a CORS error?',
          answer:
            'A CORS error occurs when a web application attempts to make a cross-origin request to a server that does not allow the request from the origin of the web application. $ CORS errors can occur when making API calls, loading resources, or accessing data from different domains or origins. $$Example: suppose we have a web application hosted on example.com that tries to make an API call to api.example.com. If the server at api.example.com does not allow requests from example.com, a CORS error will occur. $  ',
          code: ``,
        },
        {
          question: '3. How to fix CORS errors?',
          answer:
            'To fix CORS errors, the server must be configured to allow requests from the origin of the web application. This can be done by adding appropriate CORS headers to the server response. $ Common CORS headers include: $ 1. Access-Control-Allow-Origin: Specifies which origins are allowed to access the resource. $ 2. Access-Control-Allow-Methods: Specifies which HTTP methods are allowed for cross-origin requests. $ 3. Access-Control-Allow-Headers: Specifies which headers are allowed in cross-origin requests. $ 4. Access-Control-Allow-Credentials: Specifies whether credentials (cookies, authorization headers) are allowed in cross-origin requests. $  ',
          code: ``,
        },
        {
          question: '4. how to fix CORS error in Angular?',
          answer:
            'To fix CORS errors in Angular applications, using proxy configuration in the Angular development server. $ This allows you to bypass CORS restrictions during development by proxying requests to the target server. $ To set up a proxy configuration, create a proxy.conf.json file in the root of your Angular project. $update the Angular JSON file to include the proxy configuration. $replace the API URL in your Angular service with the proxy URL. $  ',
          code: `{
          "/api": {
            "target": "https://api.example.com",
            "secure": true,
            "changeOrigin": true,
            "logLevel": "debug"
          }
        }`,
        },
      ],
    },
    {
      name: 'Pipe',
      questions: [
        {
          question: '1. What is Pipe in Angular?',
          answer:
            'Angular Pipes are used to transform data in templates. $ Pipes accept data as input and transform it into a desired output format. $ Pipes can be used to format dates, currency, numbers, and more. $ Pipes can also be chained together to apply multiple transformations to the same data. pipes are simple functions that we can directly apply in expression. $$ Example: suppose we have a date value that we want to format in a specific way. We can use the date pipe to format the date value in the desired format. $  ',
          code: `{{ dateValue | date:'shortDate' }}`,
        },
        {
          question: '2. What are the different types of Pipes in Angular?',
          answer:
            'There are several built-in pipes in Angular, including: $ 1. DatePipe: Formats date values. $ 2. CurrencyPipe: Formats currency values. $ 3. DecimalPipe: Formats decimal numbers. $ 4. PercentPipe: Formats percentage values. $ 5. JsonPipe: Converts an object to a JSON string. $ 6. AsyncPipe: Subscribes to an observable and returns the latest value emitted by the observable. $ 7. Custom Pipes: You can create your own custom pipes to transform data in specific ways. $  ',
          code: ``,
        },
        {
          question: '3. How to create a custom Pipe in Angular?',
          answer:
            'To create a custom pipe in Angular, you need to create a new class that implements the PipeTransform interface and decorate it with the @Pipe decorator. $ The PipeTransform interface requires you to implement the transform method, which takes input data and returns the transformed output data. $ You can also specify any additional parameters that your pipe may require in the transform method. $$ Example: suppose we want to create a custom pipe that converts a date and time into australian time. $first, we create a new class called AustralianTimePipe and implement the PipeTransform interface. $  ',
          code: `import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
@Pipe({
  name: 'australianTime',
})
export class AustralianTimePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    return formatDate(date, 'dd/MM/yyyy HH:mm:ss', 'en-AU');
    }
}
`,
        },
        {
          question: '4. what is pure and impure pipe?',
          answer:
            'Pure pipes are pipes that only depend on the input data and do not have any side effects. $ Pure pipes are only re-evaluated when the input data changes. $ Impure pipes are pipes that may have side effects or depend on external data. $ Impure pipes are re-evaluated every time change detection runs, regardless of whether the input data has changed. custom pipes are pure pipes by default. $  ',
          code: `@Pipe({
  name: 'myPipe',
  pure: false,
})
export class MyPipe implements PipeTransform {
  transform(value: string): string {
    // Perform some transformation
    return value.toUpperCase();
  }
}`,
        },
        {
          question: '5. What is AsyncPipe in Angular?',
          answer:
            'AsyncPipe is a built-in pipe in Angular that allows you to subscribe to an observable and automatically unsubscribe when the component is destroyed. $ AsyncPipe is useful for displaying data from observables in templates without having to manually manage subscriptions. $  ',
          code: `{{ observableData | async }}


`,
        },
        {
          question: '6. What is the difference between Pipe and Filter?',
          answer:
            'Pipes are used to transform data in templates, while filters are used to filter data in lists or collections. $ Pipes can be used to format data, while filters can be used to filter data based on specific criteria. $ Pipes are typically used in templates, while filters are typically used in component logic. $  ',
          code: ``,
        },
        {
          question: '7. What is the parameterized Pipe?',
          answer:
            'Parameterized pipes are pipes that accept additional parameters to customize the transformation. $ You can pass parameters to a pipe using the colon (:) syntax in the template. $ Example: suppose we have a custom pipe that formats a number with a specified number of decimal places. $  ',
          code: `import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}
  transform(value: number, decimalPlaces: number): string {
    return this.decimalPipe.transform(value, );
  }
}`,
        },
        {
          question: '8. What is the chaining of Pipes?',
          answer:
            'Pipes can be chained together in Angular templates to perform multiple transformations on the same data. $ When chaining pipes, the output of one pipe becomes the input of the next pipe in the chain. $ Example: suppose we have a date value that we want to format and convert to uppercase. $  ',
          code: `{{ date | date:'medium' | uppercase }}`,
        },
        {
          question: '9. What is the slice Pipe?',
          answer:
            'The slice pipe is a built-in pipe in Angular that allows you to extract a portion of an array or string. $ The slice pipe takes two parameters: the start index and the end index. $ Example: suppose we have an array of items and we want to display only a portion of the array. $  ',
          code: `{{ items | slice:0:3 }}`,
        },
        {
          question: '10. What is the json Pipe?',
          answer:
            'The json pipe is a built-in pipe in Angular that converts an object or array into a JSON string. $ The json pipe is useful for debugging and displaying complex data structures in templates. $ Example: suppose we have an object that we want to display as a JSON string. $  ',
          code: `{{ myObject | json }}`,
        },
      ],
    },
    {
      name: 'Compilation',
      questions: [
        {
          question: '1. What is Compilation in Angular?',
          answer:
            'Compilation in Angular is the process of converting Angular templates and components into executable JavaScript code. $ Compiler converts source code into machine code that can be executed by the browser.',
          code: ``,
        },
        {
          question:
            '2. What are the different types of Compilation in Angular?',
          answer:
            'There are two types of compilation in Angular: $ 1. Just-in-Time (JIT) Compilation: JIT compilation converts templates and components into JavaScript code at runtime. $$Example: suppose we have to show a component file property value in the template. but there is error then it will show the error in the console at runtime compilation. $ 2. Ahead-of-Time (AOT) Compilation: AOT compilation converts templates and components into JavaScript code at build time. $$Example: suppose we have to show a component file property value in the template. but there is error then it will show the error in the terminal console at build time compilation. $  ',
          code: ``,
        },
        {
          question:
            '3. What is the difference between JIT and AOT compilation?',
          answer:
            'The main difference between JIT and AOT compilation is the time at which the code is converted. $ JIT compilation converts code at runtime, while AOT compilation converts code at build time. $ JIT compilation is faster than AOT compilation, but AOT compilation provides better performance and better debugging tools. $  ',
          code: ` ng build --prod --aot`,
        },
        {
          question: '4. What are the benefits of AOT compilation?',
          answer:
            'The benefits of AOT compilation include: $ 1. Faster loading times: AOT compilation reduces the size of the application bundle, resulting in faster loading times. $ 2. Better performance: AOT compilation improves performance by reducing the amount of code that needs to be executed at runtime. $ 3. Better debugging tools: AOT compilation provides better debugging tools, making it easier to identify and fix issues in the code. $ 4. Improved security: AOT compilation reduces the risk of injection attacks by pre-compiling templates and components. $ 5. Better error messages: AOT compilation provides better error messages, making it easier to identify and fix issues in the code. $  ',
          code: ``,
        },
      ],
    },
    {
      name: 'Debugging',
      questions: [
        {
          question: '1. What is Debugging in Angular?',
          answer:
            'Debugging in Angular is the process of identifying and fixing errors in an Angular application. $ Debugging is an essential part of the development process, as it helps developers to identify and fix issues in the code. $ Debugging can be done using the Angular Developer Tools, which provides a range of features for debugging Angular applications. $  ',
          code: ``,
        },
        {
          question:
            '2. What are the different methods of Debugging in Angular?',
          answer:
            'we can debug Angular applications using the following methods: $ 1. Console.log: The simplest method of debugging is to use console.log statements to log values and messages to the console. $ 2. setting breakpoints: You can set breakpoints in your code to pause execution and inspect variables and values. $ 3. using debugger statements: You can use debugger statements in your code to pause execution and inspect variables and values. $ 4. using Angular Developer Tools: The Angular Developer Tools provide a range of features for debugging Angular applications, including inspecting components, services, and routes. $ 5. network tab analysis: You can use the network tab in the browser developer tools to analyze network requests and responses, including API calls and resource loading. $ 6. inspecting elements: You can use the elements tab in the browser developer tools to inspect and modify the DOM elements of your application. $ 7. inspect source: You can use the sources tab in the browser developer tools to inspect and modify the source code of your application. $ 8. error messages: You can use error messages in the console to identify and fix issues in your code. $  ',
          code: ` console.log('Debugging message');
              debugger;`,
        },
      ],
    },
    {
      name: 'Data Binding',
      questions: [
        {
          question: '1. What is Data Binding in Angular?',
          answer:
            'Data binding in Angular is the process of synchronizing data between the model and the view. $ Data binding allows you to display data in the view and update the model when the user interacts with the view. $ There are four types of data binding in Angular: $ 1. Interpolation: Interpolation is used to bind data from the component to the template using double curly braces {{}}. $ 2. Property binding: Property binding is used to bind data from the component to the properties of HTML elements using square brackets []. $ 3. Event binding: Event binding is used to bind events from the template to methods in the component using parentheses (). $ 4. Two-way data binding: Two-way data binding is used to bind data between the component and the template using [(ngModel)]. $  ',
          code: `{{ propertyValue }}
              `,
        },
        {
          question: '2. What is Interpolation in Angular?',
          answer:
            'Interpolation is a one-way data binding technique used to bind data from the component to the template using double curly braces {{}}. $ Interpolation allows you to display data in the view without modifying the model. $  ',
          code: `{{ propertyValue }}`,
        },
        {
          question: '3. What is Property Binding in Angular?',
          answer:
            'Property binding is a one-way data binding technique used to bind data from the component to the properties of HTML elements using square brackets []. $ Property binding allows you to set the value of an HTML element property based on the value of a component property. $  ',
          code: `<input [value]="propertyValue" />`,
        },
        {
          question: '4. What is Event Binding in Angular?',
          answer:
            'Event binding is a one-way data binding technique used to bind events from the template to methods in the component using parentheses (). $ Event binding allows you to respond to user interactions and update the model based on user actions. $  ',
          code: `<button (click)="handleClick()">Click me</button>`,
        },
        {
          question: '5. What is Two-Way Data Binding in Angular?',
          answer:
            'Two-way data binding is a two-way data binding technique used to bind data between the component and the template using [(ngModel)]. $ Two-way data binding allows you to synchronize data between the model and the view, updating both when changes occur. $  ',
          code: `<input [(ngModel)]="propertyValue" />`,
        },
        {
          question:
            '6. What is the difference between One-Way and Two-Way Data Binding?',
          answer:
            'One-way data binding is a one-way data binding technique used to bind data from the component to the template or vice versa. $ Two-way data binding is a two-way data binding technique used to bind data between the component and the template, updating both when changes occur. $  ',
          code: ``,
        },
        {
          question:
            '7. What is the difference between Property Binding and Attribute Binding?',
          answer:
            'Property binding is used to bind data from the component to the properties of HTML elements using square brackets []. $ Attribute binding is used to bind data from the component to the attributes of HTML elements using [attr.attributeName]. $  ',
          code: `<input [attr.aria-label]="propertyValue" />`,
        },
      ],
    },
    {
      name: 'Data Communication',
      questions: [
        {
          question: '1. What is Data Communication in Angular?',
          answer:
            'Data communication in Angular is the process of exchanging data between components, services, and other parts of an Angular application. $ Data communication allows you to share data and state between different parts of the application. $ There are several methods for data communication in Angular, including: $ 1. Input and Output properties: Input and Output properties are used to pass data between parent and child components. $ 2. Services: Services are used to share data and state between different components and services. $ 3. Event Emitters: Event Emitters are used to emit events from child components to parent components. $ 4. Observables: Observables are used to handle asynchronous data streams and communicate between components and services. $  ',
          code: ``,
        },
        {
          question: '2. What is Input Property in Angular?',
          answer:
            'Input properties are used to pass data from a parent component to a child component using the @Input decorator. $ Input properties allow you to bind data from the parent component to the child component, enabling data communication between components. $$Example: suppose we have a parent component that wants to pass a value to a child component. $  ',
          code: `@Input() propertyName: string;`,
        },
        {
          question: '3. What is Output Property in Angular?',
          answer:
            'Output properties are used to emit events from a child component to a parent component using the @Output decorator and EventEmitter class. $ Output properties allow you to communicate from the child component to the parent component, enabling data communication between components. $$Example: suppose we have a child component that wants to emit an event to the parent component. $  ',
          code: `@Output() eventName = new EventEmitter<string>();`,
        },
        {
          question: '4. What is Service in Angular?',
          answer:
            'Services are singleton objects that provide functionality and data sharing across different parts of an Angular application. $ Services are typically used for business logic, data access, and shared state management. $ Services can be injected into components, directives, and other services using dependency injection. data communication using services allows you to share data and state between different components and services. $$Example: suppose we have a service that provides data to multiple components. $',
          code: ``,
        },

        {
          question: '6. What is Observable in Angular?',
          answer:
            'Observables are used to handle asynchronous data streams and communicate between components and services. $ Observables provide a way to subscribe to data changes and react to them in real-time. $ Observables can be created using the RxJS library and can be used for data communication between components and services. $$Example: suppose we have a service that provides an observable data stream. $  ',
          code: `import { Injectable } from '@angular/core';
          import { BehaviorSubject } from 'rxjs';
          @Injectable({
            providedIn: 'root'
          })
          export class DataService {
            private dataSubject = new BehaviorSubject<string>('Initial value');
            data$ = this.dataSubject.asObservable();
            setData(value: string) {
              this.dataSubject.next(value);
            }
          }`,
        },
      ],
    },
    {
      name: 'Directives',
      questions: [
        {
          question: '1. What is a Directive in Angular?',
          answer:
            'A directive is a class in Angular that allows you to extend the behavior of HTML elements and components. $ Directives can be used to manipulate the DOM, add behavior to elements, and create reusable components. $ There are three types of directives in Angular: $ 1. Components: Components are directives with a template. $ 2. Structural Directives: Structural directives are used to change the structure of the DOM by adding or removing elements. $ 3. Attribute Directives: Attribute directives are used to change the appearance or behavior of an element. $  ',
          code: ``,
        },
        {
          question: '2. What is a Component in Angular?',
          answer:
            'A component is a directive that is used to create reusable UI elements. $ Components are used to define the structure, behavior, and styling of an element in the DOM. $ Components can be used to create complex UI elements that can be reused throughout an Angular application. $ Components can be created using the @Component decorator. $  ',
          code: ``,
        },
        {
          question: '3. What is a Structural Directive in Angular?',
          answer:
            'Structural directives are used to change the structure of the DOM by adding or removing elements. $ Structural directives are prefixed with an asterisk (*) in the template. $ Common structural directives include ngIf, ngFor, and ngSwitch. $$Example: suppose we want to conditionally display an element based on a condition. We can use the ngIf structural directive to achieve this. $  ',
          code: ` *ngIf="condition"
            *ngFor="let item of items" $  *ngSwitch="value"`,
        },

        {
          question: '4. What is an Attribute Directive in Angular?',
          answer:
            'Attribute directives are used to change the appearance or behavior of an element. $ Attribute directives can be used to add styles, classes, or behaviors to elements. $ Attribute directives are created using the @Directive decorator. $$Example: suppose we want to create a custom attribute directive that changes the background color of an element. $  ',
          code: ` import { Directive, ElementRef, Renderer2 } from '@angular/core';
              import { Directive, HostListener } from '@angular/core';
              @Directive({
                selector: '[appCustomDirective]'
              })
              export class CustomDirective {
                constructor(private el: ElementRef, private renderer: Renderer2) {}
                @HostListener('click') onClick() {
                  this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
                }
              }`,
        },
        {
          question:
            '5. What is the difference between Components and Directives?',
          answer:
            'Components are directives with a template, while directives are used to extend the behavior of HTML elements and components. $ Components are used to create reusable UI elements, while directives are used to manipulate the DOM and add behavior to elements. $  ',
          code: ``,
        },
        {
          question: '6. What is custom Directive in Angular?',
          answer:
            'Custom directives are user-defined directives that can be used to extend the behavior of HTML elements and components. $ Custom directives can be created using the @Directive decorator and can be used to create reusable components and manipulate the DOM. $$Example: suppose we want to create a custom directive that changes the background color of an element when it is clicked. $  ',
          code: ` import { Directive, ElementRef, Renderer2 } from '@angular/core';
              import { Directive, HostListener } from '@angular/core';
              @Directive({
                selector: '[appCustomDirective]'
              })
              export class CustomDirective {
                constructor(private el: ElementRef, private renderer: Renderer2) {}
                @HostListener('click') onClick() {
                  this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
                }
              }`,
        },
        {
          question: '7. what is the purpose of ng-container?',
          answer:
            'ng-container is a structural directive that is used to group elements without adding extra DOM elements. $ ng-container is useful for grouping elements and applying structural directives without affecting the layout of the DOM. $  ',
          code: `<ng-container *ngIf="condition">
                <div>Content 1</div>
                <div>Content 2</div>
              </ng-container>
              `,
        },
        {
          question: '8. What is the purpose of ng-template?',
          answer:
            'ng-template is a structural directive that is used to define a template that can be reused in the application. $ ng-template is useful for creating reusable templates and applying structural directives without affecting the layout of the DOM. $  ',
          code: `<ng-template #templateRef>
                <div>Content 1</div>
                <div>Content 2</div>
              </ng-template>`,
        },
        {
          question: '9. What is the purpose of ng-content?',
          answer:
            'ng-content is a structural directive that is used to project content into a component. $ ng-content is useful for creating reusable components that can accept content from the parent component. $  ',
          code: `<ng-content></ng-content>`,
        },
        {
          question: '10. What is the purpose of ng-template-outlet?',
          answer:
            'ng-template-outlet is a structural directive that is used to render a template in a specific location in the DOM. $ ng-template-outlet is useful for rendering templates dynamically based on conditions or events. $  ',
          code: `<ng-container *ngTemplateOutlet="templateRef"></ng-container>`,
        },
        {
          question: '11. What is the purpose of ngSwitch?',
          answer:
            'ngSwitch is a structural directive that is used to conditionally display elements based on a value. $ ngSwitch is useful for creating conditional templates and applying structural directives without affecting the layout of the DOM. $  ',
          code: `<div [ngSwitch]="value">
                <div *ngSwitchCase="1">Case 1</div>
                <div *ngSwitchCase="2">Case 2</div>
                <div *ngSwitchDefault>Default Case</div>
              </div>`,
        },
      ],
    },
    {
      name: 'HostListener & HostBinding',
      questions: [
        {
          question: '1. What is HostListener in Angular?',
          answer:
            'HostListener is a decorator in Angular that allows you to listen to events on the host element of a directive or component. $ HostListener allows you to respond to events and perform actions based on user interactions. $  ',
          code: ``,
        },
        {
          question: '2. How to use HostListener in Angular?',
          answer:
            'To use HostListener in Angular, you need to import the HostListener decorator from @angular/core and decorate a method with the @HostListener decorator. $ The method will be called when the specified event occurs on the host element. $$Example: suppose we want to listen for click events on the host element of a directive. $  ',
          code: `import { Directive, HostListener } from '@angular/core';
              @Directive({
                selector: '[appCustomDirective]'
              })
              export class CustomDirective {
                @HostListener('click', ['$event']) onClick(event: MouseEvent) {
                  console.log('Element clicked:', event);
                }
              }`,
        },
        {
          question: '3. What is HostBinding in Angular?',
          answer:
            'HostBinding is a decorator in Angular that allows you to bind properties of the host element of a directive or component. $ HostBinding allows you to set properties and attributes on the host element based on the state of the directive or component. $  ',
          code: ``,
        },
        {
          question: '4. How to use HostBinding in Angular?',
          answer:
            'To use HostBinding in Angular, you need to import the HostBinding decorator from @angular/core and decorate a property with the @HostBinding decorator. $ The property will be bound to the specified property or attribute of the host element. $$Example: suppose we want to bind a class to the host element of a directive. $  ',
          code: `import { Directive, HostBinding } from '@angular/core';
              @Directive({
                selector: '[appCustomDirective]'
              })
              export class CustomDirective {
                @HostBinding('class.active') isActive = true;
              }`,
        },
        {
          question:
            '5. What is the difference between HostListener and HostBinding?',
          answer:
            'HostListener is used to listen to events on the host element, while HostBinding is used to bind properties and attributes to the host element. $ HostListener allows you to respond to events, while HostBinding allows you to set properties and attributes based on the state of the directive or component. $  ',
          code: ``,
        },
        {
          question: '6. What is Renderer2 in Angular?',
          answer:
            'Renderer2 is a service in Angular that provides an abstraction for manipulating the DOM. $ Renderer2 allows you to perform DOM manipulations in a platform-agnostic way, making it easier to write cross-platform applications. $ Renderer2 provides methods for creating, updating, and removing elements, attributes, and styles. $  ',
          code: ``,
        },
        {
          question: '7. How to use Renderer2 in Angular?',
          answer:
            'To use Renderer2 in Angular, you need to import the Renderer2 service from @angular/core and inject it into your component. $ You can then use the Renderer2 methods to perform DOM manipulations. $  ',
          code: `import { Component, Renderer2 } from '@angular/core';
              @Component({
                selector: 'app-my-component',
                template: '<div #myElement></div>'
              })
              export class MyComponent {
                constructor(private renderer: Renderer2) {}
                ngAfterViewInit() {
                  const element = this.renderer.selectRootElement('#myElement');
                  this.renderer.setStyle(element, 'background-color', 'red');
                }
     }`,
        },
      ],
    },
    {
      name: 'RXJS',
      questions: [
        {
          question: '1. What is RXJS in Angular?',
          answer:
            'RXJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables. $ RXJS provides a way to work with asynchronous data streams and handle events in a declarative manner. $ RXJS is commonly used in Angular applications for handling asynchronous operations, such as HTTP requests and user interactions,data manupulation, and data transformation. $  ',
          code: ``,
        },
        {
          question: '2. What are Observables in RXJS?',
          answer:
            'Observables are the core building blocks of RXJS. $ Observables represent a stream of data that can be observed and reacted to over time. $ Observables can emit multiple values over time and can be used to handle asynchronous operations, such as HTTP requests and user interactions. $ Observables can be created using the Observable constructor or by using operators provided by RXJS. $  ',
          code: `import { Observable } from 'rxjs';
              const observable = new Observable((observer) => {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
              });`,
        },
        {
          question: '3. What are Operators in RXJS?',
          answer:
            'Operators are functions that allow you to manipulate and transform observables. $ Operators can be used to filter, map, merge, and combine observables. $ RXJS provides a wide range of operators for working with observables, including map, filter, mergeMap, switchMap, and more. $  ',
          code: ` import { map } from 'rxjs/operators';
              const observable = new Observable((observer) => {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
              });
              const mappedObservable = observable.pipe(map((value) => value.toUpperCase()));  `,
        },
        {
          question: '4. What is the difference between creation and transformation operators?',
          answer:
            'Creation operators are used to create new observables, while transformation operators are used to manipulate and transform existing observables. $ Creation operators include of, from, and interval, while transformation operators include map, filter, and mergeMap,switchMap,concatMap. $  ',
          code: `import { of, from, interval } from 'rxjs';
              const observable1 = of(1, 2, 3); // Creation operator
              const observable2 = from([1, 2, 3]); // Creation operator
              const observable3 = interval(1000); // Creation operator`,
        },
        {
          question: '5. What is the difference between cold and hot observables?',
          answer:
            'Cold observables are observables that do not start emitting values until there is a subscriber. $ Cold observables are created using the Observable constructor and are typically used for asynchronous operations, such as HTTP requests. $ Hot observables are observables that start emitting values regardless of whether there are subscribers. $ Hot observables are typically used for events and user interactions. $  ',
          code: `import { Observable } from 'rxjs';
              const coldObservable = new Observable((observer) => {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
              });
              const hotObservable = new Observable((observer) => {
                setInterval(() => {
                  observer.next('Hello');
                }, 1000);
              });`,
        },
        {
          question: '6. What is the purpose of Subject in RXJS?',
          answer:
            'Subject is a special type of observable that allows you to multicast values to multiple subscribers. $ Subject can be used to share data between different parts of an application and can be used to implement event-driven architectures. $ Subject can be created using the Subject constructor and can be used to emit values to subscribers. subject does not store values internally, but it can be used to emit values to subscribers. $  ',
          code: `import { Subject } from 'rxjs';
              const subject = new Subject<string>();
              subject.subscribe((value) => console.log(value));
              subject.next('Hello');`,
        },
        {
          question: '7. What is BehaviorSubject in RXJS?',
          answer:
            'BehaviorSubject is a special type of subject that stores the latest value emitted and emits it to new subscribers. $ BehaviorSubject can be used to share data between different parts of an application and can be used to implement event-driven architectures. $ BehaviorSubject can be created using the BehaviorSubject constructor and can be used to emit values to subscribers. $  ',
          code: `import { BehaviorSubject } from 'rxjs';
              const behaviorSubject = new BehaviorSubject<string>('Initial value');
              behaviorSubject.subscribe((value) => console.log(value));
              behaviorSubject.next('Hello');`,
        },
        {
          question: '8. What is ReplaySubject in RXJS?',
          answer:
            'ReplaySubject is a special type of subject that stores a specified number of emitted values and emits them to new subscribers. $ ReplaySubject can be used to share data between different parts of an application and can be used to implement event-driven architectures. $ ReplaySubject can be created using the ReplaySubject constructor and can be used to emit values to subscribers. $  ',
          code: `import { ReplaySubject } from 'rxjs';
              const replaySubject = new ReplaySubject<string>(2);
              replaySubject.subscribe((value) => console.log(value));
              replaySubject.next('Hello');
              replaySubject.next('World');`,
        },
        {
          question: '9. What is Async Subject in RXJS?',
          answer:
            'Async Subject is a special type of subject that only emits the last value when the observable completes. $ Async Subject can be used to share data between different parts of an application and can be used to implement event-driven architectures. $ Async Subject can be created using the AsyncSubject constructor and can be used to emit values to subscribers. $  ',
          code: `import { AsyncSubject } from 'rxjs';
              const asyncSubject = new AsyncSubject<string>();
              asyncSubject.subscribe((value) => console.log(value));
              asyncSubject.next('Hello');
              asyncSubject.complete();`,
        },
        {

        }
        ],
    },
    {
      name: 'Observables and observers',
      questions: [
        {
          question: '1. What is an Observable in Angular?',
          answer:
            'An observable is a data type that represents a stream of values over time. $ Observables are used to handle asynchronous operations and events in Angular applications. $ Observables can emit multiple values over time and can be used to handle events, HTTP requests, and other asynchronous operations. $$Example: suppose we have an observable that emits values over time and we want to subscribe to it then we can use the observable object to handle emitted values. $  ',
          code: ` import { Observable } from 'rxjs';
              const observable = new Observable((observer) => {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
              });
              observable.subscribe((value) => console.log(value));`,
        },
        {
          question: '2. What is an Observer or Subscriber in Angular?',
          answer:
            'An observer is an object that subscribes to an observable and receives notifications when the observable emits values. $ Observers can define methods for handling emitted values, errors, and completion notifications. $ Observers are used to react to changes in observables and perform actions based on emitted values. $$ Example: suppose we have an observable that emits values over time and we want to subscribe to it then we can use the observer object to handle emitted values. $  ',
          code: `const observer = {
                next: (value) => console.log(value),
                error: (error) => console.error(error),
                complete: () => console.log('Completed')
              };
              observable.subscribe(observer);`,
        },
        {
          question: '3. What is the multicast in Angular?',
          answer:
            'Multicasting is a technique used to share a single observable among multiple subscribers. $ Multicasting allows you to share the same data stream with multiple subscribers without creating separate instances of the observable. $ Multicasting can be achieved using subjects, which are special types of observables that allow you to multicast values to multiple subscribers. $$Example: suppose we have an observable that emits values over time and we want to share it with multiple subscribers then we can use the subject object to handle emitted values. $  ',
          code: `import { Subject } from 'rxjs';
              const subject = new Subject<string>();
              subject.subscribe((value) => console.log('Subscriber 1:', value));
              subject.subscribe((value) => console.log('Subscriber 2:', value));
              subject.next('Hello');
              subject.next('World');`,
        },
        {
          question: '4. What is the difference between a cold and hot observable?',
          answer:
            'Cold observables are observables that do not start emitting values until there is a subscriber. $ Cold observables are created using the Observable constructor and are typically used for asynchronous operations, such as HTTP requests. $ Hot observables are observables that start emitting values regardless of whether there are subscribers. $ Hot observables are typically used for events and user interactions. $  ',
          code: `import { Observable } from 'rxjs';
              const coldObservable = new Observable((observer) => {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
              });
              const hotObservable = new Observable((observer) => {
                setInterval(() => {
                  observer.next('Hello');
                }, 1000);
              });`,
        },
        {
          question: '5. What is the difference between a Subject and an Observable?',
          answer:
            'An observable is a data type that represents a stream of values over time, while a subject is a special type of observable that allows you to multicast values to multiple subscribers. $ Observables are typically used for asynchronous operations, while subjects are used for sharing data between different parts of an application. $  ',
          code: `import { Subject } from 'rxjs';
              const subject = new Subject<string>();
              subject.subscribe((value) => console.log(value));
              subject.next('Hello');`,
        },
      ]
    },
    {
      name: 'Service',
      questions: [
        {
          question: '1. What is a Service in Angular?',
          answer:
            'A service is a singleton object that provides functionality and data sharing across different parts of an Angular application. $ Services are typically used for business logic, data access, and shared state management. $ Services can be injected into components, directives, and other services using dependency injection. $  ',
          code: `import { Injectable } from '@angular/core';
              @Injectable({
                providedIn: 'root'
              })
              export class MyService {
                constructor() {}
                getData() {
                  return 'Hello World';
                }
              }`,
        },
        {
          question: '2. How to create a Service in Angular?',
          answer:
            'To create a service in Angular, you need to use the Angular CLI command ng generate service service-name or ng g s service-name. $ This will create a new service file with the specified name and add it to the providers array of the root module. $  ',
          code: `ng generate service my-service`,
        },
        {
          question: '3. How to inject a Service in Angular?',
          answer:
            'To inject a service in Angular, you need to import the service class and add it to the constructor of the component or directive where you want to use it. $ You can then use the injected service instance to access its methods and properties. $  ',
          code: `import { Component } from '@angular/core';
              import { MyService } from './my-service.service';
              @Component({
                selector: 'app-my-component',
                templateUrl: './my-component.component.html'
              })
              export class MyComponent {
                constructor(private myService: MyService) {}
                ngOnInit() {
                  console.log(this.myService.getData());
                }
              }`,
        },
        {
          qustion: '4. Example of Service in Angular',
          answer:
            'Example of Service in Angular: $ HttpclientModule is a built-in service in Angular that allows you to make HTTP requests to a server. $ HttpClientModule provides methods for making GET, POST, PUT, DELETE, and other types of HTTP requests. $ HttpClientModule can be imported into your application module and injected into your components and services. $  ',
          code: `import { HttpClientModule } from '@angular/common/http';
              import { HttpClient } from '@angular/common/http';
              import { Injectable } from '@angular/core';
              @Injectable({
                providedIn: 'root'
              })
              export class MyService {
                constructor(private http: HttpClient) {}
                getData() {
                  return this.http.get('https://api.example.com/data');
                }
              }`, 
        },
        {
          question: '5. What is the purpose of @Injectable decorator in Angular?',
          answer:
            '@Injectable is a decorator in Angular that marks a class as a service and allows it to be injected into other classes. $ @Injectable allows you to define dependencies for the service and specify how the service should be instantiated. $  ',
          code: `import { Injectable } from '@angular/core';
              @Injectable({
                providedIn: 'root'
              })
              export class MyService {
                constructor() {}
              }`,
        },
        {
          question: '6. What is HttpClientModule in Angular?',
          answer:
            'most of the frontend applications need to communicate with a backend server to fetch or send data. $ HttpClientModule is a built-in service in Angular that allows you to make HTTP requests to a server. $ HttpClientModule provides methods for making GET, POST, PUT, DELETE, and other types of HTTP requests. $ HttpClientModule can be imported into your application module and injected into your components and services. $  ',
        },
      ],
    },
       

      
      

     


    
    

        

        
        

        
          
    
    
   
    // Add more topics here
  ];
  topic: any;
  showScrollToTop = false;

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showScrollToTop = scrollPosition > 200; // Show button after scrolling 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
