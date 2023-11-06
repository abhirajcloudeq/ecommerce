import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'; // Import your main App component

const root = createRoot(document.getElementById('root'));

function RootComponent() {
  return (
    <Auth0Provider
      domain="dev-fyanc060qc23mift.us.auth0.com"
      clientId="6Bjj5T1eGJWsPryJ1Vv8GhqKqwYnTd8U"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  );
}

root.render(<RootComponent />);
