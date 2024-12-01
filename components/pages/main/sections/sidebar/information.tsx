import { informationCard } from "@/data/card-profile";
import Link from "next/link";
import React from "react";

const Information: React.FC = () => {
  return (
    <>
      <div className="profile-card">
        <h3 className="text-lg">Informações</h3>
        <ul className="space-y-2">
          {informationCard.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between font-medium text-md"
            >
              <p>{item.label}</p>
              {item.href ? (
                <Link href={item.href} className="text-rc_cadetBlue profile-link">
                  {item.value}
                </Link>
              ) : (
                <span className="text-rc_cadetBlue profile-link rc_default">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Information;
