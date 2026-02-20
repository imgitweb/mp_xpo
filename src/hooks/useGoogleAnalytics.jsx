import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-NK2HFRVQSR";

export default function useGoogleAnalytics() {
  const location = useLocation();

  // Load GA script once
  useEffect(() => {
    if (!GA_ID) return;

    if (document.getElementById("ga-script")) return;

    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());

    // disable auto page view (React SPA fix)
    window.gtag("config", GA_ID, {
      send_page_view: false,
    });
  }, []);

  // Track traffic on route change
  useEffect(() => {
    if (!window.gtag || !GA_ID) return;

    window.gtag("config", GA_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}