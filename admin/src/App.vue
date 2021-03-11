<template>
  <div>
    <AdminLogin :onSubitLogin="onSubitLogin" />
    <AdminDashboad />
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import VueRouter from "vue-router";
import AdminLogin from "./components/AdminLogin";
import AdminDashboad from "./components/AdminDashboard";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AdminLogin,
    AdminDashboad,
  },

  methods: {
    onSubitLogin(login) {
      axios
        .post("http://localhost:3000/login", login)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          swal(
            "Invalid Entries",
            "Check the username or password please!",
            "error"
          );
        });
    },
  },
};
</script>

<style></style>
