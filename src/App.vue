<template>
  div.byul>div#jongho





  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vuelog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">아무거나</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            별님
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">마이페이지</a></li>
            <li><a class="dropdown-item" href="#">로그아웃</a></li>
            <li><hr class="dropdown-divider"></li>
            <!-- <li><a class="dropdown-item" href="#">A</a></li> -->
          </ul>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">검색</button>
      </form>
    </div>
  </div>
</nav>
<div class = "container mt-4">
  <h5>Vue 개발자의 블로그입니다</h5>
  <p>- Vue로 만들었음 -</p>


</div>

<List :블로그글 = "블로그글"/>



</template>

<script>
import List from "./components/List.vue"
import blog from "./data"
blog;
export default {
  name: 'App',
  data(){
    return{
      블로그글 : blog,

    }
  },
  components: {
    List,
  }
}
</script>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
