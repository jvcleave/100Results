browser.webRequest.onBeforeRequest.addListener(
    function(details) {
      let url = new URL(details.url);
  
      // Check if 'num=100' is already in the URL to prevent loops
      if (url.hostname.includes("google.com") && url.searchParams.has("q") && !url.searchParams.get("num")) {
        url.searchParams.set("num", "100");
        return { redirectUrl: url.toString() };
      }
  
      // If 'num=100' is already present, do nothing to avoid infinite redirects
      return {};
    },
    { urls: ["*://www.google.com/search*"], types: ["main_frame"] },
    ["blocking"]
  );
  