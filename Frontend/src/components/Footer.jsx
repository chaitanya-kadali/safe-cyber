



// export default function Footer() {
//   const handleClick = (url) => {
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="footer-container">
//       <p className="logo">Safe Cyber</p>

//       <div className="footer-main">
        

//         {/* Right Socials */}
//         <div className="footer-socials">
//           <p className="connect-text">Connect</p>

//           <div className="social-icons">

            

//             <div
//               className="icon"
//               onClick={() => handleClick("https://x.com/Chaitanya_947")}
//             >
             
//             </div>

//           </div>
//         </div>
//       </div>

//       <div className="copyright">
//         © Copyright. All Rights Reserved.
//       </div>
//     </div>
//   );
// }




import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="brand-title">
            <span className="menu-icon">▼</span>
            <span className="brand-name">Safe-Cyber</span>
          </div>
          <p className="brand-description">
            Your all-in-one shield against <br />
            online abuse.
          </p>
          <p className="copyright">© 2025 Safe-Cyber All rights reserved.</p>
        </div>

        {/* Pages Section */}
        <div className="footer-section">
          <h3 className="section-title">Pages</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/login" className="footer-link">Login</a></li>
            <li><a href="/register" className="footer-link">Sign Up</a></li>
          </ul>
        </div>


        {/* Connect Section */}
        <div className="footer-section connect-section">
          <h3 className="section-title">Connect With Us</h3>
          <div className="social-icons">
            <a   href="https://github.com/chaitanya-kadali" 
            target="_blank" 
            rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://x.com/Chaitanya_947"  target="_blank" 
            rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a  href="https://www.linkedin.com/in/chaitanya-kadali-873069255/" 
            target="_blank" 
            rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
            <a 
            href="https://chaitanyaworks.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="email-link"
          >
            chaitanyaworks.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        {/* <div className="divider"></div> */}
        <p className="trademark">
          Designed & Developed with <span className="heart">❤</span> by{' '}
          <a 
            href="https://github.com/chaitanya-kadali" 
            target="_blank" 
            rel="noopener noreferrer"
            className="developer-link"
          >
            chaitanya-kadali
          </a>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;