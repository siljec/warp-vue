<template>
    <nav class="sidebar flex flex-col py-32">
      <router-link to="/" class="sidebar-link">Home</router-link>
      <router-link to="/button" class="sidebar-link">Button</router-link>
      <router-link to="/breadcrumbs" class="sidebar-link">Breadcrumbs</router-link>
      <router-link to="/forms" class="sidebar-link">Forms</router-link>
      <router-link to="/modal" class="sidebar-link">Modal</router-link>
      <router-link to="/pill" class="sidebar-link">Pill</router-link>
    </nav>
</template>


<style>
.sidebar {
  width: 250px;
  background-color: #f7f7f7;
  border-right: solid 1px #e3e3e3;
  float: left;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.sidebar > * {
  padding-left: 2rem;
  padding-right: 2rem;
}
a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  white-space: pre;
  padding: 0.5rem;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  gap: 1rem;
}
nav a:hover {
  background: #e3e3e3;
}
</style>