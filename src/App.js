import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { BillingTab } from './components/billing/BillingTab';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/utlis/Navbar';
import SidePanel from './components/utlis/SidePanel';
import BlogTable from './components/tables/BlogTable';
import CommentTable from './components/tables/CommentTable';
import CategoryTable from './components/tables/CategoryTable';
import { AddBlog } from './components/tables/AddBlog';
import OtpMessage from './components/tables/OtpMessage';

function App() {
  return (
    <Router>
      <div className='flex bg-[#F4F5F6] min-h-screen'>
          <SidePanel />
          <div className="flex-1 ml-[20%] 2xl:ml-[18%] px-5 2xl:px-8 overflow-x-hidden"> 
            <Navbar />
            <div className="routes">
              <Routes>
                <Route path="/" element={<Navigate to="/tables" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blog-list" element={<BlogTable />} /> 
                <Route path="/blog-new" element={<AddBlog />} /> 
                <Route path="/blog-comment" element={<CommentTable />} /> 
                <Route path="/blog-category" element={<CategoryTable />} /> 
                <Route path="/otp-message" element={<OtpMessage />} /> 
                <Route path="/tables" element={<BlogTable/>}/>
              </Routes>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
