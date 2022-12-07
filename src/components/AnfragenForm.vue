<template>
    <br>
    <div class="row">
        <div class="col-md-1"/>
        <div class="col-md-11">
            <h3>Unverbindliche Anfrage:</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3"/>
        <div class="col-md-6">
            <form id="anfrageForm" class="form-inline" @submit.prevent="sendEmail">
                <div class="row">
                    <div class="col-sm-6">
                        <label for="first_day">Anreisetag:</label>
                        <input type="date" class="form-control" v-model="first_day" id="first_day" name="first_day" placeholder="Anreisetag" required>
                    </div>
                    <div class="col-sm-6">
                        <label for="first_day">Abreisetag:</label>
                        <input type="date" class="form-control" v-model="last_day" id="last_day" name="last_day" placeholder="Abreisetag" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="first_name" id="first_name" name="first_name" placeholder="Vorname" required>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="last_name" id="last_name" name="last_name" placeholder="Nachname" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="street_name" id="street_name" name="street_name" placeholder="Straße" required>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="house_number" id="house_number" name="house_number" placeholder="Hausnummer" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="plz" id="plz" name="plz" placeholder="Postleitzahl" required>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="town_name" id="town_name" name="town_name" placeholder="Ort" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="tel" id="tel" name="tel" placeholder="Telefonnummer" required>
                    </div>
                    <div class="col-sm-6">
                        <input type="email" class="form-control" v-model="email" id="email" name="email" placeholder="Email-Adresse" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <input type="number" min="1" class="form-control" v-model="count_adults" id="count_adults" name="count_adults" placeholder="Anzahl Erwachsene (ab 16J.)" required>
                    </div>
                    <div class="col-sm-6">
                        <input type="number" min="0" class="form-control" v-model="count_kids_a_6" id="count_kids_a_6" name="count_kids_a_6" placeholder="Kinder ab 6 Jahre">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <input type="number" min="0" class="form-control" v-model="count_kids_u_6" id="count_kids_u_6" name="count_kids_u_6" placeholder="Kinder unter 6 Jahre">
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="wishes" id="wishes" name="wishes" placeholder="Wünsche und Anregungen">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <button type="submit" name="submit" class="btn btn-primary w-100">Anfrage abschicken</button>
                    </div>
                    <div class="col-sm-6">
                        <button type="reset" name="reset" class="btn btn-secondary w-100">Anfrage löschen</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-3"/>
    </div>
</template>

<style lang="scss">
    .form-control{
        margin-bottom: 5px;
    }

    .btn{
        margin-bottom: 1px;
    }

    input{
        background-color: white !important;
    }

    #anfrageForm{
        padding-left: 10px;
        padding-right: 10px;
    }

    h3{
        padding-left: 10px;
    }
</style>

<script>
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

export default{
    name: 'AnfragenForm',
    data(){
        return{
            first_name: '',
            last_name: '',
            first_day: '',
            last_day: '',
            street_name: '',
            house_number: '',
            plz: '',
            town_name: '',
            tel: '',
            email: '',
            count_adults: '',
            count_kids_a_6: '',
            count_kids_u_6: '',
            wishes: '',
        };
    },
    methods: {
        sendEmail(e){
            emailjs.init("FNHb0T-o_80mGzA24")
            var fromName = this.first_name + " " + this.last_name;
            var emailBody = "Anreisetag: " + this.first_day + ", Abreisetag: " + this.last_day;

            emailjs.send("service_l0h80td","template_kfpfkhp",{
                first_day: this.first_day,
                last_day: this.last_day,
                first_name: this.first_name,
                last_name: this.last_name,
                street_name: this.street_name,
                house_number: this.house_number,
                plz: this.plz,
                town_name: this.town_name,
                tel: this.tel,
                email: this.email,
                count_adults: this.count_adults,
                count_kids_a_6: this.count_kids_a_6,
                count_kids_u_6: this.count_kids_u_6,
                wishes: this.wishes,
            })
            .then(
                function(response) {
                    swal("Anfrage versendet", "Wir werden uns bei Ihnen bezüglich der Anfrage in den nächsten Tagen melden", "success");
                },
                function(error) {
                    swal("Beim Senden der Nachricht ist ein Fehler aufgetreten", "Bitte versuchen Sie es erneut oder schreiben Sie uns per Email bezüglich der Anfrage", "error");
                }
            )
            this.first_name= '';
            this.last_name= '';
            this.first_day= '';
            this.last_day= '';
            this.street_name= '';
            this.house_number= '';
            this.plz= '';
            this.town_name= '';
            this. tel= '';
            this.email= '';
            this.count_adults= '';
            this.count_kids_a_6= '';
            this.count_kids_u_6= '';
            this.wishes= '';
        },
    }
}
</script>
