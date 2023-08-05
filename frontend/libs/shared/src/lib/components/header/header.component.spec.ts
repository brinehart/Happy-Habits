import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideAutoSpy, Spy } from 'jest-auto-spies';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SubscriberSpy, subscribeSpyTo } from '@hirez_io/observer-spy';

describe('ParentsComponent', () => {
  let component: HeaderComponent;
  let routerSpy: Spy<Router>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let observerSpy: SubscriberSpy<any> | undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        HeaderComponent,
        provideAutoSpy(Router, {
          observablePropsToSpyOn: ['events'],
          gettersToSpyOn: ['url'],
        }),
      ],
    }).compileComponents();

    component = TestBed.inject(HeaderComponent);
    routerSpy = TestBed.inject(Router) as Spy<Router>;

    observerSpy = undefined;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('routeRoot$', () => {
    const testCases = [
      { url: '/kids', expected: 'kids' },
      { url: '/parents', expected: 'parents' },
      { url: '/rewards', expected: 'rewards' },
      { url: '/consequences', expected: 'consequences' },
      { url: '/unknown', expected: 'kids' },
    ];

    testCases.forEach((testCase) => {
      it(`WHEN event is of type NavigationEnd
      THEN should emit '${testCase.expected} when the route changes to ${testCase.url}`, () => {
        // Arrange
        const expected = testCase.expected;
        routerSpy.events.nextWith(
          new NavigationEnd(1, testCase.url, testCase.url)
        );
        routerSpy.accessorSpies.getters.url.mockReturnValue(testCase.url);

        // Act
        observerSpy = subscribeSpyTo(component['routeRoot$']);

        // Assert
        expect(observerSpy.getLastValue()).toEqual(expected);
      });

      it(`WHEN event is not of type NavigationEnd THEN should not emit anything`, () => {
        // Arrange
        routerSpy.events.nextWith(new NavigationStart(1, testCase.url));
        routerSpy.accessorSpies.getters.url.mockReturnValue(testCase.url);

        // Act
        observerSpy = subscribeSpyTo(component['routeRoot$']);

        // Assert
        expect(observerSpy.getLastValue()).toBeUndefined();
      });
    });
  });

  describe('headerTitle$', () => {
    const testCases = [
      { url: '/kids', expected: 'Kids' },
      { url: '/parents', expected: 'Parents' },
      { url: '/rewards', expected: 'Rewards' },
      { url: '/consequences', expected: 'Consequences' },
      { url: '/unknown', expected: 'Kids' },
    ];

    testCases.forEach((testCase) => {
      it(`should emit '${testCase.expected} when the route changes to ${testCase.url}`, () => {
        // Arrange
        const expected = testCase.expected;
        routerSpy.events.nextWith(
          new NavigationEnd(1, testCase.url, testCase.url)
        );
        routerSpy.accessorSpies.getters.url.mockReturnValue(testCase.url);

        // Act
        observerSpy = subscribeSpyTo(component['headerTitle$']);

        // Assert
        expect(observerSpy.getLastValue()).toEqual(expected);
      });
    });
  });

  describe('headerIconSrc$', () => {
    const testCases = [
      { url: '/kids', expected: '/assets/icons/tabs/kids/kids-128.svg' },
      {
        url: '/parents',
        expected: '/assets/icons/tabs/parents/parents-128.svg',
      },
      {
        url: '/rewards',
        expected: '/assets/icons/tabs/rewards/rewards-128.svg',
      },
      {
        url: '/consequences',
        expected: '/assets/icons/tabs/consequences/consequences-128.svg',
      },
      { url: '/unknown', expected: '/assets/icons/tabs/kids/kids-128.svg' },
    ];

    testCases.forEach((testCase) => {
      it(`should emit '${testCase.expected} when the route changes to ${testCase.url}`, () => {
        // Arrange
        const expected = testCase.expected;
        routerSpy.events.nextWith(
          new NavigationEnd(1, testCase.url, testCase.url)
        );
        routerSpy.accessorSpies.getters.url.mockReturnValue(testCase.url);

        // Act
        observerSpy = subscribeSpyTo(component['headerIconSrc$']);

        // Assert
        expect(observerSpy.getLastValue()).toEqual(expected);
      });
    });
  });
});
