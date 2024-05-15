import Head from "next/head";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { type PhoneDimensions, phoneModels } from "~/data/PhoneModel";

type FormData = {
  linkedin: string;
  github: string;
  telegram: string;
  phone: string;
  email: string;
  fullName: string;
  jobTitle: string;
  company: string;
};

interface HomeProps {
  onSubmit: (data: FormData) => void;
}

export default function Home({ onSubmit }: HomeProps) {
  const [formData, setFormData] = useState<FormData>({
    linkedin: "",
    github: "",
    telegram: "",
    phone: "",
    email: "",
    fullName: "",
    jobTitle: "",
    company: "",
  });

  const [dimensions, setDimensions] = useState<PhoneDimensions>(
    phoneModels.iPhone13 ?? { width: 0, height: 0 },
  );
  const [selectedModel, setSelectedModel] = useState<string>("iPhone13");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value;
    setSelectedModel(model);
    setDimensions(phoneModels[model] ?? { width: 0, height: 0 });
  };

  return (
    <>
      <Head>
        <title>Networking Lock Screen</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl bg-neutral-100 p-12">
        <form className="flex flex-col gap-3">
          <h1 className="text-5xl font-semibold">
            Networking Lock Screen Generator
          </h1>
          <div className="grid grid-cols-2 gap-3">
            <section className="flex flex-col gap-3">
              <select
                value={selectedModel}
                onChange={handleModelChange}
                className="dropdown"
              >
                {Object.keys(phoneModels).map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              <Input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                className="input-field"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="github"
                placeholder="GitHub URL"
                className="input-field"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="telegram"
                placeholder="Telegram Handle"
                className="input-field"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input-field"
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input-field"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="input-field"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="company"
                placeholder="Company"
                className="input-field"
                onChange={handleChange}
              />
            </section>
            <aside className="flex justify-center">
              <div
                className="border border-black"
                style={{
                  width: `${dimensions.width}px`,
                  height: `${dimensions.height}px`,
                }}
              >
                sds
              </div>
            </aside>
          </div>
          <Button type="submit" className="btn-submit">
            Generate Wallpaper
          </Button>
        </form>
      </main>
    </>
  );
}
