# Chromatic starter

I recently came across chromatic and decided to take a tutorial on it. 
This project helped me understand why stories are important, how to create stories for components, how to test them properly, and how to deploy them.

The tutorial is a guided lesson from the Storybook docs which can be found [https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/](here)

This tutorial uses `ReactJS` and `vanillaCSS`.

## Project

The product is a taskList component, similar to the popular todolist. Rather than build the UI, I created storybook stories that implement core functionality of the app.

The interesting part of this was experimenting with Component driven design. Here, I worked on writing stories for each individual modular components, 
and then worked my way up to a screen.

It's similar to building massive structures by assembling smaller unit of LEGO blocks.

## Challenges

The CI workflow wasn't that straightforward and I had issues with getting github to automatically detect PR Changes and trigger the UI test for that. I am gonna keep trying my hand at solving it because I know CI/CD workflows helps streamline the developer experience.

It reminds me of this command line heroes [https://www.redhat.com/en/command-line-heroes/season-1/devops-tear-down-that-wall](podcast episode) from redhat.

## Conclusion

I understand now the importance of testing components with storybook. Especially with how it helps track UI changes. The question I have now is how this fit into tools like `Cypress` and maybe `Jest`.
