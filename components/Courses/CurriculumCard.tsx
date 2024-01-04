import { ICurriculumData } from "@/constants/curriculumData";
import clsx from "clsx";
import { CurriculumPill } from "./CurriculumPill";
import Image from "next/image";

export interface ICurriculumCardData {
  item: ICurriculumData;
  selected: number;
}

export const CurriculumCard: React.FC<ICurriculumCardData> = (props) => {
  return (
    <div
      className={clsx(
        "bg-gradient-to-b from-orange-500 to-yellow-500 p-px w-[90vw] lg:w-[72vw] rounded-md shadow-lg shadow-vermilion-500/10",
        props.selected === props.item.id ? "flex" : "hidden",
      )}
    >
      <div className="flex flex-col bg-white rounded-md w-full">
        <div className="flex flex-col mx-[2.38vw] my-[5.46vh]">
          <CurriculumPill
            text={`Module ${props.item.id + 1}`}
            color="yellow"
            textColor="text-black"
          />
          <div className="flex items-center pt-[2.12vh] font-semibold">
            {props.item.title}
            <div className="ps-3">
              <CurriculumPill
                text={props.item.bubbleText}
                color=""
                textColor="text-green-500"
              />
            </div>
          </div>
          <div className="pt-[2.12vh] text-sm w-[61vw]">
            {props.item.description}
          </div>
          <div className="flex items-center py-[2.52vh]">
            <span className="flex-initial font-semibold">Topics Covered</span>
            <hr className="border-t border-gray-300 flex-1 ml-3" />
          </div>

          <div className="flex flex-col">
            {props.item.topicsList.map((topic: string) => {
              return (
                <div className="flex flex-row pb-[3vh]" key={topic}>
                  <Image
                    width={15}
                    height={15}
                    src="/assets/Icons/check.svg"
                    alt="check image"
                  />
                  <span className="flex-1 ml-3 text-sm">{topic}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
