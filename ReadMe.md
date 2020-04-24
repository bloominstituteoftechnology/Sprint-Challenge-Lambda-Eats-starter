# Single Page Applications Sprint Challenge

The sprint challenge is your chance to independently work through material and build on what you learned this week. In today's project you will build a form for Lambda Eats, a website designed to bring food to hungry coders.

## Introduction

In this challenge you will be working from the `Lambda Eats` homepage to create a functional `Pizza?` button that leads to a build your own pizza custom form.

## **Self-Study Questions**

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.
2. How would you explain form validation to someone who has never programmed before?
3. In 1-2 sentences, define end to end testing.

You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section **will** prevent you from passing this challenge.

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] CD into the project base directory `cd lambda-eats`
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`. Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

Your MVP should include, at a minimum, the following components.

- [ ] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable)
- [ ] A form with a "/pizza" route
- [ ] A name text input field
- [ ] Validation for name - name must be at least 2 characters
- [ ] Dropdown form component for pizza size
- [ ] Checklist form component for toppings - at least 4 (hint: name each separately!)
- [ ] Text input form component for special instructions
- [ ] An Add to Order button that submits form and returns a database record of name, pizza size, sauce, and special instructions

#### Testing MVP

Implement the following tests in Cypress:

- [ ] test that you can add text to the box
- [ ] test that you can select multiple toppings
- [ ] test that you can submit the form

You may use the following wireframe (also in a folder above) as guidance as you design your site but it is not required that you do so.

**Form Wireframe:**
![Form Wireframe](https://i.imgur.com/ii7wc0u.png)

## Task 3: Stretch Goals

If you complete the MVP, move on to the following stretch goals. As usual, these goals represent a mix of additional at-level work in addition to work that is beyond the scope of what you've learned, but attainable with your current knowledge (and google).

- [ ] Toggle form component for gluten free crust
- [ ] Turn your form into a modal that pops up on the home page
- [ ] Turn form element sections into nested routes
- [ ] Create a `cart` page with additional form options like: delivery or pickup, the option to add utensils and straws, add a tip, etc.
- [ ] Test more of the application with Cypress
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

**"Pizza is on its Way" Wireframe:**

> Get the gif: https://giphy.com/gifs/happiness-9fuvOqZ8tbZOU

![Pizza](https://i.imgur.com/AkId0mo.gif)

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state
2. Post to [reqres](https://reqres.in/) database with `axios`
3. Log data in console

## Resources

👀 [Peek at Uber Eats for Inspiration](https://ubereats.com/)

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your TL will count the project as complete by merging the branch back into master.

## Grading rubric

[NEED TO ADD: Sprint challenge grading rubric](https://www.notion.so/e7b32e56ebad4f57b3521efb886f4508)
