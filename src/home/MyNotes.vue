<template>
  <div class="home">
        <p>
        'Npm run serve'<br/>
        'Npm start' for back end server<br/>
        Ctrl c to to stop
        </p>
        <div>
                <h2>
                Git repository
                </h2>
            <p>
            Git add . <br/>
            Git commit -m "first commit" <br/>
            Git pull origin master <br/>
            Git push origin master
            </p>
        </div>
        <div>
                <h1>
                Installing node,
                </h1>
            <p>
                using nvm(node version manager) in case you need to switch between node versions to avoid any conflicts.<br/>
                 Then type "nvm install (version of node)"
                 Then tell nvm to use (version of node): type nvm use(version)

            </p>
        </div>
        <div>
            <p>	v-if vs v-show
                Use v-if if elemnt is not expensive to re-render, like a simple span element
                Use v-show (display:none) for expensive elements such as a components with children components  with children components
            </p>
        </div>
        <div>
            <p> /* eslint-disable */ v-for with v-if Note that it’s not recommended to use v-if and v-for together
                your intent is to conditionally skip execution of the loop, you can place the v-if on a wrapper element
            </p>
            https://vuejs.org/v2/guide/list.html#v-for-with-v-if
        </div>
        <div>
            <p>	https://vue-loader.vuejs.org/guide/scoped-css.html
            If style is scoped Vue wont affect child components, but CSS inheritance such as color, might affect child components but that is CSS inheritance applying those styles, not Vue.
            <br/>
            In a parent component you do have access to classes from child components if you need to style them from the parent component.
            <br/>
            Some pre-processors, such as Sass, may not be able to parse >>> properly. In those cases you can use the /deep/ or ::v-deep combinator instead - both are aliases for >>> and work exactly the same

            </p>
        </div>
        <div>
            <p>lifeCycle: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
            </p>
        </div>
        <div>
            <p>Mixings are a way to share functionality among multiple components
            </p>
        </div>
        <div>
            <h1>                
                Vue-router:
            </h1>
            <p>'npm install vue-router --save'
            </p>
        </div>
        <div>
            <p>	No hash in your urls:  https://router.vuejs.org/guide/essentials/history-mode.html 
                <br/>
                To get rid of # in your URLs<br/>
                export default new Router({<br/>
                //turning on html5 history mode<br/>
                //vue recognizes http://localhost:8080/#/parts/browse<br/> 
                //client side  knows about no# in the url, but server needs to be configured<br/>
                // to recognize urls without # and return index.html when you load any urls without the #<br/>
                mode:'history',

            </p>
        </div>
        <div><h1>
            Aync Data:
            </h1>
            <p>
                'Npm run serve'<br/>
                'Npm start' for back end server<br/>
                Ctrl c to to stop<br/>
                In vue.config.js configured webpack to be able to use local backend server for APIs<br/>
                This example is being used in robots.vue module<br/>
                //webpack dev server: webpack config bc Vue is using webpack dev config<br/>
                //re-start server when modifying proxy
            </p>
        </div>
        <div>
                <h1>
                    VUEX: to manage state and server communication
                </h1>
            <p>
                Adding additional  features such as vuex:<br/>
                From Console/command run<br/>
                'npm install vuex --save'<br/>
                To check version run 'npm list vuex', same for vue versions<br/>
            </p>
        </div>
    </div>
  
</template>