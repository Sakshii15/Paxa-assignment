import CardHead from "../../utils/components/CardHead";
import CardsWithHeading from "../../utils/components/HeadingCards";
import CardsWithSubheading from "../../utils/components/SubHeadingCards";
import CardsWithImages from "../../utils/components/ImageCards";
import NewCard from "../../utils/components/NewCard";

import DesignCardData from "../../utils/carddata/DesignCardData";
import PrototipCardData from "../../utils/carddata/PrototipCardData";
import TrelloCardData from "../../utils/carddata/TrelloCardData";
import TestCardData from "../../utils/carddata/TestCardData";
import FinalCardData from "../../utils/carddata/FinalCardData";
const Card = () => {
  return (
    <main className="flex px-4 md:px-8 justify-between overflow-x-auto mt-2">
      <div>
        <CardHead name={"Design"} />
        {DesignCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>

      <div className="pl-6">
        <CardHead name={"Prototip"} />
        {PrototipCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>

      <div className="pl-6">
        <CardHead name={"Trello"} />
        {TrelloCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>

      <div className="pl-6">
        <CardHead name={"Test"} />
        {TestCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>

      <div className="pl-6">
        <CardHead name={"Final"} />
        {FinalCardData.map((card, i) => {
          return (
            <div key={i}>
             {card.type === "heading-card" && <CardsWithHeading data={card} /> }
              {card.type === "card-with-subheading" && <CardsWithSubheading data={card} />}
              {card.type === "card-with-img" && <CardsWithImages data={card} />}
              {card.type === "card-with-addnew" && <NewCard data={DesignCardData[3]} />}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Card;
