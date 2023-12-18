import React from 'react'
import SideBarDocs from '../components/shared/SideBarDocs'
import { Route, Routes } from "react-router-dom";
import DocumentHome from '../components/docs/documentHome';

function Docs() {
    return (
        <section className='flex min-h-screen'>
            <SideBarDocs />
            <div>
                <Routes>
                    <Route exact path="/" element={<DocumentHome />} />
                </Routes>
            </div>
        </section>
    )
}

export default Docs