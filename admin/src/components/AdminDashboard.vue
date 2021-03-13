<template>
  <div class="home">
    <div class="container-fluid display-table">
      <div class="row display-table-row">
        <div
          class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
          id="navigation"
        >
          <div class="logo">
            <a hef="home.html"
              ><img
                src="https://www.logolynx.com/images/logolynx/39/39b0d0140b1c680414f3922529e95bc0.png"
                class="hidden-xs hidden-sm"
              />
              <img
                src="https://www.logolynx.com/images/logolynx/39/39b0d0140b1c680414f3922529e95bc0.png"
                class="visible-xs visible-sm circle-logo"
              />
            </a>
          </div>
          <div class="navi">
            <ul>
              <li class="active">
                <a href="#"
                  ><i class="fa fa-home" aria-hidden="true"></i
                  ><span class="hidden-xs hidden-sm">Home</span></a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-cog" aria-hidden="true"></i
                  ><span class="hidden-xs hidden-sm">Setting</span></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-10 col-sm-11 display-table-cell v-align">
          <!--<button type="button" class="slide-toggle">Slide Toggle</button> -->
          <div class="row">
            <header>
              <div class="col-md-7">
                <nav class="navbar-default pull-left">
                  <div class="navbar-header">
                    <button
                      type="button"
                      class="navbar-toggle collapsed"
                      data-toggle="offcanvas"
                      data-target="#side-menu"
                      aria-expanded="false"
                      @click="toggle()"
                    >
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                </nav>
                <div class="ui icon input">
                  <input type="text" placeholder="Search" id="search" />
                  <i class="circular search link icon"></i>
                </div>
              </div>
              <div class="col-md-5" id="notification-container">
                <div class="header-rightside">
                  <ul class="list-inline header-top pull-right">
                    <li class="hidden-xs">
                      <a class="add-project" @click="adminLogout()">LOGOUT</a>
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-envelope" aria-hidden="true"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#" class="icon-info">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <span class="label label-primary">3</span>
                      </a>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                        ><i class="ui tasks icon"></i>> <b class="caret"></b
                      ></a>
                      <ul class="dropdown-menu">
                        <li>
                          <div class="navbar-content">
                            <span>admin</span>
                            <p class="text-muted small">
                              fakhri@test.com
                            </p>
                            <div class="divider"></div>
                            <a href="#" class="view btn-sm active"
                              >View Profile</a
                            >
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <div class="user-dashboard">
            <div id="user-dashboard" class="item">
              <div class="ui  small  circular image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlNJooLrcjz6ROLpzJ_PNgxr2pBRyfiRPPg&usqp=CAU"
                />
              </div>
              <div class="middle aligned content">
                <h1 class="ui top aligned  image">Admin</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 col-sm-5 col-xs-12 gutter">
                <div class="sales">
                  <h2>Pending Requests</h2>
                </div>
                <div>
                  <u>
                    <li v-for="(event, i) in events" :key="i">
                      <img
                        class="ui top aligned tiny image"
                        src="https://www.designevo.com/res/templates/thumb_small/colorful-fireworks-tube-and-festival.png"
                      />
                      <span>Event number: {{ 1 }}</span>
                      <div>
                        <button class="ui positive button">
                          Approve
                        </button>
                        <button class="ui negative button">
                          Decline
                        </button>
                      </div>
                      <div>
                        <div class="ui list">
                          <div class="item">
                            <img
                              class="ui avatar image"
                              src="https://www.vhv.rs/dpng/d/583-5831214_cartoon-avatar-png-download-image-gaming-logo-avatar.png"
                            />
                            <div class="content">
                              <a class="header">Fakhri</a>
                              <div class="description">
                                has been published
                                <a><b>New event </b></a> just now.
                              </div>
                            </div>
                            <div>
                              <a class="ui blue image label">
                                <img
                                  src="https://www.pinclipart.com/picdir/middle/289-2897938_discover-ideas-about-beast-logo-clipart.png"
                                />
                                Event
                                <div class="detail">New User</div>
                              </a>
                            </div>
                          </div>
                          <h12>See details</h12>
                        </div>
                      </div>
                      <div class="ui divider"></div>
                    </li>
                  </u>
                </div>
              </div>
              <div class="col-md-7 col-sm-7 col-xs-12 gutter">
                <div class="sales report">
                  <h2>Users List</h2>
                </div>
                <div>
                  <ul>
                    <li v-for="(event, i) in events" :key="i">
                      <div
                        class="ui middle aligned divided animated list"
                        id="users-list"
                      >
                        <div class="item">
                          <div class="right floated content">
                            <div class="ui negative button">Ban</div>
                          </div>
                          <img
                            class="ui avatar tiny image"
                            src="https://www.nopcommerce.com/images/thumbs/0005704_150.jpeg"
                          />
                          <div class="content">
                            event's username
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "AdminDashbord",
  props: {
    adminLogout: {
      type: Function,
    },
  },
  data() {
    return {
      events: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    toggle() {
      $("#navigation").toggleClass("hidden-xs");
    },
    toggleMenu() {},
  },
};
</script>

