(function () {
  function isCalendlyEvent(e) {
    return (
      e.origin === "https://calendly.com" &&
      e.data.event &&
      e.data.event.indexOf("calendly.") === 0
    );
  }

  window.addEventListener("message", function (e) {
    if (isCalendlyEvent(e)) {
      /* Example to get the name of the event */
      //   console.log("Event name:", e.data.event);

      if (e.data.event == "calendly.event_scheduled") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "Calendly_Scheduled",
        });
      }

      /* Example to get the payload of the event */
      //   console.log("Event details:", e.data.payload);
    }
  });

  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  let resultLink = getCookie("calendly_link_v4");
  if (resultLink) {
    let utm_term =
      uri.pathname == "/"
        ? "home-page"
        : uri.pathname.split("/").filter(Boolean).at(-1);
    resultLink = `${resultLink}&utm_term=${utm_term}`;
  }

  let baseUrl = "https://calendly.com/eugene-vab/30min";
  document.querySelectorAll(".calendly-integration").forEach((element) => {
    element.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        Calendly.initPopupWidget({
          url: resultLink || baseUrl,
        });
      },
      false
    );
  });
})();
