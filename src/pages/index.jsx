import Layout from "./Layout.jsx";

import Homepage from "./Homepage";

import StandingSeamRoofs from "./StandingSeamRoofs";

import SeamlessGutters from "./SeamlessGutters";

import Quote from "./Quote";

import ReferralRewards from "./ReferralRewards";

import Insurance from "./Insurance";

import Financing from "./Financing";

import CopperSystems from "./CopperSystems";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Homepage: Homepage,
    
    StandingSeamRoofs: StandingSeamRoofs,
    
    SeamlessGutters: SeamlessGutters,
    
    Quote: Quote,
    
    ReferralRewards: ReferralRewards,
    
    Insurance: Insurance,
    
    Financing: Financing,
    
    CopperSystems: CopperSystems,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Homepage />} />
                
                
                <Route path="/Homepage" element={<Homepage />} />
                
                <Route path="/StandingSeamRoofs" element={<StandingSeamRoofs />} />
                
                <Route path="/SeamlessGutters" element={<SeamlessGutters />} />
                
                <Route path="/Quote" element={<Quote />} />
                
                <Route path="/ReferralRewards" element={<ReferralRewards />} />
                
                <Route path="/Insurance" element={<Insurance />} />
                
                <Route path="/Financing" element={<Financing />} />
                
                <Route path="/CopperSystems" element={<CopperSystems />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}