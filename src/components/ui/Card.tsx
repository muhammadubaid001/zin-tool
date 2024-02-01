import { FC } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
}

export const Card: FC<Props> = ({ title, description, image }) => {
  return (
    <div className="border border-gray-200 cursor-pointer rounded-xl p-5 hover:custom-shadow transition transform ease-in-out">
      <div>
        <img
          className=""
          src={image}
          alt="logo"
        />
      </div>
      <h1 className="text-xl font-HarmonyB text-gray-900 py-2">{title}</h1>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};
