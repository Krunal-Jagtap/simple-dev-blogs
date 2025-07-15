var tl = gsap.timeline();

tl.from("header", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
});

tl.from("main", {
  y: 30,
  opacity: 0,
  duration: 0.3,
  scale: 0.2,
});

tl.from(".blog-titles a", {
  y: -30,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});

tl.from("footer", {
  y: 30,
  opacity: 0,
  duration: 0.2,
  scale: 0.2,
});
