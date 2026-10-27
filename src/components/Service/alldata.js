const alldata = [
    {
        "id": 1,
        "companyName": "Adobe",
        "role": "UI Designer",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 6,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 2,
        "companyName": "Canva",
        "role": "Graphic Designer",
        "interviewPlace": "Online",
        "packageLpa": 5,
        "location": "India",
        "mode": "Online"
    },
    {
        "id": 3,
        "companyName": "Figma",
        "role": "UI/UX Designer",
        "interviewPlace": "Online",
        "packageLpa": 6,
        "location": "India",
        "mode": "Online"
    },
    {
        "id": 1,
        "companyName": "TCS",
        "role": "UI Designer",
        "interviewPlace": "Pune Office",
        "packageLpa": 4,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 4,
        "companyName": "Infosys",
        "role": "UX Designer",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 5,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 5,
        "companyName": "Accenture",
        "role": "UX Design Associate",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 6,
        "companyName": "Wipro",
        "role": "Visual Designer",
        "interviewPlace": "Hyderabad Office",
        "packageLpa": 4,
        "location": "Hyderabad, Telangana",
        "mode": "Offline"
    },
    {
        "id": 7,
        "companyName": "Zoho",
        "role": "Product Designer",
        "interviewPlace": "Chennai Office",
        "packageLpa": 5,
        "location": "Chennai, Tamil Nadu",
        "mode": "Offline"
    },
    {
        "id": 4,
        "companyName": "Freshworks",
        "role": "UX Designer",
        "interviewPlace": "Chennai Office",
        "packageLpa": 5.5,
        "location": "Chennai, Tamil Nadu",
        "mode": "Offline"
    },
    {
        "id": 6,
        "companyName": "Deloitte",
        "role": "Visual Designer",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 5,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 8,
        "companyName": "Byju's",
        "role": "Academic Counselor",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 3.5,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 9,
        "companyName": "Unacademy",
        "role": "Education Executive",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 8,
        "companyName": "Vedantu",
        "role": "Academic Counselor",
        "interviewPlace": "Online",
        "packageLpa": 3.5,
        "location": "India",
        "mode": "Online"
    },
    {
        "id": 10,
        "companyName": "upGrad",
        "role": "Student Counselor",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 11,
        "companyName": "Simplilearn",
        "role": "Education Counselor",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 8,
        "companyName": "Physics Wallah",
        "role": "Academic Counselor",
        "interviewPlace": "Noida Office",
        "packageLpa": 3.5,
        "location": "Noida, Uttar Pradesh",
        "mode": "Offline"
    },
    {
        "id": 12,
        "companyName": "Great Learning",
        "role": "Program Advisor",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4.2,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 11,
        "companyName": "Toppr",
        "role": "Education Counselor",
        "interviewPlace": "Online",
        "packageLpa": 3.5,
        "location": "India",
        "mode": "Online"
    },
    {
        "id": 11,
        "companyName": "WhiteHat Jr",
        "role": "Education Counselor",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 3.8,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 13,
        "companyName": "upGrad Campus",
        "role": "Student Success Associate",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 14,
        "companyName": "HDFC Bank",
        "role": "Financial Analyst",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 15,
        "companyName": "ICICI Bank",
        "role": "Finance Associate",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.2,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 14,
        "companyName": "Axis Bank",
        "role": "Financial Analyst",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 16,
        "companyName": "Kotak Mahindra Bank",
        "role": "Finance Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4.5,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 17,
        "companyName": "Deloitte",
        "role": "Audit Analyst",
        "interviewPlace": "Pune Office",
        "packageLpa": 5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 18,
        "companyName": "EY",
        "role": "Tax Analyst",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4.5,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 14,
        "companyName": "KPMG",
        "role": "Financial Analyst",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 5,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 19,
        "companyName": "PwC",
        "role": "Audit Associate",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 20,
        "companyName": "Genpact",
        "role": "Finance Analyst",
        "interviewPlace": "Gurugram Office",
        "packageLpa": 4,
        "location": "Gurugram, Haryana",
        "mode": "Offline"
    },
    {
        "id": 16,
        "companyName": "Bajaj Finserv",
        "role": "Finance Executive",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.2,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 21,
        "companyName": "Apollo Hospitals",
        "role": "Healthcare Executive",
        "interviewPlace": "Hyderabad Office",
        "packageLpa": 3.5,
        "location": "Hyderabad, Telangana",
        "mode": "Offline"
    },
    {
        "id": 22,
        "companyName": "Fortis Healthcare",
        "role": "Healthcare Associate",
        "interviewPlace": "Delhi Office",
        "packageLpa": 3.8,
        "location": "New Delhi, Delhi",
        "mode": "Offline"
    },
    {
        "id": 23,
        "companyName": "Max Healthcare",
        "role": "Hospital Administrator",
        "interviewPlace": "Delhi Office",
        "packageLpa": 4,
        "location": "New Delhi, Delhi",
        "mode": "Offline"
    },
    {
        "id": 24,
        "companyName": "Manipal Hospitals",
        "role": "Healthcare Coordinator",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 3.5,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 25,
        "companyName": "Piramal Pharma",
        "role": "Pharma Associate",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 26,
        "companyName": "Sun Pharma",
        "role": "Pharma Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4.2,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 27,
        "companyName": "Dr. Reddy's Laboratories",
        "role": "Healthcare Analyst",
        "interviewPlace": "Hyderabad Office",
        "packageLpa": 4.5,
        "location": "Hyderabad, Telangana",
        "mode": "Offline"
    },
    {
        "id": 25,
        "companyName": "Cipla",
        "role": "Pharma Associate",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 21,
        "companyName": "Zydus Lifesciences",
        "role": "Healthcare Executive",
        "interviewPlace": "Ahmedabad Office",
        "packageLpa": 3.8,
        "location": "Ahmedabad, Gujarat",
        "mode": "Offline"
    },
    {
        "id": 28,
        "companyName": "Apollo Pharmacy",
        "role": "Pharmacy Executive",
        "interviewPlace": "Pune Office",
        "packageLpa": 3.2,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 29,
        "companyName": "TCS",
        "role": "HR Executive",
        "interviewPlace": "Pune Office",
        "packageLpa": 4,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 30,
        "companyName": "Infosys",
        "role": "HR Associate",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4.2,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 29,
        "companyName": "Wipro",
        "role": "HR Executive",
        "interviewPlace": "Hyderabad Office",
        "packageLpa": 4,
        "location": "Hyderabad, Telangana",
        "mode": "Offline"
    },
    {
        "id": 30,
        "companyName": "Accenture",
        "role": "HR Associate",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 31,
        "companyName": "Deloitte",
        "role": "HR Analyst",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 5,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 32,
        "companyName": "Amazon",
        "role": "HR Coordinator",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4.5,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 29,
        "companyName": "Flipkart",
        "role": "HR Executive",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 30,
        "companyName": "Cognizant",
        "role": "HR Associate",
        "interviewPlace": "Pune Office",
        "packageLpa": 4,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 29,
        "companyName": "Capgemini",
        "role": "HR Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4.2,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 31,
        "companyName": "Genpact",
        "role": "HR Analyst",
        "interviewPlace": "Gurugram Office",
        "packageLpa": 4,
        "location": "Gurugram, Haryana",
        "mode": "Offline"
    },
    {
        "id": 33,
        "companyName": "TCS",
        "role": "Java Developer",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 34,
        "companyName": "Infosys",
        "role": "Systems Engineer",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 5,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 35,
        "companyName": "Wipro",
        "role": "Software Developer",
        "interviewPlace": "Hyderabad Office",
        "packageLpa": 4,
        "location": "Hyderabad, Telangana",
        "mode": "Offline"
    },
    {
        "id": 36,
        "companyName": "IBM",
        "role": "Associate Software Developer",
        "interviewPlace": "Online",
        "packageLpa": 6,
        "location": "Bengaluru, Karnataka",
        "mode": "Online"
    },
    {
        "id": 37,
        "companyName": "Accenture",
        "role": "Application Developer",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 33,
        "companyName": "Capgemini",
        "role": "Java Developer",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4.2,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 38,
        "companyName": "Cognizant",
        "role": "Programmer Analyst",
        "interviewPlace": "Pune Office",
        "packageLpa": 4,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 39,
        "companyName": "HCLTech",
        "role": "Graduate Engineer Trainee",
        "interviewPlace": "Online",
        "packageLpa": 4,
        "location": "Noida, Uttar Pradesh",
        "mode": "Online"
    },
    {
        "id": 40,
        "companyName": "Tech Mahindra",
        "role": "Associate Software Engineer",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 41,
        "companyName": "Persistent Systems",
        "role": "Software Engineer",
        "interviewPlace": "Pune Office",
        "packageLpa": 5.5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 42,
        "companyName": "Dentsu",
        "role": "Digital Marketing Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 3.5,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 43,
        "companyName": "WPP",
        "role": "Marketing Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 44,
        "companyName": "Publicis Groupe",
        "role": "Marketing Analyst",
        "interviewPlace": "Pune Office",
        "packageLpa": 4.2,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 45,
        "companyName": "Ogilvy",
        "role": "Brand Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 3.8,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 46,
        "companyName": "GroupM",
        "role": "Media Planner",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 42,
        "companyName": "Schbang",
        "role": "Digital Marketing Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 3.5,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 47,
        "companyName": "Social Beat",
        "role": "Performance Marketing Executive",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 48,
        "companyName": "iProspect",
        "role": "SEO Executive",
        "interviewPlace": "Pune Office",
        "packageLpa": 3.6,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 49,
        "companyName": "Growth Hackers",
        "role": "Growth Marketing Associate",
        "interviewPlace": "Online",
        "packageLpa": 4.5,
        "location": "India",
        "mode": "Online"
    },
    {
        "id": 50,
        "companyName": "Madison World",
        "role": "Marketing Associate",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 3.8,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 51,
        "companyName": "Reliance Industries",
        "role": "Sales Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 3.5,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 52,
        "companyName": "Amazon",
        "role": "Sales Associate",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 4,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 51,
        "companyName": "Flipkart",
        "role": "Sales Executive",
        "interviewPlace": "Bengaluru Office",
        "packageLpa": 3.8,
        "location": "Bengaluru, Karnataka",
        "mode": "Offline"
    },
    {
        "id": 53,
        "companyName": "HDFC Bank",
        "role": "Sales Officer",
        "interviewPlace": "Pune Office",
        "packageLpa": 3.5,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 54,
        "companyName": "ICICI Bank",
        "role": "Relationship Manager",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 4,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 51,
        "companyName": "Tata Motors",
        "role": "Sales Executive",
        "interviewPlace": "Pune Office",
        "packageLpa": 3.6,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 52,
        "companyName": "Mahindra",
        "role": "Sales Associate",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 3.8,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 55,
        "companyName": "Asian Paints",
        "role": "Sales Trainee",
        "interviewPlace": "Pune Office",
        "packageLpa": 4,
        "location": "Pune, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 51,
        "companyName": "Marico",
        "role": "Sales Executive",
        "interviewPlace": "Mumbai Office",
        "packageLpa": 3.7,
        "location": "Mumbai, Maharashtra",
        "mode": "Offline"
    },
    {
        "id": 52,
        "companyName": "PepsiCo",
        "role": "Sales Associate",
        "interviewPlace": "Gurugram Office",
        "packageLpa": 4.2,
        "location": "Gurugram, Haryana",
        "mode": "Offline"
    }
];

export default alldata;