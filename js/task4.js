class Counter {
  #counterRef;
  #outputRef;
  #buttonIncRef;
  #buttonDecRef;

  #counterValue;

  constructor(selector, startValue = 0) {
    this.#linkRefs(selector);
    this.#bindEvents();

    this.value = startValue;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  get value() {
    return this.#counterValue;
  }

  set value(newValue) {
    this.#counterValue = newValue;
    this.#updateOutput();
  }

  #linkRefs(selector) {
    this.#counterRef = document.querySelector(selector);
    this.#outputRef = this.#counterRef.querySelector("#value");
    this.#buttonIncRef = this.#counterRef.querySelector(
      'button[data-action="increment"]'
    );
    this.#buttonDecRef = this.#counterRef.querySelector(
      'button[data-action="decrement"]'
    );
  }

  #bindEvents() {
    this.#buttonIncRef.addEventListener("click", this.increment.bind(this));
    this.#buttonDecRef.addEventListener("click", this.decrement.bind(this));
  }

  #updateOutput() {
    this.#outputRef.textContent = this.#counterValue;
  }
}

const myCounter = new Counter("#counter");
const myCounter2 = new Counter("#counter2");
