<template>
  <div class="home">
    <AdminLogin :onSubitLogin="onSubitLogin" />
  </div>
</template>

<script>
import AdminLogin from "../components/AdminLogin";
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "Home",

  components: {
    AdminLogin,
  },

  methods: {
    onSubitLogin(login) {
      axios
        .post("http://localhost:3001/admin", login)
        .then(({ data }) => {
          if (data.auth == true) {
            localStorage.setItem("isLogged", data.token);
            console.log("before login ", data.token);
            this.$router.push("/Dashboard");
          } else {
            swal(
              "Invalid Entries",
              "Check the username or password please!",
              "error"
            );
          }
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
