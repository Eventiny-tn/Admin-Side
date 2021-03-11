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
        .post("http://localhost:3000/admin", login)
        .then((res) => {
          console.log(res);
          this.$router.push("/Dashboard");
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
