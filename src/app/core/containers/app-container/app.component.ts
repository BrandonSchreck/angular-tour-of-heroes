import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AuthActions } from 'src/app/features/auth/actions';
import { LayoutActions } from '../../actions';
import { MessageService } from '../../services';

import * as fromAuth from 'src/app/features/auth/reducers';
import * as fromCore from 'src/app/core/reducers';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  loggedIn$: Observable<boolean>;
  showSidenav$: Observable<boolean>;

  constructor(
    public messageService: MessageService,
    private store: Store<fromCore.State & fromAuth.State>
  ) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.pipe(select(fromCore.getShowSidenav));
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  clearMessages() {
    this.messageService.clear();
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  openSidenav() {
    console.log('Open SideNav');
    this.store.dispatch(LayoutActions.openSidenav());
  }

  logout() {
    this.closeSidenav();
    this.store.dispatch(AuthActions.logoutConfirmation());
    this.clearMessages();
  }
}
