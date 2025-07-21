# Securelytix Login & Dashboard

A simple web application with login, signup, and dashboard functionality.

## Project Structure

- [`index.html`](index.html): Login page for users.
- [`signup.html`](signup.html): Signup page for new users.
- [`dashboard.html`](dashboard.html): Dashboard page displaying client and employee details.
- [`script.js`](script.js): Handles login form validation and navigation.
- [`dashboard.js`](dashboard.js): Populates dashboard dropdowns and displays selected details.
- [`style.css`](style.css): Shared styles for all pages.

## Features

### Login (`index.html` + `script.js`)
- Users enter email and password.
- Email and password are validated:
  - Email must be in a valid format.
  - Password must be at least 8 characters and contain both letters and numbers.
- On successful login, user is redirected to the dashboard.

### Signup (`signup.html`)
- Users can create a new account by entering email and password.
- (Note: Signup form currently does not have JavaScript validation or backend integration.)

### Dashboard (`dashboard.html` + `dashboard.js`)
- Dropdowns to select a client or employee.
- Displays details (name, role, contact) for the selected client or employee.

### Styling (`style.css`)
- Responsive and modern UI for all pages.

## How to Run

1. Open [`index.html`](index.html) in your browser to start.
2. Use the login form to access the dashboard.
3. Use the signup link to create a new account (UI only).

## Notes

- All authentication and data handling are simulated on the frontend.
- No backend or persistent storage is implemented.