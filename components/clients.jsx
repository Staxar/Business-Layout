import { BsSun } from "react-icons/bs";
import { GiUbisoftSun } from "react-icons/gi";
import { TbButterfly } from "react-icons/tb";
import { TbMicrophone2 } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";
export default function Clients() {
  let employees = [
    {
      id: 1,
      name: "Lucas",
    },
    {
      id: 2,
      name: "Octopus",
    },
    {
      id: 3,
      name: "Protip",
    },
    {
      id: 4,
      name: "Maybor",
    },
    {
      id: 5,
      name: "Advance",
    },
    {
      id: 6,
      name: "Nirrel",
    },
  ];
  let icons = [
    BsSun,
    GiUbisoftSun,
    TbButterfly,
    TbMicrophone2,
    AiOutlineSafetyCertificate,
    MdOutlineHealthAndSafety,
  ];

  return (
    <section className="section section__clients" id="clients">
      <div className="container">
        <h3 className="section__title">Trusted by more than 100+</h3>
        <span className="section__subtitle">Companies we worked with</span>

        <div className="grid content__grid_clients">
          {employees.map((employee, index) => {
            const Icon = icons[index];
            return (
              <div
                className="content__clients flex__row flex"
                key={employee.id}
              >
                <Icon />
                {employee.name}
              </div>
            );
          })}
        </div>
        <button className="section__subtitle button">About our company</button>
      </div>
    </section>
  );
}
