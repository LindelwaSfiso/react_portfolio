import {
  IconUxCircle,
  IconCodeDots,
  IconCpu2,
  IconBrandOnedrive,
} from "@tabler/icons-react";

const skills = [
  {
    icon: <IconCodeDots size={"50px"} />,
    title: "Backend Developer",
    body: "Proficient in server side languages like; NodeJs/Javascript, Django/Python, WordPress/PHP and ExpressJs. Skilled in developing maintainable and clean code.",
  },
  {
    icon: <IconUxCircle size={"50px"} />,
    title: "Frontend Developer",
    body: "Build production ready, scalable, single page, and modern websites using HTML5, CSS, ReactJs, Tailwind CSS, Bootstrap, Material Web Components.",
  },
  {
    icon: <IconCpu2 size={"50px"} />,
    title: "Embedded Systems",
    body: "Design and implementation of embedded systems with Arduino, ESP-32 and Raspberry-Pi. Equiped with advanced C/C++ for IoT projects implementation.",
  },
  {
    icon: <IconBrandOnedrive size={"50px"} />,
    title: "Database Management",
    body: "Deep understanding of SQLite3, MySQL, Postgres and NoSQL. Experience in designing optimized, scalable and normalized databases.",
  },
];

const skillCard = (index, icon, title, body) => {
  return (
    <div
      key={index}
      className="p-3 flex flex-col items-center justify-center rounded-lg bg-slate-700 shadow-sm hover:bg-blue-600 group"
    >
      <div className="group-hover:scale-110">{icon}</div>

      <h5 className="mt-2 font-bold text-xl text-white">{title}</h5>

      <h6 className="text-center text-base mt-3">{body}</h6>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div className={"mt-8 md:mt-16"}>
      <p className="p-4 pl-0 text-xl sm:text-3xl font-bold capitalize">
        Skills
      </p>

      <div className="grid grid-col-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {skills.map((skill, index) => {
          return skillCard(index, skill.icon, skill.title, skill.body);
        })}
      </div>
    </div>
  );
}
