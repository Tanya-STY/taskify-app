## Taskify App

Taskify is a user-friendly task management application designed to help individuals and teams organize their tasks efficiently. With intuitive features and seamless collaboration capabilities, Taskify streamlines task management, boosting productivity and ensuring nothing falls through the cracks. Please see the following Figma prototype for a visual representation of the application's design and functionality.


https://github.com/Tanya-STY/taskify-app/assets/95064474/0a48b811-41b2-4bfb-b561-1d1b4c7390b1


---

### User Manual: How to Run Taskify Application

Thank you for choosing Taskify! Below are the steps to successfully run the application on your local machine.

---

#### 1. Install Dependencies:

Before running the application, ensure you have all the necessary dependencies installed. Follow the steps below:

1. **Backend Dependencies:**
   - Open your chosen Integrated Development Environment (IDE), such as Visual Studio Code, and open the project folder.
   - Open a terminal within your IDE.
   - Change directory to the backend folder of the project by entering the following command:
     ```
     cd taskify/backend
     ```
   - Install the required Python dependencies:
     ```
     pip3 install flask flask_cors pymongo
     ```
   - If you encounter any errors like "can't resolve XXX," install the missing dependency using:
     ```
     pip3 install {name-of-package}
     ```

2. **Database Connection:**
   - Connect to the MongoDB database:
     - Visit the MongoDB website and log in using the provided credentials:
       - Email: soen357taskify@gmail.com
       - Password: sch00l!1234
     - Add your IP address to the network access:
       - Navigate to the left sidebar, scroll down, and click on "Network Access."
       - Add your IP address to allow connections from your machine.

#### 2. Run the Application:

Now that you have installed the dependencies and connected to the database, follow the steps below to run the Taskify application:

3. **Start the Backend:**
   - Open a terminal within your IDE and ensure you are in the backend folder of the project.
   - Run the backend server using the following command:
     ```
     python3 app.py
     ```
   - If you encounter any issues, ensure that you are in the correct directory and that Python is installed correctly on your machine.

4. **Start the Frontend:**
   - Open another terminal window within your IDE (leave the backend server running in the previous terminal).
   - Navigate to the project folder (no need to change directories if you're already there).
   - Start the frontend application with the following command:
     ```
     npm start
     ```
   - If Node.js and npm are not recognized, make sure you have Node.js installed on your computer. If not, download it from the internet.
   - If npm is still not recognized after installation, ensure that the path environment for npm is set correctly on your machine.

   - If you encounter errors related to missing react-scripts, install it using:
     ```
     npm install react-scripts
     ```
   - If the installation fails, try running the command again with the --force or --legacy-peer-deps flag.

---
#### That's it! You have successfully set up and run the Taskify application on your local machine. Enjoy managing your tasks efficiently with Taskify! If you encounter any issues, refer to the troubleshooting section in the README.md file or reach out to our support team for assistance.
---
## A few snapshots of the App
#### Sign Up Page
![SignUp](https://github.com/Tanya-STY/taskify-app/assets/95064474/e08f6d25-4cd0-4665-9e64-839589ee31b4)

#### Sign In Page
![SignIn](https://github.com/Tanya-STY/taskify-app/assets/95064474/b0e559e1-2bd4-4562-8093-f23c095bd611)

#### NavBar
![NavBar](https://github.com/Tanya-STY/taskify-app/assets/95064474/6b7f5f03-d734-4725-967c-3559350a01b0)

#### Pop-Up Page to Create a User List
![PopUp Create User List](https://github.com/Tanya-STY/taskify-app/assets/95064474/69c8526a-69bc-41e6-99c6-2ee0639fd5ee)

#### Pop-Up Page to Edit a User List
![PopUp Edit User List](https://github.com/Tanya-STY/taskify-app/assets/95064474/f1adf3b6-edac-4f80-a32d-c017ff970d2f)

### Pop-Up Page to Create a Team List
![PopUp Create New Team List](https://github.com/Tanya-STY/taskify-app/assets/95064474/91656f51-60d5-460f-a828-1ed25b2c8849)

#### Pop-Up Page to Edit a Team List
![PopUp Edit Team List](https://github.com/Tanya-STY/taskify-app/assets/95064474/a0bf011f-44b9-4c21-94ff-007cfd1af5ef)

