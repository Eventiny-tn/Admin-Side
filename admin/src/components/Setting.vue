<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul class="nav nav-pills nav-stacked admin-menu">
          <li class="active">
            <a href="" data-target-id="profile"
              ><i class="glyphicon glyphicon-user"></i> Profile</a
            >
          </li>
          <li>
            <a href="" data-target-id="change-password"
              ><i class="glyphicon glyphicon-lock"></i> Change Password</a
            >
          </li>
        </ul>
      </div>

      <div class="col-md-9  admin-content" id="profile">
        <div class="ui unstackable items">
          <div class="item">
            <div class="column">
              <div class="ui fluid small image">
                <div class="ui link cards">
                  <div class="card">
                    <div class="image">
                      <img :src="adminInfo.imageUrl" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="content">
                  <a class="header">{{ adminInfo.username }}</a>
                  <div class="meta">
                    <div class="ui list">
                      <div class="item">
                        <i class="mail icon"></i>
                        <div class="content">
                          <a href="">{{ adminInfo.email }}</a>
                        </div>
                      </div>
                    </div>
                    <span>Bio</span>
                  </div>
                  <div class="description">
                    <p></p>
                    <div class="ui list">
                      <div class="item">
                        <i class="map marker icon"></i>
                        <div class="content">
                          <a class="header">{{ adminInfo.fullName }}</a>
                          <div class="description"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Update your Picture</h3>
            <div class="ui placeholder segment">
              <div class="ui icon header">
                <i class="cloud upload icon"></i>
                <div class="ui button" @click="uploadPictureToDataBase()">
                  Upload Picture
                </div>
              </div>
              <div class="image-upload-wrap">
                <input
                  class="file-upload-input"
                  placeholder="image"
                  type="file"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                  required
                  :v-model="image"
                />
                <div class="drag-text">
                  <h3>Drag and drop a Picture</h3>
                </div>
              </div>
              <div class="file-upload-content">
                <img class="file-upload-image" src="#" alt="your image" />
                <div class="image-title-wrap"></div>
                <!--  -->
              </div>
            </div>
          </div>
          <div class="panel-heading">
            <h3 class="panel-title">Username</h3>
          </div>
          <div class="panel-body">
            <div class="ui input focus">
              <input type="text" placeholder="Username..." v-model="username" />
            </div>
          </div>
        </div>
        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Email</h3>
          </div>
          <div class="panel-body">
            <div class="ui input focus">
              <input
                type="email"
                placeholder="email..."
                name="email"
                v-model="email"
              />
            </div>
          </div>
        </div>
        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Full Name</h3>
          </div>
          <div class="panel-body">
            <div class="ui input focus" id="form-btn">
              <input
                type="text"
                placeholder="Full name..."
                name="fullName"
                v-model="fullName"
              />
            </div>
          </div>
        </div>
        <div style="margin: 1em;" @click="onSubmitUpdateInfo()">
          <button class="ui button" id="submit-update-info">
            Update
          </button>
        </div>
      </div>

      <div class="col-md-9  admin-content" id="change-password">
        <form>
          <div class="panel panel-info" style="margin: 1em;">
            <div class="panel-heading">
              <h3 class="panel-title">
                <label for="current_password" class="control-label panel-title"
                  >Current Password</label
                >
              </h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    name="current_password"
                    id="current_password"
                    v-model="current_password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-info" style="margin: 1em;">
            <div class="panel-heading">
              <h3 class="panel-title">
                <label for="new_password" class="control-label panel-title"
                  >New Password</label
                >
              </h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    name="new_password"
                    id="new_password"
                    v-model="new_password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="panel panel-info" style="margin: 1em;">
            <div class="panel-heading">
              <h3 class="panel-title">
                <label for="confirm_password" class="control-label panel-title"
                  >Confirm password</label
                >
              </h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    name="confirm_password"
                    id="confirm_password"
                    v-model="confirm_password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="panel panel-info border"
            style="margin: 1em;"
            @click.prevent="updatePass()"
          >
            <div class="panel-body">
              <div class="form-group">
                <div class="pull-left">
                  <button
                    class="form-control btn btn-primary"
                    id="submit"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "setting",
  props: {
    logout: {
      type: Function,
    },
    adminInfo: {
      type: Function,
    },
    getAdminInfo: {
      type: Function,
    },
  },
  data() {
    return {
      data: [],
      current_password: "",
      new_password: "",
      confirm_password: "",
      file: null,
      imageUrl: "",
      fullName: "",
      username: "",
      email: "",
    };
  },
  methods: {
    // loadTextFromFile(ev) {
    //   const file = ev.target.files[0];
    //   const reader = new FileReader();

    //   reader.onload = (e) => this.$emit("load", e.target.result);
    //   reader.readAsDataURL(file).then((t) => console.log(t));
    //   // console.log("==>",);
    // },
    onSubmitUpdateInfo() {
      console.log("clicked");
      if (this.$data.fullName && this.$data.username && this.$data.email) {
        axios
          .put("http://localhost:3000/admin/updateData", {
            fullName: this.$data.fullName,
            username: this.$data.username,
            email: this.$data.email,
          })
          .then(({ data }) => console.log(data))
          .catch((err) => console.log(err));
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];

      console.log(this.file);
      // Change the src attribute of the image to path
      if (this.file) {
        const image = new FormData();
        image.append("file", this.file);
        image.append("upload_preset", "lwsk5njh");
        axios
          .post("https://api.cloudinary.com/v1_1/daakldabl/image/upload", image)
          .then(({ data }) => {
            console.log("imageId", data.url);
            this.$data.imageUrl = data.url;
            console.log("===>", this.$data.imageUrl);
          })
          .catch((err) => console.log(err));
      }
    },
    uploadPictureToDataBase() {
      if (this.$data.imageUrl) {
        axios
          .post("http://localhost:3000/admin/1", { image: this.$data.imageUrl })
          .then(({ data }) => {
            console.log(data);
            this.getAdminInfo();
          });
      }
      console.log("clicked");
    },
    updatePass() {
      if (this.$data.new_password == this.$data.confirm_password) {
        axios
          .patch("http://localhost:3000/admin", {
            current_password: this.$data.current_password,
            new_password: this.$data.new_password,
          })
          .then(({ data }) => {
            console.log(data);
            swal("Done!", "Password has been changed!", "success");
            location.reload();
          })
          .catch((err) => {
            console.log(err);
            swal("Invalid Entries", "Check the password please!", "error");
          });
      } else {
        swal("Invalid Password", "Check the password please!", "error");
      }
    },
  },

  mounted() {
    this.$nextTick(
      $(document).ready(function() {
        var navItems = $(".admin-menu li > a");
        var navListItems = $(".admin-menu li");
        var allWells = $(".admin-content");
        var allWellsExceptFirst = $(".admin-content:not(:first)");
        allWellsExceptFirst.hide();
        navItems.click(function(e) {
          e.preventDefault();
          navListItems.removeClass("active");
          $(this)
            .closest("li")
            .addClass("active");
          allWells.hide();
          var target = $(this).attr("data-target-id");
          $("#" + target).show();
        });
      })
    );
  },
};
</script>
<style scoped>
body {
  font-family: sans-serif;
  background-color: #eeeeee;
}

