export function slideSidenavIn() {
  const sideBar = document.getElementById("side-bar");
  const lightBox = document.querySelector(".light-box");
  const openNavBtn = document.getElementById("open-sidebar");

  sideBar.style.transition =
    "transform .9s .3s ease-out, visibility .9s .3s linear";
  sideBar.classList.add("active");

  openNavBtn.style.visibility = "hidden";

  lightBox.style.transition = "visibility 1s 0.6s ease-out";
  lightBox.style.visibility = "visible";

  lightBox.addEventListener("click", () => {
    if (sideBar.classList.contains("active")) {
      sideBar.classList.remove("active");
      lightBox.style.visibility = "hidden";
      openNavBtn.style.visibility = "visible";
    }
  });
}

export function slideSideNavOut() {
  const sideBar = document.getElementById("side-bar");
  const openNavBtn = document.getElementById("open-sidebar");
  const lightBox = document.querySelector(".light-box");

  sideBar.classList.remove("active");
  openNavBtn.style.visibility = "visible";
  lightBox.style.transition = "none";
  lightBox.style.visibility = "hidden";
}

export function pop(e) {
  for (let i = 0; i < 50; i++) {
    createParticle(e.clientX, e.clientY);
  }
}

function createParticle(x, y) {
  const particle = document.createElement("particle");
  particle.classList.add("particle");
  document.body.appendChild(particle);

  const width = 15;
  const height = 5;

  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, ${
    Math.random() * 40 + 30
  }%)`;

  const destinationX = x + (Math.random() - 0.5) * 2 * 100;
  const destinationY = y + (Math.random() - 0.5) * 2 * 50;

  const animation = particle.animate(
    [
      {
        transform: `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${
          Math.random() * 45
        }deg)`,
        opacity: 1,
      },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 1000 + Math.random() * 1000,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: Math.random() * 200,
    }
  );
  animation.onfinish = () => {
    particle.remove();
  };
}

export function scrollHeaderUP() {
  const mainHeader = document.getElementById("main-site-header");

  mainHeader.style.transform = "translateY(-80px)";
  mainHeader.style.opacity = "0.01";
}
export function scrollHeaderDOWN() {
  const mainHeader = document.getElementById("main-site-header");

  mainHeader.style.transform = "translateY(0px)";
  mainHeader.style.opacity = "1";
}
