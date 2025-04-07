import React from "react";
import logo from "../assets/logo.png"; // Save your image as logo.png in /src/assets
import "./Home.css"; // For custom styles

function Home() {
  return (
    <div className="home-container">
      <div className="header">අවුරුදු නැකත</div>
      <div className="content">
        <div className="left-card">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="right-side">
        <a href="/aurudu.apk" download className="yellow-button">
            Download Mobile Application
            </a>
          <div className="text-content">
            <h2 className="topic">සිංහල සහ දෙමළ අලුත් අවුරුද්ද</h2>
            <p className="paragraph">
            "අවුරුදු නැකත" යනු 2025 වසරේ සිංහල සහ දෙමළ අලුත් අවුරුද්ද සඳහා වූ නැකත් විස්තර සහ ආචාරානුකූල ක්‍රියාවලි ඇතුළත් ජංගම යෙදුමකි.<br/>


            🕑 අවුරුදු නැකත් වෙලාවන් <br/>

            📆 අලුත් අවුරුදු දින දසුන<br/>

            🔔 නැකත් මතක් කිරීමේ දැනුම්දීම්<br/>

            මෙම යෙදුම ආගමික සම්ප්‍රදායන් ආරක්ෂා කරමින්, පවුල් එකමුතුවක් ලෙස අවුරුදු උත්සවය සැරසීමට උපකාරී මාර්ගෝපදේශයක් ලෙසද ක්‍රියාකරයි.

            ඔබට අවුරුදු සැමරුමක් නිවැරදිව සහ සම්ප්‍රදායිකව සිදු කරන්න "අවුරුදු නැකත" යෙදුම වටින උපකරණයක් වේ! 🎉📱.
            </p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
