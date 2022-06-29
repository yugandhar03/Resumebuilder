import React from 'react'
import ResumePreview1 from '../components/ResumePicker/ResumePreview1';
import ResumePreview2 from '../components/ResumePicker/ResumePreview';
import ResumePreview3 from '../components/ResumePicker/ResumePreview2';
import ResumePreview4 from '../components/ResumePicker/ResumePreview3';
import { useLocation } from "react-router-dom"

function ResumeSelect() {
    let { state } = useLocation();
    switch (state?.id) {
        case "ResumePreview1":
            return <ResumePreview1 />
        case "ResumePreview2":
            return <ResumePreview2 />
        case "ResumePreview3":
            return <ResumePreview3 />
        case "ResumePreview4":
            return <ResumePreview4 />
        default:
            return <ResumePreview3 />
    }
}

export default ResumeSelect