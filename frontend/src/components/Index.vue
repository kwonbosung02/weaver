<template>
  <div id="index">
	  <div id="wrapper">
      <header id="header">
        <div class="logo">
          <img src="../assets/logo.png">
        </div>
        <div class="content">
          <div class="inner">
            <h1>WEAVER</h1>
            <p>위버는 바다생태계를 지키기 위해 산호가 살 수 있는 환경을 조성, 보호하는 로봇입니다.</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="main">START WEAVER</a>
            </li>
            <li>
              <a href="donate">DONATE</a>
            </li>
            <li>
              <a href="purchase">PURCHASE</a>
            </li>
          </ul>
        </nav>
      </header>

      <footer id="footer">
        <p class="copyright">&copy; Weaver. Design:
          <a href="https://html5up.net">HTML5 UP</a>.</p>
      </footer>
	  </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300italic,600italic,300,600");

/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

div {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* Basic */

@-ms-viewport {
  width: device-width;
}

/* Type */

html {
  font-size: 16pt;
}

@media screen and (max-width: 1680px) {
  html {
    font-size: 12pt;
  }
}

@media screen and (max-width: 736px) {
  html {
    font-size: 11pt;
  }
}

@media screen and (max-width: 360px) {
  html {
    font-size: 10pt;
  }
}

body {
  color: #ffffff;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.65;
}

a {
  -moz-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-bottom-color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-bottom-color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-bottom-color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-bottom-color 0.2s ease-in-out;
  border-bottom: dotted 1px rgba(255, 255, 255, 0.5);
  text-decoration: none;
  color: inherit;
}

a:hover {
  border-bottom-color: transparent;
}

h1 {
  color: #ffffff;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

h1.major {
  border-bottom: solid 1px #ffffff;
  width: -moz-max-content;
  width: -webkit-max-content;
  width: -ms-max-content;
  width: max-content;
  padding-bottom: 0.5rem;
  margin: 0 0 2rem 0;
}

h1 {
  font-size: 2.25rem;
  line-height: 1.3;
  letter-spacing: 0.5rem;
}

@media screen and (max-width: 736px) {
  h1 {
    font-size: 1.75rem;
    line-height: 1.4;
  }
}

/* BG */

#index {
  background-image: url("../assets/bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}

/* Wrapper */

#wrapper {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 4rem 2rem;
  z-index: 3;
}

#wrapper:before {
  content: "";
  display: block;
}

@media screen and (max-width: 1680px) {
  #wrapper {
    padding: 3rem 2rem;
  }
}

@media screen and (max-width: 736px) {
  #wrapper {
    padding: 2rem 1rem;
  }
}

@media screen and (max-width: 480px) {
  #wrapper {
    padding: 1rem;
  }
}

/* Header */

#header {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-transition: -moz-transform 0.325s ease-in-out,
    -moz-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  -webkit-transition: -webkit-transform 0.325s ease-in-out,
    -webkit-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  -ms-transition: -ms-transform 0.325s ease-in-out,
    -ms-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
    opacity 0.325s ease-in-out;
  background-image: -moz-radial-gradient(
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  background-image: -webkit-radial-gradient(
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  background-image: -ms-radial-gradient(
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  max-width: 100%;
  text-align: center;
}

#header > * {
  -moz-transition: opacity 0.325s ease-in-out;
  -webkit-transition: opacity 0.325s ease-in-out;
  -ms-transition: opacity 0.325s ease-in-out;
  transition: opacity 0.325s ease-in-out;
  position: relative;
  margin-top: 3.5rem;
}

#header > *:before {
  content: "";
  display: block;
  position: absolute;
  top: calc(-3.5rem - 1px);
  left: calc(50% - 1px);
  width: 1px;
  height: calc(3.5rem + 1px);
  background: #ffffff;
}

#header > :first-child {
  margin-top: 0;
}

#header > :first-child:before {
  display: none;
}

#header .logo {
  width: 5.5rem;
  height: 5.5rem;
  line-height: 5.5rem;
  border: solid 1px #ffffff;
  border-radius: 100%;
}

#header .logo img {
  margin: 8px auto;
  text-align: center;
  width: 5rem;
}

#header .content {
  border-style: solid;
  border-color: #ffffff;
  border-top-width: 1px;
  border-bottom-width: 1px;
  max-width: 100%;
}

#header .content .inner {
  -moz-transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  -webkit-transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  -ms-transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  -moz-transition-delay: 0.25s;
  -webkit-transition-delay: 0.25s;
  -ms-transition-delay: 0.25s;
  transition-delay: 0.25s;
  padding: 3rem 2rem;
  max-height: 40rem;
  overflow: hidden;
}

#header .content .inner > :last-child {
  margin-bottom: 0;
}

#header .content p {
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  line-height: 2;
}

#header nav ul {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
  border: solid 1px #ffffff;
  border-radius: 4px;
}

#header nav ul li {
  padding-left: 0;
  border-left: solid 1px #ffffff;
}

#header nav ul li:first-child {
  border-left: 0;
}

#header nav ul li a {
  display: block;
  min-width: 7.5rem;
  height: 2.75rem;
  line-height: 2.75rem;
  padding: 0 1.25rem 0 1.45rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  border-bottom: 0;
}

#header nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.075);
}

#header nav ul li a:active {
  background-color: rgba(255, 255, 255, 0.175);
}

#header nav.use-middle:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: calc(50% - 1px);
  width: 1px;
  height: 100%;
  background: #ffffff;
}

#header nav.use-middle ul li.is-middle {
  border-left: 0;
}

@media screen and (max-width: 980px) {
  #header .content p br {
    display: none;
  }
}

@media screen and (max-width: 736px) {
  #header > * {
    margin-top: 2rem;
  }

  #header > *:before {
    top: calc(-2rem - 1px);
    height: calc(2rem + 1px);
  }

  #header .logo {
    width: 4.75rem;
    height: 4.75rem;
    line-height: 4.75rem;
  }

  #header .logo .icon:before {
    font-size: 1.75rem;
  }

  #header .content .inner {
    padding: 2.5rem 1rem;
  }

  #header .content p {
    line-height: 1.875;
  }
}

@media screen and (max-width: 480px) {
  #header {
    padding: 1.5rem 0;
  }

  #header .content .inner {
    padding: 2.5rem 0;
  }

  #header nav ul {
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 10rem;
    max-width: 100%;
  }

  #header nav ul li {
    border-left: 0;
    border-top: solid 1px #ffffff;
  }

  #header nav ul li:first-child {
    border-top: 0;
  }

  #header nav ul li a {
    height: 3rem;
    line-height: 3rem;
    min-width: 0;
    width: 100%;
  }

  #header nav.use-middle:after {
    display: none;
  }
}

/* Footer */

#footer {
  -moz-transition: -moz-transform 0.325s ease-in-out,
    -moz-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  -webkit-transition: -webkit-transform 0.325s ease-in-out,
    -webkit-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  -ms-transition: -ms-transform 0.325s ease-in-out,
    -ms-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
    opacity 0.325s ease-in-out;
  width: 100%;
  max-width: 100%;
  margin-top: 2rem;
  text-align: center;
}

#footer .copyright {
  letter-spacing: 0.2rem;
  font-size: 0.6rem;
  opacity: 0.75;
  margin-bottom: 0;
  text-transform: uppercase;
}
</style>
