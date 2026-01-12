(function() {
  "use strict";

  kintone.events.on("mobile.portal.show", function() {
    const logo = document.getElementsByClassName(
      "gaia-mobile-v2-viewpanel-globalnavigationbar-title-logo-img"
    )[0];

    if (logo) {
      logo.src =
        "https://ogusu.cybozu.com/api/company/logo.do/-/logo.png?hash=3d4f323066a27e1454298ccdb504c6c038efbb11&.png";
    }
  });
})();
