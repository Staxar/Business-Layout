import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  const [currentNo, setCurrentNo] = useState(0);

  let faq = [
    {
      id: 0,
      questions: [
        {
          id: 0,
          question: "General question #1?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 1,
          question: "General Question #2?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 2,
          question: "General Question #3?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 3,
          question: "General Question #4?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
      ],
    },
    {
      id: 1,
      questions: [
        {
          id: 0,
          question: "Support team Question #1?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 1,
          question: "Support team Question #2?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 2,
          question: "Support team Question #3?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 3,
          question: "Support team Question #4?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
      ],
    },
    {
      id: 2,
      questions: [
        {
          id: 0,
          question: "Miscellaneous Question #1?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 1,
          question: "Miscellaneous Question #2?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 2,
          question: "Miscellaneous Question #3?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          id: 3,
          question: "Miscellaneous Question #4?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
      ],
    },
  ];
  return (
    <section className="section section__faq" id="faq">
      <div className="container">
        <h3 className="section__title">Faq section</h3>
        <span className="section__subtitle">
          Check, maybe Your question is below
        </span>
        <div className="grid">
          <div className="grid-item">
            <div className="flex__column_column flex">
              <button className="button" onClick={() => setCurrentNo(0)}>
                <div className="faq__button">
                  <span>General Questions</span> <BiChevronRight size={30} />
                </div>
              </button>

              <button className="button" onClick={() => setCurrentNo(1)}>
                {" "}
                <div className="faq__button">
                  <span>Support Team</span> <BiChevronRight size={30} />
                </div>
              </button>
              <button className="button" onClick={() => setCurrentNo(2)}>
                {" "}
                <div className="faq__button">
                  <span>Miscellaneous</span> <BiChevronRight size={30} />
                </div>
              </button>
            </div>
          </div>
          <div className="grid-item">
            {
              faq.map((q) => {
                return (
                  <>
                    {q.questions.map((question, index) => {
                      return (
                        <Accordion key={index}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id={index}
                          >
                            <h3 className="faq__details">
                              {question.question}
                            </h3>
                          </AccordionSummary>
                          <AccordionDetails>
                            <span className="faq__details">
                              {question.answer}
                            </span>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </>
                );
              })[currentNo]
            }
          </div>
        </div>
      </div>
    </section>
  );
}
