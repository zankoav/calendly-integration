document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll("a.calendly-integration").forEach((element) => {
    element.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        Calendly.initPopupWidget({ url: "https://calendly.com/zankoav/30min" });
      },
      false
    );
  });

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
      console.log("Event name:", e.data.event);

      /* Example to get the payload of the event */
      console.log("Event details:", e.data.payload);
    }
  });
});
