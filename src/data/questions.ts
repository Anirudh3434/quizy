export interface Question {
  id: number;
  class: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  // =================== Class 8 Questions (Basic Computer Knowledge) =================== 
  { id: 1, class: 8, question: "Which of the following is an input device?", options: ["Monitor", "Printer", "Mouse", "Speaker"], correctAnswer: "Mouse" },
  { id: 2, class: 8, question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Control Processing Unit", "Central Performance Unit"], correctAnswer: "Central Processing Unit" },
  { id: 3, class: 8, question: "Which of the following is an example of system software?", options: ["Windows OS", "MS Word", "Adobe Photoshop", "Google Chrome"], correctAnswer: "Windows OS" },
  { id: 4, class: 8, question: "Which one is an example of an output device?", options: ["Keyboard", "Printer", "Scanner", "Mouse"], correctAnswer: "Printer" },
  { id: 5, class: 8, question: "What is the function of RAM in a computer?", options: ["Stores data permanently", "Processes data", "Stores temporary data", "Runs the operating system"], correctAnswer: "Stores temporary data" },
  { id: 6, class: 8, question: "What type of storage is a USB flash drive?", options: ["Primary Storage", "Secondary Storage", "Cloud Storage", "Cache Memory"], correctAnswer: "Secondary Storage" },
  { id: 7, class: 8, question: "Which of the following is an example of hardware?", options: ["MS Word", "Windows OS", "Keyboard", "Google Chrome"], correctAnswer: "Keyboard" },
  { id: 8, class: 8, question: "What is the full form of HTTP?", options: ["Hyper Text Transfer Protocol", "Hyperlink Text Transfer Protocol", "Hyperlink Transmission Process", "Hyper Transfer Technology Protocol"], correctAnswer: "Hyper Text Transfer Protocol" },
  { id: 9, class: 8, question: "Which of the following is a web browser?", options: ["MS Excel", "Google Chrome", "Windows OS", "Notepad"], correctAnswer: "Google Chrome" },
  { id: 10, class: 8, question: "What does GUI stand for?", options: ["Graphical User Interface", "General User Interaction", "Global User Interface", "Graphical Utility Interface"], correctAnswer: "Graphical User Interface" },
  { id: 11, class: 8, question: "Which key is used to refresh a web page?", options: ["F5", "Ctrl + R", "Alt + F4", "Esc"], correctAnswer: "F5" },
  { id: 12, class: 8, question: "What is the primary function of an operating system?", options: ["Run applications", "Manage hardware resources", "Provide antivirus protection", "Connect to the Internet"], correctAnswer: "Manage hardware resources" },

  // (Add 8 more for Class 8...)

  // =================== Class 9 Questions (IT Syllabus - Advanced Topics) =================== 
  { id: 12, class: 9, question: "Which of the following is an Open Source Operating System?", options: ["Windows", "Linux", "MacOS", "iOS"], correctAnswer: "Linux" },
  { id: 13, class: 9, question: "What does HTML stand for?", options: ["Hyper Transfer Markup Language", "High Text Machine Learning", "Hyper Text Markup Language", "High-Tech Machine Language"], correctAnswer: "Hyper Text Markup Language" },
  { id: 14, class: 9, question: "Which of the following is NOT a programming language?", options: ["Python", "Java", "HTML", "C++"], correctAnswer: "HTML" },
  { id: 15, class: 9, question: "Which of the following is an example of spreadsheet software?", options: ["MS Word", "MS PowerPoint", "MS Excel", "MS Paint"], correctAnswer: "MS Excel" },
  { id: 16, class: 9, question: "Which of the following is used to create presentations?", options: ["MS Word", "MS PowerPoint", "MS Excel", "MS Access"], correctAnswer: "MS PowerPoint" },
  { id: 17, class: 9, question: "What is the full form of IP in networking?", options: ["Internet Protocol", "Intelligent Processor", "Internet Program", "Interconnection Protocol"], correctAnswer: "Internet Protocol" },
   { id: 18, class: 8, question: "Which of the following is an example of hardware?", options: ["MS Word", "Keyboard", "Windows OS", "Google Chrome"], correctAnswer: "Keyboard" },
  { id: 19, class: 8, question: "What is the primary function of the CPU?", options: ["To input data", "To store data", "To process data", "To display data"], correctAnswer: "To process data" },
  { id: 20, class: 8, question: "Which of the following is an example of software?", options: ["Monitor", "Printer", "Microsoft Word", "Keyboard"], correctAnswer: "Microsoft Word" },
  { id: 21, class: 8, question: "Which of the following is an input device?", options: ["Monitor", "Mouse", "Speaker", "Printer"], correctAnswer: "Mouse" },
  { id: 22, class: 8, question: "Which device is used to display output?", options: ["Keyboard", "Monitor", "Scanner", "Microphone"], correctAnswer: "Monitor" },
  { id: 23, class: 8, question: "What is the function of RAM in a computer?", options: ["Store data permanently", "Store data temporarily", "Execute instructions", "Manage resources"], correctAnswer: "Store data temporarily" },
  { id: 24, class: 8, question: "Which of the following is an example of an output device?", options: ["Keyboard", "Scanner", "Speaker", "Mouse"], correctAnswer: "Speaker" },
  { id: 25, class: 8, question: "What is the full form of CPU?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"], correctAnswer: "Central Processing Unit" },
  { id: 26, class: 8, question: "Which of the following is NOT an input device?", options: ["Mouse", "Scanner", "Keyboard", "Speaker"], correctAnswer: "Speaker" },
  { id: 27, class: 8, question: "Which of the following is an example of system software?", options: ["Windows OS", "MS Excel", "Microsoft Word", "Google Chrome"], correctAnswer: "Windows OS" },
  { id: 28, class: 8, question: "Which of the following devices is used to input data into a computer?", options: ["Printer", "Speaker", "Mouse", "Monitor"], correctAnswer: "Mouse" },
  { id: 29, class: 8, question: "Which of the following is an output device?", options: ["Scanner", "Printer", "Keyboard", "Mouse"], correctAnswer: "Printer" },
  { id: 30, class: 8, question: "Which device is used to store data permanently?", options: ["RAM", "Hard Disk", "CD", "Monitor"], correctAnswer: "Hard Disk" },
  { id: 31, class: 8, question: "Which of the following is NOT a hardware component?", options: ["Monitor", "Keyboard", "Operating System", "CPU"], correctAnswer: "Operating System" },
  { id: 32, class: 8, question: "What does GUI stand for in the context of computer software?", options: ["Graphical User Interface", "General User Interface", "Generalized User Interface", "Graphic Utility Interface"], correctAnswer: "Graphical User Interface" },


  // (Add 14 more for Class 9...)

  // =================== Class 10 Questions (IT - 402 Part B Topics) =================== 
  { id: 41, class: 10, question: "Which of the following is a database management system?", options: ["MS Excel", "MS Access", "MS Word", "MS Paint"], correctAnswer: "MS Access" },
  { id: 42, class: 10, question: "Which SQL command is used to delete a table?", options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "ERASE TABLE"], correctAnswer: "DROP TABLE" },
  { id: 43, class: 10, question: "Which of the following is an example of cyber security threat?", options: ["Firewall", "Ransomware", "Antivirus", "Cookies"], correctAnswer: "Ransomware" },
  { id: 44, class: 10, question: "What does VPN stand for?", options: ["Virtual Private Network", "Very Private Node", "Verified Public Network", "Virtual Protocol Name"], correctAnswer: "Virtual Private Network" },
  { id: 45, class: 10, question: "What is the shortcut key to save a document in LibreOffice?", options: ["Ctrl + P", "Ctrl + S", "Ctrl + N", "Ctrl + O"], correctAnswer: "Ctrl + S" },
  { id: 46, class: 10, question: "Which of the following file extensions is used for a spreadsheet?", options: [".docx", ".pptx", ".xlsx", ".html"], correctAnswer: ".xlsx" },
  { id: 47, class: 10, question: "Which software is used for creating invoices and reports?", options: ["MS Word", "Tally", "MS Excel", "MS Access"], correctAnswer: "Tally" },
  { id: 56, class: 9, question: "What is the primary function of an operating system?", options: ["To manage computer hardware", "To store data", "To display output", "To protect data"], correctAnswer: "To manage computer hardware" },
  { id: 67, class: 9, question: "What is HTML used for?", options: ["To design databases", "To design web pages", "To manage network traffic", "To process data"], correctAnswer: "To design web pages" },
  { id: 78, class: 9, question: "Which of the following is used to create tables in HTML?", options: ["<table>", "<ul>", "<div>", "<form>"], correctAnswer: "<table>" },
  { id: 97, class: 9, question: "What does the <b> tag do in HTML?", options: ["Makes text bold", "Makes text italic", "Creates a line break", "Adds a link"], correctAnswer: "Makes text bold" },
  { id: 79, class: 9, question: "Which of the following is used to define a hyperlink in HTML?", options: ["<href>", "<a>", "<link>", "<url>"], correctAnswer: "<a>" },
  { id: 56, class: 9, question: "Which of the following is the correct way to insert an image in HTML?", options: ["<img src='image.jpg'>", "<image src='image.jpg'>", "<picture src='image.jpg'>", "<img href='image.jpg'>"], correctAnswer: "<img src='image.jpg'>" },
  { id: 110, class: 9, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Coded Style Sheets", "Computer Style Sheets", "Content Style Sheets"], correctAnswer: "Cascading Style Sheets" },
  { id: 111, class: 9, question: "Which of the following is used to style HTML elements?", options: ["CSS", "JavaScript", "HTML", "PHP"], correctAnswer: "CSS" },
  { id: 1123, class: 9, question: "Which of the following is a valid CSS syntax?", options: ["color: red;", "color: red;", "red: color;", "red color:;"], correctAnswer: "color: red;" },
  { id: 456, class: 9, question: "Which of the following is used to create a form in HTML?", options: ["<form>", "<input>", "<table>", "<button>"], correctAnswer: "<form>" },
  { id: 6776, class: 9, question: "Which of the following is used to apply background color to a webpage?", options: ["bgcolor", "background-color", "background", "color"], correctAnswer: "background-color" },
  { id: 9473, class: 9, question: "Which of the following HTML tags is used to create a list of items?", options: ["<ul>", "<ol>", "<li>", "<dl>"], correctAnswer: "<ul>" },
  { id: 89898, class: 9, question: "What is a 'domain name'?", options: ["A unique identifier for a website", "A type of security certificate", "A type of website content", "A special address for a website"], correctAnswer: "A unique identifier for a website" },
  { id: 7086, class: 9, question: "Which protocol is used for sending emails?", options: ["FTP", "SMTP", "HTTP", "IMAP"], correctAnswer: "SMTP" },
  { id: 98493, class: 9, question: "What does DNS stand for?", options: ["Domain Name System", "Data Network Service", "Domain Network Service", "Data Name System"], correctAnswer: "Domain Name System" },
  { id: 79960, class: 9, question: "Which of the following is used to store data in a web server?", options: ["Hard Disk", "Database", "RAM", "ROM"], correctAnswer: "Database" },
  { id: 6909, class: 9, question: "What is a 'URL'?", options: ["User Resource Locator", "Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator"], correctAnswer: "Uniform Resource Locator" },
  { id: 589303, class: 9, question: "Which of the following HTML tags is used to create a paragraph?", options: ["<p>", "<pre>", "<div>", "<span>"], correctAnswer: "<p>" },
  { id: 4590, class: 9, question: "What is the primary purpose of a web browser?", options: ["To create websites", "To search for files", "To display web pages", "To create databases"], correctAnswer: "To display web pages" },
  { id: 5908503998, class: 9, question: "Which of the following is a part of a URL?", options: ["Protocol", "Domain name", "Path", "All of the above"], correctAnswer: "All of the above" },

  // =================== Class 10 Questions (IT - 402 Part B Topics) =================== 
{ id: 48, class: 10, question: "Which of the following is an example of cloud computing?", options: ["Google Drive", "MS Excel", "MS Access", "MS Word"], correctAnswer: "Google Drive" },
{ id: 49, class: 10, question: "Which of the following is the primary function of an operating system?", options: ["Execute programs", "Provide security", "Manage hardware resources", "All of the above"], correctAnswer: "All of the above" },
{ id: 50, class: 10, question: "Which command is used in SQL to retrieve data from a database?", options: ["SELECT", "FETCH", "GET", "RETRIEVE"], correctAnswer: "SELECT" },
{ id: 51, class: 10, question: "Which of the following is the purpose of an antivirus program?", options: ["Encrypt data", "Store data", "Protect from malware", "Increase system speed"], correctAnswer: "Protect from malware" },
{ id: 52, class: 10, question: "Which of the following is a type of computer network?", options: ["LAN", "WAN", "MAN", "All of the above"], correctAnswer: "All of the above" },
{ id: 53, class: 10, question: "Which protocol is used to send emails?", options: ["HTTP", "FTP", "SMTP", "IP"], correctAnswer: "SMTP" },
{ id: 54, class: 10, question: "What is the full form of DNS in networking?", options: ["Domain Name Server", "Domain Network Service", "Data Network Service", "Data Name Server"], correctAnswer: "Domain Name Server" },
{ id: 55, class: 10, question: "What does the 'CTRL + ALT + DEL' keyboard shortcut do?", options: ["Shuts down the system", "Opens Task Manager", "Opens Control Panel", "Restarts the system"], correctAnswer: "Opens Task Manager" },
{ id: 56, class: 10, question: "Which of the following is NOT a valid data type in SQL?", options: ["VARCHAR", "TEXT", "STRING", "DATE"], correctAnswer: "STRING" },
{ id: 57, class: 10, question: "What is the primary use of a router in a network?", options: ["Connects devices within a LAN", "Routes data between different networks", "Stores data", "Transmits data to the internet"], correctAnswer: "Routes data between different networks" },
{ id: 58, class: 10, question: "Which of the following is an example of an email client?", options: ["Gmail", "Yahoo Mail", "Outlook", "All of the above"], correctAnswer: "All of the above" },
{ id: 59, class: 10, question: "What is the purpose of an IP address?", options: ["Identify a device on a network", "Encrypt data", "Store data", "Provide security"], correctAnswer: "Identify a device on a network" },
{ id: 60, class: 10, question: "Which of the following is used to perform calculations in a spreadsheet?", options: ["Cell", "Formula", "Range", "Row"], correctAnswer: "Formula" },
{ id: 61, class: 10, question: "Which type of software is used to create and edit graphics?", options: ["MS Word", "Adobe Photoshop", "MS PowerPoint", "MS Access"], correctAnswer: "Adobe Photoshop" },
{ id: 62, class: 10, question: "Which of the following is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Universal Retrieval Locator", "Unified Resource Locator"], correctAnswer: "Uniform Resource Locator" },
{ id: 63, class: 10, question: "Which of the following SQL commands is used to modify an existing record?", options: ["UPDATE", "INSERT", "DELETE", "SELECT"], correctAnswer: "UPDATE" },
{ id: 64, class: 10, question: "Which of the following is a type of malware?", options: ["Virus", "Trojan", "Worm", "All of the above"], correctAnswer: "All of the above" },
{ id: 65, class: 10, question: "What is the shortcut key to undo an action in most software?", options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + S", "Ctrl + X"], correctAnswer: "Ctrl + Z" },
{ id: 66, class: 10, question: "Which of the following is a type of database?", options: ["Relational Database", "Flat File Database", "Object-Oriented Database", "All of the above"], correctAnswer: "All of the above" },
{ id: 67, class: 10, question: "Which of the following programming languages is used for web development?", options: ["Java", "Python", "HTML", "All of the above"], correctAnswer: "All of the above" },
{ id: 68, class: 10, question: "Which of the following is a valid extension for an image file?", options: [".jpg", ".png", ".gif", ".bmp"], correctAnswer: ".jpg" },
{ id: 69, class: 10, question: "Which of the following is a type of cloud storage service?", options: ["Google Drive", "Dropbox", "OneDrive", "All of the above"], correctAnswer: "All of the above" },
{ id: 70, class: 10, question: "What does the term 'HTML' stand for?", options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "Hyper Text Modeling Language", "Hyper Text Multilingual Language"], correctAnswer: "Hyper Text Markup Language" },
{ id: 71, class: 10, question: "Which of the following is NOT a valid SQL command?", options: ["SELECT", "INSERT", "REMOVE", "DELETE"], correctAnswer: "REMOVE" },
{ id: 72, class: 10, question: "Which of the following is used to create and manage databases?", options: ["MS Access", "MS Excel", "MySQL", "Both MS Access and MySQL"], correctAnswer: "Both MS Access and MySQL" },

  // (Add 13 more for Class 10...)
];

// Function to get questions by class
export const getQuestionsByClass = (classNumber: number): Question[] => {
  return questions.filter(q => q.class === classNumber);
};

export default questions;
