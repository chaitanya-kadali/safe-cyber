import "./styles/Footer.css";



export default function Footer() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer-container">
      <p className="logo">Safe Cyber</p>

      <div className="footer-main">
        

        {/* Right Socials */}
        <div className="footer-socials">
          <p className="connect-text">Connect</p>

          <div className="social-icons">

            

            <div
              className="icon"
              onClick={() => handleClick("https://x.com/Chaitanya_947")}
            >
              <svg
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m13.458 9.12244 7.5158-7.9657h2.4916l-0.0107 0.01176-8.8892 9.424 
                  8.1385 10.8018c0.2068 0.2744 0.2405 0.6422 0.0872 0.9498-0.1435 0.2878-0.4278 
                  0.4764-0.7453 0.4994h-5.0964c-0.2598-0.0188-0.5001-0.1488-0.6582-0.3585l-5.7269-7.6011 
                  -7.47199 7.9596H0.534546l8.922324-9.4297L1.31843 2.61205c-0.20678-0.27444-0.24055-0.64223-0.08721-0.94974 
                  0.15333-0.30752 0.4674-0.50186 0.81102-0.50186h4.96503c0.28455 0 0.55258 0.13365 
                  0.72381 0.36092L13.458 9.12244Z"
                />
              </svg>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright">
        © Copyright. All Rights Reserved.
      </div>
    </div>
  );
}
