document.addEventListener("DOMContentLoaded", function () {
    // Initialize ScrollMagic controller
    const controller = new ScrollMagic.Controller();
  
    // Create a basic GSAP animation for the About section
    const aboutAnimation = gsap.from("#about", {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power1.out",
    });
  
    // Create a ScrollMagic scene to trigger the About section animation
    const aboutScene = new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: 0.5, // Trigger the animation when the section is halfway visible
    })
      .setTween(aboutAnimation)
      .addTo(controller);
  
    // Create a basic GSAP animation for the Projects section
    const projectsAnimation = gsap.from("#projects ul li", {
      duration: 1,
      opacity: 0,
      x: -50,
      stagger: 0.25,
      ease: "power1.out",
    });
  
    // Create a ScrollMagic scene to trigger the Projects section animation
    const projectsScene = new ScrollMagic.Scene({
      triggerElement: "#projects",
      triggerHook: 0.5, // Trigger the animation when the section is halfway visible
    })
      .setTween(projectsAnimation)
      .on("start", function () {
        // Remove the 'animated' class when the animation starts
        document.querySelector("#projects").classList.remove("animated");
      })
      .addTo(controller);
      
    // Uncomment the following lines to show debug indicators
    // aboutScene.addIndicators({ name: "About Scene" });
    // projectsScene.addIndicators({ name: "Projects Scene" });
  });
  