import React from "react";
import questions from "./questions";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";
import "../../assets/stylesheets/faq.css";

const Faq = () => {
  const questionElements = questions.map((question, i) => {
    return (
      <CollapsibleItem
        expanded={false}
        header={question.q}
        icon={<Icon>directions_run</Icon>}
        node="div"
        key={i}
      >
        {question.a}
      </CollapsibleItem>
    );
  });
  return (
    <div className="container faq-container">
      <Collapsible accordion>{questionElements}</Collapsible>
    </div>
  );
};

export default Faq;
