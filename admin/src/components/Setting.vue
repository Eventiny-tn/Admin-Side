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
          <li>
            <a href="" data-target-id="settings"
              ><i class="glyphicon glyphicon-cog"></i> Update Profile</a
            >
          </li>
        </ul>
      </div>
      <div>
        <img
          class="active medium ui image"
          src="https://www.beautymentor.in/admin/uploads/profile/admin.png"
        />
      </div>

      <div class="col-md-9  admin-content" id="profile">
        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Name</h3>
          </div>
          <div class="panel-body">
            admin
          </div>
        </div>
        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Email</h3>
          </div>
          <div class="panel-body">
            admin@test.com
          </div>
        </div>
        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Last Password Change</h3>
          </div>
          <div class="panel-body">
            4 days Ago
          </div>
        </div>
      </div>
      <div class="col-md-9  admin-content" id="settings">
        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Notification</h3>
          </div>
          <div class="panel-body">
            <div class="label label-success">allowed</div>
          </div>
        </div>
        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Newsletter</h3>
          </div>
          <div class="panel-body">
            <div class="badge">Monthly</div>
          </div>
        </div>

        <div class="panel panel-info" style="margin: 1em;">
          <div class="panel-heading">
            <h3 class="panel-title">Admin</h3>
          </div>
          <div class="panel-body">
            <div class="label label-success">yes</div>
          </div>
        </div>
      </div>
      <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="cloud upload icon"></i>
        </div>
        <div class="inline">
          <input
            class="ui button"
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
          <div class="ui button" @click="uploadPic()">
            Upload Picture
          </div>
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

      <div class="col-md-9  admin-content" id="settings"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
import swal from "sweetalert";

$(document).ready(function() {
  var navItems = $(".admin-menu li > a");
  var navListItems = $(".admin-menu li");
  var allWells = $(".admin-content");
  var allWellsExceptFirst = $(".admin-content:not(:first)");
  allWellsExceptFirst.hide();
  navItems.click(function() {
    navListItems.removeClass("active");
    $(this)
      .closest("li")
      .addClass("active");
    allWells.hide();
    var target = $(this).attr("data-target-id");
    $("#" + target).show();
  });
});

export default {
  name: "setting",
  props: {
    logout: {
      type: Function,
    },
  },
  data() {
    return {
      current_password: "",
      new_password: "",
      confirm_password: "",
      file: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      const image = new FormData();
      image.append("file", this.file);
      image.append("upload_preset", "lwsk5njh");
      console.log(image);
      axios
        .post("https://api.cloudinary.com/v1_1/daakldabl/image/upload", image)
        .then(({ data }) => {
          console.log("upload", data);
          console.log("imageId", data.url);
        })
        .catch((err) => console.log(err));
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
};
</script>
<style scoped>
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
