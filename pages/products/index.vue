<template>
    <div>
        <h3 class="text-3xl font-bold underline">List of Products</h3>
        <div class="grid grid-cols-5 gap5">
            <div v-for="(p, pIndex) in products" v-bind:key="pIndex">
                <cProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { data: products } = await useFetch('https://fakestoreapi.com/products/')
    useHead({
      title: 'Toko NUXT-JS | List of Products',
      meta: [{
        name: 'description',
        content: 'List of Products'
      }],
    })

</script>

<style scoped></style>