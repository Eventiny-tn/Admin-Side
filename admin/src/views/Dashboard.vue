<template>
  <div class="about">
    <AdminDashboard
      :adminLogout="adminLogout"
      :users="users"
      :getUsersNotBanned="getUsersNotBanned"
      :adminInfo="adminInfo"
      :getAdminInfo="getAdminInfo"
      :filterByBanned="filterByBanned"
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
      adminInfo: {},
    };
  },
  methods: {
    adminLogout() {
      localStorage.removeItem("isLogged");
      this.$router.push("/");
    },
    getUsersNotBanned() {
      axios.get("http://localhost:3001/user").then(({ data }) => {
        this.$data.users = data;
        console.log("user :", data);
      });
    },
    getAdminInfo() {
      axios
        .get("http://localhost:3001/admin/img")
        .then(({ data }) => {
          this.$data.data = data;
          this.$data.adminInfo = data;
        })
        .catch((err) => console.log(err));
    },
    filterByBanned(id) {
      axios.get("http://localhost:3001/user/filter/" + id).then(({ data }) => {
        console.log("haythem", data);
        this.$data.users = data;
      });
    },
  },
  mounted() {
    this.getUsersNotBanned();
    this.getAdminInfo();
  },
  beforeMount() {
    const token = localStorage.getItem("isLogged");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:3001/admin/check", config)
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
