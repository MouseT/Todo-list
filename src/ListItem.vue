<template>
  <v-card-text class="list-item">
    <v-checkbox v-model="checkbox" :label="item.text"></v-checkbox>
    <v-spacer></v-spacer>
    <v-menu open-on-click bottom left>
      <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
        transition="slide-x-transition"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      </template>

      <v-list>
      <v-list-item
        @click="$emit('edit', item)"
      >
        <v-list-item-title>Edit</v-list-item-title>
      </v-list-item>
      <v-list-item
        @click="$emit('remove', item.id)"
      >
        <v-list-item-title>Delete</v-list-item-title>
      </v-list-item>
      </v-list>
    </v-menu>
  </v-card-text>
</template>

<script>
  export default {
    data () {
      return {
        itemInput: '',
        seen: false,
        checkbox: false
      }
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      changeSeen () {
        this.seen = !this.seen
      }
    }
  }
</script>
<style >
  .v-card__text {
    display: flex;
    padding: 10px;
  }
  .v-application--is-ltr .v-messages {
    display: none;
  }
  .v-input__slot {
    margin-bottom: 0;
  }
  .v-card__text .v-input--checkbox {
    margin-top: 0;
    padding-top: 0;
  }
  .list-item .v-input--is-label-active .v-label {
    text-decoration: line-through;
    opacity: .7;
  }
  .v-card__text.list-item {
    padding: 0 10px 0 0;
  }
  .v-card__text.list-item  .v-btn--icon.v-size--default {
    margin-top: 5px;
  }
</style>