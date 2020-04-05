<template>
  <div class="d-flex flex-row justify-content-between align-items-center login-banner-box">
    <b>Come on Log in and get special prices</b>
    <button class="btn btn-login">LOG IN</button>
  </div>
</template>

<style lang="scss">
.login-banner-box {
  margin: 25px -15px;
  padding: 15px 30px;
  border-radius: 4px;
  background-color: $blue;
  color: $yellow;
  font-family: $ff-other;
  font-weight: bold;
  font-size: 18px;
}

.btn-login {
  padding: 5px 20px;
  border: 1px solid $blue-light;
  border-radius: 5px;
  background-color: $blue;
  color: $yellow;
  font-weight: 600;
  font-size: 14px;
}
</style>
