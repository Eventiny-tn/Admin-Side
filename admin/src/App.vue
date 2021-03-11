<template>
  <div>
    <AdminLogin :onSubitLogin="onSubitLogin" />
  </div>
</template>

<script>
import axios from "axios";
import AdminLogin from "./components/AdminLogin";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AdminLogin,
  },

  methods: {
    onSubitLogin(login) {
      axios
        .post("http://localhost:3000/login", login)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
