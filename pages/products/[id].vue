<template>
    <div>
        <Head>
            <Title>Toko NUXT-JS | {{  product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <cProductDetails :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const { data: product } = await useFetch('https://fakestoreapi.com/products/'+id)
    if(!product.value) {
        throw createError({
            statusCode: 404, 
            statusMessage: "Product " + id +" not found..!!!"
        })
    }
    definePageMeta({
        layout: 'products'
    })

</script>

<style scoped>
</style>