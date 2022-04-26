import React from 'react'
import ApplyCV from '../Component/applyCV';
import Campaign from '../Component/Campaign';
import ViewDetail from '../Component/viewDetail'
export const router = [
    {
        path: "/ApplyCV",
        component: <ApplyCV />,
    },
    {
        path: "/",
        component: <Campaign />,
    },
    {
        path: "/ViewDetail",
        component: <ViewDetail />,
    }
]