<template>
    <div>
        <br>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-6 noPadding d-flex align-items-center">
                        <img class="w-100" src="../assets/pictures/Wohnzimmer.jpeg">
                    </div>
                    <div class="col-6  d-flex align-items-center">
                        <p class="PictureTextRight">
                            <b>Gemütliches Wohnzimmer</b><br>
                            mit SAT-TV und Stereoanlage,
                            Kaminofen (mit Feuerholz und Kohle)
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"/>
        </div>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-6  d-flex align-items-center">
                        <p class="PictureTextLeft">
                            <b>2 Schlafzimmer</b><br>
                            mit je einem Doppelbett und Kleiderschrank,
                            Bettwäsche vorhanden,
                            Babyreisebett auf Nachfrage
                        </p>
                    </div>
                    <div class="col-6 noPadding d-flex align-items-center">
                        <img class="w-100" src="../assets/pictures/Schlafzimmer.jpeg">
                    </div>
                </div>
            </div>
            <div class="col-lg-3"/>
        </div>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-6 noPadding d-flex align-items-center">
                        <img class="w-100" src="../assets/pictures/Badezimmer.jpeg">
                    </div>
                    <div class="col-6 d-flex align-items-center">
                        <p class="PictureTextRight">
                            <b>Badezimmer</b><br>
                            mit Dusche und WC,
                            Föhn und Handtücher vorhanden
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"/>
        </div>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-6  d-flex align-items-center">
                        <p class="PictureTextLeft">
                            <b>Küche</b><br>
                            Herd mit 2 Kochfeldern,
                            Kühlschrank mit Gefrierfach,
                            Kaffeemaschine, Wasserkocher, Toaster,
                            Geschirr, Töpfe und Pfannen
                        </p>
                    </div>
                    <div class="col-6 noPadding d-flex align-items-center">
                        <img class="w-100" src="../assets/pictures/Kueche.jpeg">
                    </div>
                </div>
            </div>
            <div class="col-lg-3"/>
        </div>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-6 noPadding d-flex align-items-center">
                        <img class="w-100" src="../assets/pictures/Gang.jpeg">
                    </div>
                    <div class="col-6 d-flex align-items-center">
                        <p class="PictureTextRight">
                            <b>Veranda mit Blick in den Garten</b><br>
                            Esstisch, Radio, 
                            Mikrowelle mit Backofen
                            und Garderobenschrank
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"/>
        </div>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-6  d-flex align-items-center">
                        <p class="PictureTextLeft">
                            <b>Großer Garten</b><br>
                            Terasse, Gartenmöbel,
                            Grill, Hollywoodschaukel,
                            Sandkasten und Schaukel,
                            abschließbarer Fahrradschuppen mit
                            4 Fahrrädern
                        </p>
                    </div>
                    <div class="col-6 noPadding d-flex align-items-center">
                        <img class="w-100" src="../assets/pictures/Garten.jpeg">
                    </div>
                </div>
            </div>
            <div class="col-lg-3"/>
        </div>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-6 noPadding d-flex align-items-center">
                        <img class="w-100" src="../assets/pictures/Grundriss.png">
                    </div>
                    <div class="col-6 d-flex align-items-center">
                        <p class="PictureTextRight">
                            <b>Grundriss</b><br>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"/>
        </div>
    </div>
</template>

<script>
export default {
  name: "PicturesView",
  data(){
    return{

    };
  },
  components: {
    
  },
  methods: {

  },
  created(){

  }
}
</script>

<style lang="scss">
    .noPadding{
        padding: 0px !important;
    }

    p{
        font-weight: 500;
    }

    .PictureTextLeft{
        padding-left: 7px;
    }

    .PictureTextRight{
        padding-right: 7px;
    }

    @media only screen and (max-width: 480px) {
        p{
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
        p{
            font-size: 1.2rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 992px){
        p{
            font-size: 1.5rem;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px){
        p{
            font-size: 1.3rem;
        }
    }

    @media only screen and (min-width: 1200px){
        p{
            font-size: 1.8rem;
        }
    }
</style>