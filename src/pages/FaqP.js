import React from 'react';
import Faq from "./Faq";
import { withAuth } from '../lib/AuthProvider';

function FaqP() {
    return (
        <div>
            <Faq />
        </div>
    )
}

export default withAuth(FaqP);
