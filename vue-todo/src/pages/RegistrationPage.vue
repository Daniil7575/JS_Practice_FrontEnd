<template>
    <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
        <div class="form-field">
            <label for="email">Email</label>
            <input v-model="email" id="email" type="email" required>
        </div>
        <div class="form-field">
            <label for="login">Login</label>
            <input v-model="login" id="login" type="text" required>
        </div>
        <div class="form-field">
            <label for="passw">Password</label>
            <input v-model="password" id="passw" type="text" required>
        </div>
        <div class="form-field">
            <label for="name">Name</label>
            <input v-model="name" id="name" type="text" required>
        </div>
        <button class="submit-btn" type="submit">Register</button>
        <div class="action-link">
            <span>Already have account? </span>
            <a @click="redirect" class="link-btn">Login</a>
        </div>
    </form>
</template>

<script>
import { doRegister } from '@/netClient/authService'

export default {
    name: 'RegistrationPage',
    data: () => ({
        email: '',
        login: '',
        password: '',
        name: 'name'
    }),
    methods:{
        async onFormSubmit(){
            try
            {
                const data = await doRegister(
                        this.login.trim(), 
                        this.password.trim(), 
                        this.email.trim(),
                        this.name.trim()
                    )
                console.warn({ data })
            }
            catch(error)
            {
                console.warn({ error })
            }
            this.$router.push('/login')
        },
        redirect(){
            this.$router.push('/login')
        }
    }
};

</script>