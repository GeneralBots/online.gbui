/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/authentication` | `/authentication/components/user-auth-form` | `/chat/components/user-auth-form` | `/dashboard` | `/dashboard/components/DateRangePicker` | `/dashboard/components/MainNav` | `/dashboard/components/Overview` | `/dashboard/components/RecentSales` | `/dashboard/components/Search` | `/dashboard/components/TeamSwitcher` | `/dashboard/components/UserNav` | `/login` | `/login/components/DateRangePicker` | `/login/components/MainNav` | `/login/components/Overview` | `/login/components/RecentSales` | `/login/components/Search` | `/login/components/TeamSwitcher` | `/login/components/UserNav` | `/mail` | `/mail/components/account-switcher` | `/mail/components/mail` | `/mail/components/mail-display` | `/mail/components/mail-list` | `/mail/components/nav` | `/mail/data` | `/mail/use-mail` | `/tasks` | `/tasks/components/DataTable` | `/tasks/components/DataTablePagination` | `/tasks/components/DataTableToolbar` | `/tasks/components/UserNav` | `/tasks/data/data` | `/tasks/data/schema`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
