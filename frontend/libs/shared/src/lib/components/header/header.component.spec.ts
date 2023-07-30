import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideAutoSpy, Spy } from 'jest-auto-spies';
import { Router } from '@angular/router';

describe('ParentsComponent', () => {
  let component: HeaderComponent;
  let routerSpy: Spy<Router>;

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
      it(`should emit '${testCase.expected} when the route changes to ${testCase.url}`, () => {
        // Arrange
        const expected = testCase.expected;
        routerSpy.accessorSpies.getters.url.mockReturnValue(testCase.url);

        // Assert
        component['routeRoot$']
          .subscribe((actual) => {
            expect(actual).toEqual(expected);
          })
          .unsubscribe();
      });
    });
  });

  describe('headerIconSrc$', () => {
    const testCases = [
      { url: '/kids', expected: '/assets/icons/tabs/kids/kids-64.svg' },
      {
        url: '/parents',
        expected: '/assets/icons/tabs/parents/parents-64.svg',
      },
      {
        url: '/rewards',
        expected: '/assets/icons/tabs/rewards/rewards-64.svg',
      },
      {
        url: '/consequences',
        expected: '/assets/icons/tabs/consequences/consequences-64.svg',
      },
      { url: '/unknown', expected: '/assets/icons/tabs/kids/kids-64.svg' },
    ];

    testCases.forEach((testCase) => {
      it(`should emit '${testCase.expected} when the route changes to ${testCase.url}`, () => {
        // Arrange
        const expected = testCase.expected;
        routerSpy.accessorSpies.getters.url.mockReturnValue(testCase.url);

        // Assert
        component.headerIconSrc$
          .subscribe((actual) => {
            expect(actual).toEqual(expected);
          })
          .unsubscribe();
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
        routerSpy.accessorSpies.getters.url.mockReturnValue(testCase.url);

        // Assert
        component.headerTitle$
          .subscribe((actual) => {
            expect(actual).toEqual(expected);
          })
          .unsubscribe();
      });
    });
  });
});
