<template>
  <nav class="d-flex flex-column h-100 border-end">
    <!-- brand:name:start -->
    <div
      class="brand-name w-100 d-flex align-items-center justify-content-center border-bottom flex-shrink-0"
    >
      <h1 class="mb-0 brand-title fs-5 text-primary">
        <span class="nav-icon icon-target"></span>
      </h1>
    </div>
    <!-- brand:name:end  -->
    <!-- nav-items-start -->
    <div class="w-100 d-flex flex-column h-100">
      <ul class="nav flex-column align-items-center border-bottom">
        <li class="nav-item mb-2">
          <a class="nav-link" to=""><span class="nav-icon icon-home"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link mb-1 position-relative" to=""
            ><span class="nav-icon icon-time"></span
          ></a>
        </li>
      </ul>
      <div class="d-flex flex-column justify-content-between flex-grow-1">
        <ul class="nav flex-column align-items-center">
          <li class="nav-item">
            <a class="nav-link" to=""
              ><span class="nav-icon icon-users"></span
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" to=""
              ><span class="nav-icon icon-briefcase"></span
            ></a>
          </li>
        </ul>
        <ul class="nav flex-column align-items-center">
          <li class="nav-item">
            <a class="nav-link" to=""
              ><span class="nav-icon icon-plus"></span
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" to=""
              ><span class="nav-icon icon-help-circle"></span
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- nav-items-start -->
    <div class="user-profile m-auto">
      <figure class="user-image rounded-circle overflow-hidden bg-dark">
        <img
          src="../../assets/images/cook-boy.png"
          class="img-fluid"
          alt="user-image"
        />
      </figure>
    </div>
    <div class="toggle-theme d-flex justify-content-center pb-3">
      <input
        type="checkbox"
        class="d-none"
        id="theme"
        v-model="isDarkTheme"
        @change="changeTheme()"
      />
      <label for="theme" class="theme-lable"></label>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isDarkTheme: false,
    };
  },
  created() {
    if (localStorage.getItem("themeType") == "dark") {
      const appElement = document.getElementById("app");
      appElement?.classList.add("dark-mode");
      this.isDarkTheme = true
    }
  },
  methods: {
    changeTheme() {
      const appElement = document.getElementById("app");
      this.isDarkTheme
        ? appElement?.classList.add("dark-mode")
        : appElement?.classList.remove("dark-mode");
      this.isDarkTheme
        ? localStorage.setItem("themeType", "dark")
        : localStorage.setItem("themeType", "light");
    },
  },
});
</script>
