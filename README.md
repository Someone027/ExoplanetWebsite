---

# Exoplanet Explorer

Exoplanet Explorer is a lightweight, browser‑based tool for comparing exoplanet characteristics to Earth. Users can input basic planetary data—radius, mass, and orbital period—and receive an immediate visual and textual interpretation. The project is built using HTML, CSS, and JavaScript.

---

## Purpose

This project demonstrates how simple web technologies can be used to visualize scientific concepts. It is intended for educational use, introductory astronomy demonstrations, and beginner‑level web development practice.

---

## Features

- Input fields for planet name, radius, mass, and orbital period  
- Validation for missing or non‑positive values  
- Dynamic visualization of planet size based on radius  
- Automatic interpretation of size and mass relative to Earth  
- Responsive layout for desktop and mobile  
- Clean, minimal interface using modern CSS

---

## File Structure

```
index.html      Main application structure
style.css       Layout, color scheme, and responsive design
script.js       Input handling, validation, DOM updates, and visualization logic
```

---

## How It Works

### Input Handling  
`script.js` retrieves values from the form, validates them, and updates the results panel.  
Example logic from the file:  
> "Please enter positive values for all measurements."  
> "This planet is larger than Earth."

### Visualization  
The radius value is scaled into a pixel size between 45 and 180. The planet element’s width and height are updated accordingly.

### Interpretation  
The script compares radius and mass to Earth (value = 1) and generates a short descriptive message.

---

## Running the Project

1. Download or clone the repository.  
2. Open `index.html` in any modern web browser.  
3. Enter planetary data to begin exploring.

No installation or external dependencies are required.

---

## Example Values

You may test the interface using known exoplanets:

| Planet       | Radius (Earth=1) | Mass (Earth=1) | Orbital Period (days) |
|--------------|------------------|----------------|------------------------|
| Kepler‑22b   | 2.4              | 9.1            | 289.9                  |
| Proxima b    | 1.1              | 1.3            | 11.2                   |
| TOI‑700 d    | 1.1              | 1.7            | 37.4                   |

---

## Possible Future Enhancements

- Additional planetary parameters (temperature, atmosphere, density)  
- Habitability indicators  
- Star system information  
- Data import from external APIs  
- More advanced visualization options

---

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (DOM manipulation)

---
