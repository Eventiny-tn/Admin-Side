<template>
  <div>
    <div id="throbber" style="display:none; min-height:120px;"></div>
    <div id="noty-holder"></div>
    <div id="wrapper">
      <!-- Navigation -->
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <!-- Top Menu Items -->
        <ul class="nav navbar-right top-nav">
          <li class="dropdown" id="option">
            <span class="option"
              ><span class="label label-success bg-success">1</span>
              <i class="bell outline icon"> </i>
            </span>
            <div class="dropdown-content">
              <div class="ui very relaxed list">
                <div class="item">
                  <img
                    class="ui avatar image"
                    src="https://www.hip-hop.tn/persons/16.jpg"
                  />
                  <div class="content">
                    <a class="header">Daniel Louise</a>
                    <div class="description">
                      Last seen watching
                      <a><b>Arrested Development</b></a> just now.
                    </div>
                  </div>
                </div>
              </div>
              <a href="#">See All notifications</a>
            </div>
          </li>
          <li class="dropdown" id="option">
            <span class="option">
              Options <i class="chevron down icon"> </i>
            </span>
            <div class="dropdown-content">
              <a @click.prevent="settingsView()"
                ><i class="fa fa-fw fa-user"></i> Edit Profile</a
              >
              <div></div>

              <a @click.prevent="logout()"
                ><i class="fa fa-fw fa-power-off"></i> Logout</a
              >
              <div></div>
              <a @click.prevent="settingsView()"
                ><i class="fa fa-fw fa-cog"></i>Password</a
              >
            </div>
          </li>
        </ul>
        <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav side-nav">
            <li>
              <div class="user-panel">
                <div class="pull-left image">
                  <img
                    src="https://i1.sndcdn.com/artworks-000205545703-y08l8k-t500x500.jpg"
                    class="rounded-circle"
                    alt="User Image"
                  />
                </div>
                <div class="pull-left info">
                  <p>Admin</p>
                  <a href="#"
                    ><i class="fa fa-circle text-success"></i> Online</a
                  >
                </div>
              </div>
            </li>
            <li @click.prevent="pendingRequestsView()">
              <a><i class="ui briefcase icon"></i>Pending Requests</a>
            </li>
            <li @click.prevent="userListView()">
              <a><i class="ui briefcase icon"></i>Users List</a>
            </li>
            <li @click.prevent="settingsView()">
              <a><i class="fa fa-fw fa fa-question-circle"></i>Settings</a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </nav>

      <div id="page-wrapper">
        <div class="container-fluid">
          <!-- Page Heading -->
          <div class="row" id="main">
            <div class="col-sm-12 col-md-12 well" id="content">
              <div v-if="view === 0">
                <PendingRequests :logout="logout" />
              </div>
              <div v-if="view === 1">
                <UsersList :logout="logout" />
              </div>
              <div v-if="view === 2">
                <Setting :logout="logout" />
              </div>
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->
  </div>
