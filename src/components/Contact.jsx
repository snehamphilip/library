import React from 'react'
import Nav from './Nav'

const Service = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter the Name' />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" placeholder='Enter the Email ID' />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Subject</label>
                                <input type="text" className="form-control" placeholder='Enter a Subject' />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="question" className="form-label">Message</label>
                                <br />
                                <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Enter your Message here..."></textarea>
                            </div>
                            <h5>Contact Us</h5>
                            <p>For any questions, feedback, or support, please contact us at:</p>
                            <p><strong>Email:</strong> <a href="mailto:support@libriconnect.com">support@libriconnect.com</a></p>
                            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                            <p><strong>Address:</strong> 123 Library Lane, Booktown, BK 12345</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
