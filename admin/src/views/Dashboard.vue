<template>
  <div class="about">
    <AdminDashboard />
  </div>
</template>
<script>
import AdminDashboard from "../components/AdminDashboard";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "Dashboard",
  components: {
    AdminDashboard,
  },
  mounted() {
    const token = localStorage.getItem("isLogged");
    console.log("token on mounted==>", token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/admin/check", config)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("isLogged", data.token);
      })
      .catch((err) => {
        console.log(err);
        this.$router.push("/");
        swal("Please Login again", "For more secure", "error");
      });
  },
};
</script>
