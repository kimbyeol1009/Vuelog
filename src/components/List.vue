<template>
<div v-for = "(a,i) in 블로그글" :key="i">
<h5 @click="$router.push('/detail/'+i)">{{ a.title }}</h5>
<p>{{a.date}}</p>

<!-- <h5 @click="$router.push('/detail/0')">{{블로그글[0].title}}</h5>
<p>{{ 블로그글[0].date}}</p>
</div>
<div>
<h5>{{블로그글[1].title}}</h5>
<p>{{ 블로그글[1].date}}</p>
</div>
<div>
<h5>{{블로그글[2].title}}</h5>
<p>{{ 블로그글[2].date}}</p> -->
</div>

</template>

<script>
export default {
    name : 'ListComponent',
props : {
    블로그글 : Array,
}
}
</script>

<style>

</style>