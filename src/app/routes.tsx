import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { PaymentGatewayPage } from "./pages/PaymentGatewayPage";
import { POSMachinesPage } from "./pages/POSMachinesPage";
import { SoundBoxPage } from "./pages/SoundBoxPage";
import { BillingAppsPage } from "./pages/BillingAppsPage";
import { PricingPage } from "./pages/PricingPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { SupportPage } from "./pages/SupportPage";
import { AboutPage } from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "payment-gateway", Component: PaymentGatewayPage },
      { path: "pos-machines", Component: POSMachinesPage },
      { path: "sound-box", Component: SoundBoxPage },
      { path: "billing-apps", Component: BillingAppsPage },
      { path: "pricing", Component: PricingPage },
      { path: "industries", Component: IndustriesPage },
      { path: "support", Component: SupportPage },
      { path: "about", Component: AboutPage },
    ],
  },
]);