</template>
<script>
import UsersList from "./UsersList.vue";
import PendingRequests from "./PendingRequests.vue";
import Setting from "./Setting.vue";
export default {
  name: "AdminDashboard",
  components: {
    PendingRequests,
    UsersList,
    Setting,
  },
  data() {
    return {
      view: 0,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("isLogged");
      this.$router.push("/");
    },
    pendingRequestsView() {
      this.$data.view = 0;
    },
    userListView() {
      this.$data.view = 1;
    },
    settingsView() {
      this.$data.view = 2;
    },
  },
};
</script>
<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700");
@media (min-width: 768px) {
  body {
    font-size: 14px;
    color: #333;
    list-style: 26px;
    font-family: "Roboto", sans-serif;
  }
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.sidebar {
  width: 220px;
  background-color: #000;
  transition: all 0.5s ease-in-out;
}
.bg-defoult {
  background-color: #222;
}
.sidebar ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
.sidebar li a,
.sidebar li a.collapsed.active {
  display: block;
  padding: 8px 12px;
  color: #fff;
  border-left: 0px solid #dedede;
  text-decoration: none;
}
.sidebar li a.active {
  background-color: #000;
  border-left: 5px solid #dedede;
  transition: all 0.5s ease-in-out;
}
.sidebar li a:hover {
  background-color: #000 !important;
}
.sidebar li a i {
  padding-right: 5px;
}
.sidebar ul li .sub-menu li a {
  position: relative;
}
.sidebar ul li .sub-menu li a:before {
  font-family: FontAwesome;
  content: "\f105";
  display: inline-block;
  padding-left: 0px;
  padding-right: 10px;
  vertical-align: middle;
}
.sidebar ul li .sub-menu li a:hover:after {
  content: "";
  position: absolute;
  left: -5px;
  top: 0;
  width: 5px;
  background-color: #111;
  height: 100%;
}
.sidebar ul li .sub-menu li a:hover {
  background-color: #222;
  padding-left: 20px;
  transition: all 0.5s ease-in-out;
}
.sub-menu {
  border-left: 5px solid #dedede;
}
.sidebar li a .nav-label,
.sidebar li a .nav-label + span {
  transition: all 0.5s ease-in-out;
}

.sidebar.fliph li a .nav-label,
.sidebar.fliph li a .nav-label + span {
  display: none;
  transition: all 0.5s ease-in-out;
}
.sidebar.fliph {
  width: 42px;
  transition: all 0.5s ease-in-out;
}

.sidebar.fliph li {
  position: relative;
}
.sidebar.fliph .sub-menu {
  position: absolute;
  left: 39px;
  top: 0;
  background-color: #222;
  width: 150px;
  z-index: 100;
}
/**** */
.header .navbar-light .navbar-nav .nav-link {
  color: #fff;
}
.fliph .user-panel {
  display: none;
}
.header .navbar-light .navbar-nav .nav-link:hover,
.header .navbar-light .navbar-nav .nav-link:focus {
  background: rgba(0, 0, 0, 0.1);
  color: #f6f6f6;
}
.header .fa.fa-fw.fa-bars {
  color: #fff;
}
.header .navbar-light .navbar-nav .nav-link {
  color: #fff;
  padding: 10px 20px;
  position: relative;
}
.header li > a > .label {
  position: absolute;
  top: 9px;
  right: 7px;
  text-align: center;
  font-size: 9px;
  padding: 2px 3px;
  line-height: 0.9;
  background-color: #333;
  border-radius: 0.25em;
}
.header li > a:after {
  display: none;
}

.header-ul {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #ffffff;
  padding: 7px 10px;
  border-bottom: 1px solid #f4f4f4;
  color: #333;
  font-size: 14px;
}

.navbar-nav > .notifications-menu > .dropdown-menu,
.navbar-nav > .messages-menu > .dropdown-menu,
.navbar-nav > .tasks-menu > .dropdown-menu {
  width: 280px;
  padding: 0 0 0 0;
  margin: 0;
  top: 100%;
}
.navbar-nav > .messages-menu > .dropdown-menu li .menu > li > a > div > img {
  margin: auto 10px auto auto;
  width: 40px;
  height: 40px;
}
.navbar-nav > .messages-menu > .dropdown-menu li .menu > li > a,
.navbar-nav > .notifications-menu > .dropdown-menu li .menu > li > a {
  margin: 0;
  padding: 10px 10px;
  display: block;
  white-space: nowrap;
  border-bottom: 1px solid #f4f4f4;
}
.navbar-right {
  margin-right: 60px;
}
.navbar-nav > .messages-menu > .dropdown-menu li .menu > li > a > h4 {
  padding: 0;
  margin: 0 0 0 45px;
  color: #333;
  font-size: 15px;
  position: relative;
}
.navbar-nav > .messages-menu > .dropdown-menu li .menu > li > a > p {
  margin: 0 0 0 45px;
  font-size: 12px;
  color: #888888;
}

.footer-ul a {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 12px;
  background-color: #fff;
  padding: 7px 10px;
  border-bottom: 1px solid #eeeeee;
  color: #333;
  display: block;
}
a:hover {
  text-decoration: none;
}
.dropdown-menu-over .menu {
  max-height: 200px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: hidden;
}
.option {
  display: block;
  margin: 5px;
  background-color: none;
  color: white;
}
#option {
  margin-top: 18px;
}
.navbar-nav > .notifications-menu > .dropdown-menu li .menu > li > a {
  color: #444444;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
}
.navbar-nav
  > .notifications-menu
  > .dropdown-menu
  li
  .menu
  > li
  > a
  > .glyphicon,
