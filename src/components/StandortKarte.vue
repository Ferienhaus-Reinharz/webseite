<template>
    <br>
    <div class="row">
        <div class="col-md-1"/>
        <div class="col-md-11">
            <h3>Standort:</h3>
        </div>
    </div>
    <div class="row" id="mapRow">
        <div class="col-lg-3"/>
        <div class="col-lg-6 h-100">    
            <iframe class="w-100 h-100" src="https://www.google.com/maps/d/u/0/embed?mid=1CXq474uBjU9uUGyMcKApfjvBBag05NKD&ehbc=2E312F" id="pos"></iframe>
        </div>
        <div class="col-lg-3"/>
    </div>

    <p class="text-center h5" id="Ankunft">
        Reinharz 64d, 06905 Bad Schmiedeberg
    </p>
</template>

<style lang="scss">
    #mapRow{
        height: 30vw;
        min-height: 300px;
    }
</style>