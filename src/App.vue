<script>
import axios from "axios";

export default{

data(){

}

methods:{
    getProjects(){
        axios.get('http://127.0.0.1:8000/api/projects')
    }
}

}
</script>

<template></template>

<style scoped></style>
