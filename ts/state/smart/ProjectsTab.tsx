// Copyright 2024 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import type { NavTabPanelProps } from '../../components/NavTabs';
import { ProjectsTab } from '../../components/ProjectsTab';
import { getIntl } from '../selectors/user';
import { useItemsActions } from '../ducks/items';

export type SmartProjectsTabProps = Readonly<NavTabPanelProps>;

export const SmartProjectsTab = memo(function SmartProjectsTab({
  otherTabsUnreadStats,
  collapsed,
  hasFailedStorySends,
  hasPendingUpdate,
  onToggleCollapse,
}: SmartProjectsTabProps): JSX.Element {
  const i18n = useSelector(getIntl);

  return (
    <ProjectsTab
      i18n={i18n}
      navTabsCollapsed={collapsed}
      onToggleNavTabsCollapse={onToggleCollapse}
      preferredLeftPaneWidth={280}
      savePreferredLeftPaneWidth={() => {}}
      renderToastManager={({ containerWidthBreakpoint }) => <div />}
    />
  );
}); 
