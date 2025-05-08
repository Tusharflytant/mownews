"use client";

import { useEffect } from "react";

const Outbrain = () => {
  useEffect(() => {
    document
      .querySelectorAll(
        window.innerWidth >= 1024 ? ".outbrain-mobile" : ".outbrain-desktop"
      )
      .forEach((ele: Element) => ele.remove());

    const reload = (
      window as unknown as { OBR?: { extern?: { reloadWidget?: () => void } } }
    ).OBR?.extern?.reloadWidget;
    if (reload) return reload();

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//widgets.outbrain.com/outbrain.js";
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Outbrain;
