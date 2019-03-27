import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import MyNotes from '../home/MyNotes.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from   '../parts/RobotArms.vue';
import RobotBases from  '../parts/RobotBases.vue';
import RobotHeads from  '../parts/RobotHeads.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import SidebarStandard from "../sidebars/SidebarStandard.vue";
import SidebarBuild from "../sidebars/SidebarBuild.vue";
import ShoppingCart from "../cart/ShoppingCart.vue";


Vue.use(Router);

export default new Router({
    //turning on html5 history mode
    //client side knows about no# in the url, but server needs to be configured
    // to recognize urls without # and return index.html when you load any urls without the #
    mode:'history',
    routes:[{
        path:'/',
        name:'Home',
        //component: HomePage,
        components: {
            default:HomePage,
            sidebar:SidebarStandard,
        },
    },
    {
        path:'/build',
        name:'Build',
        //component: RobotBuilder,
        components: {
            default:RobotBuilder,
            sidebar:SidebarBuild,
        },
    },
    //order or routes is important bc vue will pick up first this route
    // before thinking the parameter for the next route is a partType
    {
        path:'/parts/browse',
        name:'BrowseParts',
        component: BrowseParts,
        children:[            
            {
                path:'arms',
                name:'BrowseArms',
                component: RobotArms,
            },
            {
                path:'bases',
                name:'BrowseBases',
                component: RobotBases,
            },
            {
                path:'heads',
                name:'BrowseHeads',
                component: RobotHeads,
            },
            {
                path:'torsos',
                name:'BrowseTorsos',
                component: RobotTorsos,
            },
        ]
    },
    {
        path:'/parts/:partType/:id',
        name:'Parts',
        component: PartInfo,
        props: true,
        //adding a robot guard to prevent from navigatin when wrong info is passed
        //this can be done in the component instead(use beforerouteleave guard example @RobotBuilder.vue)
        //or coudl define it globally 
        beforeEnter(to, from, next){
            //check if is an Integer and Cast parameter from string to Number
            const isValidId = Number.isInteger(Number(to.params.id));
            next(isValidId);
        }
    },
    {
        path:'/cart',
        name:'Cart',
        component: ShoppingCart,
    },
    {
        path:'/notes',
        name:'notes',
        component: MyNotes,
    },
],
});