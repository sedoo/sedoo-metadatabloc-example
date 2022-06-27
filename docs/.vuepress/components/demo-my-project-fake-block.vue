
<template>
    <v-app>
        <MyProjectFakeBlock :metadata="metadata1" :theme="theme" :language="language"></MyProjectFakeBlock>
    </v-app>
</template>

<script>
import MyProjectFakeBlock from "../../../src/lib/modules/myproject-fake-block/myproject-fake-block.vue";
export default {
    props: {
        language:{
            type: String,
            default: "en"
        } 
    },
    data() {
         return {
                metadata1: {
                    id: "4ace15fe-509c-40e5-9709-47926b757bd0"
                },
                theme: {
                    primaryColor: "#f39c12",
                    secondaryColor: "#AAA"
                }
          };
     },
    
    components: { MyProjectFakeBlock },
    methods: {
       
    },
};
</script>

<style scoped>
</style>