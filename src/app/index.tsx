import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';

const routerBasename = process.env.NODE_ENV === 'production' ? '/HCC-cursor-seed' : '';

const App: React.FunctionComponent = () => (
  <Router basename={routerBasename}>
    <Routes>
      <Route path="help" element={<AppLayout helpStandalone />} />
      <Route path="*" element={<AppLayout><AppRoutes /></AppLayout>} />
    </Routes>
  </Router>
);

export default App;
