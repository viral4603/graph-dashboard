<template>
  <header class="d-flex align-items-center border-bottom px-3 row flex-shrink-0">
    <!-- user-detials-start -->
    <div class="user-details d-flex col-4">
      <h5 class="mb-0">Govalle Constructor</h5>
      <div class="user-profile d-flex align-items-center">
        <figure
          class="user-image rounded-circle overflow-hidden bg-dark mb-0 ms-2"
        >
          <img src="../../assets/images/cook-boy.png" class="img-fluid" alt="user-image" />
        </figure>
        <!-- <figure class="user-image rounded-circle overflow-hidden bg-dark mb-0">
          <img src="../../assets/images/cook-boy.png" class="img-fluid" alt="user-image" />
        </figure> -->
      </div>
    </div>
    <!-- user-detials-end -->
    <!-- tab-item-start -->
    <div class="tab-items d-flex h-100 col-4 justify-content-center">
      <ul class="nav h-100 align-items-center">
        <li class="nav-item h-100">
          <a class="nav-link d-flex h-100 align-items-center px-4" to="/"
            ><span class="nav-icon icon-calendar"></span
          ></a>
        </li>
        <li class="nav-item h-100">
          <a class="nav-link d-flex h-100 align-items-center px-4" to=""
            ><span class="nav-icon icon-list"></span
          ></a>
        </li>
        <li class="nav-item h-100">
          <a class="nav-link d-flex h-100 align-items-center px-4" to=""
            ><span class="nav-icon icon-area-chart"></span
          ></a>
        </li>
        <li class="nav-item h-100">
          <a class="nav-link d-flex h-100 align-items-center px-4" to=""
            ><span class="nav-icon icon-bar-chart-1"></span
          ></a>
        </li>
        <li class="nav-item h-100">
          <router-link class="nav-link d-flex h-100 align-items-center px-4" :to="{name:'home'}"
            ><span class="nav-icon icon-graph"></span
          ></router-link>
        </li>
        <li class="nav-item h-100">
          <a class="nav-link d-flex h-100 align-items-center px-4" to=""
            ><span class="nav-icon icon-bar-chart"></span
          ></a>
        </li>
        <li class="nav-item h-100">
          <a class="nav-link d-flex h-100 align-items-center px-4" to=""
            ><span class="nav-icon icon-calendar"></span
          ></a>
        </li>
      </ul>
    </div>
    <!-- tab-item-end -->
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
