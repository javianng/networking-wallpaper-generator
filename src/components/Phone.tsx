import QRCode from "react-qr-code";
import { type PhoneDimensions } from "~/data/PhoneModel";
import { Smartphone, SendHorizonal, Mail } from "lucide-react";
import { Separator } from "./ui/separator";

export type FormData = {
  linkedin: string;
  github: string;
  telegram: string;
  phone: string;
  email: string;
  fullName: string;
  positions: { jobTitle: string; company: string }[];
  additionalInfo: string;
};

export function Phone(dimensions: PhoneDimensions, formData: FormData) {
  return (
    <div
      id="capture"
      className="flex flex-col justify-between rounded-lg border border-black bg-white p-3"
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <div className="h-[27%] bg-slate-400"></div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-extralight">
          Hello, I am {formData.fullName}
        </h1>
        {formData.positions.map((position, index) => (
          <h2 key={index} className="text-xl font-extralight">
            {position.jobTitle} @ {position.company}
          </h2>
        ))}
        <Separator className="my-4" />
        <div className="flex items-center gap-2">
          <Smartphone className="h-6 w-6 text-neutral-500" />
          <p className="text-xl font-extralight">{formData.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <SendHorizonal className="h-6 w-6 text-neutral-500" />
          <p className="text-xl font-extralight">@{formData.telegram}</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-neutral-500" />
          <p className="text-xl font-extralight">{formData.email}</p>
        </div>
        <Separator className="my-4" />
        <div className="flex">
          {formData.additionalInfo && (
            <p
              className="w-1/2 text-xl font-extralight"
              style={{ whiteSpace: "pre-line" }}
            >
              {formData.additionalInfo}
            </p>
          )}
          <div className="flex w-1/2 flex-col gap-2">
            <p className="text-xl font-extralight">LinkedIn</p>
            <QRCode
              value={formData.linkedin}
              className="flex h-fit w-full border-2 p-4"
            />
          </div>
        </div>
      </div>
      <div className="h-[11%] bg-slate-400"></div>
    </div>
  );
}
