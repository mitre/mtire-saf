<template>
  <v-container fluid>
    <v-row align="center">
      <v-col md="12" sm="12" cols="12">
        <p class="google-font primary--text" style="font-weight: 350;font-size:200% ">
          <slot name="title"></slot>
        </p>
        <slot name="subtitle" class="google-font mt-0" style="font-size:50%"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>