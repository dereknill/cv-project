class EducationObj {
  constructor(
    index,
    degreeTitle = "",
    establishment = "",
    location = "",
    year = ""
  ) {
    this.index = index;
    this.degreeTitle = degreeTitle;
    this.establishment = establishment;
    this.location = location;
    this.year = year;
  }
}

export default EducationObj;
