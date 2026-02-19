import { Navigate, Route, Routes } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import StudentRegister from './pages/StudentRegister'
import TutorApply from './pages/TutorApply'
import StudentDashboard from './pages/StudentDashboard'
import TutorDashboard from './pages/TutorDashboard'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/tutor-apply" element={<TutorApply />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/tutor-dashboard" element={<TutorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageLayout>
  )
}
