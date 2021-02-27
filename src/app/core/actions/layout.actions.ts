import { ActionType, createAction } from '@ngrx/store';

export const openSidenav = createAction('[Layout] Open Sidenav');
export const closeSidenav = createAction('[Layout] Close Sidenav');

export type LayoutActionsUnion = ActionType<
  typeof openSidenav | typeof closeSidenav
>;
