(() => {
  // src/assets/js/drawer.js
  var drawer_default = drawer = () => {
    const settings = {
      speedOpen: 50,
      speedClose: 350,
      activeClass: "is-active",
      visibleClass: "is-visible",
      selectorTarget: "[data-drawer-target]",
      selectorTrigger: "[data-drawer-trigger]",
      selectorClose: "[data-drawer-close]"
    };
    if (!Element.prototype.closest) {
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      Element.prototype.closest = (s) => {
        const el = void 0;
        let ancestor = void 0;
        if (!document.documentElement.contains(el)) return null;
        do {
          if (ancestor.matches(s)) return ancestor;
          ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
      };
    }
    const trapFocus = (element) => {
      const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
      const firstFocusableEl = focusableEls[0];
      const lastFocusableEl = focusableEls[focusableEls.length - 1];
      const KEYCODE_TAB = 9;
      element.addEventListener("keydown", (e) => {
        const isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;
        if (!isTabPressed) {
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      });
    };
    const toggleAccessibility = (event) => {
      if (event.getAttribute("aria-expanded") === "true") {
        event.setAttribute("aria-expanded", false);
      } else {
        event.setAttribute("aria-expanded", true);
      }
    };
    const removeOverlay = () => {
      document.documentElement.style.overflow = "";
    };
    const openDrawer = (trigger) => {
      const target = document.getElementById(trigger.getAttribute("aria-controls"));
      target.classList.add(settings.activeClass);
      document.documentElement.style.overflow = "hidden";
      toggleAccessibility(trigger);
      setTimeout(() => {
        target.classList.add(settings.visibleClass);
        trapFocus(target);
      }, settings.speedOpen);
    };
    const closeDrawer = (event) => {
      const closestParent = event.closest(settings.selectorTarget);
      const childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');
      closestParent.classList.remove(settings.visibleClass);
      removeOverlay();
      toggleAccessibility(childrenTrigger);
      setTimeout(function() {
        closestParent.classList.remove(settings.activeClass);
      }, settings.speedClose);
    };
    const clickHandler = (event) => {
      const toggle = event.target;
      const open = toggle.closest(settings.selectorTrigger);
      const close = toggle.closest(settings.selectorClose);
      if (open) {
        openDrawer(open);
      }
      if (close) {
        closeDrawer(close);
      }
      if (open || close) {
        event.preventDefault();
      }
    };
    const keydownHandler = (event) => {
      if (event.key === "Escape" || event.keyCode === 27) {
        const drawers = document.querySelectorAll(settings.selectorTarget);
        for (let i = 0; i < drawers.length; ++i) {
          if (drawers[i].classList.contains(settings.activeClass)) {
            closeDrawer(drawers[i]);
          }
        }
      }
    };
    document.addEventListener("click", clickHandler, false);
    document.addEventListener("keydown", keydownHandler, false);
  };

  // src/assets/js/dark-mode.js
  var dark_mode_default = darkMode = () => {
    const selectors = {
      toggleButton: "[data-theme-switch]"
    };
    const toggleTheme = () => {
      const themeSettings = document.documentElement.dataset;
      const newTheme = themeSettings.theme === "dark" ? "light" : "dark";
      themeSettings.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    };
    const handleClick = (event) => {
      const shouldToggle = event.target.closest(selectors.toggleButton);
      if (shouldToggle) {
        toggleTheme();
      }
    };
    document.addEventListener("click", handleClick);
  };

  // src/assets/js/main.js
  drawer_default();
  var { enableThemeSwitch } = document.documentElement.dataset;
  if (enableThemeSwitch) {
    dark_mode_default();
  }
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
})();
