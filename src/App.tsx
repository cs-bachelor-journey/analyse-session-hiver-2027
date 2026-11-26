import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { CoursesPage } from '@/pages/CoursesPage'
import { CourseDetailPage } from '@/pages/CourseDetailPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { PlanningPage } from '@/pages/PlanningPage'
import { ResourcesPage } from '@/pages/ResourcesPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cours" element={<CoursesPage />} />
        <Route path="cours/:id" element={<CourseDetailPage />} />
        <Route path="projets" element={<ProjectsPage />} />
        <Route path="planning" element={<PlanningPage />} />
        <Route path="ressources" element={<ResourcesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
