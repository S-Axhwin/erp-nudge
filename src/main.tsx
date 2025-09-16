import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { AppSidebar } from "./components/app-sidebar.tsx"
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark'>
    <BrowserRouter basename="dealer">
      <SidebarProvider
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
          >
            <AppSidebar variant="inset" />
            <SidebarInset>
              <App/>
            </SidebarInset>
      </SidebarProvider>
    </BrowserRouter>
  </ThemeProvider>,
)
