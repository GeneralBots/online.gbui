/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/authentication` | `/authentication/components/user-auth-form` | `/chat` | `/chat/components/code-viewer` | `/chat/components/maxlength-selector` | `/chat/components/model-selector` | `/chat/components/preset-actions` | `/chat/components/preset-save` | `/chat/components/preset-selector` | `/chat/components/preset-share` | `/chat/components/temperature-selector` | `/chat/components/top-p-selector` | `/chat/data/models` | `/chat/data/presets` | `/dashboard` | `/dashboard/components/DateRangePicker` | `/dashboard/components/MainNav` | `/dashboard/components/Overview` | `/dashboard/components/RecentSales` | `/dashboard/components/Search` | `/dashboard/components/TeamSwitcher` | `/dashboard/components/UserNav` | `/login` | `/login/components/DateRangePicker` | `/login/components/MainNav` | `/login/components/Overview` | `/login/components/RecentSales` | `/login/components/Search` | `/login/components/TeamSwitcher` | `/login/components/UserNav` | `/mail` | `/mail/components/account-switcher` | `/mail/components/mail` | `/mail/components/mail-display` | `/mail/components/mail-list` | `/mail/components/nav` | `/mail/data` | `/mail/use-mail` | `/settings` | `/settings/account/account-form` | `/settings/account/page` | `/settings/appearance/appearance-form` | `/settings/appearance/page` | `/settings/components/sidebar-nav` | `/settings/display/display-form` | `/settings/display/page` | `/settings/layout` | `/settings/notifications/notifications-form` | `/settings/notifications/page` | `/settings/profile-form` | `/tasks` | `/tasks/components/DataTable` | `/tasks/components/DataTablePagination` | `/tasks/components/DataTableToolbar` | `/tasks/components/UserNav` | `/tasks/data/data` | `/tasks/data/schema` | `/templates` | `/templates/components/album-artwork` | `/templates/components/menu` | `/templates/components/podcast-empty-placeholder` | `/templates/components/sidebar` | `/templates/data/albums` | `/templates/data/playlists`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
