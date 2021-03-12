<template>
  <div class="about">
    <AdminDashboard />
  </div>
</template>
<script>
import AdminDashboard from "../components/AdminDashboard";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    AdminDashboard,
  },
  methods: {
    isLoggedIn() {
      const token = localStorage.getItem("isLogged");
      console.log("==>", token);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get("http://localhost:3000/admin/check", config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.isLoggedIn();
  },
};
</script>
