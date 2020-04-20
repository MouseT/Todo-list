<template>
  <v-app>
    <v-app-bar
      app
      color="#eeeeee"
    >
      <div class="d-flex align-center">
        <p class="title">Create your TODO list</p>          
      </div>
      <v-spacer></v-spacer>    
    </v-app-bar>
    <v-content>
      <v-container fluid class="align-center">
        <v-row justify="center">
          <List
            v-for="list in lists"
            :key="list.id"
            :list="list"
            @remove="removeList"
            @edit="editList"
          />
        </v-row>                  
      </v-container>
      <v-btn
        fab 
        right 
        bottom 
        fixed 
        color="primary"
        @click="overlay = !overlay"
        >
          <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="450px">
        <v-card>
          <v-text-field label="Edit name" v-model="editedItem.text" autofocus clearable></v-text-field>              
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="primary darken-1" text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>  
      </v-dialog>
      <v-overlay :value="overlay">
        <v-text-field
          class="input"
          v-model="primalInput"
          label="Name of the list"
          outlined
          autofocus
          clearable
          @blur="overlay = false"
          @keydown.enter="addList"
        ></v-text-field>        
      </v-overlay>
    </v-content>
  </v-app>
</template>

<script>
  import List from './List.vue'
  let nextList = 1

  export default {
    name: 'App',

    components: {
      List
    },

    data () {
      return {
        lists: [],
        primalInput: '',
        overlay: false,
        dialog: false,
        editedIndex: -1,
        editedItem: '',
        editedText: ''
      }
    },
    methods: {
      addList () {
        const trimmedText = this.primalInput.trim()
        if (trimmedText) {
          this.lists.push({
            id: nextList++,
            text: trimmedText,
            items: []
          })
          this.primalInput = ''
          this.overlay = false
        }
      },
      removeList (idToRemove) {
        this.lists = this.lists.filter(list => {
          return list.id !== idToRemove
        })
      },
      editList (item) {
        this.editedIndex = this.lists.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      close () {
        this.editedItem = ''
        this.dialog = false
      },
      save () {
        Object.assign(this.lists[this.editedIndex], this.editedItem)
        this.close()
      }
    }    
  }
</script>
<style>
  body .theme--light.v-application {
    background: #eee;
  }
  .title {
    font-size: 40px !important;
    font-weight: bold;
    padding-left: 15px;
  }
  .v-app-bar.v-app-bar--fixed {
    box-shadow: none;
  }
  .v-text-field__details {
    display: none;
  }
</style>>