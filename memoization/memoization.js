// stores data (value) by key 
async function cache_store(key, value) { 
} 
// retrieves data by key (if it exists) 
async function cache_retrieve(key) { 
} 
// fetches data from a slow data source 
async function slow_function(input) { 
} 


// runs faster than slow_function by using cache functions
 function memoize(slow_function) { 
     const fast_function = {};

     return (...args)=>{
        const result_key = JSON.stringify(args);
        //checks the cache.
        if(fast_function[result_key]){
            return fast_function[result_key];
        }
        //no cacheed value, we execute the function the save the  new result in cache.
        else{
            fast_function[result_key] = slow_function(...args);
            return fast_function[result_key];
        }
     }
    return fast_function[result_key]; 
} 
