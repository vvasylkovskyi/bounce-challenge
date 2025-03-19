# Booking Web App

![Hero Image](/public/favicon.ico)

A booking web application built with **Next.js** and **React**. This project is an interview exercies. You can visit the app [here - https://bounce-challenge.vercel.app/](https://bounce-challenge.vercel.app/).

## App Structure and Navigation

Feel free to skip and move on to the [## Getting Started](./README.md#Getting-Started) to start the development or production server.

The app follows the NextJS framework structure where each folder corresponds to a page. Currently there are two pages:

- index page
- success page - this page is enabled after a successful booking

## Components

The components are simple and reusable. If it was a bigger project, we would invest in a design system like Mantine or ShadCN, but for the sake of this challenge, we will use Tailwind CSS. I am comfortable with either scss or styled components, and again for the sake of simplicity I opted for scss.

## Hooks

The hooks provide a modular way to interact with the API and handle the state of the application. For instance the `useTotalPrice` is a handy hook that provides the async way of handling total price GET request, including the loading states and errors.

### useValidateForm

To improve user experience, I assumed that all the fields are mandatory and added a validation hook that checks the form data and returns an object with the validation errors. This is a modular hook that can be used in any form. For simplicity, it only validates whether value is not empty, but we could make something more complex for a bigger project.

## APIs

My initial approach was to use the `fetch` directly to query the total price backend endpoint from the challenge, however due to CORS issues (I image this is by design of the challenge), I added the `pricing/route.ts` file that provides a server-side endpoint that frontend can query. Since the `GET` within the `pricing/route.ts` happens server-side, the frontend will not experience any CORS issues, if using it as a man in the middle

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version specified in `.nvmrc`)
- [pnpm](https://pnpm.io/) - A fast, disk space efficient package manager.

## Getting Started

### Set the Node Version

Use nvm (Node Version Manager) to switch to the correct Node.js version specified in the `.nvmrc` file:

```bash
nvm use
```

### Install pnpm

```bash
npm install -g pnpm
```

### Install Dependencies

```bash
pnpm install
```

### Run the Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building Production

To build the project for production, run:

```bash
pnpm run build
```

### Starting the Production Server

After building, you can start the production server with:

```bash
pnpm run start
```
