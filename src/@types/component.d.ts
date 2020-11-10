import Vue from 'vue';

export class VueComponent {
  static name: string;
  static install(vue: typeof Vue): void;
}