.navbar-nav > .notifications-menu > .dropdown-menu li .menu > li > a > .fa,
.navbar-nav > .notifications-menu > .dropdown-menu li .menu > li > a > .ion {
  width: 20px;
}

a.navbar-brand {
  width: 165px;
}
.header .dropdown-menu {
  position: absolute;
  right: 0;
  left: auto;
  border-radius: 0px;
}
.user-panel {
  clear: left;
  display: block;
  float: left;
}
.user-panel > .image > img {
  width: 100%;
  max-width: 45px;
  height: auto;
}
.user-panel > .info,
.user-panel > .info > a {
  color: #fff;
}
.user-panel > .info > p {
  font-weight: 600;
  margin-bottom: 9px;
}
.user-panel {
  clear: left;
  display: block;
  float: left;
  width: 100%;
  margin-bottom: 15px;
  padding: 25px 15px;
  border-bottom: 1px solid;
}
.user-panel > .info {
  padding: 5px 5px 5px 15px;
  line-height: 1;
  position: absolute;
  left: 55px;
}

.fliph .user-panel {
  display: none;
}
#wrapper {
  padding-left: 0;
}
#main {
  margin-top: 5em;
}

#page-wrapper {
  width: 100%;
  padding: 0;
  background-color: #fff;
}

@media (min-width: 768px) {
  #wrapper {
    padding-left: 225px;
  }

  #page-wrapper {
    padding: 22px 10px;
  }
}
#content {
  display: block;
  justify-content: center;
}

/* Top Navigation */

.top-nav {
  padding: 0 15px;
}

.top-nav > li {
  display: inline-block;
}

.top-nav > li > a {
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 20px;
  color: #fff;
}

.top-nav > li > a:hover,
.top-nav > li > a:focus,
.top-nav > .open > a,
.top-nav > .open > a:hover,
.top-nav > .open > a:focus {
  color: #fff;
  background-color: #1a242f;
}
li {
  cursor: pointer;
}
.top-nav > .open > .dropdown-menu {
  float: left;
  position: absolute;
  margin-top: 0;
  /*border: 1px solid rgba(0,0,0,.15);*/
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}

.top-nav > .open > .dropdown-menu > li > a {
  white-space: normal;
}

/* Side Navigation */

@media (min-width: 768px) {
  .side-nav {
    position: fixed;
    top: 60px;
    left: 225px;
    width: 225px;
    margin-left: -225px;
    border: none;
    border-radius: 0;
    border-top: 1px rgba(0, 0, 0, 0.5) solid;
    overflow-y: auto;
    background-color: #222;
    /*background-color: #5A6B7D;*/
    bottom: 0;
    overflow-x: hidden;
    padding-bottom: 40px;
  }

  .side-nav > li > a {
    width: 225px;
    border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
  }

  .side-nav li a:hover,
  .side-nav li a:focus {
    outline: none;
    background-color: #1a242f !important;
  }
}

.side-nav > li > ul {
  padding: 0;
  border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
}

.side-nav > li > ul > li > a {
  display: block;
  padding: 10px 15px 10px 38px;
  text-decoration: none;
  /*color: #999;*/
  color: #fff;
}

.side-nav > li > ul > li > a:hover {
  color: #fff;
}

.navbar .nav > li > a > .label {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 14px;
  right: 6px;
  font-size: 10px;
  font-weight: normal;
  min-width: 15px;
  min-height: 15px;
  line-height: 1em;
  text-align: center;
  padding: 2px;
}

.navbar .nav > li > a:hover > .label {
  top: 10px;
}

.navbar-brand {
  padding: 5px 15px;
}</style
>>
