const container = document.getElementById("container");

container.addEventListener("mousemove", (e) => {
  const containerLocation = container.getBoundingClientRect();
  const insideContainer = e.clientX - containerLocation.left;
  const red = gsap.utils.mapRange(
    0,
    containerLocation.width,
    255,
    0,
    insideContainer
  );
  const blue = gsap.utils.mapRange(
    0,
    containerLocation.width,
    0,
    255,
    insideContainer
  );
  gsap.to(container, {
    backgroundColor: `rgb(${red}, 0, ${blue})`,
    duration: 0.5,
  });
});
container.addEventListener("mouseleave", () => {
  gsap.to(container, {
    backgroundColor: "white",
    duration: 0.5,
  });
});
