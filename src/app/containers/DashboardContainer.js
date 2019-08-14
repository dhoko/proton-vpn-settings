import React from 'react';
import { SubscriptionSection, BillingSection } from 'react-components';
import { PERMISSIONS } from 'proton-shared/lib/constants';
import { c } from 'ttag';

import Page from '../components/page/Page';

const { UPGRADER, PAID } = PERMISSIONS;

export const getDashboardPage = () => {
    return {
        text: c('Title').t`Dashboard`,
        route: '/dashboard',
        icon: 'dashboard',
        permissions: [UPGRADER],
        sections: [
            {
                text: c('Title').t`Subscription`,
                id: 'subscription',
                permissions: [PAID]
            },
            {
                text: c('Title').t`Billing`,
                id: 'billing',
                permissions: [PAID]
            }
        ]
    };
};

const DashboardContainer = () => {
    return (
        <Page config={getDashboardPage()}>
            <SubscriptionSection />
            <BillingSection />
        </Page>
    );
};

export default DashboardContainer;