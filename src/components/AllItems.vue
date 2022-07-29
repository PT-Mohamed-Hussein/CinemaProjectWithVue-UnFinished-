<template>
<div class="sub-container">
  <div class="item" v-for="movie in AllMovies" :key="movie.id">
    <the-item :title="movie.title" :rate="movie.rate" :picture="movie.picture" :category="movie.category" :dir="movie.dir" :duration="movie.duration" :featured="movie.featured" :movieID="movie.id"></the-item>
  </div>
</div>
</template>

<script>
import TheItem from './TheItem.vue';
export default {
  components: {TheItem},
  data() {
    return {
      AllMovies: [
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          category: 'action',
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-1",
          featured: true
        },
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          category: 'horror',
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-2",

        },
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-2",
          category: 'drama'
        },
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          category: 'action',
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-1",
        },
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          category: 'action',
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-2",
        },
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          category: 'action',
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-2",
        },
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          category: 'action',
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-1",
        },
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          category: 'action',
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-2",
        },
        {
          title: "Spider Man No Way Home",
          rate: 5,
          picture: "https://i.imgur.com/H5WhVj6.jpg",
          category: 'action',
          dir: "Jon Watts",
          duration: "2hrs",
          id: "film-2",
        },
      ],
    }
  }
};
</script>

<style scoped>
  .sub-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
    justify-content: center;
  }
  .item{
    width: 20%;
    margin-bottom: 10px;
    position: relative;
  }
</style>