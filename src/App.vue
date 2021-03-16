<template>
  <div id="app strevdeApp">

    <nav data-v-105478e3="" role="navigation" aria-label="main navigation" class="navbar has-shadow is-primary">
       <div data-v-105478e3="" class="container">
          <div data-v-105478e3="" style="display: flex;">
             <a data-v-105478e3="" class="navbar-item">
             <img data-v-105478e3="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPjxwYXRoIGQ9Ik04MS4zODQ4NjQ5LDUgTDE4LjQwNTk0NTksNSBDMTEuMDEzNzgzOCw1IDUsMTAuOTYwMDg5MyA1LDE4LjI4NjI1IEw1LDgwLjcwMjg1NzEgQzUsODguMDI5MDE3OSAxMS4wMTM3ODM4LDkzLjk4OTEwNzEgMTguNDA1OTQ1OSw5My45ODkxMDcxIEw4MS4zODQ4NjQ5LDkzLjk4OTEwNzEgQzg4Ljc3NzAyNyw5My45ODkxMDcxIDk0Ljc5MDgxMDgsODguMDI5MDE3OSA5NC43OTA4MTA4LDgwLjcwMjg1NzEgTDk0Ljc5MDgxMDgsMTguMjg2MjUgQzk0Ljc5MDgxMDgsMTAuOTYwMDg5MyA4OC43NzcwMjcsNSA4MS4zODQ4NjQ5LDUgTDgxLjM4NDg2NDksNSBaIE0xMS40ODY0ODY1LDE4LjI4NjI1IEMxMS40ODY0ODY1LDE0LjUwNTQ0NjQgMTQuNTkxMDgxMSwxMS40Mjg1NzE0IDE4LjQwNTk0NTksMTEuNDI4NTcxNCBMMzUuNjI1MTM1MSwxMS40Mjg1NzE0IEMzNS4zLDI0LjQ3NDU1MzYgMjQuNjUyNDMyNCwzNS4wMTkwMTc5IDExLjQ4NjQ4NjUsMzUuMzI5MTk2NCBMMTEuNDg2NDg2NSwxOC4yODYyNSBMMTEuNDg2NDg2NSwxOC4yODYyNSBaIE0xOC40MDU5NDU5LDg3LjU2MDUzNTcgQzE2LjkyMzc4MzgsODcuNTYwNTM1NyAxNS41NTI3MDI3LDg3LjA5MjA1MzYgMTQuNDI1Njc1Nyw4Ni4zMDI5NDY0IEwzOC4wMTc4Mzc4LDYwLjI1NTE3ODYgQzM5LjAwNzgzNzgsNTkuMTU5OTEwNyA0MC42NjY3NTY4LDU4Ljk3OTEwNzEgNDEuODc0ODY0OSw1OS44MzI1IEw4MS4xMzAyNzAzLDg3LjU2MDUzNTcgTDE4LjQwNTk0NTksODcuNTYwNTM1NyBMMTguNDA1OTQ1OSw4Ny41NjA1MzU3IFogTTg4LjMwNDMyNDMsODAuNzAyODU3MSBDODguMzA0MzI0Myw4MS45MzQ3MzIxIDg3Ljk2OTQ1OTUsODMuMDg5NDY0MyA4Ny4zOTI5NzMsODQuMDg5OTEwNyBMNjEuMzY1OTQ1OSw2NS43MDU4MDM2IEw2Ny44MjMyNDMyLDU2LjY3MjA1MzYgQzY4LjI3ODkxODksNTYuMDM0MDE3OSA2OC45NTkxODkyLDU1LjYxNDU1MzYgNjkuNzM4Mzc4NCw1NS40OSBDNzAuNTE1OTQ1OSw1NS4zNjc4NTcxIDcxLjI5NTk0NTksNTUuNTUzNDgyMSA3MS45Myw1Ni4wMTg3NSBMODguMzA0MzI0Myw2Ny45Nzc1IEw4OC4zMDQzMjQzLDgwLjcwMjg1NzEgTDg4LjMwNDMyNDMsODAuNzAyODU3MSBaIE04OC4zMDQzMjQzLDYwLjAxNDkxMDcgTDc1Ljc4NDU5NDYsNTAuODQ3NzY3OSBDNzMuNzM3Mjk3Myw0OS4zNDkxMDcxIDcxLjIyNzAyNyw0OC43NDMyMTQzIDY4LjcxMTA4MTEsNDkuMTQyNTg5MyBDNjYuMTk3NTY3Niw0OS41NDE5NjQzIDY0LjAwMTg5MTksNTAuODk2Nzg1NyA2Mi41MzAyNzAzLDUyLjk1NTUzNTcgTDU2LjA4NDMyNDMsNjEuOTc0MDE3OSBMNDUuNjQwMjcwMyw1NC41OTcyMzIxIEM0MS43NDE4OTE5LDUxLjg0MzM5MjkgMzYuMzg5NzI5Nyw1Mi40MjgzOTI5IDMzLjE5MTA4MTEsNTUuOTYwMDg5MyBMMTEuNDg2NDg2NSw3OS45MjQxOTY0IEwxMS40ODY0ODY1LDQxLjc1Nzc2NzkgQzI4LjIyODkxODksNDEuNDQ1MTc4NiA0MS43ODQwNTQxLDI4LjAxOTEwNzEgNDIuMTExNjIxNiwxMS40Mjg1NzE0IEw4MS4zODQ4NjQ5LDExLjQyODU3MTQgQzg1LjE5OTcyOTcsMTEuNDI4NTcxNCA4OC4zMDQzMjQzLDE0LjUwNTQ0NjQgODguMzA0MzI0MywxOC4yODYyNSBMODguMzA0MzI0Myw2MC4wMTQ5MTA3IEw4OC4zMDQzMjQzLDYwLjAxNDkxMDcgWiIgZmlsbD0iI0ZGRkZGRiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIvPjwvZz48L3N2Zz4K" alt="strevde logo" class="logo">
              myStrava
             </a>
             <div id="nav" style="margin-left: 350px;margin-top: 20px;">
               <router-link to="/">Home </router-link> |
               <router-link to="/about"> About</router-link>
               |
               <button class="logoutClass" id="logoutClass" v-on:click="logout()">Logout</button>
             </div>
             <div data-v-105478e3="" class="navbar-burger"><span data-v-105478e3=""></span> <span data-v-105478e3=""></span> <span data-v-105478e3=""></span></div>
          </div>
          <div data-v-105478e3="" class="navbar-end">
             <div data-v-105478e3="" class="navbar-menu">
                <div data-v-105478e3="" class="navbar-item has-dropdown is-hoverable">
                   <a data-v-105478e3="" class="navbar-link">
                   More
                   </a>
                   <div data-v-105478e3="" class="navbar-dropdown">       </div>
                </div>
                <a data-v-105478e3="" href="https://www.strava.com/api/v3/athlete/activities?access_token=c7da018e9a288a1f10633dae9bf4abd0cb067cc2" class="navbar-item">Login</a>
                  <a data-v-105478e3="" href="" class="navbar-item">Profile</a>
             </div>
          </div>
       </div>
    </nav>
    <router-view/>
  </div>
