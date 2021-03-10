<template>
  <div>
    <AdminLogin :onSubitLogin="onSubitLogin" />
  </div>
</template>

<script>
import AdminLogin from "./components/AdminLogin";
export default {
  name: "App",
  components: {
    AdminLogin,
  },
  methods: {
    onSubitLogin(login) {
      console.log("==>", login);
    },
  },
};
</script>

<style></style>
