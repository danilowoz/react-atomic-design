<img width="100%" alt="atomic design" src="https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png">

# react-atomic-design
This is a boilerplate with the methodology Atomic Design using a few cool things, like Storybook, Flow and CSS Modules. 
Feel free to test, change e adapt everything. 

[**Read full article**](https://medium.com/@danilowoznica/atomic-design-with-react-e7aea8152957)

- [What is Atomic Design?](https://github.com/danilowoz/react-atomic-design#what-is-atomic-design)
  - [Atomic](https://github.com/danilowoz/react-atomic-design#atoms)
  - [Molecules](https://github.com/danilowoz/react-atomic-design#molecules)
  - [Organisms](https://github.com/danilowoz/react-atomic-design#organisms)
  - [Templates](https://github.com/danilowoz/react-atomic-design#templates)
  - [Pages](https://github.com/danilowoz/react-atomic-design#pages)
- [React+Atomic Design](https://github.com/danilowoz/react-atomic-design#react--atomic-design)
- [Scripts](https://github.com/danilowoz/react-atomic-design#scripts)
- [Libraries](https://github.com/danilowoz/react-atomic-design#libraries)
- [Contributors](https://github.com/danilowoz/react-atomic-design#contributors)
- [License](https://github.com/danilowoz/react-atomic-design#license)

## What is Atomic Design?


Popularly known within the design world, Atomic Design helps to build consistent, solid and reusable design systems. Plus, in the world of React, Vue and frameworks that stimulate the componentization, Atomic Design is used unconsciously; but when used in the right way, it becomes a powerful ally for developers.

The name Atomic Design comes from the idea of separating the components in atoms, molecules, organisms, templates and pages, like in the image above. But what are the responsibilities of each separated part?


### Atoms 

<img width="152" alt="atoms" src="https://user-images.githubusercontent.com/4838076/33235102-b310bc56-d218-11e7-83e1-f5f819bab789.png">

Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.


### Molecules

<img width="654" alt="molecules" src="https://user-images.githubusercontent.com/4838076/33235103-b352cc2c-d218-11e7-84e1-17d1bc8e4517.png">

They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.


### Organisms

<img width="1356" alt="organisms" src="https://user-images.githubusercontent.com/4838076/33235104-b3a247ca-d218-11e7-9c0e-4b7f18a48627.png">

Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content. 


### Templates

<img width="585" alt="templates" src="https://user-images.githubusercontent.com/4838076/33235105-b3f98184-d218-11e7-9490-1ff6c4046562.png">

In this state we stop composing components and begin to set their context. Moreover, the templates create relationships between the organisms and others components through positions, placements and patterns of the pages but it doesn’t have any style, color or component rendered. That’s why it looks like a wireframe.

### Pages

<img width="585" alt="pages" src="https://user-images.githubusercontent.com/4838076/33663026-74d35e02-da75-11e7-8e1b-4cb9941dd61c.png">

Pages are the navigate parts of the application and it’s where the components are distributed in one specific template. The components get real content and they’re connected with the whole application. At this stage, we can test the efficiency of the design system to analyse if all the components are independent enough or if we need to split them in smaller parts.

## React + Atomic Design
When we started to use Atomic Design within React we had to adjust some rules of the methodology to ensure that components were reused as much as possible, that they were stateless, without styles of positions and very specific margins so to avoid any side effects in the pages of application.

So with each new component we asked ourselves: “Are these components generic enough to avoid specificity and/or repeated code in whatever context they are used?”

So we were able to write a few rules:

- The Atomic Design should have a file of variables and it must be imported by each component;
- The atoms should be written without margins and positions;
- Only the molecules and organisms can set the positions of atoms, but these stacks can’t have any styles of margins and positions;
- Templates have only one function: to set the grid of pages but never positions of specific components;
- Pages render the components with a template defined and it’s here that the Atomic Design will be connected to the rest of the application;

## Scripts

| Script | Desc |
| ---- | ---- |
|`$ yarn start`| Start a simple webpack server |
|`$ yarn dev`| Create a server to development at port 5000 |
|`$ yarn storybook`| Start Storybook with the stories imported |
|`$ yarn flow`| Validate the flow types |


## Libraries

- Webpack
  - CSS Loader
  - SVG Sprite loader
  - File loader 
- Flow types
- Storybook
  - Storybook Info
- CSS
  - Autoprefixer
  - Import
  - Nested
  - Variables
  - Inline SVG
- Babel
  - Loader
  - Preset ES2015
- Project
  - Atomic Design styles folder structure
  - ESLint
  - Prettier


## Contributors
[@danilowoz](https://github.com/danilowoz/)

[@dleitee](https://github.com/dleitee/)

### License
MIT

