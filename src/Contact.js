import React from 'react'
import pic from './abc.jpg'

import picx from './tour.png'
import picy from './fee.png'
import picz from './brochure.png'

import picv from './vjit.png'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
function Contact(){
    return(

         <>
          <div className='container-fluid'>
          <div className='row'>
                <div className='col-md-6'>
                 <h1 className='text-success' >Contact Us</h1>
         
                    <img src={pic} className="img-fluid  " alt=""/>
       
   <br/>
   <br/>
        <form>
            <input type= "text" placeholder="Enter Your Full Name" />
            <br/>
            <br/>
            <input type= "tel" placeholder="Phone Number"/>


            <input type= "email" placeholder="Email"/>
            <br/>
            <br/>
            <input type= "textarea cols=50 rows=10" placeholder="Enter Your Message"/>
            <br/>
            <br/>
            <input type="Submit" className="btn btn-success text-dark" placeholder='Submit Form' />
            
        </form>

              </div>
                                <div className='col-md-6'>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h3 className='text-success'>Address</h3>
                                        <h4>Vidya Jyothi Institute of Technology 
                                            Aziz Nagar Gate C.B. Post Hyderabad–500 075
                                            Telangana, India</h4>
                                            <br/>
                                            <br/>
                                            <div className='row'>
                                          <div className='col-md-6 '>
                                            <h3 className='text-success'>Phone</h3>
                                            <h4> 91-88888-99999</h4>
                                            <h4> 91-77777-99999</h4>
                                            <h4> 91-66666-99999</h4>
                                            </div>

                                           
                                            <div className='col-md-6 '>
                                            <h3 className='text-success'>Email</h3>
                                            <h4>info.vjit.ac.in</h4>
                                            </div>
                                            </div>                                 <div className='row'>
             
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
export default Contact