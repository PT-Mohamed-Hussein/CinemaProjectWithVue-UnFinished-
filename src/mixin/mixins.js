const mix = {
  data() {
    return {
      passwordtype: "password",
      passwordconfirmationtype: "password",
    };
  },
  methods: {
    changePassType() {
      if (this.passwordtype == "password") {
        this.passwordtype = "text";
      } else {
        this.passwordtype = "password";
      }
    },
    changePassConfirmationType() {
      if (this.passwordconfirmationtype == "password") {
        this.passwordconfirmationtype = "text";
      } else {
        this.passwordconfirmationtype = "password";
      }
    },
  },
};

export default mix;
