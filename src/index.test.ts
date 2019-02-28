import Quill from "Quill";

beforeAll(() => {
  let el = document.createElement("div");
  el.setAttribute("id", "editor");
  document.body.appendChild(el);
});

it("should instantiate quill", () => {
  const quill = new Quill("#editor");
  expect(quill).toBeTruthy;
});
