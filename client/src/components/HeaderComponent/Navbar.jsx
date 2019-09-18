import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    localStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    const firebaseId = localStorage.getItem('uid');
    return (
      <Row className="mt-4">
        <Col sm={{ size: 10, offset: 1 }}>
          <Nav tabs>
            <NavItem>
              <NavLink href="#" active>
                <i class="fas fa-home mr-2"></i>
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i class="fas fa-file-invoice-dollar mr-2"></i>Financials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i class="fas fa-wrench mr-2"></i>Work Tickets
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i class="far fa-calendar-alt mr-2"></i>Calendar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i class="fas fa-users mr-2"></i>Members
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i class="fas fa-users-cog mr-2"></i>Board
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" firebaseId={firebaseId} onClick={this.logoutUser} >
                <i class="fas fa-users-cog mr-2"></i>Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    );
  }
}

// class NavBar extends React.Component {
//   render() {
//     return (
//       <div class='title'>
//         <h1>Simple HOA</h1>
//         <div class='header'>
//           <ul class="headerButtons">
//             <li className="navButton"><Link to="/">Home</Link></li>
//             <li className="navButton"><Link to="/about">About</Link></li>
          //   <li className="navButton">
          //    {firebaseId && <Link to="#" onClick={this.logoutUser.bind(this)}>Logout</Link>}
          //   </li>
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }
export default withRouter(NavBar);
