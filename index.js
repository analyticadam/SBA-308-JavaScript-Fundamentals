// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};
// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};
// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    },
    {
        learner_id: 148,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];
function getLearnerData(course, ag, submissions) {
    //Creating a map structure where learner data is stored by id
    const learnerMap = new Map();

    // Loop through each sumbmission 
    submissions.forEach(submission => {
        const learnerID = submission.learner_id; //select the learner id
        const assignmentInfo = {
            assignment_id: submission.assignment_id, //select assignment id
            submitted_at: submission.submission.submitted_at, //select submission date
            score: submission.submission.score //select score
        };
        // Check if learner id exists in map
        if (!learnerMap.has(learnerID)) {
            //If learner id is not fund, create a new entry with an empty array for learner submission
            learnerMap.set(learnerID, []);
        }
        //Add assignment info to array of learner submissions
        learnerMap.get(learnerID).push(assignmentInfo);
    });
    //Print the learnerMap to verify it works
    console.log("Step 1 - Learner Map:", learnerMap);

    //Step 2: Create a map to store assignments by ID for lookup
    const assignmentMap = new Map();
    ag.assignments.forEach(assignment => {
        assignmentMap.set(assignment.id, assignment);
    });
    // here, we would process this data to achieve the desired result.
    const result = [];

    learnerMap.forEach((learnerSubmissions, learnerID) => {
        let totalScore = 0;
        let maxPossibleScore = 0;
        const learnerData = { id: learnerID };

        learnerSubmissions.forEach(({ assignment_id, score, submitted_at }) => {
            {
                const assignment = assignmentMap.get(assignment_id);
                const percentageScore = score / assignment.points_possible;

                // Store percentage score for each assignment by its ID
                learnerData[assignment_id] = parseFloat(percentageScore.toFixed(3));

                // Add scores for calculation of average
                totalScore += score;
                maxPossibleScore += assignment.points_possible;

                // Dynamic call to `dueDateCompare` with actual values
                dueDateCompare(assignment.due_at, submitted_at, assignment.points_possible, assignment.name);
            }
        });

        function dueDateCompare(due_at, submitted_at, points_possible, assignmentName) {
            const dueDate = new Date(due_at).toLocaleDateString('en-US');
            const submittedDate = new Date(submitted_at).toLocaleDateString('en-US');
            const currentDate = new Date().toLocaleDateString('en-US');

            console.log("Due Date:", dueDate);
            console.log("Submission Date:", submittedDate);
            console.log("Current Date:", currentDate);

            if (new Date(due_at) > new Date() ) {
                // Assignment is not due at the moment
                console.log(`Assignment ${assignmentName} is not due yet. Due date  is: ${due_at}`);
                return;
            } else if (submittedDate > dueDate) {
                // Assignment is late, deduct 10%
                console.log(`"Assignment is late. You lose 10% of the total points possible for this assignment."`);
                const penaltyScore = points_possible * 0.9; //10% total poiints deducted
                console.log(`Your score is now after the 10% penalty: ${penaltyScore}`);
            } else {
                console.log("You turned in your assignment on time.  You are awesome!!");
            }
        }

        //dueDateCompare("2023-01-25", "2023-01-26", 100); // Late submission example

        // Calculate average learner score for learner
        learnerData.avg = parseFloat((totalScore / maxPossibleScore).toFixed(3));
        result.push(learnerData);
    });
    // Print result after each learner processed
    console.log("Step 2- Result:", result);
    return result;
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);