<template>
    <div>
        <br>
        <div class="d-flex justify-content-center">
            <u><h1>Preisliste</h1></u>
        </div>
        <div class="d-flex justify-content-center">
            <table>
                <tr> <th></th> <th>1-2 Personen</th> <th>1 Woche</th> <th>2 Wochen</th> </tr>
                <tr> <th class="Beschreibung">Haupt- und Nebensaison</th> <td>ab 32€</td> <td>ab 250€</td> <td>ab 440€</td> </tr>
                <tr> <th class="Beschreibung">jede weitere Person</th>  <td>ab 11€</td> <td>ab 80€</td> <td>ab 150€</td> </tr>
                <tr> <th class="Beschreibung">Kind ab 6 Jahren</th>  <td>ab 5€</td> <td>ab 35€</td> <td>ab 70€</td> </tr>
                <tr> <th class="Beschreibung Zusaetze">Strom nach Verbrauch</th></tr>
                <tr> <th class="Beschreibung Zusaetze">Preise zzgl. Kurtaxe</th></tr>
                <tr> <th class="Beschreibung Zusaetze">Buchung ab 2 Übernachtungen</th></tr>
            </table>
        </div>
        <div class="d-flex justify-content-center">
            <p>Alle Preise ohne Gewähr inklusive Endreinigung</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "PricesView",
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

table{
    padding: 7px;
    width: 42rem;
    height: 22rem;
    font-size: 1.3em;
    border: rgb(0, 0, 0) 1px solid;
    background-color: white;
}

th, td{
    text-align:center;
    padding: 0.5px;
    padding-left: 5px;
}

.Zusaetze{
    font-weight:normal;
}

p{
    margin-top: 2px;
    padding-top: 0px;
}

.Beschreibung{
    text-align: left;
}

@media screen and (max-width: 650px) {
    table{
        width: 100%;
    }
}


@media screen and (max-width: 500px) {
    th, td{
        border: rgb(0, 0, 0) 1px solid;
    }
    table{
        font-size: 1em;
    }
}
</style>