import { BusinessCenter, LocationOn, School } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./profilecard.css"

function ProfileCard() {
    const [repo , setRepo] = useState([]);
    const [exp , setExp] = useState([]);
    const [study , setStudy] = useState([]);
//     // const getData = () =>{
//     Axios.post('https://api.meetworks.in/users/get_unique_jobseeker_profile', {
//         jobseeker_id: "614b410c2c4b197356a37f18",
//       })
//       .then( (response)=> {
//         const myRepo=response.data;
//         setRepo(myRepo);
//         console.log(myRepo)
//       })
useEffect(()=>{

    async function getData(){
      const res = await axios.post('https://api.meetworks.in/users/get_unique_jobseeker_profile', {
        jobseeker_id: "614b410c2c4b197356a37f18",
      });
      setRepo(res.data[0]);
      setExp(res.data[0].user_experiences[0]);
      setStudy(res.data[0].user_qualifications[0]);
      console.log(repo , exp , study);
    }
   getData();
  } , [1] )
    // };
    // useEffect(()=> getData(),[]);
    // https://meet-works-bucket.s3-us-west-2.amazonaws.com/1632825680812
    return (
        <>
        <div className='profile-card-container' >
            <div className="image-emp">
          <img src={repo.user_image_url} alt="Error 404" className="emp-image" />
            </div>
            <div className="emp-info">
                <div className="name-location">
                    <h4 className="name">{repo.jobseeker_name}</h4>
                    <div className="verticalline"></div>
                    <div className="location">
                        <p><LocationOn/> {repo.area}, {repo.distric}</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="heading-exp">
                        <div className="exp-title spaces"><BusinessCenter/>   EXPERIENCE</div>
                        <div className="experience spaces">{repo.total_months_exp} Month EXP</div>
                    </div>
                    <div className="details">
                        <div className="upper-detail">  
                        <div className="logo-name">
                            <img src={exp.company_logo} alt="error 404" className='comp-logo'/>
                            <div>
                            <div className="position">{exp.user_post}</div>
                            <p className="company-name">{exp.company_name}</p>
                            </div>
                        
                        </div>
                        <div className="dates">{exp.company_starting_date}-{exp.company_ending_date}</div>
                        </div>
                        <p className="desc">{exp.role_discription}</p>
                    </div>
                </div>
                <div className="education">
                <div className="heading-exp">
                        <div className="exp-title spaces edu-title "><School/> EDUCATION</div>
                    </div>
                    <div className="education-name">
                            <div className='edu'>
                            <p className="Branch">{study.course_name}</p>
                            <p className="college">{study.user_college} | {study.user_passing_year}</p>
                            </div>
                        </div>
                </div>
            </div>
        <div className="line">
            <div className="dark"></div>
            <div className="light"></div>
        </div>
        </div>
    </>
    ) 
}

export default ProfileCard
