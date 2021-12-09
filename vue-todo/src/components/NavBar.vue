<template>
    <div id="nav">
        <div class="link-wrapper">
            <div class="nav-links">
                <router-link class="nav-link" exact to="/">Main</router-link>
                <router-link class="nav-link" to="/info">Cards</router-link>
            </div>
            <a @click="onLogoutClicked" class="logout nav-link">
                Logout
            </a>
        </div>
    </div>
</template>

<script>
import { doLogout } from '@/netClient/authService'
export default {
    name: 'NavBar',
    methods: {
        async onLogoutClicked() {
            try{
                await doLogout();
                this.$router.push("/login")
            }catch (error){
                console.error( { error } )
            }
        }
    }
};
</script>
