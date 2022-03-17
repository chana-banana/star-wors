<template>
    <div>
        <div class="bio-wrapper">
            <h4>{{ person.name }}</h4>
            <div><h5>Birth Year: &nbsp;</h5><h5>{{ person.birth_year }}</h5></div>
            <div><h5>Hair Color: &nbsp;</h5><h5>{{ person.hair_color }}</h5></div>
            <div><h5>Skin Color: &nbsp;</h5><h5>{{ person.skin_color }}</h5></div>
            <div><h5>Eye Color: &nbsp;</h5><h5>{{ person.eye_color }}</h5></div>
            <div><h5>Gender: &nbsp;</h5><h5>{{ person.gender }}</h5></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            person: Object
        }
    }
</script>

<style scoped>
.bio-wrapper {
    width: 243px;
    min-height: 344px;
    border-style: solid;
    border-color: #ffe81f;
    /* border-radius: 13px; */
    border-width: 2px;
    margin: 1rem 3rem;
    padding: 1rem;
    position: relative;
}
</style>