import React from "react";

const DesignThinking = ({ title, description, date }) => {
  return (
    <div className="">
      <h1 className="subtitle">{title}</h1>
      <p className="body-regular">{description}</p>
      <p className="body-regular">{date}</p>

      <video controls className="FurtherEducation__iframe">
        <source
          src="https://portfolio-robertram.s3.amazonaws.com/FurtherTraining/WhatsApp+Video+2019-12-08+at+5.24.51+PM.mp4"
          type="video/mp4"
        />
      </video>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum nam
        delectus omnis dolorum laborum! Eos necessitatibus porro saepe ullam,
        quos, odio explicabo quam quod suscipit nesciunt odit aut omnis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum nam
        delectus omnis dolorum laborum! Eos necessitatibus porro saepe ullam,
        quos, odio explicabo quam quod suscipit nesciunt odit aut omnis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum nam
        delectus omnis dolorum laborum! Eos necessitatibus porro saepe ullam,
        quos, odio explicabo quam quod suscipit nesciunt odit aut omnis!
      </p>
    </div>
  );
};

export default DesignThinking;
