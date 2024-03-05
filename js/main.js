document.addEventListener("DOMContentLoaded", function (event) {
  console.log("zankoav", true);
  Calendly.initBadgeWidget({
    url: "https://calendly.com/zankoav/30min",
    text: "Schedule time with me",
    color: "#0069ff",
    textColor: "#ffffff",
    branding: true,
  });
});
