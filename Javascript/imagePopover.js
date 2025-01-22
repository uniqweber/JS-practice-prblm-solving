const throttle = (fn, delay) => {
  let previousTime = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - previousTime > delay) {
      previousTime = now;
      return fn(...args);
    }
  };
};

const imageContainer = document.querySelector("#image-container");

imageContainer.addEventListener(
  "mousemove",
  throttle((e) => {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/200/300");
    img.classList.add(
      "w-20",
      "h-20",
      "object-cover",
      "rounded-lg",
      "translate-y-full"
    );
    imgDiv.classList.add(
      "absolute",
      "bottom-0",
      "left-0",
      "z-50",
      "w-20",
      "h-20",
      "overflow-hidden"
    );
    gsap.to(img, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    imgDiv.style.left = `${e.clientX}px`;
    imgDiv.style.top = `${e.clientY}px`;
    imgDiv.appendChild(img);
    imageContainer.appendChild(imgDiv);
    setTimeout(() => {
      imageContainer.removeChild(imgDiv);
      imgDiv.removeChild(img);
    }, 1000);
  }, 150)
);
