<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          Formulaire de connexion
        </v-card-title>
        <v-card-text>
          <v-text-field
            ref="identifiant"
            v-model="identifiant"
            :rules="[() => !!identifiant || 'Ce champ est requis']"
            label="Identifiant"
            clearable
            required
          ></v-text-field>
          <v-text-field
            ref="motDePasse"
            v-model="motDePasse"
            :rules="[() => !!motDePasse || 'Ce champ est requis']"
            label="Mot de passe"
            clearable
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="connexion">Connexion</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: true,
      identifiant: null,
      motDePasse: null
    }),

    computed: {
      form () {
        return {
          identifiant: this.identifiant,
          motDePasse: this.motDePasse
        }
      },
    },

    methods: {
      connexion () {
        Object.keys(this.form).forEach(f => {
          this.$refs[f].validate(true)
        })
        console.log(this.$refs.identifiant.valid)
        if(this.$refs.identifiant.valid && this.$refs.motDePasse.valid) {
          alert('ok')
        }
      },
    },
  }
</script>