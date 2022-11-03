import React from 'react'

import pic1 from './ac1.jpeg'

import picx from './tour.png'
import picy from './fee.png'
import picz from './brochure.png'

import picv from './vjit.png'

import pico from './or.png'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import picvm from './vision.jpg'
import picvm1 from './mission.jpg'

import picqp from './quality-policy.jpg'

import picg1 from './goal-1.jpg'
import picg2 from './goal-2.jpg'


function About(){
    return(
        <>
                
        <h1 className='text-success'>About Us</h1>
       


<div className='container-fluid'>
<div className='row'>
         <div className='col-md-2'>















</div>

                                           
         <div className='col-md-10'>
         <img src={pic1} className="img-fluid  " alt=""/>
         </div>

</div> 
</div>
        <div class="row">
  <div class="col-2">
    <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
      <a class="p-1 rounded" href="#simple-list-item-1">Overview</a>
      <a class="p-1 rounded" href="#simple-list-item-2">Organogram</a>
      <a class="p-1 rounded" href="#simple-list-item-3">Vision & Mission</a>
      <a class="p-1 rounded" href="#simple-list-item-4">Quality Policy</a>
      <a class="p-1 rounded" href="#simple-list-item-5">Core Values</a>
      <a class="p-1 rounded" href="#simple-list-item-6">Goals</a>

    </div>
  </div>
  <div class="col-10">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="simple-list-item-1" className='text-danger'>Overview</h4>
      <h4>Vidya Jyothi<br/>
A light house of knowledge</h4>
       <p >
Vidya Jyothi Institute of Technology was established in 1998 by Vidya Jyothi <br/>
Educational Society created by a group of committed academicians and<br/> enterprising educationists. VJIT quickly won the confidence of the parent <br/>community and the students to become one of the select destinations for <br/>future engineers. Soon the lamp of knowledge began to spread its radiance <br/>far and wide. The institute is committed to adopt the changes in Engineering<br/> Education and strongly believes in and strives to strengthen the Technical<br/> Education. The highest quality of VJIT’s academics is mirrored in the<br/> consistent 95% academic results. The institution registers an average of 82% <br/> placements for eligible students.        </p>
      <h4 id="simple-list-item-2" className='text-danger'>Organogram</h4>
      <img src={pico} className="img-fluid  " alt=""/>
      <h4 id="simple-list-item-3" className='text-danger'>Vision & Mission</h4>
      <div className='container-fluid'>
            <div className='row'>
                                         <div className='col-md-4 '>
                                           <br/>
                                            <img src={picvm} className="img-fluid  " alt=""/>
                                            <ul>
                                            <li> To develop into a reputed Institution at National and International level in Engineering, Technology and Management by generation and dissemination of knowledge through intellectual, cultural and ethical efforts with human values.</li>
                                            <li> To foster Scientific temper in promoting the world class professional and technical expertise. </li>
                                            </ul>
                                            </div>

                                           
                                            <div className='col-md-4'>
                                                <br/>
                                            <img src={picvm1} className="img-fluid  " alt=""/>
                                            <ul>
                                            <li> To create state-of-the-art infrastructure facilities for optimization of knowledge acquisition.</li>
                                            <li> To nurture the students holistically and make them competent to excel in the global scenario. </li>
                                            <li> To promote R&D and consultancy through strong industry-institute interaction to address the societal problems. </li>
                                            </ul>
                                            </div>
                </div>
        </div>          
      <h4 id="simple-list-item-4" className='text-danger'>Quality Policy</h4>
     <img src={picqp} class="rounded float-end" alt="..."/>
     <p>To ensure high standards to educate, enrich and excel in imparting professional education, by top-quality-faculty who endeavors to mould the students into socially responsible professionals through creative team-work, innovation and research.</p>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
      <h4 id="simple-list-item-5" className='text-danger'>Core Values</h4>
                                            <p>Students seeking admission and trust of their parents are the primary reasons we exist as an Institution.</p>
                                            <h6>Our core values are:</h6>
                                           <ul>
                                            <li> Integrity:All the activities should be conducted in an ethical manner. Research and teaching shall be carried out in an environment of academic freedom and honesty.</li>
                                            <li> Accountability:The roles and responsibilities are assigned and people are held accountable for their deeds. We feel our liability towards the society and our actions add values to the Institute. </li>
                                            <li>Responsibility:Everybody in the Institute is expected to discharge his/her duties with due responsibility. </li>
                                            <li> Transparency:The general records of maximum aspects of the functioning are maintained online to encourage transparency. </li>
                                            <li> Respect of Individual:While carrying out the interactions at all levels, the dignity and respect of an individual is observed. </li>
                                            <li> Faculty Empowerment: Institute promotes and encourages faculty in their individual academic development and provides scope for enhancement in their participation in general governance. </li>
                                            <li> Service to Nation: Institute is committed to developing the skilled manpower to serve the Nation.</li>
                                            <li> Environmental stewardship: Committed in practicing green technologies for sustainable development of the Nation.</li>
                                         </ul>
        <h4 id="simple-list-item-5" className='text-danger'>Goals</h4>
        <div className='container-fluid'>
            <div className='row'>
                                         <div className='col-md-4 '>
                                           <br/>
                                            <img src={picg1} className="img-fluid  " alt=""/>
                                            <h4>Short-term Goals</h4>
                                            <ul>
                                            <li> To start industry driven P.G. Programmes in various disciplines.</li>
                                            <li> To have MOU with Universities, R & D Institutions and industries to nucleate Research Centre. </li>
                                            <li> To provide consultancy & testing facilities. </li>
                                            <li> To develop into an autonomous Institution. </li>

                                            </ul>
                                            </div>

                                           
                                            <div className='col-md-4'>
                                                <br/>
                                            <img src={picg2} className="img-fluid  " alt=""/>
                                            <h4>Long-term Goals</h4>
                                            <ul>
                                            <li> To develop as a top ranking Institution in the country.</li>
                                            <li>To have MOU’s with Universities and R & D Institution at international levels. </li>
                                            <li>To develop the institution into a Deemed University. </li>
                                            </ul>
                                            </div>
                </div>
        </div>         
    </div>
  </div>
</div>





















        <br/>
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
export default About