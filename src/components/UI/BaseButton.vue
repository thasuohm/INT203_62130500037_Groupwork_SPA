<template>
    <button
        class="BaseButton"
        @click="sentVal"
        :class="[borderColor, bgColor, hover, txtColor]"
    >{{ labels }}</button>
</template>
<script>
export default {

    props: {
        labels: {
            type: String

        },
        borderColor: {
            type: String,
            default: 'border-blue-500'
        },
        bgColor: {
            type: String,
            default: 'bg-blue-500'
        },
        hover: {
            type: String,
            default: 'hover:bg-blue-600'
        },
        txtColor: {
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