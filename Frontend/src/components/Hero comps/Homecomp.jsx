import React, { useState } from "react";
import Images from "../Home/Images";
import FAQ from "../Home/FAQs";
import "../styles/Homecomp.css";
function Homecomp({sendData}) {
  const [tabno,setTabnno]=useState(null);
  const CyberFaqData = [
    {
      question: "How does the AI-powered detection system work?",
      answer:
        "Our system uses advanced machine learning, NLP, and generative AI models to analyze online content, identify harmful patterns, and flag content for moderation.",
    },
    {
      question: "Can the system detect hate speech in multiple languages?",
      answer:
        "Yes, our solution supports multilingual detection by leveraging NLP techniques and pre-trained language models for a wide range of languages.",
    },
    {
      question: "How is misinformation detected and mitigated?",
      answer:
        "The system uses fact-checking algorithms, knowledge graphs, and cross-referencing with trusted sources to identify and flag misleading content.",
    },
    {
      question: "What measures are in place to ensure user privacy?",
      answer:
        "We employ strict data anonymization, encryption, and compliance with global privacy standards like GDPR to protect user information.",
    },
    {
      question: "Can the system adapt to emerging online threats?",
      answer:
        "Yes, the AI models are continuously updated using new datasets to adapt to evolving threats and ensure effective moderation.",
    },
    {
      question:
        "How does the system differentiate between harmful content and freedom of speech?",
      answer:
        "The solution uses context-aware models to balance content moderation with freedom of expression, minimizing false positives.",
    },
    {
      question: "Does the system provide real-time content moderation?",
      answer:
        "Absolutely, the platform is optimized for real-time detection and moderation, ensuring immediate action against harmful content.",
    },
    {
      question:
        "What are the benefits of using this solution for online platforms?",
      answer:
        "It enhances user safety, reduces moderation workload, improves platform trust, and helps maintain compliance with content policies.",
    },
    {
      question: "How accurate is the detection system?",
      answer:
        "Our solution achieves high accuracy through continuous training on diverse datasets, reducing false positives and false negatives.",
    },
    {
      question: "Is the system scalable for large online platforms?",
      answer:
        "Yes, the architecture is designed to scale seamlessly, handling high volumes of content efficiently for platforms of any size.",
    },
  ];

  const features = [
       {
        id: 2,
      title : "Abuse Censor",
      matter:  "To filter out toxic text and images",
      imgname : "abusecensor.jpg"
    },
     {
        id: 3,
      title : "Fact Check",
      matter: "To Check spreading info is real or fake",
       imgname : "fact1.png"
    },
      {
        id: 4,
      title : "Trending",
      matter: "To check what's trending",
      imgname : "trend.jpg", 
    },
      {
        id: 5,
      title : "Safe Chat",
      matter: "To Chat with people in groups without abuse words",
      imgname : "group.jpg",
    },
      {
        id: 6,
      title : "AI Chatbot",
      matter: "To get assistance of gemini chat bot",
      imgname : "chatbot.jpg",
    },
      {
        id: 7,
      title : "Complaint portal",
      matter: "To file a complaint to cybercrime office",
      imgname : "complaint.jpg",
    },
  ]
  return (
    <div className="homes-main">
      <Images />
      <div className="home-faq">

        {features.map((item, index) => (
          
          <div key={index} className="home-censor">
            <div className="home-censor-text">
            <h3> { item.title } </h3>
            <div className="home-censor-tdiv">
            <p> {item.matter} </p><p className="home-censor-btn" onClick={()=>{sendData( item.id )}}>Click here</p>
            </div>
            </div>
            <div className="home-feat-img" style={{ backgroundImage: `url(assets/${item.imgname})` }}  >
            </div>
        </div>
      ))}

        
        
        <FAQ faqdata={CyberFaqData} who={"Cyberbullying"} />
      </div>
    </div>
  );
}

export default Homecomp;