<style scoped>
.list {
  float: right !important;
  margin-top: -16% !important;
}
#users-list {
  float: none !important;
  margin-top: 0 !important;
}
h12 {
  margin-top: 10%;
  float: right;
  cursor: pointer;
  font-weight: bold;
}
h12:hover {
  color: red;
  text-decoration: underline;
}
a:focus,
a:hover,
a {
  outline: none;
  text-decoration: none;
}
li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.header-top i {
  font-size: 18px;
}
/*Home Page*/

.home {
  background: #f6f7fa;
}

#navigation {
  background: #0e1a35;
}

#navigation {
  padding: 0;
}

.display-table {
  display: table;
  padding: 0;
  height: 100%;
  width: 100%;
}

.display-table-row {
  display: table-row;
  height: 100%;
}

.display-table-cell {
  display: table-cell;
  float: none;
  height: 100%;
}

.v-align {
  vertical-align: top;
}
.logo img {
  max-width: 180px;
  padding: 16px 0 17px;
  width: 100%;
}

.header-top {
  margin: 0;
  padding-top: 8px;
}

.add-project {
  background: #5584ff none repeat scroll 0 0;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  padding: 5px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
}
.add-project:hover {
  background-color: aqua;
}
.icon-info {
  position: relative;
}
.navi i {
  font-size: 20px;
}
.label.label-primary {
  border-radius: 50%;
  font-size: 9px;
  left: 8px;
  position: absolute;
  top: -9px;
}

.icon-info .label {
  border: 2px solid #ffffff;
  font-weight: 500;
  padding: 3px 5px;
  text-align: center;
}

.header-top .dropdown-toggle {
  color: #0e1a35;
}

.header-top .dropdown-menu {
  border: medium none;
  left: -85px;
  padding: 17px;
}

.navbar-content > span {
  font-size: 13px;
  font-weight: 700;
}

.img-responsive {
  width: 100%;
}
#navigation {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

header {
  background: #ffffff none repeat scroll 0 0;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);
  display: inline-block !important;
  line-height: 23px;
  padding: 15px;
  transition: all 0.5s ease 0s;
  width: 100%;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.logo {
  text-align: center;
}

.navi a {
  border-bottom: 1px solid #0d172e;
  border-top: 1px solid #0d172e;
  color: #ffffff;
  display: block;
  font-size: 17px;
  font-weight: 500;
  padding: 28px 20px;
  text-decoration: none;
}

.navi i {
  margin-right: 15px;
  color: #5584ff;
}

.navi .active a {
  background: #122143;
  border-left: 5px solid #5584ff;
  padding-left: 15px;
}

.navi a:hover {
  background: #122143 none repeat scroll 0 0;
  border-left: 5px solid #5584ff;
  display: block;
  padding-left: 15px;
}

.navbar-default {
  background-color: #ffffff;
  border-color: #ffffff;
}

.navbar-toggle {
  border: none;
}

.navbar-default .navbar-toggle:focus,
.navbar-default .navbar-toggle:hover {
  background-color: rgba(0, 0, 0, 0);
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #0e1a35;
}
.user-dashboard {
  padding: 0 20px;
}
#user-dashboard {
  margin: 1%;
}

.user-dashboard h1 {
  color: #0e1a35;
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  padding: 21px 0;
}
.sales {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #d4d9e3;
  display: inline-block;
  padding: 15px;
  width: 100%;
}

@media only screen and (max-device-width: 1024px) {
  header .header-top li {
    padding-left: 20px !important;
    padding-right: 0;
  }
  header .logo img {
    max-width: 125px !important;
  }
}

@media only screen and (min-device-width: 900) and (max-device-width: 1024px) {
  .user-dashboard .header-top {
    padding-top: 5px;
  }
  .user-dashboard .header-rightside {
    display: inline-block;
    width: 100%;
  }
  .user-dashboard .header-rightside .header-top img {
    max-width: 41px !important;
  }
  .user-dashboard .sales button {
    font-size: 10px;
  }
  .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {
    font-size: 12px;
  }
  .user-dashboard .sales h2 {
    font-size: 15px;
  }
}
@media only screen and (min-device-width: 998px) and (max-device-width: 1350px) {
  #navigation .logo img {
    max-width: 130px;
    padding: 16px 0 17px;
    width: 100%;
  }
}
</style>
