
# Frontend Mentor - Social Proof Section solution with React ⚛️✅

![Design preview for Social Proof Section coding challenge](./public/design/desktop-preview.webp)

This is a solution to the **[Social Proof Section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA)** by **[Dacardonac](https://github.com/Dacardonac)**. Frontend Mentor challenges help you improve your coding skills by building realistic projects with Frontend.

## Table of contents 📄

- **Frontend Mentor - Social Proof Section**
  - **[Table of contents](#table-of-contents-)**
  - **[Overview](#overview-)**
    - [The challenge](#the-challenge-)
    - [Screenshot](#screenshots-)
    - [Links](#links-)
    - [How to use](#how-to-use-the-project-)
  - **[My process](#my-process-)**
    - [Built with](#built-with-)
    - [What I learned](#what-i-learned-)
    - [Continued development](#continued-development-)
    - [Useful resources](#useful-resources-)
  - **[Author](#author-)**
  - **[Acknowledgments](#acknowledgments-)**

## Overview

### The challenge 🧩

**Users should be able to see in this project:**

- View the optimal layout depending on their device's screen size only between mobile and desktop (Responsive)
- Styles in Components and modules (Sass/Scss)
- React Components
- Accessibility (a11y)
- BEM Methodology

### Screenshots 📷

Desktop 🖥️

**![Solution Desktop Screenshot](./public/screenshots/desktop-screenshot.webp)**


Mobile 🤳

**![Solution Mobile Screenshot](./public/screenshots/mobile-screenshot.webp)**

### Links 📍

- Solution URL: **[Frontend Mentor Solution 👨‍💻]()**
- Live Site URL: **[Solution Deploy in Vercel 🚀]()**

### How to Use the Project 💻

To use this project, you need to follow these steps:

1. **Clone the repository**:

  ```bash
  git clone https://github.com/Dacardonac/fem-social-proof-section.git
  ```

2. **Navigate to the project directory 📂**:

  ```bash
  cd fem-social-proof-section
  ```

3. **Install dependencies ⬇️: Make sure you have Node.js installed, then run**:

  ```bash
  npm install
  ```

4. **Run the project ▶️: Start the development server with**:

  ```bash
  npm run dev
  ```
  This will start the project locally, typically accessible at `http://localhost:3000`.

5. **If you want to see a preview of the project ▶️**:

  ```bash
  npm run build
  npm run preview
  ```
  **This will start the Preview server on `http://localhost:5173`.**

## My process 🎓

### Built with 🛠

- HTML5 - Structure
- CSS3 Custom Properties - Styles
- React JSX - Programming Logic and Components
- Mobile-first Workflow
- Flexbox - Spaces and Alignments
- Conventional Commits - Commit Specification
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Sass/Scss](https://sass-lang.com/) - Modules and Styles
- Markdown - README.md file (Documentation)
- BEM Methodology

### What I learned 🧠

With this project, I learned, implemented, and practiced **React - JSX**, along with its properties and methods like **Props**. I also reinforced and practiced my **CSS3** knowledge with **Sass/Scss modules**, worked on semantic **HTML5** by applying the **BEM** methodology for class naming and **Componets**.

**You can see an example below:**

``` JSX
import Card from "../card/Card";
import Stars from "../stars/Stars";
import c from "./Content.module.scss";

const Content = () => {
  return (
    <section className={c.content}>
      <h1 className={c["content__title"]}>
        10,000+ of our users love our products.
      </h1>
      <p className={c["content__paragraph"]}>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
      <section className={c["content__stars"]}>
        <Stars text={"Rated 5 Stars in Reviews"}/>
        <Stars text={"Rated 5 Stars in Report Guru"}/>
        <Stars text={"Rated 5 Stars in BestTech"}/>
      </section>
      <section className={c["content__cards"]}>
        <Card name={"Colton Smith"}
              img={"images/image-colton.webp"}
              text={`“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”`}/>
        <Card name={"Irene Roberts"}
              img={"images/image-irene.webp"}
              text={`“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. ”`}/>
        <Card name={"Anne Wallace"}
              img={"images/image-anne.webp"}
              text={`“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”`}/>
      </section>
    </section>
  );
}

export default Content;
```

### Continued development 🔎

I want to continue learning more about **React** and **Props**, **Responsive Design** and how to work across different devices with **Flexbox** and **@media**, also I want continue using  **BEM methodology** and perfect the technique in aspects like name the classes and components, also I want to improve in modularize the components styles with **Sass modules**, learn about **Conventional Commits** and keep using **Vite**.

### Useful resources 🛠

- **[MDN](https://developer.mozilla.org/en-US/)** - This helped me with **Documentation** on many topics, mostly with **HTML** and **CSS** properties.
- **[ChatGPT](https://chatgpt.com/)** - This is an incredible **Artificial Intelligence (AI)** tool, **ChatGPT** helps me with **specific topics**, **errors in the project** and **investigations**.

## Author 👨‍💻

- Frontend Mentor - **[@Dacardonac](https://www.frontendmentor.io/profile/Dacardonac)**
- LinkedIn - **[@Daniel Alejandro Cano Cardona](https://www.linkedin.com/in/daniel-alejandro-cano-cardona/)**

## Acknowledgments 🙌

I want to thank **[Jairovg](https://github.com/jairovg)** for the teachings and his help to complete this challenge in a good way and with good practices.

**thank you frontend mentor for promoting learning and providing knowledge with these challenges** 🙌

**Have fun building!** 🚀
