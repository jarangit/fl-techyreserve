import React from "react";
import Column from "../elements/column";
import Image from "next/image";
import Row from "../elements/row";
import { TbNotes } from "react-icons/tb";

type Props = {};

const HowItWork = (props: Props) => {
  return (
    <div>
      <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-center">
          {/* g1 */}
          <Column gap={10} className="col-span-1">
            <div className="text-main font-medium text-lg">How it work</div>
            <div className="text-5xl font-medium">
              Spoiler Alert: It Works Perfectly
            </div>
            <div className="text-xl font-medium">
              The process is super fast and simple. It takes minutes to see
              results and enjoy your extra cash
            </div>
            <div className="">
              <button className="bg-main text-white rounded-xl font-medium px-12 py-5">
                Get Started
              </button>
            </div>
          </Column>

          {/* g2 */}
          <Row className="gap-12 col-span-2 flex-wrap lg:flex-nowrap" >
            <Column gap={12} className="border p-12 rounded-xl">
              <div>
                <TbNotes className="text-7xl text-main" />
              </div>
              <div className="font-medium text-2xl">Simple</div>
              <div className="text-gray-400">
                {` Our advanced automated system lets you request up to $5000 by
                filling out a simple, clear-cut form directly from your
                computer, tablet, or mobile phone.`}
              </div>
            </Column>
            <Column gap={6}>
              <Column gap={12} className="border p-12 rounded-xl">
                <div>
                  <TbNotes className="text-7xl text-main" />
                </div>
                <div className="font-medium text-2xl">Simple</div>
                <div className="text-gray-400">
                  {` Our advanced automated system lets you request up to $5000 by
                filling out a simple, clear-cut form directly from your
                computer, tablet, or mobile phone.`}
                </div>
              </Column>{" "}
              <Column gap={12} className="border p-12 rounded-xl">
                <div>
                  <TbNotes className="text-7xl text-main" />
                </div>
                <div className="font-medium text-2xl">Simple</div>
                <div className="text-gray-400">
                  {` Our advanced automated system lets you request up to $5000 by
                filling out a simple, clear-cut form directly from your
                computer, tablet, or mobile phone.`}
                </div>
              </Column>
            </Column>
            {/* <Image src={"/images/image2.png"} alt="" width={600} height={600} /> */}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
