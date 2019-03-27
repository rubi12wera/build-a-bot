// function applyStyle(element, binding){
//     /* 1st way using args */
//     /* if(binding.arg !== 'position') return;
//     Object.keys(binding.modifiers).forEach((key) => {
//         element.style[key] = '5px';
//     }) */
//     /* 2nd way */
//     Object.keys(binding.value).forEach((position) => {
//         element.style[position] = binding.value[position];
//     });
//     element.style.position = 'absolute';

//     /* now these are being passed as data in our directive */
//     /* element.style.bottom = '5px';
//     element.style.right = '5px'; */
// }

/* export default{    
    //acces to second parameter throuhg binding which has properties {arg, modifiers} 
    bind:(element, binding)=> {
       applyStyle(element, binding);
    },
    update:(element,binding) =>{
        applyStyle(element, binding);
    },
    //inserted, componentUpdated, unbind
} */
/* shorthand syntax since our directive uses bind and update lifecycle hooks*/
export default function(element, binding) {
    Object.keys(binding.value).forEach((position) => {
        element.style[position] = binding.value[position];
    });
    element.style.position = 'absolute';
}