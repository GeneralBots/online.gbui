/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/authentication` | `/authentication/components/user-auth-form` | `/chat` | `/chat/components/chat-layout` | `/chat/components/chat/chat-header` | `/chat/components/chat/chat-input` | `/chat/components/chat/chat-window` | `/chat/components/chat/message-list` | `/chat/components/projector/image-viewer` | `/chat/components/projector/markdown-viewer` | `/chat/components/projector/projector-view` | `/chat/components/projector/video-player` | `/chat/components/selector/person-selector` | `/chat/components/sound-initializer` | `/chat/components/ui/emoji-picker` | `/chat/components/ui/settings-panel` | `/chat/lib/asset-loader` | `/chat/lib/utils` | `/chat/providers/chat-provider` | `/chat/providers/sound-provider` | `/chat/styles/audio.styles` | `/chat/styles/chat.styles` | `/chat/styles/layout.styles` | `/chat/styles/projector.styles` | `/chat/styles/selector.styles` | `/chat/styles/ui.styles` | `/chat/types` | `/dashboard` | `/dashboard/components/DateRangePicker` | `/dashboard/components/MainNav` | `/dashboard/components/Overview` | `/dashboard/components/RecentSales` | `/dashboard/components/Search` | `/dashboard/components/TeamSwitcher` | `/dashboard/components/UserNav` | `/login` | `/login/components/DateRangePicker` | `/login/components/MainNav` | `/login/components/Overview` | `/login/components/RecentSales` | `/login/components/Search` | `/login/components/TeamSwitcher` | `/login/components/UserNav` | `/mail` | `/mail/components/account-switcher` | `/mail/components/mail` | `/mail/components/mail-display` | `/mail/components/mail-list` | `/mail/components/nav` | `/mail/data` | `/mail/use-mail` | `/settings` | `/settings/account/account-form` | `/settings/account/page` | `/settings/appearance/appearance-form` | `/settings/appearance/page` | `/settings/components/sidebar-nav` | `/settings/display/display-form` | `/settings/display/page` | `/settings/layout` | `/settings/notifications/notifications-form` | `/settings/notifications/page` | `/settings/profile-form` | `/tasks` | `/tasks/components/DataTable` | `/tasks/components/DataTablePagination` | `/tasks/components/DataTableToolbar` | `/tasks/components/UserNav` | `/tasks/data/data` | `/tasks/data/schema` | `/templates` | `/templates/components/album-artwork` | `/templates/components/menu` | `/templates/components/podcast-empty-placeholder` | `/templates/components/sidebar` | `/templates/data/albums` | `/templates/data/playlists`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