.file-upload {
  background-color: #ffffff;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.file-upload-btn {
  width: 100%;
  margin: 0;
  color: black;
  background: none;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid whitesmoke;
  transition: all 0.2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.file-upload-btn:hover {
  background: aqua;
  color: black;
  transition: all 0.2s ease;
  cursor: pointer;
}

.file-upload-btn:active {
  border: 0;
  transition: all 0.2s ease;
}

.file-upload-content {
  display: none;
  text-align: center;
}

.file-upload-input {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}

.image-upload-wrap {
  margin-top: 20px;
  border: 4px dashed silver;
  position: relative;
}

.image-dropping,
.image-upload-wrap:hover {
  background-color: grey;
}

.image-title-wrap {
  padding: 0 15px 15px 15px;
  color: #222;
}

.drag-text {
  text-align: center;
}

.drag-text h3 {
  font-weight: 100;
  text-transform: uppercase;
  color: black;
  padding: 60px 0;
}

.file-upload-image {
  max-height: 200px;
  max-width: 200px;
  margin: auto;
  padding: 20px;
}

.remove-image {
  width: 200px;
  margin: 0;
  color: #fff;
  background: #cd4535;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid #b02818;
  transition: all 0.2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.remove-image:hover {
  background: #c13b2a;
  color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
}

.remove-image:active {
  border: 0;
  transition: all 0.2s ease;
}

.inputUpload {
  width: 2px;
  font-size: 2px;
}
.file {
  margin-left: 0;
  width: 20px;
}
.label {
  cursor: pointer;
  font-size: 1.2em;
}
.icon {
  cursor: pointer;
}
.form-btn {
  margin-left: 10px;
}
.button {
  margin-left: 20px;
}
#submit-update-info {
  font-size: 20px;
  float: right !important;
  position: relative;
}
.panel-info {
  background-color: white;
}
.panel-heading {
  background-color: white;
}
.row {
  display: block;
}
</style>
