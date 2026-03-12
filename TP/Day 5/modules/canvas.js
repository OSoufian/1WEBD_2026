export function create(id, parent, width, height) {
    const container = document.createElement("div");
    container.id = id;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    container.appendChild(canvas);
    parent.appendChild(container);

    const context = canvas.getContext("2d");

    return {
        context,
        id: container.id
    };
}

export function createReportList(wrapperId) {
    const wrapper = document.getElementById(wrapperId);

    const list = document.createElement("ul");
    const listId = `${wrapperId}-list`;

    list.id = listId;
    wrapper.appendChild(list);

    return listId;
}