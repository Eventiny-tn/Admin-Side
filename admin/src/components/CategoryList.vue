<template>
  <div class="col-md-7 col-sm-7 col-xs-12 gutter">
    <div class="sales report">
      <div class="category-container">
        <h2>List Of Categories</h2>
        <div
          class="ui right dividing rail"
          v-if="viewForm === false"
          @click.prevent="displayAddCategory()"
        >
          <div class="ui gray button" id="btn-add">
            Add category
          </div>
        </div>
      </div>
    </div>
    <div>
      <ul id="list-of-users">
        <li>
          <!-- form for adding a category -->
          <div v-if="viewForm == true">
            <div class="container">
              <div class="row">
                <h4 class="text-center">New Category</h4>

                <input
                  placeholder="Name of the category"
                  type="text"
                  required
                  v-model="name"
                />

                <input
                  placeholder="discription"
                  type="text"
                  required
                  v-model="description"
                />
                <input
                  placeholder="image"
                  type="file"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                  required
                  :v-model="image"
                />
                <div @click="closeAddCategory()">
                  <i class="ui ban icon close"></i>
                </div>
              </div>
              <button class="ui button" @click="onSubmitCategory()">
                Submit
              </button>
            </div>
          </div>
        </li>
        <li>
          <div v-if="updateCategory == true">
            <div class="container">
              <div class="row">
                <h4 class="text-center">Update Category</h4>

                <input
                  placeholder="Name of the category"
                  type="text"
                  required
                  v-model="name"
                />

                <input
                  placeholder="discription"
                  type="text"
                  required
                  v-model="description"
                />
                <input
                  placeholder="image"
                  type="file"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                  required
                  :v-model="image"
                />
                <div @click="closeAddCategoryUpdate()">
                  <i class="ui ban icon close"></i>
                </div>
              </div>
              <button class="ui button" @click="onUpdateCategory()">
                Submit
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="ui divider"></div>
        </li>
        <li v-for="(element, i) in data" :key="i">
          <div class="ui items ">
            <div class="item">
              <div class="image">
                <img :src="element.image" />
              </div>
              <div class="content">
                <a class="header">{{ element.name }}</a>

                <div class="right floated content">
                  <button
                    class="ui positive basic button"
                    @click="updateCategories(element.id)"
                  >
                    Update
                  </button>
                  <button
                    class="ui negative button"
                    @click.prevent="deleteById(element.id)"
                  >
                    Delete
                  </button>
                </div>

                <div class="extra">
                  {{ element.description }}
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  props: {
    data: {
      type: Object,
    },
    getCategoryList: {
      type: Function,
    },
  },
  data() {
    return {
      events: [1, 2, 3, 4, 5],
      viewForm: false,
      name: "",
      description: "",
      image: "",
      updateCategory: false,
      categoryIDonUpdate: null,
    };
  },
  methods: {
    deleteById(id) {
      swal({
        title: "Are you sure?",
        text:
          "Once deleted, you will not be able to recover this category file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete("http://localhost:3000/category/" + id)
            .then(({ data }) => {
              console.log(data);
              this.getCategoryList();
            });
          swal("The category has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your category is safe!");
        }
      });
    },
    displayAddCategory() {
      this.$data.viewForm = true;
    },
    closeAddCategory() {
      this.$data.viewForm = false;
    },
    closeAddCategoryUpdate() {
      this.$data.updateCategory = false;
    },
    updateCategories(id) {
      this.$data.updateCategory = true;
      this.$data.categoryIDonUpdate = id;
      console.log(this.$data.categoryIDonUpdate);
    },
    onUpdateCategory() {
      if (this.$data.categoryIDonUpdate) {
        axios
          .put(
            "http://localhost:3000/category/" + this.$data.categoryIDonUpdate,
            {
              name: this.$data.name,
              description: this.$data.description,
              image: this.$data.image,
            }
          )
          .then(({ data }) => {
            console.log(data);
            this.closeAddCategoryUpdate();
            this.getCategoryList();
          })
          .catch((err) => console.log(err));
      }
    },
    onSubmitCategory() {
      if (
        this.$data.name !== "" &&
        this.$data.description !== "" &&
        this.$data.image !== ""
      ) {
        axios
          .post("http://localhost:3000/category", {
            name: this.$data.name,
            description: this.$data.description,
            image: this.$data.image,
          })
          .then(({ data }) => {
            console.log(data);
            this.getCategoryList();
            this.$data.viewForm = false;
          });
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      const image = new FormData();
      image.append("file", this.file);
      image.append("upload_preset", "lwsk5njh");
      axios
        .post("https://api.cloudinary.com/v1_1/daakldabl/image/upload", image)
        .then(({ data }) => {
          console.log("imageId", data.url);
          this.$data.image = data.url;
          console.log("===>", this.$data.image);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.close {
  cursor: pointer;
}
.close:hover {
  color: red !important;
}
input {
  margin: 40px 25px;
  width: 200px;
  display: block;
  border: none;
  padding: 10px 0;
  border-bottom: solid 1px #1abc9c;
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 96%,
    #1abc9c 4%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 96%,
    #1abc9c 4%
  );
  background-position: -200px 0;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  color: #0e6252;
}

input:focus,
input:valid {
  box-shadow: none;
  outline: none;
  background-position: 0 0;
}

input::-webkit-input-placeholder {
  font-family: "roboto", sans-serif;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input:focus::-webkit-input-placeholder,
input:valid::-webkit-input-placeholder {
  color: #1abc9c;
  font-size: 11px;
  -webkit-transform: translateY(-20px);
  transform: translateY(-20px);
  visibility: visible !important;
}
#btn-add {
  position: relative !important;
}
.category-container {
  justify-content: center;
  display: inline-block;
  position: relative;
  margin: 5px;
}
.container {
  height: 100%;
  align-content: center;
}

/*        */
.list {
  float: right !important;
  margin-top: -16% !important;
}
#users-list {
  float: none !important;
  margin-top: 0 !important;
}
h12 {
  margin-top: 0px;
  float: right;
  cursor: pointer;
  font-weight: bold;
}
h12:hover {
  color: red;
  text-decoration: underline;
}
#list-of-users {
  margin-top: 5px;
}
a:focus,
a:hover,
a {
  outline: none;
  text-decoration: none;
}
li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.header-top i {
  font-size: 18px;
}
/*Home Page*/

.home {
  background: #f6f7fa;
}
.hidden-sm {
  border-radius: 40%;
}
#navigation {
  background: #0e1a35;
}

