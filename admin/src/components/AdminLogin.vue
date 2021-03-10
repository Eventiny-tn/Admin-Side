<template>
  <div class="container register-form">
    <div class="form">
      <div class="note">
        <h1>Eventiny Admin Side</h1>
      </div>

      <div class="form-content">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="   Admin Email..."
                v-model="login.email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="   Password..."
                v-model="login.password"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btnSubmit"
          @click="onSubitLogin({ login })"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  props: {
    onSubitLogin: {
      type: Function,
    },
    methods: {},
  },
};
</script>
<style scoped>
.row {
  margin: auto;
}
h1 {
  font-family: "Shippori Mincho", serif;
}
.note {
  text-align: center;
  height: 80px;
  background: -webkit-linear-gradient(left, #0072ff, #8811c5);
  color: #fff;
  font-weight: bold;
  line-height: 80px;
}
.form-content {
  padding: 5%;
  border: 1px solid #ced4da;
  margin-bottom: 2%;
}
.form-control {
  border-radius: 1.5rem;
}
.btnSubmit {
  border: none;
  border-radius: 1.5rem;
  padding: 1%;
  width: 20%;
  cursor: pointer;
  background: #0062cc;
  color: #fff;
}
.btnSubmit:hover {
  background-color: #8811c5;
}</style
>>>
