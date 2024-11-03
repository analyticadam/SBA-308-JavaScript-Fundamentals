# SBA-308-JavaScript-Fundamentals
Requirements for SBA 308-JavaScript-Fundamentals
[X] Declare variables properly using let and const where appropriate.
[X] Use operators to perform calculations on variables and literals.
[X] Use strings, numbers, and Boolean values cached within variables.
[X] Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
[X] Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
[X] Utilize at least two different types of loops.
[X] Utilize at least one loop control keyword such as break or continue.
[X] Create and/or manipulate arrays and objects.
[X] Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
[X] Use functions to handle repeated tasks.
[X] Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.
[X] Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
[X] Commit frequently to the git repository.
[X] Include a README file that contains a description of your application.
Step 1: A learnerMap is created that organizes assignment submissions by each learner's unique ID. This makes it easier to find all submissions for each learner based on their ID.
Step 2: An assignmentMap is created that organizes assignment details by each ID.  Each learner's submission is processed to calculate the score as a perecentage for each asssignment along with an average score on assignments. Fixed repository issue.
Step 3: Due Dates, Submission Dates, Current Dates successfully printed along with correct results.
Step 4: Added boolean value to track if assignment was submitted late.
Step 5: Implement try/catch statement to check for error date comparison in assignment.
Step 6: Implented remaining above steps in assignment in different stages as I was able.

**# Learner Assignment Tracker
**
A simple JavaScript program for tracking and calculating assignment scores for learners in a course. This tool processes submission data, calculates each learner’s average score, and applies a 10% penalty to late submissions.

**#Key Features**
    ***Assignment Processing**: Calculates scores based on possible points, factoring in each assignment's weight.
    ***Late Submission Handling**: Applies a score penalty for assignments submitted past the due date.
    ***Error Management**: Uses try/catch to handle unexpected data issues (like missing assignments or invalid dates).
    ***Detailed Console Output**: Outputs results per learner, including scores and any penalties applied.

**# Tech Stack**
    *JavaScript and Node.js for data processing and command-line output.

This project is designed to demonstrate basic JavaScript concepts such as loops, conditional logic, and error handling while producing a useful tool for tracking learner progress.