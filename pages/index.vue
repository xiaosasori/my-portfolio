<template>
  <div class="flex flex-col items-center justify-center lg:space-x-12 lg:flex-row lg:mx-auto" style="min-height: 80vh">
    <!-- left -->
    <img class="block rounded-full shadow-2xl w-30vh lg:w-50vh" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="avatar">
    <!-- <img class="block rounded-full shadow-2xl w-30vh lg:w-50vh" src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/80818896_2866608610120833_193228091860975616_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5uWOvujFmB0AX8DanVW&_nc_oc=AQl2snZIJH2eQuM_l68AaKVHGajv3fkWbQArm0HHvgEsmMlsCPTBWLj9zCc1elOl9xs&_nc_ht=scontent-nrt1-1.xx&oh=7cf5e1ff16bb011daf16fc75da83536e&oe=608A7056" alt="avatar"> -->
    <!-- <img class="block rounded-full shadow-2xl w-30vh lg:w-50vh" src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="avatar"> -->
    <!-- right -->
    <div class="mt-10">
      <h1 class="text-4xl font-bold text-center dark:text-gray-100 lg:text-5xl lg:text-left">
        Hi, I'm <span class="text-color">Minh Anh</span>
        <span class="wave_hand">👋🏻</span>
      </h1>
      <h2 class="mt-2 text-2xl font-semibold leading-normal text-center dark:text-gray-300 lg:text-left">
        I'm a full-stack developer.
      </h2>
      <p class="text-2xl font-semibold text-center dark:text-gray-300 lg:text-left">
        I build things for the web.
      </p>
      <ul class="flex flex-col items-start px-4 mt-4 text-lg text-gray-900 dark:text-gray-300">
        <li class="block w-full px-4 py-2 text-xl">
          <span class="mr-1" aria-label="location">🏢</span>
          <span>Japan</span>
        </li>
        <li class="block w-full px-4 py-2 text-xl">
          <span class="mr-1" aria-label="heart">💖</span>
          <span>VueJS, TailwindCSS</span>
        </li>
        <li class="block w-full px-4 py-2 text-xl">
          <a href="mailto:anhnm896@gmail.com?subject=Let's work on something together!">
            <span class="mr-1" aria-label="email">✉️</span>
            <span>anhnm896@gmail.com</span>
          </a>
        </li>
      </ul>
      <!-- social -->
      <div class="flex mt-8 dark:text-gray-300 justify-evenly">
        <a class="transition dark:hover:text-tdark hover:text-purple-600" rel="noopener noreferrer" href="https://github.com/xiaosasori" target="_blank">
          <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.58819 2 12.2529C2 16.7899 4.8625 20.6219 8.8375 21.9804C9.3375 22.0701 9.525 21.7625 9.525 21.4934C9.525 21.2499 9.5125 20.4425 9.5125 19.5838C7 20.058 6.35 18.9558 6.15 18.3791C6.0375 18.0843 5.55 17.1743 5.125 16.9308C4.775 16.7386 4.275 16.2644 5.1125 16.2516C5.9 16.2388 6.4625 16.9949 6.65 17.3025C7.55 18.8533 8.9875 18.4175 9.5625 18.1484C9.65 17.4819 9.9125 17.0334 10.2 16.777C7.975 16.5207 5.65 15.6364 5.65 11.7147C5.65 10.5997 6.0375 9.67689 6.675 8.95918C6.575 8.70286 6.225 7.65193 6.775 6.24215C6.775 6.24215 7.6125 5.97301 9.525 7.29308C10.325 7.06239 11.175 6.94704 12.025 6.94704C12.875 6.94704 13.725 7.06239 14.525 7.29308C16.4375 5.9602 17.275 6.24215 17.275 6.24215C17.825 7.65193 17.475 8.70286 17.375 8.95918C18.0125 9.67689 18.4 10.5868 18.4 11.7147C18.4 15.6492 16.0625 16.5207 13.8375 16.777C14.2 17.0975 14.5125 17.7126 14.5125 18.6738C14.5125 20.0452 14.5 21.1474 14.5 21.4934C14.5 21.7625 14.6875 22.0829 15.1875 21.9804C17.1727 21.2933 18.8977 19.9852 20.1198 18.2402C21.3419 16.4952 21.9995 14.4012 22 12.2529C22 6.58819 17.525 2 12 2Z" fill="currentColor" /></svg>
        </a>
        <a class="transition dark:hover:text-tdark hover:text-purple-600" rel="noopener noreferrer" href="https://codepen.io/xiaosasori" target="_blank">
          <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m24 7.598c-.044-.264-.08-.47-.36-.641-11.449-6.791-11.287-7.297-12.03-6.848-8.677 5.394-11.092 6.597-11.439 7.017-.315.323-.171.818-.171 8.298-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029 11.224-7.956 11.497-7.636 11.478-8.375 0 0-.012-7.927 0-7.826zm-1.5 6.491-3.876-2.359 3.876-2.697zm-5.277-3.212-4.473-2.722v-6.07l9.126 5.555zm-5.223 3.633-3.876-2.697 3.876-2.359 3.876 2.359zm-.75-12.426v6.074c-1.739 1.079-3.209 1.98-4.451 2.734l-4.675-3.252zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32v-5.029zm1.33.924 4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z" /></svg>
        </a>
        <a class="transition dark:hover:text-tdark hover:text-purple-600" rel="noopener noreferrer" href="https://www.facebook.com/Light.ENMA" target="_blank">
          <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
        </a>
        <a class="transition dark:hover:text-tdark hover:text-purple-600" rel="noopener noreferrer" href="https://www.linkedin.com/in/anhnm896" target="_blank">
          <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
.text-color {
  background: -webkit-linear-gradient(135deg,#8d53ff,#ca6be6);
    background-clip: border-box;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
color: #181521;
}
.wave_hand {
  animation-name: home_wave;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}
@keyframes home_wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
