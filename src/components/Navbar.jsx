/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit'

export default function Navbar() {
  const [showNavRight, setShowNavRight] = useState(false)
  return (
    <>
      <MDBNavbar sticky light bgColor="light" className="mr-1 p-0">
        <MDBContainer fluid>
          <MDBNavbarBrand href="https://www.cendrol.com/" target="_blank">
            <img
              src="https://miro.medium.com/fit/c/224/224/1*xd9Uiy1G43I3H5fZHWdhnA.png"
              alt="cendrol-image"
              style={{ width: '100px', height: '75px' }}
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="https://www.cendrol.com/"
                  target="_blank"
                >
                  Home
                </MDBNavbarLink>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="https://www.partner.cendrol.com/"
                  target="_blank"
                >
                  Features
                </MDBNavbarLink>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="https://www.youtube.com/channel/UCUpqY12z7-GlNroRG09nOSg"
                  target="_blank"
                >
                  More Info
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}
