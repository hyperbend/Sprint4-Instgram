import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './pages/AppLayout'
import { PostIndex } from './pages/PostIndex'
import { HomePage } from './pages/HomePage'

export function RootCmp() {
  return (
    <section className="root-cmp">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<PostIndex />} />
          <Route path="/explore" element={<HomePage />} />
          <Route path="/profile" element={<HomePage />} />
        </Route>
      </Routes>
    </section>
  )
}
