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
