var linkUtil = (function() {

  /**
   * @description Remove any local id links that dont exist here
   */


  // FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////
  const domReady = (fn) => {
    if (document.readyState === "loading") document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  const removeMissingIdLinks = () => {
    var newElements = [];

    // Get all elements with an id to scan
    var idElements = document.querySelectorAll('[id]');
    var ids = Array.prototype.map.call( idElements, el => el.id );
    ids.push(""); //add a match for # so we do not alter those.

    // Get all local links and filter them by the previous array
    var aElements = document.querySelectorAll('a[href^="#"]');
    var dead = Array.prototype.filter.call( aElements, el => !ids.includes(el.getAttribute('href').substring(1)) )
    // console.log(dead);

    // Make these links dead
    dead.forEach(a => {
      const em = document.createElement('em');
      em.innerHTML = a.innerHTML;
      a.getAttributeNames().forEach(attrName => {
        em.setAttribute(attrName, a.getAttribute(attrName));
      });
      em.classList.add('link-missing')
      a.replaceWith(em);
      newElements.push(em);
    });

    if (newElements.length > 0) {
      console.warn("Some anchor links were not valid:")
      console.warn(newElements);
    }

    return newElements;
  }

  // EVENTS //////////////////////////////////////////

  domReady(removeMissingIdLinks);

  // EXPOSE //////////////////////////////////////////

  return { removeMissingIdLinks }

})()