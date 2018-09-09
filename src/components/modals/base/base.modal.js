export default {
  methods: {
    preventDefault(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}