// Copyright 2024 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import type { LocalizerType } from '../types/Util';
import type { NavTabPanelProps } from './NavTabs';
import { NavSidebar } from './NavSidebar';

export type ProjectsTabProps = Readonly<{
  i18n: LocalizerType;
  navTabsCollapsed: boolean;
  onToggleNavTabsCollapse: (navTabsCollapsed: boolean) => void;
  preferredLeftPaneWidth: number;
  savePreferredLeftPaneWidth: (width: number) => void;
  renderToastManager: (props: { containerWidthBreakpoint: string }) => JSX.Element;
}>;

export function ProjectsTab({
  i18n,
  navTabsCollapsed,
  onToggleNavTabsCollapse,
  preferredLeftPaneWidth,
  savePreferredLeftPaneWidth,
  renderToastManager,
}: ProjectsTabProps): JSX.Element {
  return (
    <NavSidebar
      title="Projects"
      i18n={i18n}
      hasFailedStorySends={false}
      hasPendingUpdate={false}
      navTabsCollapsed={navTabsCollapsed}
      onToggleNavTabsCollapse={onToggleNavTabsCollapse}
      preferredLeftPaneWidth={preferredLeftPaneWidth}
      requiresFullWidth
      savePreferredLeftPaneWidth={savePreferredLeftPaneWidth}
      otherTabsUnreadStats={{
        unreadCount: 0,
        unreadMentionsCount: 0,
        markedUnread: false,
      }}
      renderToastManager={renderToastManager}
    >
      <div className="Projects__pane">
        <div className="Projects__empty-state">
          <div className="Projects__empty-state__icon" />
          <h3 className="Projects__empty-state__title">
            No Projects
          </h3>
          <p className="Projects__empty-state__description">
            Create a new project to get started
          </p>
        </div>
      </div>
    </NavSidebar>
  );
} 
