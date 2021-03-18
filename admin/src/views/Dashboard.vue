<template>
  <div class="about">
    <AdminDashboard
      :adminLogout="adminLogout"
      :users="users"
      :getUsersNotBanned="getUsersNotBanned"
    />
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
  data() {
    return {
      users: [],
    };
  },
  methods: {
    adminLogout() {
      localStorage.removeItem("isLogged");
      this.$router.push("/");
    },
    getUsersNotBanned() {
      axios.get("http://localhost:3000/user").then(({ data }) => {
        this.$data.users = data;
        console.log("user :", data);
      });
    },
  },
  mounted() {
    this.getUsersNotBanned();
  },
  beforeMount() {
    const token = localStorage.getItem("isLogged");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3000/admin/check", config)
      .then(({ data }) => {
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
