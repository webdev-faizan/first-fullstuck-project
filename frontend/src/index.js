import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Auth0Provider } from "@auth0/auth0-react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  
});
// OD8HG_G3Z6JTQr4TZ8bR389OuQc2tE-wQpyazTqniAxqvJDKM3alhKJ4KeHo1QRJ
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Auth0Provider
      domain="dev-kpkv0vzda6s4dcrc.au.auth0.com"
      clientId="pBQduygLCfLMyRF59xL6U5d6mvK5U5vE"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    > */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    {/* </Auth0Provider> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
