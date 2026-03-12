import { create, createReportList } from "./modules/canvas.js";
import * as Square from "./modules/shapes/square.js";
import * as Rectangle from "./modules/shapes/rectangle.js";

const app = document.getElementById("app");

// Création du canvas
const myCanvas = create("canvas-container", app, 800, 400);
const ctx = myCanvas.context;

// Création de la liste de rapport
const reportListId = createReportList("report-wrapper");

// =========================
// Carrés
// =========================
Square.draw(ctx, 80, 20, 20, "red");
Square.reportArea(80, reportListId);
Square.reportPerimeter(80, reportListId);

Square.draw(ctx, 60, 140, 40, "blue");
Square.reportArea(60, reportListId);
Square.reportPerimeter(60, reportListId);

Square.draw(ctx, 100, 240, 20, "green");
Square.reportArea(100, reportListId);
Square.reportPerimeter(100, reportListId);

// =========================
// Rectangles
// =========================
Rectangle.draw(ctx, 140, 80, 380, 30, "orange");
Rectangle.reportArea(140, 80, reportListId);
Rectangle.reportPerimeter(140, 80, reportListId);

Rectangle.draw(ctx, 100, 50, 560, 60, "purple");
Rectangle.reportArea(100, 50, reportListId);
Rectangle.reportPerimeter(100, 50, reportListId);

Rectangle.draw(ctx, 160, 70, 500, 160, "teal");
Rectangle.reportArea(160, 70, reportListId);
Rectangle.reportPerimeter(160, 70, reportListId);