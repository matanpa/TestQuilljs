import Quill from "Quill";

beforeAll(() => {
  let el = document.createElement("div");
  el.setAttribute("id", "editor");
  document.body.appendChild(el);
});

beforeEach(() => {});

it("should instantiate quill", () => {
  const quill = new Quill("#editor");
  expect(quill).toBeTruthy;
});
