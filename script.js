// hero parallax
document.addEventListener("mousemove", parallax);
function parallax(event) {
  const layer1 = document.querySelector(".layer-1");
  const layer2 = document.querySelector(".layer-2");
  const position = 7;
  const x1 = (window.innerWidth - event.pageX * position) / 90;
  const y1 = (window.innerHeight - event.pageY * position) / 90;
  layer1.style.transform = `translateX(${x1}px) translateY(${y1}px)`;

  const x2 = (window.innerWidth - event.pageX * 12) / 90;
  const y2 = (window.innerHeight - event.pageY * 12) / 90;
  layer2.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
}

// scroll parallax

// section titles
const titles = gsap.utils.toArray(".info-card h2, .projects-title");
titles.forEach((title) => {
  gsap.from(title, {
    opacity: 0.3,
    scale: 0.9,
    scrollTrigger: {
      trigger: title,
      scrub: true,
    },
  });
});
const dividers = gsap.utils.toArray(".section-divider");
dividers.forEach((divider) => {
  gsap.from(divider, {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: divider,
      // scrub: true,
    },
  });
});

// hero
gsap.to("h1", {
  scrollTrigger: {
    scrub: true,
  },
  yPercent: -45,
  opacity: 0,
});
gsap.to(".hero-content", {
  scrollTrigger: {
    scrub: true,
    end: "bottom 90%",
  },
  yPercent: -25,
  color: "#F4E5C9",
});

// wtf
gsap.to(".wtf h2", {
  scrollTrigger: {
    trigger: ".wtf h2",
    scrub: true,
  },
  yPercent: -35,
});
gsap.to(".wtf .description", {
  scrollTrigger: {
    trigger: ".wtf .description",
    scrub: true,
  },
  yPercent: 45,
  color: "#FF9658",
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  window.scrollY > 50 ? header.style.background = 'var(--dark-color) url("./aseets/2.png")' : header.style.background = 'transparent'
})
