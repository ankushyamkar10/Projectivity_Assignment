import User from "./assets/User.png";
import User1 from "./assets/User1.png";
import User2 from "./assets/User2.png";
import Avatar from "./assets/Avatar.png";

const phases = [
  {
    name: "Phase 1",
    tasks: ["Editing", "Shoot"],
    images: [User, User2],
  },
  {
    name: "Phase 2",
    tasks: ["Editing", "Shoot"],
    images: [User1, Avatar, User],
  },
  {
    name: "Production",
    tasks: ["Set Design", "Shoot"],
    images: [Avatar, User2, User1],
  },
  {
    name: "Phase 3",
    tasks: ["Editing", "Shoot"],
    images: [User, Avatar, User1],
  },
  {
    name: "Pre Production",
    tasks: ["Editing", "Composition"],
    images: [User, Avatar, User2],
  },
];

export { phases };
