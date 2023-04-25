document.addEventListener("DOMContentLoaded", function () {
    // Initialize ScrollMagic controller
    
    document.addEventListener("mousemove", updateCirclePositions);
    const controller = new ScrollMagic.Controller();
    createCircles();
    // Create a basic GSAP animation for the About section
    const aboutAnimation = gsap.from("#about", {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power1.out",

    });
  
    function createCircles() {
      const background = document.getElementById("background");
    
      for (let i = 0; i < 5; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.width = `${20 + i * 10}px`;
        circle.style.height = `${20 + i * 10}px`;
        circle.style.backgroundColor = `rgba(50, 150, 255, ${0.5 - i * 0.1})`;
        background.appendChild(circle);
      }
    }
    
    // Function to update circle positions based on the mouse coordinates
    function updateCirclePositions(e) {
      const circles = document.querySelectorAll(".circle");
    
      circles.forEach((circle, index) => {
        const delay = index * 0.1;
        gsap.to(circle, {
          duration: 0.3,
          x: e.clientX + 10 + index * 10,
          y: e.clientY + 10 + index * 10,
          delay: delay,
          overwrite: true,
        });
      });
    }
    
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
  