</template>




<script>
import Vue from 'vue'
export default {
methods:{
  logout() {
    //Ich habe was geändert hier in dieser Funktion
   localStorage.removeItem("refresh_token");
   storage.removeItem("refresh_token");
   this.$cookie.delete('demomy');
   vm.$forceUpdate();
    window.location.reload();
}
}

}
//document.getElementById("logoutClass").addEventListener("click", function() {}, false);

new Vue({
//  el: '#logoutClass',

});

</script>
<style>

.navbar .navbar-item[data-v-7ba5bd90], .navbar .navbar-link[data-v-7ba5bd90] {
    font-family: "Montserrat", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    transition: all 300ms;
}
@media screen and (min-width: 1024px){

.navbar-item[data-v-7ba5bd90], .navbar-link[data-v-7ba5bd90] {
    align-items: center;
    display: flex;
  }
}

.navbar-item[data-v-7ba5bd90] {
    flex-grow: 0;
    flex-shrink: 0;
}

.navbar-item[data-v-7ba5bd90], .navbar-link[data-v-7ba5bd90] {
    color: rgba(255, 255, 255, 0.75);
    display: block;
    line-height: 1.5;
    padding: 0.5rem 1rem;
    position: relative;
}

a[data-v-7ba5bd90] {
    color: #6D90D6;
    cursor: pointer;
    text-decoration: none;
}

.logoutClass {
  border-color: transparent;
  background-color: transparent;
  color: white
}

#nav a, .logoutClass {
  font-family: "Montserrat",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
      font-size: 17px;
}
html {
    box-sizing: border-box;
    background-color: #fff;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
}

body {
    font-size: 1rem;
    line-height: 1.5;
    color: #6f6f6f;
}

body, code {
    font-weight: 400;
}
body, button, input, select, textarea {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif;
}


a {
    color: #6d90d6;
    cursor: pointer;
    text-decoration: none;
}

div {
    display: block;
}


*, :after, :before {
    box-sizing: inherit;
}


a:-webkit-any-link {
    color: white;
    cursor: pointer;
}


nav {
    display: block;
}


