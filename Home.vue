<template>
  <div class="home">
    <div class="in">
    <a @click="$router.push('/signin')">ログイン</a>
    </div>
    <div class="ro">
    <a @click="$router.push('/signup')">登録はこちら</a>
    </div>
  </div>
</template>
<style scoped>
  .home{
    background: paleturquoise;
    width: 30%;
    margin: 30px auto;
    border-radius: 15px;
    height: 200px;
  }
  .in,.ro{
    cursor: pointer;
    padding: 30px ;
    font-weight: bold;
  }
  a:hover{
    color: rgba(0, 0, 0, 0.5);
  }
</style>