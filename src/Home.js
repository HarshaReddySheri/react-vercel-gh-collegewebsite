import React from 'react'

import pic1 from './ac1.jpeg'

import picx from './tour.png'
import picy from './fee.png'
import picz from './brochure.png'

import picv from './vjit.png'

import piccl1 from './canteen.jpg'
import piccl2 from './admissions-infra-health-1.jpg'
import piccl3 from './admissions-infra-library.jpg'
import piccl4 from './admissions-infra-sports.jpg'
import piccl5 from './admissions-infra-hall.jpg'
import piccl6 from './Readers.jpg'


function Home(){
    return(
         <>
        <img src={pic1} className="img-fluid  " alt=""/>
         <h1 className='text-success'>Home</h1>
     <div >
        <h5 className='text-danger'>Welcome to Vidya Jyothi Institute of Technology</h5>
        <h2 >Education Beyond Syllabus & Knowledge</h2>
        <h5 className='text-danger'>-----------</h5>
        <p>Vidya Jyothi Institute of Technology was established in 1998 by Vidya Jyothi Educational Society created by a group <br/>of committed academicians and enterprising educationists. VJIT quickly won the confidence of the parent community<br/> and the students to become one of the select destinations for future engineers. Soon the lamp of knowledge began <br/>to spread its radiance far and wide. The institute is committed to adopt the changes in Engineering Education and <br/> strongly believes in and strives to strengthen the Technical Education.</p>
     </div>
         <hr/>
        <div className='container-fluid'>
 
            <div className='row text-center bg-light'>
                    <div className='col-md-12'>
                    <div className='row '>
                        <h1 >Programs Offered</h1>

                        <h5>With students in India seeking flexibility in course, VJIT offers the following acedemic programmes.</h5>
                        

                    <div className='col-md-4'>
                    <h2 className='text-primary '>Under Graduation</h2>
                    <br/>
                    <h5 className='text-danger'>B.Tech</h5>
                        <ul >
                      
                        <li><a href="https://vjit.ac.in/artificial-intelligence/" >  Artificial Intelligence </a> </li>

                        <li><a href="https://vjit.ac.in/artificial-intelligence-and-data-science/" >  Computer Science & Engineering (Data Science)</a> </li>

                        <li><a href="https://vjit.ac.in/cse/" > Computer Science & Engineering </a> </li>

                        <li><a href="https://vjit.ac.in/it/  " >   Information Technology </a> </li>

                        <li><a href="https://vjit.ac.in/ece/  " >Electronics & Communication Engineering </a> </li>

                        <li><a href="https://vjit.ac.in/eee/  " >  Electrical & Electronics Engineering</a> </li>

                        <li><a href="https://vjit.ac.in/civil/  " > Civil Engineering </a> </li>

                        <li><a href="https://vjit.ac.in/mech/  " >  Mechanical Engineering </a> </li>

                        <li><a href="https://vjit.ac.in/computer-science-engineeringai-ml/  " > Computer Science & Engineering(AI&ML) </a> </li>

                        <li><a href="https://vjit.ac.in/ai-ds/  " > AI & DS </a> </li>


                        </ul>
                    </div>

                    <div className='col-md-4'>
                   
                    <h2 className='text-primary '>Post Graduation</h2>
                    <br/>
                    <h5 className='text-danger'>M.Tech</h5>
                        <ul >
                        <li><a href="https://vjit.ac.in/cse/" > Computer Science & Engineering </a> </li>
                        <li><a href="https://vjit.ac.in/civil/" >Structural Engineering</a> </li>
                        <li><a href="https://vjit.ac.in/eee/  " > Electrical Power System</a> </li>
                        <li><a href="https://vjit.ac.in/ece/  " >VLSI Design</a> </li>
                        <li><a href="https://vjit.ac.in/ece/  " >Embedded Systems</a> </li>
                        <li><a href="https://vjit.ac.in/mech/  " > CAD/CAM </a> </li>
                        </ul>
                    
                    </div>

                    
                    <div className='col-md-4'>
                    <h2 className='text-primary'>Management</h2>
                    <br/>
                    <h5 className='text-danger'>MBA</h5>
                        <ul >
                        <li><a href="https://vjit.ac.in/mba/" >Finance Marketing </a> </li>
                        <li><a href="https://vjit.ac.in/mba/" >  Human Resource Management</a> </li>
                        <li><a href="https://vjit.ac.in/mba/" >  Entrepreneurship</a> </li>
                        </ul>
                   
                    </div>

                    </div>
                    </div>
            </div>
            </div>

        <hr/>
        <hr/>
        <div className='container-fluid'>
 
            <div className='row text-center '>
                    <div className='col-md-12'>
                    <div className='row '>
                        <h1 >Campus Life</h1>

                    <div className='col-md-2'>
                    <img src={piccl1} className="img-fluid rounded" alt=""/>
                    <h2><a href="https://vjit.ac.in/campus-life/campus-facilities/#foodcourt" > Canteen </a> </h2>

                    </div>

                    <div className='col-md-2'>
                    <img src={piccl2} className="img-fluid rounded" alt=""/>
                  <h2>  <a href="https://vjit.ac.in/campus-life/campus-facilities/#foodcourt" > Health Centre </a> </h2>

                    </div>
                    <div className='col-md-2'>
                    <img src={piccl3} className="img-fluid rounded" alt=""/>
                    <h2>  <a href="https://vjit.ac.in/about-us/infrastructure/#library" > Library </a> </h2>

                    </div>
                    <div className='col-md-2'>
                    <img src={piccl4} className="img-fluid rounded" alt=""/>
                    <h2>  <a href="https://vjit.ac.in/campus-life/sports/" >Sports </a> </h2>

                    </div>
                    <div className='col-md-2'>
                    <img src={piccl5} className="img-fluid rounded" alt=""/>
                    <h2>  <a href="https://vjit.ac.in/about-us/infrastructure/#conferencehall" > Auditorium </a> </h2>

                    </div>
                    <div className='col-md-2'>
                    <img src={piccl6} className="img-fluid rounded" alt=""/>
                    <h2>  <a href="https://vjit.ac.in/campus-life/campus-facilities/#foodcourt" >Readers </a> </h2>

                    </div>
                    </div>









                      </div>
                      </div>
                      </div>

        <hr/>
       
       <br/>
        <div className='container-fluid'>
 
        <div className='row bg-dark'>
                    
                    <h1>1</h1>
                    <div className='col-md-4 '>
                      <img src={picx} className="img-fluid rounded" alt=""/>
                      
                      <div className='row text-warning'>
                                            <div className='col-md-6'>
                                                <br/>
                                            <a href ="https://vjit.ac.in/wp-content/uploads/2022/07/WhatsApp-Video-2022-07-07-at-2.57.40-PM.mp4"><img src={picv} className="img-fluid rounded" alt=""/> </a>
                                            <br/><br/>
                                            <h6>Aziznagar Gate,</h6>
                                            <h6>Chilkur Road,</h6> 
                                            <h6>Hyderabad- 500075,</h6> 
                                            <h6>Telangana, India.</h6>
                                            <h6> 73 73 637 637</h6>
                                            <h6> info@vjit.ac.in</h6>
                                            </div>
                      </div>
                   </div>
                    
                    
                   <div className='col-md-4 '>
                    <img src={picy} className="img-fluid rounded" alt=""/>
                    <div className='row text-warning'>
                                            <div className='col-md-6'>
                                            <br/>
                                                    <h4>VJIT Hub</h4>
                                                    <h6>---------------------------------</h6>
                                                    <h6>CartWheel</h6>
                                                    <h6>Media</h6>
                                                    <h6>Gallery</h6>
                                                    <h6>Alumni</h6>
                                                    <h6>Careers</h6>
                                                    <h6>Learning Resources</h6>
                                                    <h6>Coursera</h6>
                                            
                                            </div>

                                           
                                            <div className='col-md-6'>
                                                <br/>
                                            <h4>VJIT Logins</h4>
                                            <h6>---------------------------------</h6>
                                            <h6>Autonomous Login</h6>
                                            <h6>Email Login</h6>
                                            <h6>Contact</h6>
                                            <h6> Finance Committee</h6>
                                            <h6>HR Policy</h6>
                                            <h6>Academic Audit Forms</h6>
                                            <h6>RTI Application</h6>
                                            <h6>Anti Ragging Policy</h6>
                                            <h6>Facilities Feedback</h6>
                                            
                                            </div>
                        </div>
                    </div>  
                    
                    <div className='col-md-4 '>
                    <img src={picz} className="img-fluid rounded" alt=""/>
                    <div className='row text-warning'>
                                            <div className='col-md-6'>
                                                <br/>
                                            <h4>Quick Links</h4>
                                            <h6>---------------------------------</h6>
                                            <h6>NAAC SSR</h6>
                                            <h6>Autonomous</h6>
                                            <h6>ARIIA</h6>
                                            <h6>NIRF</h6>
                                            <h6>IQAC</h6>
                                            
                                            </div>

                                           
                                            <div className='col-md-6'>
                                            <br/>
                                            <h4>VJIT Cells</h4>
                                            <h6>---------------------------------</h6>
                                            <h6>Portal for Grievance Cell</h6>
                                            <h6>Women Grievance Redressal</h6>
                                            <h6>Women Empowerment Cell</h6>
                                            <h6>Grievances Redressal Cell</h6>
                                            <h6>RED Cell</h6>
                                            <h6>ED Cell</h6>
                                            <h6>MHRD – IIC</h6>
                                            <h6>NISP</h6>
                                            <h6>IPR</h6>
                                            <h6>NSS</h6>
                                            
                                            </div>
                        </div>
                    </div>   
                    <h6 className="text-warning">------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h6>
                    <h6 className="text-warning">Copyright © 2022. Vidya Jyothi Institute of Technology. All Right Reserved</h6>
        </div>
        </div>  

    





         </>

    )
}
export default Home