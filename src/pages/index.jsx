import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HeaderButtom from "@/components/HeaderButtom"
import Main from "@/components/Main"
import Menu from "@/components/Menu"
import ProductAndServise from "@/components/ProductAndServise"
import { useState } from "react"

function Home() {
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal);
  return (
    <div className="wrapper">
      <Header setOpenModal={setOpenModal}/>
      <Menu openModal={openModal} setOpenModal={setOpenModal}/>
      <HeaderButtom />
      <Main />
      <ProductAndServise />
      <Footer />
    </div>
  )
}

export default Home
