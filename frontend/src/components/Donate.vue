<template>
  <div id="donate">
    <v-layout column>
      <v-flex class="section">
        <h1>위버 후원회원 모집</h1>
        <h2>후원회원을 모집합니다</h2>
        <p>위버는 바다생태계를 보호하기 위해 산호지대 환경을 조성하고 보호하는 로봇입니다. 하지만 이를 저희의 힘만으로 이루어내기는 힘이 많이 부족합니다. 저희와 함께 바다생태계를 지켜내고자 하시는 분이 계신다면 조심스럽게 후원을 부탁드려봅니다.</p>
      </v-flex>
      <v-flex class="section">
        <h2>계좌번호</h2>
        <p>개인정보를 제공하지 않고 후원금을 전달하고 싶으신 경우에는 아래의 정보를 이용해주세요.</p>
        <p>
          <li>은행명 : KB국민은행</li>
          <li>계좌번호 : 437102-04-041801</li>
          <li>예금주 : 권태훈</li>
        </p>
      </v-flex class="section">
      <v-flex>
        <h2>후원회원이 되는 법</h2>
        <p>위버의 후원 회원이 되는 방법은 아래 링크에 준비되어 있습니다.</p>
        <p><a href="https://taehoon.typeform.com/to/ixVDY4" target="blank">위버 후원 페이지로 바로가기</a></p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "donate"
};
</script>

<style lang="scss" scoped>
#donate {
  padding-top: 120px;
  margin: 0 auto;
  width: 40%;
  text-align: center;

  h1 {
    padding: 20px;
    margin: 20px;
    border-bottom: 1px solid;
    border-width: 60%;
  }

  h2 {
    margin-bottom: 0.5em;
  }

  .section {
    margin-bottom: 0.5em;
  }
}
</style>
