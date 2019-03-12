
export default {
  methods: {
    hello: function () {
      console.log('hello from mixin')
    }
  },
  created: function () {
    this.hello()
  },
};
