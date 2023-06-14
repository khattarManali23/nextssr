import { useEffect } from "react";

export const useNextFetchHijacking = () => {
  useEffect(() => {
    const { fetch: originalFetch } = window;
    window.fetch = async (...args) => {
      const [resource] = args;
      if (typeof resource === "string" && resource.includes("_next/data")) {
        return {
          status: 200,
          statusText: "OK",
          json: async () => ({ pageProps: {} }),
          text: async () => JSON.stringify({ pageProps: {} }),
          ok: true,
          redirected: false,
          headers: new Headers(),
          type: "basic",
          url: resource,
        };
      }
      const response = await originalFetch(...args);
      return response;
    };
    return () => {
      window.fetch = originalFetch;
    };
  }, []);
};
