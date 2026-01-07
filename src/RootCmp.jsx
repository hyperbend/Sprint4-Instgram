import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'

import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup, Login, Signup } from './pages/LoginSignup.jsx'


export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <UserMsg />

            <main>
                <Routes>
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}


