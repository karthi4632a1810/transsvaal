import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/themeSlice';
import Home from './pages/Home';
import './assets/css/Home.css'
import About from './pages/About';
import Contact from './pages/Contact';
import './assets/css/Contact.css'
import Blog from './pages/Blog';
import './App.css';
import Header from './Header';
import './assets/loader-plugin/script.js';
import Footer from './Footer.jsx';
import Service from './pages/Service.jsx';


function App() {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // Apply the theme class to the body element
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : 'dark';
  }, [theme]);

  useEffect(() => {
    // menu tiggle 
    document.querySelector('.menu').addEventListener('click', () => {
      document.querySelector(".navlinks").classList.remove('navlinks-sub-active');
      document.body.classList.toggle('menu-open');
    })

    // Create an IntersectionObserver for image loading
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('img-loader'); // Set the actual src from data attribute
          img.classList.add('loaded'); // Optional: add a class once image is loaded
          img.removeAttribute('img-loader');
          imgObserver.unobserve(img); // Stop observing the image
        }
      });
    }, {
      rootMargin: '0px 0px 300px 0px', // Configure the rootMargin for visibility
    });

    // Observe all images with [img-loader] attribute
    const imgs = document.querySelectorAll('[img-loader]');
    imgs.forEach((img) => {
      imgObserver.observe(img);
    });

    // Determine scroll direction
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const isScrollingDown = scrollTop > lastScrollTop;
      if (lastScrollTop > 100) {
        document.body.classList.remove('scroll-on-top');
        if (isScrollingDown) {
          console.log('scrolling down', lastScrollTop)
          document.body.classList.add('scroll-down');
        } else {
          console.log('scrolling up', lastScrollTop);
          document.body.classList.remove('scroll-down');
        }
      } else {
        document.body.classList.add('scroll-on-top');
      }

      lastScrollTop = scrollTop;
    };

    // Add scroll event listener
    document.addEventListener('scroll', handleScroll);



    return () => {
      // Remove scroll event listener
      document.removeEventListener('scroll', handleScroll);
    };


  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <div className="min-vh-100">
        <div className="container py-5">
          <h1 className="text-center">Vite React with Redux</h1>
          <p className="text-center">Current Theme: {theme}</p>
          <div className="text-center">
            <button
              className="custom-btn mx-auto"
              onClick={() => dispatch(toggleTheme())}
            >Toggle Theme
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
