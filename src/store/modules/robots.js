import axios from 'axios';


export default {
    //state is always namespaced, even if we dont use set to namespaced,
    //but mutations, actions and getters are only namespaced if this is set to true
    namespaced: true,//adding namespace so if we have two actions with same name we can refer to a spacif module
    state:{
        cart:[],
        parts: null,
        foo: 'robots-foo',
    },
    //all changes to data in a store must happen tru a mutation
    //you cant just access the store's state directly and start changing data
    //all must go through a mutation
    mutations:{
        addRobotToCart(state,robot){
            state.cart.push(robot);
        },
        updateParts(state, parts){
            state.parts = parts;
        }
    },
    actions: {
        //the first parameter to an action function is a context object,
        //it exposes several items for working with the state
        //state, getters, commit, dispatch functions
        getParts({commit}){
            //CORS issues becuse its different ports
            //local host does not work in production, 
            //in prpoduction you host your application and api on same domain and port
           // axios.get('http://localhost:8081/api/parts')
    
           //but Vue allows us to configure a built-in-proxy
           //vue.config.js
            axios.get('/api/parts')//when this call finished we want to mutate our state, we do that thourgh mutations
                .then(result => commit('updateParts', result.data))
                .catch(console.error);
        },
        addRobotToCart({commit, state}, robot){
            //array takes all items in cart and apends our new robot to array
            const cart = [...state.cart, robot];
            //axios.post('/api/cart', cart)
            
            //returning promise to be used to know when robot was added to cart
            // so we know when  to navigate from build page to cart page
           return axios.post('/api/cart', cart)
            .then(() => commit('addRobotToCart', robot));//using mutation
        }
    },
    getters: {
        cartSaleItems(state){
            return state.cart.filter(item => item.head.onSale);
        },
        foo(state){
            return `robots-getter/${state.foo}`;
        }
    },
}