img {
    height: auto;
}
audio, embed, img, object, video {
    max-width: 100%;
}





.navbar[data-v-105478e3] {
    border-radius: 0;
}
.navbar.has-shadow {
    box-shadow: 0 2px 3px rgb(10 10 10 / 10%);
}
.navbar.is-primary {
    background-color: #6abfb0;
    color: #fff;
}
.menu-list a, .navbar {
    border-radius: 6px;
}
@media screen and (min-width: 1024px){
  .navbar {
    min-height: 3.25rem;
  }
}

@media screen and (min-width: 1024px){
.navbar, .navbar-end, .navbar-menu, .navbar-start {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.navbar {
    background-color: #6abfb0;
    min-height: 3.25rem;
    position: relative;
}



.navbar>.container {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 3.25rem;
    width: 100%;
}
@media screen and (min-width: 1216px){
.container {
    max-width: 1152px;
    width: 1152px;
  }
}
@media screen and (min-width: 1024px){
.container {
    max-width: 960px;
    width: 960px;
  }
}

.container {
    margin: 0 auto;
    position: relative;
}



@media screen and (min-width: 1024px){
.container>.navbar .navbar-brand, .navbar>.container .navbar-brand {
    margin-left: -1rem;
  }
}
.navbar-brand, .navbar-tabs {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    min-height: 3.25rem;
}



.navbar.is-primary .navbar-brand .navbar-link, .navbar.is-primary .navbar-brand>.navbar-item {
    color: #fff;
}
.navbar-brand .navbar-item[data-v-105478e3] {
    color: #fff;
    font-weight: 800;
}
.navbar .navbar-item, .navbar .navbar-link {
    font-family: "Montserrat",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    transition: all 300ms;
}
@media screen and (min-width: 1024px){
.navbar-item, .navbar-link {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

.navbar-item {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}





.navbar-brand .navbar-item .logo[data-v-105478e3] {
    margin-right: .75rem;
    width: 1.75rem;
}
.navbar-item img {
    max-height: 1.75rem;
}





@media screen and (min-width: 1024px){
.navbar-burger {
    display: none;
  }
}
.navbar-burger {
    cursor: pointer;
    display: block;
    height: 3.25rem;
    position: relative;
    width: 3.25rem;
    margin-left: auto;
}




@media screen and (min-width: 1024px){
.navbar-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-left: auto;
}
}
@media screen and (min-width: 1024px){
.navbar, .navbar-end, .navbar-menu, .navbar-start {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}



@media screen and (min-width: 1024px){
.container>.navbar .navbar-menu, .navbar>.container .navbar-menu {
    margin-right: -1rem;
  }
}
@media screen and (min-width: 1024px){
.navbar-menu {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
}
@media screen and (min-width: 1024px){
.navbar, .navbar-end, .navbar-menu, .navbar-start {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

.navbar-menu {
    display: none;
}



.navbar .navbar-item, .navbar .navbar-link {
    font-family: "Montserrat",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    transition: all 300ms;
}
@media screen and (min-width: 1024px){
  .navbar-item, .navbar-link {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.navbar-item {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}



.navbar .navbar-item, .navbar .navbar-link {
    font-family: "Montserrat",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    transition: all 300ms;
}
@media screen and (min-width: 1024px){
.navbar-item.has-dropdown {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
}
.navbar-item.has-dropdown {
    padding: 0;
}
@media screen and (min-width: 1024px){
.navbar-item, .navbar-link {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.navbar-item {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.navbar-item, .navbar-link {
    color: rgba(255,255,255,.75);
    display: block;
    line-height: 1.5;
    padding: .5rem 1rem;
    position: relative;
}


.navbar.is-primary .navbar-end .navbar-link, .navbar.is-primary .navbar-end>.navbar-item, .navbar.is-primary .navbar-start .navbar-link, .navbar.is-primary .navbar-start>.navbar-item {
    color: rgba(255,255,255,.75);
}
@media screen and (min-width: 1024px){
.navbar.is-primary .navbar-end .navbar-link, .navbar.is-primary .navbar-end>.navbar-item, .navbar.is-primary .navbar-start .navbar-link, .navbar.is-primary .navbar-start>.navbar-item {
    color: #fff;
}
}
.navbar .navbar-item, .navbar .navbar-link {
    font-family: "Montserrat",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    transition: all 300ms;
}
@media screen and (min-width: 1024px){
.navbar-item, .navbar-link {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.navbar-link {
    padding-right: 2.5em;
}
.navbar-item, .navbar-link {
    color: rgba(255,255,255,.75);
    display: block;
    line-height: 1.5;
    padding: .5rem 1rem;
    position: relative;
}
.bg-green {
    background: cadetblue !important;
}
</style>
