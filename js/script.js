// GSAP fades
window.onload = () => {
  gsap.from(".hero h1", {y: 40, opacity: 0, duration: 1, ease: "power3.out"});
  gsap.from(".device-frame", {scale: 0.9, y: 60, opacity: 0, duration: 1.3, ease: "power3.out", delay: .2});
};