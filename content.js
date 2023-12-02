document.addEventListener("DOMContentLoaded", function () {
  let clapButton = document.querySelector(
    'button[data-testid="headerClapButton"]'
  );
  if (clapButton) {
    const events = ["mousedown", "mouseup", "click"];
    async function performClap() {
      for (let i = 0; i < 50; i++) {
        events.forEach((eventType) => {
          let event = new MouseEvent(eventType, {
            view: window,
            bubbles: true,
            cancelable: true,
          });
          clapButton.dispatchEvent(event);
        });
        await new Promise((resolve) => setTimeout(resolve, 10)); // Introducing a 10ms delay between claps
      }
      console.log("+50 Claps! Now, go join the SERP community!");
    }
    performClap();
  } else {
    console.log("Clap button not found!");
  }

  var walker = document.createTreeWalker(
    document.documentElement,
    NodeFilter.SHOW_ELEMENT // only elements
  );
  while (walker.nextNode()) {
    let current = walker.currentNode;
    console.log(
      current.tagName,
      [...current.attributes]
        .map(({ value, name }) => `${name}=${value}`)
        .join()
    );
  }
});
