<template>
    <div>
        <h2 class="text-3xl font-bold underline">About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum. Assumenda repellat architecto laudantium 
           quisquam eum odit iure obcaecati, porro itaque unde eius optio magni maiores sed voluptatibus autem ut.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum. Assumenda repellat architecto laudantium 
           quisquam eum odit iure obcaecati, porro itaque unde eius optio magni maiores sed voluptatibus autem ut.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum. Assumenda repellat architecto laudantium 
           quisquam eum odit iure obcaecati, porro itaque unde eius optio magni maiores sed voluptatibus autem ut.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum. Assumenda repellat architecto laudantium 
           quisquam eum odit iure obcaecati, porro itaque unde eius optio magni maiores sed voluptatibus autem ut.
        </p>
        <p>Data = {{ data }}</p>
    </div>
</template>

<script setup>
/*
    const { data } = await useFetch('/api/ninja?name=Mario', {
        method: 'post',
        body: {
            age: 56
        }
    })
*/
    const { data } = await useFetch('/api/currency/IDR')
</script>

<style scoped>
</style>