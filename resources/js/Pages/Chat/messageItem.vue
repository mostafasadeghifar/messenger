<template>
    <div>
        {{ message.user.name }}: {{ message.message }}
    </div>
</template>

<script>
    export default {
            props: ['message'],
            created () {
                console.log(this.message.user.name);
            }
    }
</script>
