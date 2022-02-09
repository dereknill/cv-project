class PersonalObj {
  constructor(
    index,
    firstName = "",
    lastName = "",
    title = "",
    address = "",
    city = "",
    state = "",
    phone = "",
    description = "",
    email = ""
  ) {
    this.index = index;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.address = address;
    this.city = city;
    this.state = state;
    this.phone = phone;
    this.description = description;
    this.email = email;
  }
}

export default PersonalObj;
