import React from 'react'
import FeaturesCard from './FeaturesCard'
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { MdCleaningServices } from "react-icons/md";
import { FaMicroscope } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

function FeatureSection() {
  return (
    <>
            <section id="features" className="features-section">
            <h2>What You Can Give Feedback On</h2>
            <div class="features-grid">
               <FeaturesCard title="Faculty" description="Share your thoughts about teaching methods and faculty interaction" icon={<FaChalkboardTeacher />}/>
               <FeaturesCard title="Infrastructure" description="Share your thoughts about infrastructure and facilities"icon={<TbBuildingBank/>}/>
               <FeaturesCard title="Cleanliness" description="Share your thoughts about cleanliness and hygiene" icon={<MdCleaningServices/>}/>
               <FeaturesCard title="Laboratory" description="Share your thoughts about laboratory and equipment" icon={<FaMicroscope/>}/>
               <FeaturesCard title="Food Services" description="Share your thoughts about food and beverages" icon={<FaUtensils/>}/>
               <FeaturesCard title="Other Services" description="Share your thoughts about other services"icon={<FaRegQuestionCircle/>}/>
            </div>
        </section>
    </>
  )
}

export default FeatureSection