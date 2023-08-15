
import React from "react";

const Contact = () => {

  return (
    <>

      <div className="my-3 Heading">
        <h2 className="text-center ">Contact Us</h2>
      </div>
      <div className="container mt-4">
        <div className="col-md-6 col-10 mx-auto ">
          <form action="https://formspree.io/f/myyqeolr"
            method="POST">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" autoComplete="off" required id="exampleFormControlInput1" placeholder="Enter Your Name"
                name="fullname"

              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
              <input type="number" className="form-control" autoComplete="off" required id="exampleFormControlInput1" placeholder="Enter Your Phone Number"
                name="number"

              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" autoComplete="off" required id="exampleFormControlInput1" placeholder="Enter Your Email"
                name="email"

              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea placeholder="Message" autoComplete="off" required className="form-control" id="exampleFormControlTextarea1" rows="3"
                name="message"
              ></textarea>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-primary  mb-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;