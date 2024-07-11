let iframes = [];
let buttonMap = [];
let activeButtonIdx = 0;
let activeCbIdx = 0;

/**
 * Put map to fullscreen
 */
let applyStyles = () => {
  iframes.forEach(targetElement => {
    if (targetElement) {
      targetElement.style.height = '100%';
      targetElement.style.position = 'fixed';
      targetElement.style.top = '0';
      targetElement.style.left = '0';
      targetElement.style.right = '0';
      targetElement.style.bottom = '0';
      targetElement.style.zIndex = '99999';
      targetElement.style.boxSizing = 'border-box';
    } else {
      console.error("#### Element with ID 'ximap0' not found.");
    }
  });
}

/**
 * Sets up all key events
 */
let setupEvents = () => {  
  iframes.forEach(iframe => {
    let iframeDoc = iframe.contentDocument;
    let iframeMap = iframeDoc.getElementById("map");

    iframeMap.addEventListener("keydown", (e) => {
      // console.log("#### keydown on map: ", e);
      if (e.key == "/") switchMap();
      if (e.key == "Home") handleCheckboxes("up");
      if (e.key == "End") handleCheckboxes("down");
      if (e.key == "Delete") handleCheckboxes("click");
    }, true);
  });
}

/**
 * Switching the map overground <=> underground
 */
let switchMap = () => {
  activeButtonIdx = activeButtonIdx === 1 ? 0 : 1;

  buttonMap[activeButtonIdx].forEach(btn => {
    btn.click();
  });

  setMapActive(activeButtonIdx);
}

/**
 * Handles moving up and down and clicking on checkboxes
 * @param {*} action "up | down | click"
 */
let handleCheckboxes = (action) => {
  const doc = iframes[activeButtonIdx].contentDocument;
  const cbInputs = doc.querySelectorAll("label > div > input.leaflet-control-layers-selector");
  // map inputs back to parent-divs
  const cbContainers = Array.from(cbInputs).map(x => x.closest("div"));

  /* clear borders */
  if (["up", "down"].includes(action)) {
    cbContainers.forEach(cb => cb.style.border = "");
  }

  if (action == "up") {
    activeCbIdx--;
    if (activeCbIdx <= 0) activeCbIdx = 0;

    cbContainers[activeCbIdx].style.border = "1px solid gray";
  }
  else if (action == "down") {
    activeCbIdx++;
    if (activeCbIdx >= cbContainers.length-1) activeCbIdx = cbContainers.length-1;

    cbContainers[activeCbIdx].style.border = "1px solid gray";
  }
  else if (action == "click") {
    cbContainers[activeCbIdx].click();
    setMapActive();
  }
}

/**
 * Sets focus to the iframe>map
 */
let setMapActive = () => {
  let frame = iframes[activeButtonIdx];
  let map = frame.contentDocument.getElementById("map");
  map.focus();
}

/**
 * Helper function to wait recursively until elements appear.
 */
let waitForElement = (selector, base = document) => {
  let prom = new Promise(res => {
    let check = (selector) => {
      let el = base.querySelector(selector);
      if (!el) {
        setTimeout(() => { check(selector) }, 250);
      } else {
        res(el);
      }
    }
    check(selector);
  });

  return prom;
}

/**
 * Wait for everything to be loaded.
 */
let checkMaps = async () => {
  const iframesSelectors = ["ximap0", "ximap1", "ximap2", "ximap3"];
  const waits = iframesSelectors.map(iframeSelector => waitForElement(`#${iframeSelector}`));

  let iframeElements = await Promise.all(waits);
  iframes = iframeElements;
    
  applyStyles();
  checkButtons();
  setupEvents();
  setMapActive();
}

/**
 * WAIT FOR BUTTONS LOAD
 */
let checkButtons = async () => {
  // currently only 2 maps, as I'm not interested in the other ones.
  // some changes needed to make the others work too.
  const buttonSelectors = ["map-overground", "map-underground"/*, "map-endgame", "map-shadowoftheerdtree"*/];
  buttonSelectors.forEach(_ => buttonMap.push([]));

  for (let i = 0; i < iframes.length; i++) {
    let iframe = iframes[i];
    const waits = buttonSelectors.map(buttonSelector => waitForElement(`#${buttonSelector}`, iframe.contentDocument));

    let buttonElements = await Promise.all(waits);
    
    // buttonMap = [ [0, 0, 0, 0], [1, 1, 1, 1] ];
    buttonElements.forEach((btn, j) => buttonMap[j].push(btn));
    console.log("#### Buttons loaded for: ", buttonMap);
  }
}

/**
 * START
 */
window.addEventListener('load', async () => {
  // careful: Title is used in autohotkey script to detect the window/tab.
  document.title = "EldenRingMap AHK";
  await checkMaps();
});