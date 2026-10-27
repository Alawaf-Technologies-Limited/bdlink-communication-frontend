import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ManagementPage } from '@/pages/ManagementPage'
import { BoardPage } from '@/pages/BoardPage'
import { TeamPage } from '@/pages/TeamPage'
import { InternationalPage } from '@/pages/InternationalPage'
import { DomesticPage } from '@/pages/DomesticPage'
import { ExperiencePage } from '@/pages/ExperiencePage'
import { PartnersPage } from '@/pages/PartnersPage'
import { ContactPage } from '@/pages/ContactPage'
import { OfflinePage } from '@/pages/OfflinePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'about/management', element: <ManagementPage /> },
      { path: 'about/board', element: <BoardPage /> },
      { path: 'about/team', element: <TeamPage /> },
      { path: 'services/international', element: <InternationalPage /> },
      { path: 'services/domestic', element: <DomesticPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'offline', element: <OfflinePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
