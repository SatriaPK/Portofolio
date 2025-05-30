// Pastikan HTML Anda memiliki elemen dengan id "typewriter"
const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true, // Ketik berulang kali
  delay: 75, // Kecepatan mengetik
});

// Menambahkan teks dengan efek ketik
typewriter
  .pauseFor(2500)
  .typeString("IM A <strong>PROGRAMMER</strong>")
  .pauseFor(1000)
  .deleteAll()
  .typeString("IM A <strong>DESIGNER</strong>")
  .pauseFor(1000)
  .deleteAll()
  .typeString("IM A <strong>ILLUSTRATOR</strong>")
  .pauseFor(1000)
  .deleteAll()
  .typeString("IM A <strong>WEB DEVELOPER</strong>")
  .pauseFor(1000)
  .deleteAll()
  .typeString("IM <strong>THE JACK OF ALL TRADES</strong>")
  .pauseFor(1000)
  .start();

// Skills Progress Bar - Design
const progressbarDesign = document.querySelector("#skill-design-fill");

const designSkillProgress = (designProgress) => {
  progressbarDesign.style.width = `${designProgress}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => designSkillProgress(25), 1000);
setTimeout(() => designSkillProgress(50), 2000);
setTimeout(() => designSkillProgress(75), 3000);
setTimeout(() => designSkillProgress(80), 4000);

// Skills Progress Bar - Illust
const progressbarIllust = document.querySelector("#skill-illust-fill");

const illustSkillProgress = (illustProgress) => {
  progressbarIllust.style.width = `${illustProgress}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => illustSkillProgress(25), 1000);
setTimeout(() => illustSkillProgress(50), 2000);
setTimeout(() => illustSkillProgress(60), 4000);

// Skills Progress Bar - Web
const progressbarWebsite = document.querySelector("#skill-website-fill");
const websiteSkillProgress = (websiteProgress) => {
  progressbarWebsite.style.width = `${websiteProgress}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => websiteSkillProgress(25), 1000);
setTimeout(() => websiteSkillProgress(50), 3000);

//Scroll
document.getElementById("btn-about").onclick = () => {
  const aboutSection = document.getElementsByClassName("about")[0];
  if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
};
document.getElementById("btn-portfolio").onclick = () => {
  const projectsSection = document.getElementsByClassName("portfolio-running-text")[0];
  if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
};
document.getElementById("btn-social").onclick = () => {
  const socialSection = document.getElementsByClassName("social-media")[0];
  if (socialSection) socialSection.scrollIntoView({ behavior: "smooth" });
};
document.getElementById("btn-contact").onclick = () => {
  const contactSection = document.getElementsByClassName("contact-me")[0];
  if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
};
