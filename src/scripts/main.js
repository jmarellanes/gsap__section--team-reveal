import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

function getImageUrl(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.refresh();

  const membersData = [
    { title: "Systems Architect", firstName: "Sarah", lastName: "Chan", img: getImageUrl("image-1.webp") },
    { title: "Infrastructure Engineer", firstName: "Martha", lastName: "Davis", img: getImageUrl("image-2.webp") },
    { title: "Interaction Designer", firstName: "Elena", lastName: "Rois", img: getImageUrl("image-3.webp") },
  ];

  const teamSectionWrapper = document.querySelector(".team-reveal");
  if (!teamSectionWrapper) {
    return;
  }

  const array = [];
  membersData.forEach((member) => {
    const mbr = `
    <div class="team-reveal__item">  
      <div class="team-reveal__initial">
        <h2>${member.firstName[0]}</h2>
      </div>

      <div class="team-reveal__card">
        <div class="team-reveal__image">
          <img src="${member.img}" alt="Headshot of ${member.firstName} ${member.lastName}" />
        </div>
        <div class="team-reveal__info">
          <p>[ ${member.title} ]</p>
          <h3> ${member.firstName} <span>${member.lastName}</span></h3>
        </div>
      </div>
    </div>
    `;

    array.push(mbr);
  });

  teamSectionWrapper.innerHTML = array.join("");

  const element = gsap.utils.selector(teamSectionWrapper);
  const cards = element(".team-reveal__card");
  const initials = element(".team-reveal__initial h2");
  const members = element(".team-reveal__item");

  const mm = gsap.matchMedia();

  mm.add("(min-width: 981px)", () => {
    gsap.set(members, { y: "125%" });
    gsap.set(initials, { y: "100%", scale: 0.4, opacity: 0 });

    cards.forEach((card, i) => {
      const xOffset = (350 - (i * 100));

      gsap.set(card, {
        x: `${xOffset}%`,
        scale: 0.75,
        rotation: 20,
      });
    });

    const END_MULTIPLIER = 1.2;
    const entranceMoveDuration = 1.6;
    const entranceCollapseDuration = 0.8;
    const initialsDur = 1;
    const cardXDur = 1.8;
    const cardScaleDur = 0.6;
    const staggerVal = 0.12;

    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: teamSectionWrapper,
        start: "top bottom",
        end: `+=${window.innerHeight * END_MULTIPLIER}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    entranceTl
      .add("entrance")

      .to(members, {
        y: i => `${i * 10}%`,
        duration: entranceMoveDuration,
        stagger: staggerVal,
      }, "entrance")
      .to(members, {
        y: "0%",
        duration: entranceCollapseDuration,
      })
      .to(initials, {
        y: "0%",
        scale: 1,
        opacity: 1,
        duration: initialsDur,
        stagger: staggerVal,
        ease: "power2.inOut",
      }, `entrance+=${Math.max(entranceMoveDuration - 0.2, 0.2)}`);

    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: teamSectionWrapper,
        start: "top top",
        end: () => `+=${window.innerHeight * 1.8}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    cardTl.to(cards, {
      x: 0,
      rotation: 0,
      duration: cardXDur,
      stagger: 0.08,
      ease: "power2.inOut",
    })

      .to(cards, {
        scale: 1,
        duration: cardScaleDur,
        ease: "power2.out",
      });

    return () => {
      if (entranceTl.scrollTrigger)
        entranceTl.scrollTrigger.kill();
      if (cardTl.scrollTrigger)
        cardTl.scrollTrigger.kill();

      entranceTl.kill();
      cardTl.kill();

      ScrollTrigger.getAll().forEach(t => t.kill());

      gsap.set(members, { clearProps: "all" });
      gsap.set(cards, { clearProps: "all" });
      gsap.set(initials, { clearProps: "all" });
    };
  });

  mm.add("(max-width: 980px)", () => {
    gsap.set(members, { y: "0%" });
    gsap.set(initials, { y: "0%", scale: 1, opacity: 1 });
    gsap.set(cards, { x: 0, scale: 1, rotation: 0 });

    return () => {
      gsap.killTweensOf([members, cards, initials]);
      gsap.set([members, cards, initials], { clearProps: "all" });

      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  });
});
