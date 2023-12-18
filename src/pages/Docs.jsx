import React from 'react'
import SideBarDocs from '../components/shared/SideBarDocs'
import { Route, Routes } from "react-router-dom";
import DocHome from '../components/docs/DocHome';

function Docs() {
    return (
        <section className='flex min-h-screen'>
            <SideBarDocs />
            <div>
                <Routes>
                    <Route exact path="/" element={<DocHome />} />
                </Routes>
            </div>
        </section>
    )
}

export default Docs