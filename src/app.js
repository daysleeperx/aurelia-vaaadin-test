import '@vaadin/vaadin-grid/';

export class App {
  message = 'Users';

  attached() {
    const grid = document.querySelector('vaadin-grid');
    grid.items = [
      { name: "John", surname: "Lennon", role: "singer" },
      { name: "Ringo", surname: "Starr", role: "drums" },
    ];
  }

  doStuff() {
    console.log("TEST");
  }
}
