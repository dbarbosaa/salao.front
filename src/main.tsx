import React, { Fragment, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './Init';

import App from './App'
import './index.scss';
import Loader from './Components/Layouts/Loader/Loader';
import { AuthProvider } from './Context/AuthProvider';
import FXNProvider from './Context/FXNProvider';

// Páginas com Lazy Loading
const Indexpage = lazy(() => import('./Components/indexpage/Indexpage'));
const Auth = lazy(() => import('./Authentication/Auth'));
const SignIn = lazy(() => import('./Authentication/SignIn'));

// Páginas de Usuário com Lazy Loading
const UsuarioPage = lazy(() => import('./Pages/UsuarioPage/UsuarioPage'));

// Páginas de Profissional com Lazy Loading
const ProfissionalPage = lazy(() => import('./Pages/ProfissionalPage/ProfissionalPage'));

const container: any = document.getElementById('root');

const root = createRoot(container);

root.render(
  <Fragment>
    <BrowserRouter>
      <AuthProvider>
        <FXNProvider>
          <React.Suspense fallback={<Loader />}>
            <Routes>

              {/* Authentication Routes */}
              <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
                <Route index element={<SignIn />} />
                <Route path={`${import.meta.env.BASE_URL}FirebaseAuthentication/FirebaseSignIn`} element={<SignIn />} />
              </Route>

              <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
                <Route index element={<Indexpage />} />
                <Route path={`${import.meta.env.BASE_URL}indexpage`} element={<Indexpage />} />

                {/* Pages */}
                <Route>
                  <Route path={`${import.meta.env.BASE_URL}usuario`} element={<UsuarioPage />} />
                  <Route path={`${import.meta.env.BASE_URL}profissional`} element={<ProfissionalPage />} />
                </Route>
              </Route>
            </Routes>
          </React.Suspense>
        </FXNProvider>
      </AuthProvider>
    </BrowserRouter>
  </Fragment>
)
