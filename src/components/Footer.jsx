/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit'

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <section className="">
        <MDBContainer className="text-center text-md-start">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img
                src="https://www.cendrol.com/static/media/logo.99e56fb9407ea2d610cafb6fa51b4838.svg"
                alt="cendrol-image"
                style={{ width: '200px', height: '100px' }}
              />
            </MDBCol>
            
            {/* Product and Useful links sections starts  */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase fw-bold mb-3">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  2D Floor Plan
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  3D Elevation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Structural Design
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dinning & Kitchen
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase fw-bold mb-3">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Quotation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Reviews
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            {/* Products and Useful links ends */}

            {/* Contact info section starts */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-2 mt-3">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2"/>
                Cendrol Construction Contracts PVT LTD 299-288, 3rd floor Outer
                Ring Rd, Jeewan Griha Colony, 2nd Phase, JP Nagar, Bangalore
                560076
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                sales@cendrol.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" href="https://wa.me/919741977477/" target="_blank"/> 974-197-7477
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

       {/* Contact info section ends */}

      {/* social media icons starts */}
      <MDBContainer className="pt-4 text-center">
        <section className="mb-4">
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.facebook.com/cendrolbuild"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fab fa-facebook-f" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://twitter.com/Cendrol_in"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fa-twitter" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.instagram.com/cendrolbuild/?igshid=s0tg7esmezjo"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fa-instagram" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.linkedin.com/company/cendrol/"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin" />
          </MDBBtn>
        </section>
      </MDBContainer>

      {/* social media icons ends */}

      {/* copyrights reserved starts */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © {new Date().getFullYear()}
        <a
          className="text-reset fw-bold"
          href="https://www.cendrol.com/"
          target="_blank"
        >
          &nbsp; www.cendrol.com
        </a>
        &nbsp; All rights reserved
      </div>
      {/* copyrights reserved ends */}
    </MDBFooter>
  )
}
