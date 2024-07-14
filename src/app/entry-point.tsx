import "@/shared/styles/globals.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { registerSW } from "virtual:pwa-register"

import RootLayout from "./layouts/root-layout.tsx"
import { Provider } from "./provider.tsx"

import IndexPage from "@/pages/index.tsx"

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("У вас старая версия приложения. Обновить?")) {
      updateSW(true)
    }
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <RootLayout>
          <Routes>
            <Route element={<IndexPage />} path="/" />
          </Routes>
        </RootLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
