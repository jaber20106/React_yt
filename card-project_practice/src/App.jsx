import React from 'react'
import Card from './components/Card'

const App = () => {

  const Cardsvalue = [
  {
    price: "$150/hr",
    title: "Senior Backend Engineer",
    arrow: "→",
    badge: "🔥",
    companyLogo: "Google",
    buttonText: "View"
  },
  {
    price: "$120/hr",
    title: "Frontend Developer",
    arrow: "→",
    badge: "",
    companyLogo: "Facebook",
    buttonText: "View"
  },
  {
    price: "$130/hr",
    title: "Fullstack Engineer",
    arrow: "→",
    badge: "🔥",
    companyLogo: "Amazon",
    buttonText: "View"
  },
  {
    price: "$110/hr",
    title: "UI/UX Designer",
    arrow: "→",
    badge: "",
    companyLogo: "Apple",
    buttonText: "View"
  },
  {
    price: "$140/hr",
    title: "DevOps Engineer",
    arrow: "→",
    badge: "🔥",
    companyLogo: "Microsoft",
    buttonText: "View"
  },
  {
    price: "$125/hr",
    title: "Data Scientist",
    arrow: "→",
    badge: "",
    companyLogo: "Netflix",
    buttonText: "View"
  },
  {
    price: "$135/hr",
    title: "Mobile App Developer",
    arrow: "→",
    badge: "🔥",
    companyLogo: "Uber",
    buttonText: "View"
  },
  {
    price: "$115/hr",
    title: "QA Engineer",
    arrow: "→",
    badge: "",
    companyLogo: "Airbnb",
    buttonText: "View"
  },
  {
    price: "$145/hr",
    title: "Cloud Architect",
    arrow: "→",
    badge: "🔥",
    companyLogo: "Tesla",
    buttonText: "View"
  },
  {
    price: "$100/hr",
    title: "Technical Writer",
    arrow: "→",
    badge: "",
    companyLogo: "LinkedIn",
    buttonText: "View"
  }
];
  return (
    <div className = "card-container">
      {Cardsvalue.map((elem, index) => (
  <Card
    key={index} // important for React
    price={elem.price}
    title={elem.title}
    arrow={elem.arrow}
    badge={elem.badge}
    companyLogo={elem.companyLogo}
    buttonText={elem.buttonText}
  />
))}
    </div>
  )
}

export default App
