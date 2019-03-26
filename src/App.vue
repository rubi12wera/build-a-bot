<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link active-class="myRouterLink" class="nav-link" :to="{name:'Home'}" exact>
            <img class="logo" src="./assets/build-a-bot-logo.png">
            Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="myRouterLink" class="nav-link" :to="{name:'Build'}" exact>
           Build
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="myRouterLink" class="nav-link" :to="{name:'BrowseParts'}" exact>
           BrowseParts
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link active-class="myRouterLink" class="nav-link" to="/cart" exact>
           Cart
            </router-link>
            <div class="cart-items">
              {{cart.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
      <!-- <RobotBuilder/> introducing router-->
      <router-view/><!-- name of 'defaul' is given automatically for this one -->
      </main>
    </div>
    <!-- Uncomment this if you wnat to review accessing namespacing modules getters  -->
  <!-- <div>
    <h3>Reminder that even if a module, "users" in this case, is not namespaced it has its own namespaced state</h3>
    Root Foo: {{rootFoo}}<br/>
    Robots Foo: {{robotsFoo}}<br/>
    Users Foo: {{usersFoo}}<br/>
    <br/>
    Root Getter Foo:    {{rootGetterFoo}}<br/>
    Robots Getter Foo:{{robotsGetterFoo}}<br/>
    Users Gtter Foo:   {{usersGetterFoo}}
    <span style="color: blue" >
      This doesnt display a getter bc we are trying to access a namedspaced getter on a non namespaced module
    </span><br/>
    <p >
      On the console we are getting an error <span style="color: red" > "duplicate getter key: foo"</span>,<br/>
      this is because the users module and the root store are sharing the same namespace(the root store)<br/>
       and we have a getter with same name in both modules sharing  a space name.<br/>
       The state that is passed into mutations,getters and actions is always teh local state, so dont forget to define your variables. 
    </p>
    <br/>
    Robots Getter Foo:{{rootGetterFoo2}}<br/>
    <p>We get this from the root State, by accesing the rootState paramter in  the user's getter.</p>
  </div> -->
  </div>
</template>

<script>
//import HomePage from './home/HomePage.vue'
//import RobotBuilder from './build/RobotBuilder.vue'

import {mapState, mapGetters} from 'vuex';

export default {
  name: 'app',
  computed:{
    cart(){
      //return this.$store.state.cart;
      return this.$store.state.robots.cart;//moved cart to modules
    },
    /* rootFoo(){
     return this.$store.state.foo;
    },
    robotsFoo(){
     return this.$store.state.robots.foo;
    },
    usersFoo(){
     return this.$store.state.users.foo;
    }, *///Replacing this with mapState syntax

    //...mapState(['foo']),
    //if we need to rename props we use object sintax
    ...mapState({
      rootFoo: 'foo',
      robotsFoo: state => state.users.foo}),
      //another way to do it is, it only works with namespaced modules
    ...mapState('robots', {usersFoo : 'foo'}),
    /* rootGetterFoo(){
     return this.$store.getters.foo;
    },
    robotsGetterFoo(){
     return this.$store.getters['robots/foo'];    
    },*///spreading mapGetters helpers
  ...mapGetters({rootGetterFoo:'foo'}),
  ...mapGetters('robots',{robotsGetterFoo:'foo'}),
    usersGetterFoo(){
     return this.$store.getters['users/foo'];     
    },
    rootGetterFoo2(){
    return this.$store.getters.foo2;    
    } 
    
  },
  /* components: {
    RobotBuilder
  } Introducing Router */
}
</script>
<style>
body{
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
}
main{
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color: inherit;
}
/* .router-link-active{
  color:white;
} we can use our own class name for active links, by adding and active class attribute to the router elemnt*/
.myRouterLink{
  color:white;
} 
.container{
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside{
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items{
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
