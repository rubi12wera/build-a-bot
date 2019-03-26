<template>
    <div>
        <h1> {{part.title}}</h1>
        <div> {{part.description}}</div>
    </div>
</template>
<script>
//import parts from "../data/parts";
import getPartsMixin from './get-parts-mixin';

export default {
    name:'PartInfo',
    mixins: [getPartsMixin],

   // props: ['partType', 'id'], //using decoupling component from the routes
    props: {
        partType: { type: String},
        id:{
            type:[Number, String],
            validator(value) {//added a validator to make sure our ids are valid ids
                return Number.isInteger(Number(value));
            }
            },
    },
    computed:{
        part(){
            /* const partType = this.$route.params.partType;
            const id = this.$route.params.id; */
            //using destructuring would look like this
            //const {partType, id} = this.$route.params;
            const {partType, id} = this;//using decoupling components form the routes
           // return parts[partType].find(part => part.id === +id); //casting id to be a number by adding +
            return this.parts[partType].find(part => part.id === +id); 
        }
    },
  
};
</script>

