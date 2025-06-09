import f from './Footer.module.css';

const Footer = () => {
  return (
    <footer class={f.attribution}>
      Challenge by
      <a class={f['attribution__links']} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
      <a class={f['attribution__links']} href="https://github.com/Dacardonac" target="_blank">Daniel Alejandro Cano Cardona</a>.
    </footer>
  );
}

export default Footer;