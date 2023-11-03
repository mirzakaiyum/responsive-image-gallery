# Responsive Image Gallery
This project was done for the React JS Developer role at Ollyo.

![Project Preview](/screenshots/feature-preview.gif)

## Table of Contents

- [About](#about)

- [Features](#features)
    - [Expected Features](#expected)
    - [Extra Features](#extra)

- [Tools, and Libraries](#usage)
    - [React](#react)
    - [DND Kit](#dnd-kit)
    - [Vite](#vite)
    - [Tailwind CSS](#tailwind_css)

- [Packages Used](#packages)
    - [FontSource](#font_source)
    - [HeroIcons](#hero_icons) 
- [Future Development](#future)

## About <a name = "about"></a>

It is a responsive gallery with extra added functionality such as file upload, smooth drag and drop, 3 different states for checkboxes.

![Thumbnail](/screenshots/thumbnail.jpeg)

![Drag and Drop](/screenshots/drag-and-drop.gif)

## Features <a name="features"></a>
This is a mini project on gallery. It is representing how a file manager for a image gallery would look like.

### Expected Features
```
1. Grid Layout for the gallery
2. Drag and Drop sorting functionality
3. Deleting single or multiple images.
4. Setting Featured image
5. Smooth UX, clean UI
6. Live Demo uploaded
```

### Extra Added Features
Some additional features where added to enrich the overall experience.

#### 1. File Upload
Files can be uploaded temporarily that is going to be added to the state. it is not added to the `localStorage` or any database. It is a potential feature that can be added in the future.

#### 2. A third State for the `Select All` checkbox
A a third `indeterminate` state was added to `Select All` checkbox to better indicate if all the files are selected or just of couple of them from the gallery.

## Tools, and Libraries <a name="usage"></a>
`React` v18.2.0 was used for this project last. For styling `Tailwind CSS` was used to match the demo that was sent from Ollyo. `DND kit` library was used for smooth drag and drop experience.

## Packages Used <a name="packages"></a>
Inter Variable font was used for this project provided by `FrontSource` and Icons used from `HeroIcons`.

## Future Development
Some missing features such as- Click on card to check the checkboxes, Adding uplaoded files to localStorage and database can be great additions for this project.

