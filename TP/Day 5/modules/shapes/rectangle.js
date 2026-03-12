export const name = "rectangle";

export function draw(context, length, width, x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, length, width);

    return {
        length,
        width,
        x,
        y,
        color
    };
}

export function reportArea(length, width, listId) {
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");

    const area = length * width;
    listItem.textContent = `Rectangle : aire = ${area} (longueur = ${length}, largeur = ${width})`;

    list.appendChild(listItem);
}

export function reportPerimeter(length, width, listId) {
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");

    const perimeter = 2 * (length + width);
    listItem.textContent = `Rectangle : périmètre = ${perimeter} (longueur = ${length}, largeur = ${width})`;

    list.appendChild(listItem);
}