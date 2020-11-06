<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HomePage msg="Welcome to lottery App"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HomePage from '@/components/HomePage.vue'; // @ is an alias to /src

@Component({
    components: {
        HomePage,
    },
})
export default class Home extends Vue {
}
</script>
