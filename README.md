# Form-Validation-with-JavaScript
The goal of this project is to help you understand and implement client-side form validation using JavaScript.


**Introduction**:
This project focuses on client-side form validation, ensuring that users provide essential information when submitting a form. It uses HTML, CSS, and JavaScript to achieve this functionality.

**Project Structure**:
- `main.html`: This is the main HTML file that contains the form and includes references to the CSS and JavaScript files.
- `formValidate.js`: This JavaScript file handles form validation. It listens for the form's submit event, prevents the default form submission, and validates the first name and age fields.
- `style.css`: The CSS file defines the styles for error messages, setting them to be initially hidden and in red.

**Form Validation**:
The JavaScript code in `formValidate.js` performs the following actions:

1. Listens for the form's submit event and prevents the default form submission, ensuring client-side validation.
2. Retrieves the `firstNameInput` and `ageInput` elements by their IDs.
3. Retrieves the `nameError` and `ageError` elements that will display error messages.
4. Checks if the `firstNameInput` and `ageInput` values are empty (whitespace is trimmed), and if so, displays an error message and changes the border color of the input field to red.
5. If the fields are not empty, the error messages are hidden, and the input fields return to their default styles.

**Usage**:
To use this project, follow these steps:

1. Clone or download the project from the GitHub repository.
2. Open `main.html` in your web browser.

**Contributing**:
If you would like to contribute to this project, feel free to fork the repository, make improvements, and create a pull request. Contributions related to enhancing the form validation or adding new features are welcome.

**License**:
This project is under the [MIT License](https://opensource.org/licenses/MIT). You can freely use and modify this code for your own projects.

**Conclusion**:
Form validation is a crucial aspect of web development, and this project serves as a starting point for understanding how to implement client-side validation. It ensures that users provide required information and offers a clean and user-friendly way to display errors. We hope this project helps you in your journey to become a proficient web developer.
