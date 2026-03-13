import React from "react";
import Card from "./components/card";
import User from "./components/User";


const App = () => {

  const jobs = [
  {
    brandlogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "8 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "3 weeks ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$47/hr",
    location: "Mumbai, India"
  }
];

  return (
    <div className="parent">
      {jobs.map(function(elem){
        return <Card company = {elem.companyName} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} logo = {elem.brandlogo} dateposted ={elem.datePosted} />
      })}
    </div>
  );
};

export default App;
 