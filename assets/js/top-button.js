(function() {

  /**
   * @description Trigger to scroll up
   * 
   * https://getflywheel.com/layout/sticky-back-to-top-button-tutorial/
   */


  // VARS / REFERENCES //////////////////////////////////////////////////////////////////////////////
  const scrollToTopButton = document.getElementById('top-button');
  let hasScrolled = false

  // FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////

  const scrollFunc = () => { hasScrolled = true }

  const checkVisibility = () => {
    if (!hasScrolled) return;
    hasScrolled = false;

    // ===================

    let show = false;

    const selectors = [
      '.page-stories .table-of-contents',
      '.page-blog article.post',
      '.page-tags section:nth-of-type(5)',
      '.stories article.chapter .chapter-content p:nth-of-type(5)',
    ]
    let results = selectors.map(v => document.querySelector(v)).filter(Boolean)
    if (results) show = results.some(v => v.getBoundingClientRect().bottom < 0)
    
    if (show) scrollToTopButton.classList.remove('hide');
    else scrollToTopButton.classList.add('hide');
  };


  const scrollToTop = (e) => {
    e.preventDefault();
    scroll({
      top: 0,
      behavior: "smooth"
    });
  };


  // EVENTS //////////////////////////////////////////////////////////////////////////////////////////

  window.addEventListener("scroll", scrollFunc);

  setInterval(checkVisibility, 300)

  scrollToTopButton.addEventListener("click", scrollToTop);

})()