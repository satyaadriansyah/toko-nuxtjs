<template>
    <div>
        <header class="shadow-sm bg-amber-100">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Toko NUXT-JS</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Product</NuxtLink></li>            
                </ul>
            </nav>
        </header>
        <!-- content are here.. -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<style scoped>
    .router-link-active {
        color: green;
    }
    h2 {
        margin: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px;
    }
</style>