#navigation {
  padding: 0;
}

.display-table {
  display: table;
  padding: 0;
  height: 100%;
  width: 100%;
}

.display-table-row {
  display: table-row;
  height: 100%;
}

.display-table-cell {
  display: table-cell;
  float: none;
  height: 100%;
}

.v-align {
  vertical-align: top;
}
.logo img {
  max-width: 180px;
  padding: 16px 0 17px;
  width: 100%;
}

.header-top {
  margin: 0;
  padding-top: 8px;
}

.add-project {
  background: #5584ff none repeat scroll 0 0;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  padding: 5px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
}
.add-project:hover {
  background-color: aqua;
}
.icon-info {
  position: relative;
}
.navi i {
  font-size: 20px;
}
.label.label-primary {
  border-radius: 50%;
  font-size: 9px;
  left: 8px;
  position: absolute;
  top: -9px;
}

.icon-info .label {
  border: 2px solid #ffffff;
  font-weight: 500;
  padding: 3px 5px;
  text-align: center;
}

.header-top .dropdown-toggle {
  color: #0e1a35;
}

.header-top .dropdown-menu {
  border: medium none;
  left: -85px;
  padding: 17px;
}

.navbar-content > span {
  font-size: 13px;
  font-weight: 700;
}

.img-responsive {
  width: 100%;
}
#navigation {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

header {
  background: #ffffff none repeat scroll 0 0;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);
  display: inline-block !important;
  line-height: 23px;
  padding: 15px;
  transition: all 0.5s ease 0s;
  width: 100%;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.logo {
  text-align: center;
}

.navi a {
  border-bottom: 1px solid #0d172e;
  border-top: 1px solid #0d172e;
  color: #ffffff;
  display: block;
  font-size: 17px;
  font-weight: 500;
  padding: 28px 20px;
  text-decoration: none;
}

.navi i {
  margin-right: 15px;
  color: #5584ff;
}

.navi .active a {
  background: #122143;
  border-left: 5px solid #5584ff;
  padding-left: 15px;
}

.navi a:hover {
  background: #122143 none repeat scroll 0 0;
  border-left: 5px solid #5584ff;
  display: block;
  padding-left: 15px;
}

.navbar-default {
  background-color: #ffffff;
  border-color: #ffffff;
}

.navbar-toggle {
  border: none;
}

.navbar-default .navbar-toggle:focus,
.navbar-default .navbar-toggle:hover {
  background-color: rgba(0, 0, 0, 0);
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #0e1a35;
}
.user-dashboard {
  padding: 0 20px;
}
#user-dashboard {
  margin: 1%;
}

.user-dashboard h1 {
  color: #0e1a35;
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  padding: 21px 0;
}
.sales {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #d4d9e3;
  display: inline-block;
  padding: 15px;
  width: 100%;
}

@media only screen and (max-device-width: 1024px) {
  header .header-top li {
    padding-left: 20px !important;
    padding-right: 0;
  }
  header .logo img {
    max-width: 125px !important;
  }
}

@media only screen and (min-device-width: 900) and (max-device-width: 1024px) {
  .user-dashboard .header-top {
    padding-top: 5px;
  }
  .user-dashboard .header-rightside {
    display: inline-block;
    width: 100%;
  }
  .user-dashboard .header-rightside .header-top img {
    max-width: 41px !important;
  }
  .user-dashboard .sales button {
    font-size: 10px;
  }
  .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {
    font-size: 12px;
  }
  .user-dashboard .sales h2 {
    font-size: 15px;
  }
}
@media only screen and (min-device-width: 998px) and (max-device-width: 1350px) {
  #navigation .logo img {
    max-width: 130px;
    padding: 16px 0 17px;
    width: 100%;
  }
}
</style>
