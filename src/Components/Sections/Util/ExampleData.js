import EducationObj from "./EducationObj";
import PersonalObj from "./PersonalObj";
import { v4 as uuidv4 } from "uuid";
import ExperienceObj from "./ExperienceObj";

class ExampleData {
  constructor() {
    this.personalInfo = [
      new PersonalObj(
        uuidv4(),
        "John",
        "Smith",
        "Front End Developer",
        "34 Maple Street",
        "Pawnee",
        "IN",
        "23103464321",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed odio. In pellentesque massa placerat duis ultricies lacus sed turpis. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut.",
        "jsmith@email.com"
      ),
    ];
    this.educationList = [
      new EducationObj(
        uuidv4(),
        "Master of Science in Computer Science",
        "Georgia Institute of Technology",
        "Atlanta, GA",
        "2017"
      ),
      new EducationObj(
        uuidv4(),
        "Bachelor of Science in Computer Science",
        "Southern New Hampshire University",
        "Manchester, NH",
        "2015"
      ),
    ];
    this.experienceList = [
      new ExperienceObj(
        uuidv4(),
        "Senior Front End Developer",
        "Google",
        "2019",
        "",
        "Seattle, WA"
      ),
      new ExperienceObj(
        uuidv4(),
        "Front End Developer",
        "Capital One",
        "2018",
        "2019",
        "New York, NY"
      ),
      new ExperienceObj(
        uuidv4(),
        "Junior Front End Developer",
        "The Webdev Company",
        "2017",
        "2018",
        "Atlanta, GA"
      ),
    ];
  }
}

export default ExampleData;
