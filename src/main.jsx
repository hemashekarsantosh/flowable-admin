import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import Instance from "./components/Instance.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeploymentInfo from "./components/DeploymentInfo.jsx";
import Footer from "./components/Footer.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/tasks" element={<Tasks />} />
            <Route exact path="/instance" element={<Instance />} />
            <Route exact path="/deploymentInfo" element={<DeploymentInfo />} />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
