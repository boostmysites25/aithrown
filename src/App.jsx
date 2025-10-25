import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./Components/Loader";
import ErrorBoundary from "./Components/ErrorBoundary";
const WebAppDevelopment = lazy(() => import("./pages/ServicesPage/WebAppDevelopment"));
const GameDevelopment = lazy(() => import("./pages/ServicesPage/GameDevelopment"));
const ArtificialIntelligence = lazy(() => import("./pages/ServicesPage/ArtificialIntelligence"));
const BlockChain = lazy(() => import("./pages/ServicesPage/BlockChain"));
const RPA = lazy(() => import("./pages/ServicesPage/RPA"));
const ARAndVR = lazy(() => import("./pages/ServicesPage/ARAndVR"));
const IOTDevelopment = lazy(() => import("./pages/ServicesPage/IOTDevelopment"));
const DataAnalytics = lazy(() => import("./pages/ServicesPage/DataAnalytics"));
const CloudSolutions = lazy(() => import("./pages/ServicesPage/CloudSolutions"));
const CyberSecurity = lazy(() => import("./pages/ServicesPage/CyberSecurity"));
import { Toaster } from "react-hot-toast";
import BlogPage from "./pages/BlogPage";
import LandingPage from "./pages/LandingPage/LandingPage";
// import ServicePageLayout from "./Layout/ServicePageLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutusPage = lazy(() => import("./pages/AboutusPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Industries = lazy(() => import("./pages/Industries"));
const ServicePageLayout = lazy(() => import("./Layout/ServicePageLayout"));
// const LandingPage = lazy(() => import("./landingpage/LandingPage"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          />
          <AppLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        path: "*",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutusPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />, // Main /services page with AppLayout
      },
      {
        path: "/industries",
        element: <Industries />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/services/web-app-development",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><WebAppDevelopment /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/game-development",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><GameDevelopment /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/artificial-intelligence",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><ArtificialIntelligence /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/blockchain",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><BlockChain /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/rpa",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><RPA /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/ar-vr",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><ARAndVR /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/iot-development",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><IOTDevelopment /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/data-analytics",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><DataAnalytics /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/cloud-solutions",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><CloudSolutions /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  {
    path: "/services/cybersecurity",
    element: <ErrorBoundary><Suspense fallback={<Loader />}><ServicePageLayout><CyberSecurity /></ServicePageLayout></Suspense></ErrorBoundary>,
  },
  { path: "/healthcare", element: <LandingPage /> }, // Landing page route
], {
  future: {
    v7_startTransition: true,
  },
});

export default AppRouter;
