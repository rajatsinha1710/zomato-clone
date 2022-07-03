import React from 'react'
// import { useState } from 'react'
import Banner from '../../components/Banner/banner'
// import Delivery from '../../components/Delivery/delivery'
// import Dining from '../../components/diningOut/dining'
import Footer from '../../components/footer/footer'
import Header from '../../components/header'
// import Night from '../../components/nightlife/night'
import Tab from '../../components/tabOption/Tab'


function Homepage() {
    // const[] = useState('Dining out')
    return (
    <div className="homepage">
    <Header/>
    <Banner/>
    <Tab/>
    {/* {getCorrectScreen(switchTab)} */}
    {/* select different tab */}
    <Footer/>
    </div>

    )

}
// const getCorrectScreen=(tab)=> {
//     switch(tab){
//         case "Delivery":
//             return <Delivery/>
//         case "Dining out":
//             return <Dining/>
//         case "NightLife":
//             return <Night/>
//         default:
//             return <Delivery/>
//     }
// }

export default Homepage