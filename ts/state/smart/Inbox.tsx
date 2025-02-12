// Copyright 2024 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import type { NavTabPanelProps } from '../../components/NavTabs';
import type { SmartNavTabsProps } from './NavTabs';
import { SmartNavTabs } from './NavTabs';
import { SmartChatsTab } from './ChatsTab';
import { SmartCallsTab } from './CallsTab';
import { SmartStoriesTab } from './StoriesTab';
import { SmartProjectsTab } from './ProjectsTab';
import { Inbox } from '../../components/Inbox';
import { isNightly } from '../../util/version';
import { getIntl } from '../selectors/user';
import { SmartCustomizingPreferredReactionsModal } from './CustomizingPreferredReactionsModal';
import { getIsCustomizingPreferredReactions } from '../selectors/preferredReactions';
import { useItemsActions } from '../ducks/items';
import { getNavTabsCollapsed } from '../selectors/items';
import { getHasInitialLoadCompleted } from '../selectors/app';
import {
  getInboxEnvelopeTimestamp,
  getInboxFirstEnvelopeTimestamp,
} from '../selectors/inbox';

function renderChatsTab(props: NavTabPanelProps) {
  return <SmartChatsTab {...props} />;
}

function renderCallsTab(props: NavTabPanelProps) {
  return <SmartCallsTab {...props} />;
}

function renderProjectsTab(props: NavTabPanelProps) {
  return <SmartProjectsTab {...props} />;
}

function renderStoriesTab(props: NavTabPanelProps) {
  return <SmartStoriesTab {...props} />;
}

function renderNavTabs(props: SmartNavTabsProps) {
  return <SmartNavTabs {...props} />;
}

function renderCustomizingPreferredReactionsModal() {
  return <SmartCustomizingPreferredReactionsModal />;
}

export const SmartInbox = memo(function SmartInbox(): JSX.Element {
  const i18n = useSelector(getIntl);
  const isCustomizingPreferredReactions = useSelector(
    getIsCustomizingPreferredReactions
  );
  const envelopeTimestamp = useSelector(getInboxEnvelopeTimestamp);
  const firstEnvelopeTimestamp = useSelector(getInboxFirstEnvelopeTimestamp);
  const hasInitialLoadCompleted = useSelector(getHasInitialLoadCompleted);
  const navTabsCollapsed = useSelector(getNavTabsCollapsed);

  const { toggleNavTabsCollapse } = useItemsActions();

  return (
    <Inbox
      envelopeTimestamp={envelopeTimestamp}
      firstEnvelopeTimestamp={firstEnvelopeTimestamp}
      hasInitialLoadCompleted={hasInitialLoadCompleted}
      i18n={i18n}
      isNightly={isNightly(window.getVersion())}
      isCustomizingPreferredReactions={isCustomizingPreferredReactions}
      navTabsCollapsed={navTabsCollapsed}
      onToggleNavTabsCollapse={toggleNavTabsCollapse}
      renderChatsTab={renderChatsTab}
      renderCallsTab={renderCallsTab}
      renderProjectsTab={renderProjectsTab}
      renderStoriesTab={renderStoriesTab}
      renderNavTabs={renderNavTabs}
      renderCustomizingPreferredReactionsModal={
        renderCustomizingPreferredReactionsModal
      }
    />
  );
});
