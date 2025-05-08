"use client";

import { useEffect } from "react";

const Outbrain = () => {
  useEffect(() => {
    // Fix class name logic
    document
      .querySelectorAll(
        window.innerWidth >= 1024 ? ".outbrain-desktop" : ".outbrain-mobile"
      )
      .forEach((ele: Element) => ele.remove());

    const reload = (
      window as unknown as { OBR?: { extern?: { reloadWidget?: () => void } } }
    ).OBR?.extern?.reloadWidget;

    // Call reload if exists, but don't return early
    if (reload) reload();

    // Always inject script if it doesn't already exist
    if (!document.querySelector('script[src*="outbrain.js"]')) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "//widgets.outbrain.com/outbrain.js";
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default Outbrain;
