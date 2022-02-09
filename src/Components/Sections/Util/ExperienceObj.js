class ExperienceObj {
  constructor(
    index,
    title = "",
    companyName = "",
    dateStarted = "",
    dateEnded = "",
    location = ""
  ) {
    this.index = index;
    this.title = title;
    this.companyName = companyName;
    this.dateStarted = dateStarted;
    this.dateEnded = dateEnded;
    this.location = location;
  }
}

export default ExperienceObj;
