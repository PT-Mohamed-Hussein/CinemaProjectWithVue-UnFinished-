<template>
    <div class="sub-cont">
        <aside class="sidebar">
            <div class="film-cover">
                <img class="img-preview-film-cover" :src="Movie.picture" alt="">
            </div>
            <div class="film-title">{{Movie.title}}</div>
            <div class="film-info">
                <div class="film-dir">By {{Movie.dir}}</div>
                <div class="film-duration"> <font-awesome-icon icon="fa-solid fa-clock" /> {{Movie.duration}}</div>
            </div>
            <div class="rate-cont">
               <font-awesome-layers full-width class="fa-3x">
                    <font-awesome-icon icon="fa-solid fa-star"/>
                    <font-awesome-layers-text class="gray8" transform="down-1 right-1 shrink-8" :value="Movie.rate" />
                </font-awesome-layers>
            </div>
            <div class="story-cont">
                {{Movie.story}}
            </div>
            <div class="trailer-cont" :class="ActiveTrailer ? 'active' : ''">
                <h3 class="trailer-title">
                    Watch Trailer 
                </h3>
                <iframe width="100%" height="315"
                    :src="Movie.trailer">
                </iframe>
            </div>
        </aside>
        <section class="main-content">
            <h1 class="reservation-form-title">{{Movie.title}} Ticket Reservation Form</h1>
            
        </section>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        filmId () {
            return this.$route.params.id.substring(1, this.$route.params.id.length)
        },
        color1() {
            return this.$store.getters.getPrimaryColor;
        },
        color2() {
            return this.$store.getters.getSecondaryColor;
        },
    },
    data() {
        return {
            Movie:{
                title: "Spider Man No Way Home",
                rate: 5,
                picture: "https://i.imgur.com/H5WhVj6.jpg",
                story:
                    "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
                dir: "Jon Watts",
                duration: "2hrs",
                id: "film-1",
                trailer: 'https://www.youtube.com/embed/iU1W0QZod5s'
            }, 
        }
    },
}
</script>

<style scoped>
    .sub-cont{
        width: 100%;
        display: flex;
    }
    .sidebar{
        width: 30%;
        display: flex;
        flex-direction: column;
        background-color: v-bind(color1);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    .film-cover{
        width: 50%;
        margin: 10px auto;
        background: var(--bg-img) center no-repeat;
        background-size: cover;
    }
    .img-preview-film-cover{
        width: 100%;
        aspect-ratio: 1/1;
        border: 1px solid #fff;
    }
    .main-content {
        width: 65%;
    }
    .film-title{
        color: v-bind(color2);
        font-size: 1.2em;
        font-weight: 600;
        text-align: center;
    }
    .film-info{
        display: flex;
        color: v-bind(color2);
        justify-content: space-evenly;
        margin-top: 10px ;
        align-items: center;
    }
    .film-dir{
        font-weight: 600;
        font-size: 0.7em;
    }
    .film-duration{
        padding: 5px 10px;
        border: 1px solid v-bind(color2);
    }
    .rate-cont{
        color: gold;
        margin: auto;
    }
    .gray8{
        color: #333;
    }
    .story-cont{
        color: v-bind(color2);
        padding: 10px;
        text-align: justify;
        letter-spacing: 0.1em;
        line-height: 1.2em;
    }
    .trailer-cont{
        color: v-bind(color2);
        text-align: center;
        margin: auto;
        transition: all 0.3s;
        width: 95%;
    }

    .reservation-form-title{
        font-weight: 600;
        width: 100%;
        text-align: center;
        letter-spacing: 0.1em;
        font-size: 1.7em;
    }
</style>