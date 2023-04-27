import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignInForm from '../pages/SignInForm';
import SignUpForm from '../pages/SignUpForm';
import ProductList from '../pages/ProductList';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/register" element={<SignUpForm />} />

        {/* <ProductList /> */}
        {/* <h1>로그인 폼</h1> */}
        {/* <SignInForm /> */}
        {/* <SignUpForm /> */}
      </Routes>
    </Router>
  );
}

export default App;
