export const name = "square";

export function draw(context, length, x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, length, length);

    return {
        length,
        x,
        y,
        color
    };
}

export function reportArea(length, listId) {
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");

    const area = length * length;
    listItem.textContent = `Carré : aire = ${area} (côté = ${length})`;

    list.appendChild(listItem);
}

export function reportPerimeter(length, listId) {
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");

    const perimeter = 4 * length;
    listItem.textContent = `Carré : périmètre = ${perimeter} (côté = ${length})`;

    list.appendChild(listItem);
}