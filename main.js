class NumericInput extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.input = document.createElement("input");
  }

  connectedCallback() {
    this.render();
    const input = this.shadow.querySelector(".input");
    const style = document.createElement("style");
    style.textContent = `
    .input {
      outline-color: none;
    }
    `;
    this.shadow.appendChild(style);
    input.addEventListener("change", () => {
      if (!/^[0-9]+$/.test(input.value)) {
        style.textContent = `
        .input {
          outline-color: red;
        }
        `;
      } else {
        style.textContent = `
        .input {
          outline-color: black;
        }
        `;
      }
    });
  }

  render() {
    this.input.setAttribute("class", "input");
    this.shadow.appendChild(this.input);
  }
}

customElements.define("numeric-input", NumericInput);
