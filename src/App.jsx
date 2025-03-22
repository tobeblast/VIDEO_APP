import { useState } from 'react'
import { HeaderSection } from "./component/HeaderSection.jsx";
import { MiddleSection } from "./component/MiddleSection.jsx";
import { FooterSection } from "./component/FooterSection.jsx";


export default function App() {

  return (
    <>
      <HeaderSection/>
      <MiddleSection/>
      <FooterSection/>
    </>
  )
}

