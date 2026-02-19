import raihan from "../assets/team/raihan.png"
import umair from "../assets/team/umair.png"
import abhay from "../assets/team/abhay.png"


export const howItWorks = [
  {
    title: 'Search Tutor',
    description: 'Browse trusted tutors for home and online learning in your city.',
  },
  {
    title: 'Book Session',
    description: 'Pick a tutor, choose a convenient slot, and confirm your first class.',
  },
  {
    title: 'Learn & Track',
    description: 'Follow progress through regular sessions and simple learning updates.',
  },
]

export const teamMembers = [
  { name: 'Raihan Khan', role: 'Founder', image: raihan},
  { name: 'Abhay Jha', role: 'Co-Founder & CEO', image: abhay },
  { name: 'Umair Khan', role: 'Co-Founder & CTO', image: umair },
]

export const upcomingSessions = [
  { subject: 'Mathematics', tutor: 'Priya Nair', time: 'Sat, 10:00 AM', mode: 'Online' },
  { subject: 'Science', tutor: 'Ankit Verma', time: 'Mon, 5:00 PM', mode: 'Home Visit' },
  { subject: 'English', tutor: 'Riya Bose', time: 'Wed, 7:00 PM', mode: 'Online' },
]

export const sessionHistory = [
  { date: '12 Jan 2026', subject: 'Math', tutor: 'Priya Nair', status: 'Completed' },
  { date: '09 Jan 2026', subject: 'Science', tutor: 'Ankit Verma', status: 'Completed' },
  { date: '05 Jan 2026', subject: 'English', tutor: 'Riya Bose', status: 'Completed' },
]

export const tutorStudents = [
  { name: 'Neha Rao', grade: '8', subject: 'Mathematics' },
  { name: 'Ishaan Das', grade: '10', subject: 'Physics' },
  { name: 'Anaya Pillai', grade: '7', subject: 'English' },
]

export const adminApprovals = [
  { name: 'Saurabh Jain', type: 'Tutor', city: 'Delhi', approved: true },
  { name: 'Pooja Sethi', type: 'Tutor', city: 'Pune', approved: false },
  { name: 'Aditi Roy', type: 'Student', city: 'Kolkata', approved: true },
]
