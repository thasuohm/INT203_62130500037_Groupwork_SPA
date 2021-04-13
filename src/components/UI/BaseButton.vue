<template>
    <button
        class="BaseButton"
        @click="sentVal"
        :class="[bordercolor, bgcolor, hover, txtcolor]"
    >{{ labels }}</button>
</template>
<script>
export default {

    props: {
        labels: {
            type: String

        },
        bordercolor: {
            type: String,
            default: 'border-blue-500'
        },
        bgcolor: {
            type: String,
            default: 'bg-blue-500'
        },
        hover: {
            type: String,
            default: 'hover:bg-blue-600'
        },
        txtcolor: {
            type: String,
            default: 'text-white'
        },



    }
    ,
    methods: {
        sentVal() {
            this.$emit('btn-click', {
                labels: this.labels
            })

        }
    },
}
</script>