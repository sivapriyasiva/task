let isDragging = false;
const outline = document.getElementById("outline");
const mouse = document.getElementById("mouse");

mouse.addEventListener("mousedown", (e) => {
  isDragging = true;
  mouse.style.cursor = "grabbing";

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", () => {
    isDragging = false;
    mouse.style.cursor = "grab";
    document.removeEventListener("mousemove", handleMouseMove);
  });
});

function handleMouseMove(e) {
  if (isDragging) {
    const outlineRect = outline.getBoundingClientRect();
    const mouseX = e.clientX - outlineRect.left;
    const mouseY = e.clientY - outlineRect.top;

    // Ensure the mouse doesn't go outside the outline
    const maxX = outlineRect.width - mouse.offsetWidth;
    const maxY = outlineRect.height - mouse.offsetHeight;

    const newX = Math.min(maxX, Math.max(0, mouseX));
    const newY = Math.min(maxY, Math.max(0, mouseY));

    mouse.style.left = newX + "px";
    mouse.style.top = newY + "px";
  }
}
