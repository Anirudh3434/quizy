export interface Question {
  id: number;
  class: number;
  question: string;
  options: string[];
  correctAnswer: string;
  imageUrl? : string
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
  
  { id: 10110, class: 8, question: "Name the Computer Component?", options: ["Scanner", "Printer", "Monitor", "Keyboard"], correctAnswer: "Printer" , imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/3/PA/ZQ/LT/121439134/epson-colore-printer-inkjet-1000x1000.jpg' },

  { id: 8, class: 8, question: "What is the full form of HTTP?", options: ["Hyper Text Transfer Protocol", "Hyperlink Text Transfer Protocol", "Hyperlink Transmission Process", "Hyper Transfer Technology Protocol"], correctAnswer: "Hyper Text Transfer Protocol" },
  { id: 9, class: 8, question: "Which of the following is a web browser?", options: ["MS Excel", "Google Chrome", "Windows OS", "Notepad"], correctAnswer: "Google Chrome" },
  { id: 10, class: 8, question: "What does GUI stand for?", options: ["Graphical User Interface", "General User Interaction", "Global User Interface", "Graphical Utility Interface"], correctAnswer: "Graphical User Interface" },
  { id: 11, class: 8, question: "Which key is used to refresh a web page?", options: ["F5", "Ctrl + R", "Alt + F4", "Esc"], correctAnswer: "F5" },
  { id: 12, class: 8, question: "What is the primary function of an operating system?", options: ["Run applications", "Manage hardware resources", "Provide antivirus protection", "Connect to the Internet"], correctAnswer: "Manage hardware resources" },
   { id: 1033, class: 8, question: "Which of the following is used to move the cursor on a computer screen?", options: ["Keyboard", "Mouse", "Monitor", "Speaker"], correctAnswer: "Mouse" },
   {id: 1000 , class :  8 , question : 'Name of the Computer Component' , options: ['Cabinet' , 'Mouse' , 'Keyboard' , 'SMPS' ] , correctAnswer : 'Cabinet' , imageUrl: 'https://5.imimg.com/data5/ML/KX/MY-29474863/cpu-cabinet-1000x1000.jpg'},
  { id: 1034, class: 8, question: "Which device is used to print documents?", options: ["Scanner", "Printer", "Monitor", "Keyboard"], correctAnswer: "Printer" },
  { id: 1035, class: 8, question: "What does a keyboard do?", options: ["Prints documents", "Moves the cursor", "Types text", "Displays images"], correctAnswer: "Types text" },
  { id: 1036, class: 8, question: "Which of these is a computer?", options: ["TV", "Smartphone", "Printer", "Tablet"], correctAnswer: "Smartphone" },
  { id: 1037, class: 8, question: "Which of the following is used to connect your computer to the internet?", options: ["Monitor", "Router", "Keyboard", "Speaker"], correctAnswer: "Router" },
  { id: 1038, class: 8, question: "Which of the following is used to watch videos on a computer?", options: ["Web Browser", "Microsoft Word", "Spreadsheet", "PowerPoint"], correctAnswer: "Web Browser" },
  { id: 1039, class: 8, question: "Which of these is not a part of a computer?", options: ["Mouse", "Monitor", "Keyboard", "Phone"], correctAnswer: "Phone" },
  {id: 1000 , class :  8 , question : 'Name of the Computer Component' , options: ['Mouse' , 'Speaker' , 'Keyboard' , 'SMPS' ] , correctAnswer : 'SMPS' , imageUrl: 'https://5.imimg.com/data5/FR/EH/MY-38302533/computer-smps-1000x1000.jpg'},
  { id: 1040, class: 8, question: "What does the 'Esc' key on a keyboard do?", options: ["Enters text", "Cancels an action", "Moves the cursor", "Prints a document"], correctAnswer: "Cancels an action" },
  { id: 1041, class: 8, question: "Which of the following is an example of a search engine?", options: ["Google", "Windows", "Excel", "PowerPoint"], correctAnswer: "Google" },
  { id: 1042, class: 8, question: "Which device is used to hear sound from a computer?", options: ["Speaker", "Keyboard", "Monitor", "Printer"], correctAnswer: "Speaker" },
  
  { id: 1043, class: 8, question: "What is the main function of a computer mouse?", options: ["To type", "To display images", "To move the cursor", "To print documents"], correctAnswer: "To move the cursor" },
  { id: 1044, class: 8, question: "What is a website?", options: ["A software", "A program", "A collection of web pages", "A computer part"], correctAnswer: "A collection of web pages" },
  { id: 1045, class: 8, question: "What is the purpose of the 'Save' button?", options: ["To print the document", "To close the document", "To save your work", "To share the document"], correctAnswer: "To save your work" },
  {id : 1046 , class : 8 , question : 'Which of the following is NOT a computer component?' , options: ['Monitor' , 'Keyboard' , 'Mouse' , 'Printer' ] , correctAnswer : 'Monitor' },
    { id: 1047, class: 8, question: "Which part of the computer is responsible for performing calculations and processing data?", options: ["CPU", "Monitor", "Keyboard", "RAM"], correctAnswer: "CPU" },

  { id: 1048, class: 8, question: "Which storage device is used to store data permanently?", options: ["RAM", "Hard Disk", "Cache", "ROM"], correctAnswer: "Hard Disk" },

  { id: 1049, class: 8, question: "Which of the following is an example of application software?", options: ["Windows", "MS Paint", "BIOS", "Linux"], correctAnswer: "MS Paint" },

  { id: 1050, class: 8, question: "What is the main function of an antivirus program?", options: ["Increase internet speed", "Detect and remove viruses", "Improve graphics", "Boost processor speed"], correctAnswer: "Detect and remove viruses" },

  { id: 1051, class: 8, question: "Which key is used to delete a file permanently in Windows?", options: ["Ctrl + D", "Shift + Delete", "Alt + F4", "Ctrl + X"], correctAnswer: "Shift + Delete" },

  { id: 1052, class: 8, question: "Which one is an example of a secondary storage device?", options: ["RAM", "Hard Drive", "Cache", "Processor"], correctAnswer: "Hard Drive" },

  { id: 1053, class: 8, question: "What is the name of the software that acts as an interface between the user and the hardware?", options: ["Operating System", "Application Software", "Utility Software", "Driver Software"], correctAnswer: "Operating System" },

  { id: 1054, class: 8, question: "Which of the following is a unit of memory?", options: ["Byte", "Hertz", "Pixel", "Megapixel"], correctAnswer: "Byte" },

  { id: 1055, class: 8, question: "Which of these is a widely used operating system?", options: ["Google Chrome", "Windows", "MS Word", "PowerPoint"], correctAnswer: "Windows" },

  { id: 1056, class: 8, question: "Which of the following is an example of an input device?", options: ["Monitor", "Mouse", "Speaker", "Printer"], correctAnswer: "Mouse" },

  { id: 1057, class: 8, question: "Which programming language is mainly used for web development?", options: ["Java", "Python", "HTML", "C++"], correctAnswer: "HTML" },

  { id: 1058, class: 8, question: "What does 'WWW' stand for?", options: ["World Wide Web", "Web World Wide", "Wide World Web", "Wireless Web World"], correctAnswer: "World Wide Web" },

  { id: 1059, class: 8, question: "What is the full form of USB?", options: ["Universal Serial Bus", "United System Board", "Uniform Storage Backup", "Universal Storage Bus"], correctAnswer: "Universal Serial Bus" },

  { id: 1060, class: 8, question: "Which of the following is an example of a cloud storage service?", options: ["Google Drive", "Microsoft Word", "Adobe Photoshop", "Windows Media Player"], correctAnswer: "Google Drive" },

  { id: 1061, class: 8, question: "Which command is used to copy files in Windows?", options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"], correctAnswer: "Ctrl + C" },



  


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
  { id: 33, class: 8, question: "Which of the following is a type of volatile memory?", options: ["Hard Disk", "SSD", "RAM", "CD-ROM"], correctAnswer: "RAM" },

  { id: 34, class: 8, question: "Which of these is a programming language?", options: ["Windows", "Photoshop", "Python", "Google Chrome"], correctAnswer: "Python" },

  { id: 35, class: 8, question: "Which key is used to refresh a web page in most browsers?", options: ["F1", "F5", "Ctrl + R", "Shift + R"], correctAnswer: "F5" },

  { id: 36, class: 8, question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Link", "Universal Resource Locator"], correctAnswer: "Uniform Resource Locator" },

  { id: 37, class: 8, question: "Which device is used to connect a computer to a network?", options: ["Scanner", "Router", "Speaker", "Printer"], correctAnswer: "Router" },

  { id: 38, class: 8, question: "What is the function of a firewall in a computer network?", options: ["Speed up the internet", "Protect against viruses", "Block unauthorized access", "Enhance graphics"], correctAnswer: "Block unauthorized access" },

  { id: 39, class: 8, question: "Which company developed the Windows operating system?", options: ["Apple", "Google", "Microsoft", "IBM"], correctAnswer: "Microsoft" },

  { id: 40, class: 8, question: "Which of these is an example of a web browser?", options: ["Linux", "Google Chrome", "MS Excel", "Windows"], correctAnswer: "Google Chrome" },

  { id: 4545, class: 8, question: "Which programming language is used for Android app development?", options: ["Java", "Swift", "Python", "C++"], correctAnswer: "Java" },

  { id: 42234, class: 8, question: "Which of the following is a feature of cloud computing?", options: ["Physical storage", "Local backup", "On-demand access", "CD storage"], correctAnswer: "On-demand access" },

  { id: 432394, class: 8, question: "Which shortcut key is used to undo an action in most software?", options: ["Ctrl + X", "Ctrl + Z", "Ctrl + C", "Ctrl + V"], correctAnswer: "Ctrl + Z" },

  { id: 44523, class: 8, question: "Which of the following is an example of a search engine?", options: ["Facebook", "YouTube", "Google", "Instagram"], correctAnswer: "Google" },

  { id: 452564, class: 8, question: "Which of these is a correct file extension for an image?", options: [".txt", ".mp3", ".jpg", ".exe"], correctAnswer: ".jpg" },

  { id: 462384, class: 8, question: "Which component of a computer is considered the 'brain'?", options: ["Monitor", "Keyboard", "CPU", "Hard Drive"], correctAnswer: "CPU" },

  { id: 472347, class: 8, question: "Which of the following is an example of an optical storage device?", options: ["USB Drive", "CD", "Hard Disk", "Floppy Disk"], correctAnswer: "CD" },

  // (Add 14 more for Class 9...)


  { id: 10000, class: 9, question: "Which of the following is used to create text documents?", options: ["MS Excel", "MS Word", "MS PowerPoint", "MS Paint"], correctAnswer: "MS Word" },
  
  { id: 10001, class: 9, question: "What is the default file extension for Microsoft Word documents?", options: [".txt", ".doc", ".docx", ".pdf"], correctAnswer: ".docx" },
  
  { id: 10002, class: 9, question: "Which feature in MS Word is used to check spelling and grammar?", options: ["Spellcheck", "Format", "Insert", "View"], correctAnswer: "Spellcheck" },
  
  { id: 10003, class: 9, question: "What is the keyboard shortcut to save a document?", options: ["Ctrl+S", "Ctrl+P", "Ctrl+C", "Ctrl+V"], correctAnswer: "Ctrl+S" },
  
  { id: 10004, class: 9, question: "Which tab contains the option to insert tables in MS Word?", options: ["Home", "Insert", "Page Layout", "View"], correctAnswer: "Insert" },
  
  { id: 10005, class: 9, question: "What is the default file extension for PowerPoint presentations?", options: [".ppt", ".pptx", ".pdf", ".doc"], correctAnswer: ".pptx" },
  
  { id: 10006, class: 9, question: "Which view in PowerPoint shows thumbnails of all slides?", options: ["Normal View", "Slide Sorter", "Reading View", "Slide Show"], correctAnswer: "Slide Sorter" },
  
  { id: 10007, class: 9, question: "What is the term for special effects used when moving between slides?", options: ["Animations", "Transitions", "Effects", "Motions"], correctAnswer: "Transitions" },
  
  { id: 10008, class: 9, question: "Which feature allows you to add movement to objects in PowerPoint?", options: ["Transitions", "Animations", "Effects", "Motions"], correctAnswer: "Animations" },
  
  { id: 10009, class: 9, question: "What is the keyboard shortcut to start a slideshow from the beginning?", options: ["F5", "F1", "F7", "F12"], correctAnswer: "F5" },
  
  { id: 10010, class: 9, question: "In Excel, what is the intersection of a row and column called?", options: ["Box", "Cell", "Point", "Grid"], correctAnswer: "Cell" },
  
  { id: 10011, class: 9, question: "What is the default file extension for Excel spreadsheets?", options: [".xls", ".xlsx", ".csv", ".txt"], correctAnswer: ".xlsx" },
  
  { id: 10012, class: 9, question: "Which symbol is used to start a formula in Excel?", options: ["#", "=", "@", "$"], correctAnswer: "=" },
  
  { id: 10013, class: 9, question: "What feature automatically fills a series of data?", options: ["AutoSum", "AutoFill", "AutoComplete", "AutoFormat"], correctAnswer: "AutoFill" },
  
  { id: 10014, class: 9, question: "Which function calculates the average of numbers in Excel?", options: ["SUM", "AVERAGE", "COUNT", "MAX"], correctAnswer: "AVERAGE" },
  
  { id: 10015, class: 9, question: "What is the term for a collection of worksheets in Excel?", options: ["Workbook", "Document", "Folder", "File"], correctAnswer: "Workbook" },
  
  { id: 10016, class: 9, question: "Which feature helps organize data in ascending or descending order?", options: ["Filter", "Sort", "Arrange", "Group"], correctAnswer: "Sort" },
  
  { id: 10017, class: 9, question: "What is the maximum number of columns in Excel 2019?", options: ["16,384", "1,048,576", "1,000,000", "100,000"], correctAnswer: "16,384" },
  
  { id: 10018, class: 9, question: "Which function counts the number of cells containing numbers?", options: ["COUNT", "SUM", "COUNTA", "COUNTIF"], correctAnswer: "COUNT" },
  
  { id: 10019, class: 9, question: "What is the name of the bar above the ribbon that shows file operations?", options: ["Menu Bar", "Title Bar", "Quick Access Toolbar", "Status Bar"], correctAnswer: "Quick Access Toolbar" },
  
  { id: 10020, class: 9, question: "Which feature in Word creates a list of contents automatically?", options: ["Index", "Table of Contents", "Bibliography", "References"], correctAnswer: "Table of Contents" },
  
  { id: 10021, class: 9, question: "What is the purpose of the 'Format Painter' tool?", options: ["Draw shapes", "Copy formatting", "Paint pictures", "Change colors"], correctAnswer: "Copy formatting" },
  
  { id: 10022, class: 9, question: "Which view in Word shows how the document will look when printed?", options: ["Draft", "Web Layout", "Print Layout", "Outline"], correctAnswer: "Print Layout" },
  
  { id: 10023, class: 9, question: "What is the purpose of the 'Merge & Center' feature in Excel?", options: ["Combine cells", "Split cells", "Delete cells", "Hide cells"], correctAnswer: "Combine cells" },
  
  { id: 10024, class: 9, question: "Which PowerPoint view shows speaker notes?", options: ["Normal", "Outline", "Notes Page", "Reading"], correctAnswer: "Notes Page" },
  
  { id: 10025, class: 9, question: "What is the purpose of a pivot table in Excel?", options: ["Format data", "Summarize data", "Delete data", "Hide data"], correctAnswer: "Summarize data" },
  
  { id: 10026, class: 9, question: "Which feature in Word automatically corrects spelling mistakes as you type?", options: ["AutoCorrect", "SpellCheck", "Grammar Check", "ProofRead"], correctAnswer: "AutoCorrect" },
  
  { id: 10027, class: 9, question: "What does the '$' symbol mean in Excel cell references?", options: ["Currency", "Absolute reference", "Percentage", "Decimal"], correctAnswer: "Absolute reference" },
  
  { id: 10028, class: 9, question: "Which PowerPoint feature allows you to record narration?", options: ["Audio", "Record Slide Show", "Voice", "Narrate"], correctAnswer: "Record Slide Show" },
  
  { id: 10029, class: 9, question: "What is the default orientation of a Word document?", options: ["Portrait", "Landscape", "Square", "Custom"], correctAnswer: "Portrait" },
  
  { id: 10030, class: 9, question: "Which Excel function finds the largest value in a range?", options: ["LARGE", "MAX", "TOP", "HIGHEST"], correctAnswer: "MAX" },
  
  { id: 10031, class: 9, question: "What is the purpose of 'Smart Art' in Microsoft Office?", options: ["Draw shapes", "Create diagrams", "Insert pictures", "Add effects"], correctAnswer: "Create diagrams" },
  
  { id: 10032, class: 9, question: "Which feature allows you to combine mail with a recipient list?", options: ["Mail Connect", "Mail Merge", "Mail Link", "Mail Join"], correctAnswer: "Mail Merge" },
  
  { id: 10033, class: 9, question: "What is the purpose of 'Guidelines' in PowerPoint?", options: ["Draw lines", "Align objects", "Create borders", "Add effects"], correctAnswer: "Align objects" },
  
  { id: 10034, class: 9, question: "Which Excel feature removes duplicate values?", options: ["Remove Duplicates", "Filter", "Sort", "Clean"], correctAnswer: "Remove Duplicates" },
  
  { id: 10035, class: 9, question: "What is the purpose of 'Styles' in Word?", options: ["Format text consistently", "Add pictures", "Insert tables", "Create charts"], correctAnswer: "Format text consistently" },
  
  { id: 10036, class: 9, question: "Which PowerPoint feature helps maintain consistent design?", options: ["Theme", "Template", "Master", "Slide Master"], correctAnswer: "Slide Master" },
  
  { id: 10037, class: 9, question: "What is the purpose of 'Conditional Formatting' in Excel?", options: ["Format based on conditions", "Add colors", "Change fonts", "Insert borders"], correctAnswer: "Format based on conditions" },
  
  { id: 10038, class: 9, question: "Which Word feature creates a table of figures?", options: ["Insert Table", "List Figures", "Caption", "Table of Figures"], correctAnswer: "Table of Figures" },
  
  { id: 10039, class: 9, question: "What is the purpose of 'Charts' in Excel?", options: ["Store data", "Visualize data", "Delete data", "Hide data"], correctAnswer: "Visualize data" },
  
  { id: 10040, class: 9, question: "Which PowerPoint feature allows automatic slide advancement?", options: ["Timing", "Animation", "Transition", "Auto Advance"], correctAnswer: "Timing" },
  
  { id: 10041, class: 9, question: "What is the purpose of 'Track Changes' in Word?", options: ["Record edits", "Count words", "Check spelling", "Format text"], correctAnswer: "Record edits" },
  
  { id: 10042, class: 9, question: "Which Excel function counts cells that meet specific criteria?", options: ["COUNT", "COUNTA", "COUNTIF", "SUM"], correctAnswer: "COUNTIF" },
  
  { id: 10043, class: 9, question: "What is the purpose of 'Sections' in PowerPoint?", options: ["Divide presentation", "Add animation", "Insert pictures", "Change design"], correctAnswer: "Divide presentation" },
  
  { id: 10044, class: 9, question: "Which Word feature creates alphabetical list of terms?", options: ["Index", "Glossary", "Bibliography", "Table of Contents"], correctAnswer: "Index" },
  
  { id: 10045, class: 9, question: "What is the purpose of 'Freeze Panes' in Excel?", options: ["Lock cells", "Delete rows", "Hide columns", "Sort data"], correctAnswer: "Lock cells" },
  
  { id: 10046, class: 9, question: "Which PowerPoint feature creates a photo album?", options: ["Photo Insert", "Photo Collection", "Photo Album", "Picture Gallery"], correctAnswer: "Photo Album" },
  
  { id: 10047, class: 9, question: "What is the purpose of 'Headers and Footers' in Word?", options: ["Add page information", "Format text", "Insert pictures", "Create tables"], correctAnswer: "Add page information" },
  
  { id: 10048, class: 9, question: "Which Excel feature creates a visual representation of data rules?", options: ["Charts", "Graphs", "Data Bars", "Sparklines"], correctAnswer: "Data Bars" },
  
  { id: 10049, class: 9, question: "What is the purpose of 'Rehearse Timings' in PowerPoint?", options: ["Practice presentation", "Add animation", "Record audio", "Change design"], correctAnswer: "Practice presentation" },

  // =================== Class 10 Questions (IT - 402 Part B Topics) =================== 
  { id: 41, class: 10, question: "Which of the following is a database management system?", options: ["MS Excel", "MS Access", "MS Word", "MS Paint"], correctAnswer: "MS Access" },
  { id: 42, class: 10, question: "Which SQL command is used to delete a table?", options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "ERASE TABLE"], correctAnswer: "DROP TABLE" },
  { id: 43, class: 10, question: "Which of the following is an example of cyber security threat?", options: ["Firewall", "Ransomware", "Antivirus", "Cookies"], correctAnswer: "Ransomware" },
  { id: 44, class: 10, question: "What does VPN stand for?", options: ["Virtual Private Network", "Very Private Node", "Verified Public Network", "Virtual Protocol Name"], correctAnswer: "Virtual Private Network" },
  { id: 45, class: 10, question: "What is the shortcut key to save a document in LibreOffice?", options: ["Ctrl + P", "Ctrl + S", "Ctrl + N", "Ctrl + O"], correctAnswer: "Ctrl + S" },
  { id: 46, class: 10, question: "Which of the following file extensions is used for a spreadsheet?", options: [".docx", ".pptx", ".xlsx", ".html"], correctAnswer: ".xlsx" },
  { id: 47, class: 10, question: "Which software is used for creating invoices and reports?", options: ["MS Word", "Tally", "MS Excel", "MS Access"], correctAnswer: "Tally" },


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
