<template>
    <div>
        <button class="text-lg focus:outline-none py-3 w-72 rounded-md transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-200 hover:bg-pink hover:text-white" :class="[buttonColor, txtColor, buttonBorder]">{{ buttonLabel }}</button>
    </div>
</template>
<script>
 export default {
     props: {
         buttonColor: {
             type: String,
             required: false
         },
         txtColor: {
             type: String,
             required: false,
             default: 'text-black'
         },
         buttonBorder: {
             type: String,
             required: false
         },
         buttonLabel: {
             type: String,
             required: true,
         }
     }
 }
 </script>