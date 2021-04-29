(function() {

  /**
   * @description Logic for switching CSS themes
   */


  // VARS / REFERENCES //////////////////////////////////////////////////////////////////////////////
  const rootattr = 'data-theme';
  const localKey = 'theme';
  const buttonID = 'theme-toggle'
  const LIGHT = 'light';
  const DARK = 'dark';
  const root = document.documentElement;
  const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)"); 


  // FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////
  const getToggleElement = () => document.getElementById(buttonID);
  const getUserTheme = () => window.localStorage.getItem(localKey);
  const eraseUserTheme = () => localStorage.removeItem(localKey);
  const setUserTheme = function( value, save ) {
    root.setAttribute(rootattr, value);
    const toggle = getToggleElement()
    toggle.innerHTML = ''; //(value === DARK) ? 'Light Mode' : 'Dark Mode';
    toggle.setAttribute('aria-label', `Switch to ${(value === DARK) ? 'Light' : 'Dark'} Mode`)
    if (save) window.localStorage.setItem(localKey, value);
  } 
  const setLight = (save = false) => setUserTheme(LIGHT, save);
  const setDark  = (save = false) => setUserTheme(DARK, save);

  const readPreferencesOnLoad = () => { // READ SETTINGS AND SET
    ( getUserTheme() === DARK || (systemThemeQuery.matches && !getUserTheme()) ) ? setDark() : setLight();
  }

  const toggleColorMode = e => { // BUTTON EVENT
    ( root.getAttribute(rootattr) === DARK ) ? setLight(true) : setDark(true);
  }

  const prefersColorTest = e => { // SYSTEM PREF EVENT
    e.matches ? setDark() : setLight();
    eraseUserTheme();
  }

  const domReady = (fn) => {
    if (document.readyState === "loading") document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  const windowReady = (fn) => {
    if (document.readyState === 'complete') fn();
    else window.addEventListener('load', fn);
  }

  // EVENTS //////////////////////////////////////////////////////////////////////////////////////////

  const onDomContentLoaded = () => {

    // Load current setting into DOM
    readPreferencesOnLoad();

    // Attach system dark mode change event
    try { systemThemeQuery.addEventListener('change', prefersColorTest); }
    catch (e1) { //Safari
      try { systemThemeQuery.addListener(prefersColorTest); }
      catch (e2) { console.error(e2); }
    }

    // Attach button/toggle event
    getToggleElement().addEventListener('click', toggleColorMode);

  }
  domReady(onDomContentLoaded);


  /* 
      Prevent transitions on first load
      added to default.html template and extra.scss
  */
  const removeTransitionsBlockClass = () => {
    document.documentElement.removeAttribute('preload');
  }
  windowReady(removeTransitionsBlockClass);

})()