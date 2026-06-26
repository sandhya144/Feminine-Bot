import './head.css';

// function Footer() {
//   return (
//     <footer className="footer-head">
//       <div className="footer-grid">
//         <div className="footer-column">
//           <h4>FeminineBot</h4>
//           <p className="footer-about-text">
//             Empowering women worldwide with instant, empathetic, and accurate healthcare guidance.
//           </p>
//         </div>
        
//         <div className="footer-column">
//           <h4>Core Features</h4>
//           <ul>
//             <li>Symptom Assessment</li>
//             <li>Reproductive Health</li>
//             <li>Mental Wellness Trackers</li>
//             <li>24/7 Virtual Assistance</li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Resources & Safety</h4>
//           <ul>
//             <li>Privacy Protocol</li>
//             <li>Terms of Service</li>
//             <li>Emergency Support Lines</li>
//             <li>Medical Disclaimer</li>
//           </ul>
//         </div>
//       </div>

//       <hr className="footer-divider" />

//       <div className="footer-bottom-bar">
//         <p className="footer-headdesc">Making women healthcare services available around the world</p>
//         <p className="footerdesc">No data is getting collected. Feel free to chat</p>
//         <p className="footerdesc">© {new Date().getFullYear()} FeminineBot. Secure & Confidential.</p>
//       </div>
//     </footer>
//   );
// }

function Footer() {
  return (
    <footer className="footer-head">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>FeminineBot</h4>
          <p className="footer-about-text">
            Empowering women worldwide with instant, empathetic, and accurate healthcare guidance.
          </p>
        </div>
        
        <div className="footer-column">
          <h4>Core Features</h4>
          {/* ✨ Added custom target classes to bypass global css conflicts */}
          <ul className="luxe-footer-list">
            <li className="luxe-footer-item">Symptom Assessment</li>
            <li className="luxe-footer-item">Reproductive Health</li>
            <li className="luxe-footer-item">Mental Wellness Trackers</li>
            <li className="luxe-footer-item">24/7 Virtual Assistance</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources & Safety</h4>
          {/* ✨ Added custom target classes to bypass global css conflicts */}
          <ul className="luxe-footer-list">
            <li className="luxe-footer-item">Privacy Protocol</li>
            <li className="luxe-footer-item">Terms of Service</li>
            <li className="luxe-footer-item">Emergency Support Lines</li>
            <li className="luxe-footer-item">Medical Disclaimer</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom-bar">
        <p className="footer-headdesc">Making women healthcare services available around the world</p>
        <p className="footerdesc">No data is getting collected. Feel free to chat</p>
        <p className="footerdesc">© {new Date().getFullYear()} FeminineBot. Secure & Confidential.</p>
      </div>
    </footer>
  );
}


export default Footer;
