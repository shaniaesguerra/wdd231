const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//Buttons:
const allCoursesBtn = document.querySelector("#all-courses-btn");
const wddCoursesBtn = document.querySelector("#wdd-courses-btn");
const cseCoursesBtn = document.querySelector("#cse-courses-btn");

//Select element for where the Dialog will show:
const coursesInfoBtn = document.querySelector("#filtered-courses h3");
const dialog = document.querySelector("#dialog"); //dialog box
const dialogCourseName = document.querySelector("#dialog h2");
const dialogClose = document.querySelector("dialog button");
const dialogCourseInfo = document.querySelector("dialog p");

allCoursesBtn.addEventListener("click", () => {
    createCourseCards(courses);
});

wddCoursesBtn.addEventListener("click", () => {
    createCourseCards(courses.filter(course => course.subject == 'WDD'));
});

cseCoursesBtn.addEventListener("click", () => {
    createCourseCards(courses.filter(course => course.subject == 'CSE'));
});

//Event listener to close dialog:
dialogClose.addEventListener("click", () => {
    dialog.close();
});

function showInfo(info) {
    dialogCourseName.innerHTML = `${info.subject} ${info.number}`;
    dialogCourseInfo.innerHTML = `${info.title}<br><br>
                                ${info.credits} credits<br><br>
                                Certificate: ${info.certificate}<br><br>
                                ${info.description}<br><br>
                                Technology: ${info.technology}`;
    dialog.showModal();
}

/*---------------------------------------------------------------------------------------------------------- 
Function: createCourseCards (coursesObj)
Purpose: create course cards which will populate in the HTML element specified in the function.
Description: Has one arguements, "coursesObj" which is the name of the obj you want to iterate through.
            It will populate the HTML element specified in the function.
------------------------------------------------------------------------------------------------------------*/
function createCourseCards(coursesObj) {
    //select the div
    const coursesDiv = document.querySelector("#filtered-courses");
    //select the span to show the number of courses listed 
    const resultSpan = document.querySelector("#total-result");

    //variable to store the number of credits of the courses listed
    let numCredits = 0;

    //empty the div
    coursesDiv.innerHTML = "";

    //populate the div
    coursesObj.forEach(course => {
        const courseTag = document.createElement('h3');
        if (course.completed) {
            courseTag.innerHTML += `&#10004; ${course.subject} ${course.number.toString()}`;
            courseTag.className = "checked";
        } else {
            courseTag.innerHTML += `${course.subject} ${course.number}`;
        }

        numCredits += course.credits;
        courseTag.addEventListener("click", () => showInfo(course));
        coursesDiv.appendChild(courseTag);
    });

    //Get all the h3 tags with the class "checked"
    const h3CheckedTags = document.querySelectorAll(".checked");

    //Change the color of each tag
    h3CheckedTags.forEach(h3Tag => {
        h3Tag.style.backgroundColor = "#EFC88B";
        h3Tag.style.color = "#2B2D42";
    });

    //show result in the span element for the total number of courses listed
    resultSpan.innerHTML = `The total number of course listed below is <strong>${numCredits}</strong>`;
}