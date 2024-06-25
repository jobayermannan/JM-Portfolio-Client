import React from "react";
import SectionTitle from "../Components/SectionTitle";
import Lottie from 'react-lottie-player';
import animationData from '../../src/assets/Animations/say Hello.json';



function Contact() {
//   const { portfolioData } = useSelector((state) => state.root);
//   const { contact } = portfolioData;
const user={
	name:"Jobayer Mannan",
	age: "25",
	email: "jobayermannan777@gamil.com",
	contact:"393389798",
	country :"Bangladesh"
}
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-mint">{"{"}</p>
          {Object.keys(user).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span className="text-mint">{key} : </span>
                  <span className="text-mint">{user[key]}</span>
                </p>
              )
          )}
          <p className="text-mint">{"}"}</p>
        </div>
        <div className=" flex flex-col-reverse h-64">
        <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 420, height: 420 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;