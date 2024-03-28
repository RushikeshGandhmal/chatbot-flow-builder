# React Flow Task [live demo](https://chatbot-flow-builder-dun.vercel.app/)

This project is a simple React application built with [React Flow](https://reactflow.dev/) and next.js . It demonstrates the implementation of drag and drop nodes with the ability to connect them. The state of the nodes and their connections can be saved and restored.

## Features

1. **Text Node** 
    1. There can be multiple Text Nodes in one flow.
    2. Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel.
2. **Nodes Panel** 
    1. This panel houses all kind of Nodes that our Flow Builder supports.
    2. Right now there is only Message Node, but we’d be adding more types of Nodes in the future so make this section extensible 
3. **Edge**
    1. Connects two Nodes together
4. **Source Handle**
    1. Source of a connecting edge 
    2. Can only have **one edge** originating from a source handle
5. **Target Handle** 
    1. Target of a connecting edge
    2. Can have **more than one edge** connecting to a target handle 
6. **Settings Panel**
   1. Settings Panel will replace the Nodes Panel when a Node is selected
   2. It has a text field to edit text of the selected Text Node
7. **Save Button**
    1. Button to save the flow 
    2. **Save button press will show an error if there are more than one Nodes and more than one Node has empty target handles**

## Setup and Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/RushikeshGandhmal/chatbot-flow-builder
```

Navigate into the project directory:

```bash
cd chatbot-flow-builder
```

Install the project dependencies:

```bash
npm install
```

To start the project in development mode:

```bash
npm start
```

The application should now be running on http://localhost:3000.

## Deployment

The project is deployed on Vercel.
