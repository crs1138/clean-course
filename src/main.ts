import "./style.css";
import "./code-smell/02-low-coupling";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
