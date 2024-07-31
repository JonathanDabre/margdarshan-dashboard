import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/utlis/Navbar';
import SidePanel from './components/utlis/SidePanel';
import BlogTable from './components/tables/BlogTable';
import CommentTable from './components/tables/CommentTable';
import CategoryTable from './components/tables/CategoryTable';
import { AddBlog } from './components/Add-Blog/AddBlog';
import OtpMessage from './components/tables/OtpMessage';
import Home from './components/utlis/Home';
import Login from './components/utlis/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import User from './components/Users/User'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='flex bg-[#F4F5F6] min-h-screen'>
          <SidePanel />
          <div className="flex-1 ml-[20%] 2xl:ml-[18%] px-5 2xl:px-8 overflow-x-hidden"> 
            <Navbar />
            <div className="routes">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute allowedRoles={['admin', 'blog', 'otp']}><Home /></ProtectedRoute>} />
                <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><Dashboard /></ProtectedRoute>} />
                <Route path="/blog-list" element={<ProtectedRoute allowedRoles={['admin', 'blog']}><BlogTable /></ProtectedRoute>} />
                <Route path="/blog-new" element={<ProtectedRoute allowedRoles={['admin', 'blog']}><AddBlog /></ProtectedRoute>} />
                <Route path="/blog-comment" element={<ProtectedRoute allowedRoles={['admin', 'blog']}><CommentTable /></ProtectedRoute>} />
                <Route path="/blog-category" element={<ProtectedRoute allowedRoles={['admin', 'blog']}><CategoryTable /></ProtectedRoute>} />
                <Route path="/otp-message" element={<ProtectedRoute allowedRoles={['admin', 'otp']}><OtpMessage /></ProtectedRoute>} />
                <Route path="/users" element={<ProtectedRoute allowedRoles={['admin']}><User /></ProtectedRoute>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
