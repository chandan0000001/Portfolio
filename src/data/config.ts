const config = {
  title: "Deepak | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Deepak, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Deepak, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Naresh",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Deepak",
  email: "deepak.ghoda2345@gmail.com",
  site: "https://deepak.site",

  // for github stars button
  githubUsername: "chandan0000001",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/DeepakKuma97056",
    linkedin: "https://www.linkedin.com/in/chandan-kumar-dalai/",
    instagram: "https://www.instagram.com/abcd",
    facebook: "https://www.facebook.com/abcd/",
    github: "https://github.com/chandan0000001",
  },
};
export { config };
