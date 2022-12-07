<template>
    <div>
        <br>
        <div class="d-flex justify-content-center">
            <h1><u><b>Das Dorf Reinharz</b></u></h1>
        </div>
        <br>
        <div class="row">
            <div class="col-md-3"/>
            <div class="col-md-6">
                <img class="w-100" src="../assets/pictures/Reinharz.jpg">
            </div>
            <div class="col-md-3"/>
        </div>
        <br>
        <div class="row">
            <div class="col-md-3"/>
            <div class="col-md-6 h4 d-flex">
                <p class="text-center">Das Dorf Reinharz, umgeben von Nadel- und Laubwäldern befindet sich mitten
                im Naturpark Dübener Heide, vier Kilometer westlich von Bad Schmiedeberg
                gelegen. Von weitem ist der 68 Meter hohe Turm des Wasserschlosses zu Reinharz
                sichtbar. Der Schloßpark mit dem Brauhausteich sowie seltenen und alten Bäumen
                bildet den Übergang zu den Wiesen, Wäldern und Mühlen in der Landschaft.</p>
            </div>
            <div class="col-md-3"/>
        </div>
        <br>
        <div class="d-flex justify-content-center">
            <h2 class="text-center"><b>Weitere Sehendswürdigkeiten in der Nähe:</b></h2>
        </div>
        <div class="d-flex justify-content-center">
            <ul class="nav">
                <li class="nav-item h5"><a class="nav-link" target="_blank" href="https://reinharz.de/">Schloss Reinharz</a></li>
                <li class="nav-item h5"><a class="nav-link" target="_blank" href="https://bad-schmiedeberg.de/">Bad Schmiedeberg</a></li>
                <li class="nav-item h5"><a class="nav-link" target="_blank" href="http://www.woerlitz-information.de/woerlitz-de/ho/index.php">Wörlitzer Park</a></li>
                <li class="nav-item h5"><a class="nav-link" target="_blank" href="https://lutherstadt-wittenberg.de/">Lutherstadt Wittenberg</a></li>
                <li class="nav-item h5"><a class="nav-link" target="_blank" href="https://www.ferropolis.de/">Ferropolis (Die Stadt aus Eisen)</a></li>
                <li class="nav-item h5"><a class="nav-link" target="_blank" href="https://www.bauhaus-dessau.de/dessau.html">Bauhausstadt Dessau</a></li>
                <li class="nav-item h5"><a class="nav-link" target="_blank" href="https://www.leipzig.de/">Leipzig</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "LocationView",
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
    @media only screen and (max-width: 768px){
        p{
            padding-left: 7px;
            padding-right: 7px;
        }
    }
</style>