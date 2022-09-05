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
  // hero
  gsap.to('h1', {
    scrollTrigger: {
      scrub: true
    }, 
    yPercent: -30,
    opacity: 0.5,

  });
  gsap.to('.hero-content', {
    scrollTrigger: {
      scrub: true,
      end: "bottom 90%"
    }, 
    yPercent: -25,
    color: '#F4E5C9'
  });

  // wtf
  gsap.to('.wtf h2', {
    scrollTrigger: {
      trigger: '.wtf h2',
      scrub: true,
    }, 
    yPercent: -35
  });
  gsap.to('.wtf .description', {
    scrollTrigger: {
      trigger: '.wtf .description',
      scrub: true,
    }, 
    yPercent: 45,
    color: '#FF9658'
  });

  // past comics
  gsap.to('.coming-soon-text', {
    scrollTrigger: {
      trigger: '.coming-soon',
      scrub: true,
      end: 'center center'
    }, 
    yPercent: -130,
    opacity: 1,
  });

  gsap.to('.past-text, .past-text-links', {
    scrollTrigger: {
      trigger: '.past-text',
      scrub: true,
    }, 
    y: -70,
    opacity: 0.7,
  });

  gsap.to('.coupon .secondary-text', {
    scrollTrigger: {
      trigger: '.coupon .secondary-text',
      scrub: true,
      start: 'center 40%',
    },
    color: '#F4E5C9'
  });

  // covers
  let mm = gsap.matchMedia();
  mm.add("(min-width: 35.5rem)", () => {
    gsap.to('.cover1', {
      scrollTrigger: {
        trigger: '.cover1',
        scrub: true,
        end: 'center center',
      }, 
      x: 120,
      y: 30,
      rotation: -15
    });
    gsap.to('.cover3', {
      scrollTrigger: {
        trigger: '.cover3',
        scrub: true,
        end: 'center center'
      }, 
      x: -130,
      y: 30,
      rotation: 15
    });
  });

// comics covers links
  const cover1 = document.querySelector('.cover1 img');
  const cover2 = document.querySelector('.cover2 img');
  const cover3 = document.querySelector('.cover3 img');
  const link1 = document.querySelector('.comic1link');
  const link2 = document.querySelector('.comic2link');
  const link3 = document.querySelector('.comic3link');
  const scaleUp = element => element.style.transform = 'scale(1.1)';
  const scaleDown = element => element.style.transform = 'scale(1)';

  link1.onmouseenter = () => scaleUp(cover1);
  link1.onmouseleave = () => scaleDown(cover1);
  link2.onmouseenter = () => scaleUp(cover2);
  link2.onmouseleave = () => scaleDown(cover2);
  link3.onmouseenter = () => scaleUp(cover3);
  link3.onmouseleave = () => scaleDown(cover3);