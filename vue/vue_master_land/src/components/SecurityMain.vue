<template>
    <div>
        <mt-header fixed title="住房保障">
            <router-link to="" slot="left">
                <mt-button @click="$router.back(-1)" icon="back"></mt-button>
                <!--<mt-button @click="handleClose">关闭</mt-button>-->
            </router-link>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
    </div>
</template>

<script>
    export default {
        name: "SecurityMain",
        data() {
            return {};
        },
        created() {

        },
        methods: {}
    }

</script>

<style scoped>

</style>