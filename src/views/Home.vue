<template>
  <div>
    <div class="text-h5 text-center q-pa-md">
      Welcome to Strava Data Analystics App
    </div>
    <!-- <hr /> -->
    <Athlete />
    <form class="form q-gutter-y-md" @submit.prevent="search">
      <div class="form__date">
        <q-input
          outlined
          :dense="dense"
          v-model="from"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="from">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-space style="width: 10px" />
        <q-input
          outlined
          :dense="dense"
          v-model="to"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="to">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <q-btn
        type="submit"
        :dense="dense"
        glossy
        color="green"
        class="full-width"
        label="Show Data"

      />
    </form>
    <div class="table">
      <q-table
        :loading="loading"
        flat
        title="Activites"
        dense
        :data="activity"
        :columns="columns"
        row-key="name"
      />
    </div>
  </div>
</template>

<script>
import { getActivities } from "../../api";
import Athlete from "@/components/Athlete.vue";
import moment from "moment";
export default {
  components: { Athlete },
  data() {
    return {
      name: "Activities",
      athlete: {},
      loading: false,
      dense: true,
      from: moment(Date.now() - 2.628e9)
        .format("YYYY/MM/DD")
        .toString(),
      to: moment(Date.now()).format("YYYY/MM/DD").toString(),
      athlete: {},
      columns: [
        {
          name: "Sport",
          required: true,
          label: "Sport",
          align: "left",
          field: (row) => row.type,
          sortable: true,
        },
        {
          name: "Date",
          align: "center",
          label: "Date",
          field: "calories",
          field: (row) =>
            moment(new Date(row.start_date)).format("MMM-DD-YYYY").toString(),
          sortable: true,
        },
        {
          name: "Title",
          label: "Title",
          field: "fat",
          field: (row) => row.name,
          sortable: true,
        },
        {
          name: "Time",
          label: "Time",
          field: "carbs",
          field: (row) => this.secondToHour(row.moving_time),
        },
        {
          name: "Distance",
          label: "Distance",
          field: "protein",
          field: (row) => Math.round(row.distance * 0.000621371192) + " mi",
        },
        {
          name: "Elevation",
          label: "Elevation",
          field: "sodium",
          field: (row) =>
            Math.round(row.total_elevation_gain * 3.28084) + " ft",
        },
      ],
      activity: [],
    };
  },
  methods: {
    search() {
      this.loading = true;
      let to = new Date(this.to).getTime() / 1000;
      let from = new Date(this.from).getTime() / 1000;
      getActivities(localStorage.access_token, to, from).then((res) => {
        this.activity = res;
        this.loading = false;
      });
    },
    secondToHour(seconds) {
      var sec_num = parseInt(seconds, 10); // don't forget the second param
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      var seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    },
  },
};
</script>

<style scoped>
.form {
  width: 400px;
  margin: 0 auto;
}
.form__date {
  display: flex;
}
.table {
  background-color: aquamarine;
  width: 800px;
  margin: 0 auto;
}


</style>
