<template>
    <form @submit.prevent='onFormSubmit' class="login">
        <div class="form-field">
            <label for="login">Login</label>
            <input v-model="login" id="login" type="text" required>
        </div>
        <div class="form-field">
            <label for="passw">Password</label>
            <input v-model="password" id="passw" type="text" required>
        </div>
        <button class="submit-btn" type="submit">Login</button>
        <div class="action-link">
            <span>No account? </span>
            <a @click="redirect" class="link-btn">Register</a>
        </div>
    </form>
</template>

<script>
import { doLogin } from '@/netClient/authService'

export default {
    name: 'LoginPage',
    data: () => ({
        login: '',
        password: ''
    }),
    methods :
    {
        async onFormSubmit(){
            try{
                const token = await doLogin(
                    this.login.trim(), 
                    this.password.trim()
                )
                console.warn(token)
                if (token) {
                    this.$router.push('/')
                }
            }
            catch (error){
                console.warn(error)
            }
        },
        redirect(){
            this.$router.push('/registration')
        }
    }
};

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->


