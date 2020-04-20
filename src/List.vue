<template>
    <v-col
      cols="12"
      md="3"
    >
      <v-card>
        <v-toolbar color="primary" dark class="list-toolbar">
          <v-card-title>
            {{list.text}}
            <v-spacer></v-spacer>
              <v-menu open-on-click bottom left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    icon
                    v-on="on"
                    transition="slide-x-transition"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    @click="$emit('edit', list)"
                  >
                    <v-list-item-title>Edit</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    @click="$emit('remove', list.id)"
                  >
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
          </v-card-title>        
        </v-toolbar>   
        <ListItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @remove="removeItem"
          @edit="editItem"
        />
        <div class="list-item-input">
          <v-text-field
            class="input"
            v-model="itemInput"
            label="Create todo"
            v-if="seen"
            hide-details
            outlined
            clearable
            autofocus
            @keydown.enter="addItem"
            @blur="changeSeen"
          ></v-text-field>
          <v-btn color="primary darken-1"
           text 
           v-else
           @click="changeSeen"
          >
            Add
          </v-btn>       
        </div>
      </v-card>  
      <v-dialog v-model="dialog2" max-width="450px">
      <v-card>
        <v-text-field label="Edit todo" v-model="editedItemList.text" autofocus clearable></v-text-field>              
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="primary darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>  
    </v-dialog>  
    </v-col>
    
</template>

<script>
  import ListItem from "./ListItem"
  let nextItem = 1

  export default {
    data () {
      return {
        itemInput: '',
        seen: false,
        items: [],
        dialog2: false,
        editedIndex: -1,
        editedItemList: '',
        editedText: ''
      }
    },
    components: {
      ListItem
    },
    methods: {
      addItem () {
        const trimmedText = this.itemInput.trim()        
        if (trimmedText) {
          this.items.push({
            id: nextItem++,
            text: trimmedText,
          })  
        this.itemInput = ''    
        }       
      },
      removeItem (idToRemove) {
        this.items = this.items.filter(item => {
          return item.id !== idToRemove
        })
      },
      changeSeen () {
        this.seen = !this.seen
      },
      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItemList = Object.assign({}, item)
        this.dialog2 = true
      },
      close () {
        this.editedItemList = ''
        this.dialog2 = false
      },
      save () {
        Object.assign(this.items[this.editedIndex], this.editedItemList)
        this.close()
      }
    },
    props: {
      list: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .v-card .v-toolbar {
    box-shadow: none;
    margin-bottom: 10px;
  }
  .v-card__title {
    justify-content: center; 
    width: 100%;
    padding-right: 4px;
  }
  .v-input__control {
    padding: 10px;
  }
  .list-toolbar .v-toolbar__content {
    padding: 0;
  }
  .v-list-item:hover {
    cursor: pointer;
    background: #eee;
  }
</style>