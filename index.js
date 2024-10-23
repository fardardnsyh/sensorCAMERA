const inquirer = require('inquirer');
const fs = require('fs');

const formatContent = ({ jobBoard, name, streetAddress, cityStateZip, email, phoneNumber, date, recipientName, recipientJob, companyName, companyAddress, companyCityStateZip }) => 
`${name}
${streetAddress}
${cityStateZip}
${email}
${date}

${recipientName}
${recipientJob}
${companyName}
${companyAddress}
${companyCityStateZip}

Dear ${recipientName},

I am writing to express my strong interest in the Web Developer position at ${companyName}, as advertised on ${jobBoard}. After reviewing my resume and qualifications, I am confident that my skills, passion for web development, and dedication to innovation make me a valuable candidate for your team.

As a Full-Stack Web Developer with a deep enthusiasm for learning new technologies and methodologies, I have completed an intensive coding bootcamp at the University of Arizona, specializing in industry-standard technologies such as JavaScript, Node.js, and React. My commitment to staying updated with the latest trends and tools in the field of web development has driven me to continuously expand my skill set, as evidenced by my proficiency in HTML, CSS, SQL, MongoDB, Express.js, Bootstrap, GraphQL, and more.

Here are a few key points that demonstrate my qualifications and commitment to web development:

Project Experience: I have worked on a variety of web development projects, including "Chronicles of MERNia" and "tech-blog." In "Chronicles of MERNia," I contributed to developing the back-end infrastructure using React, GraphQL, MongoDB, and Mongoose, creating an engaging turn-based RPG combat system and assisting with front-end implementation. In "tech-blog," I designed and built a fully-functional blog-style web application, showcasing my skills in HTML, CSS, Bulma, Handlebars, and JavaScript.

Education: I successfully completed the Full Stack Web Development program at the University of Arizona's Coding Bootcamp, earning a certificate. This program equipped me with the practical knowledge and problem-solving abilities necessary to excel in the web development field.

Work Experience: My background as a Food and Beverage Expert at Target has strengthened my teamwork, organizational, and communication skills. I've learned how to collaborate effectively with colleagues, optimize productivity, provide exceptional customer service, and maintain a clean and organized environment—all of which are transferable skills crucial to a successful career in web development.

I am eager to bring my expertise in web development to ${companyName} and contribute to the development of top-notch web applications. Your company's commitment to innovation and creativity aligns with my personal values and aspirations, making it an ideal environment for me to thrive and continue growing as a developer.

Enclosed is my resume, which provides further details about my qualifications and experience. I am excited about the opportunity to discuss how my skills and passion can benefit your team further. Please feel free to contact me at ${phoneNumber} or via email at ${email} to schedule a conversation.

Thank you for considering my application. I look forward to the possibility of working together to create innovative web solutions at ${companyName}.

Sincerely,

${name}`

function askUser() {
    inquirer
        .prompt([
            // Fill out prompts here
        ])
        .then((response) => {
            const letter = formatContent(response);
            writeToFile(letter);
        });
}

function writeToFile(letter) {
    fs.writeFile('cover-letter.docx', letter, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

askUser();