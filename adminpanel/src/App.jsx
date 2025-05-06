import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import React from 'react'
import AddFood from './pages/AddFood/AddFood'
import ListFood from './pages/ListFood/ListFood'
import Orders from './pages/Orders/Orders'
import Sidebar from './components/SideBar/Sidebar'
import Menubar from './components/Menubar/Menubar'
import { ToastContainer } from 'react-toastify';

function App() {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    }

  return (
    <div className="d-flex" id="wrapper">
            <Sidebar sidebarVisible = {sidebarVisible}/>
            <div id="page-content-wrapper">
                <Menubar toggleSidebar = {toggleSidebar}/>
                <ToastContainer />
                <div className="container-fluid">
                    <Routes>
                        <Route path="/add" element={<AddFood />} />
                        <Route path="/list" element={<ListFood />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/" element={<ListFood />} />
                    </Routes>
                </div>
            </div>
        </div>
  )
}

export default App