const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhonebookEntrySchema = new Schema({
  firstName : {
    type: String,
    required: [true, "The first name is required"],
  },
  lastName : {
    type: String,
    required: [true, "The last name is required"],
  },
  phoneNumber : {
    type: String,
    required: [true, "The phone number is required"],
    validate: {
      validator: function(v) { 
        return /\+\d+ \d+ \d{6,}/.test(v);
      }, 
      message: "{VALUE} is not a valid phone number"
    }
  }
});

module.exports = mongoose.Model(PhonebookEntrySchema, "phonebook");

