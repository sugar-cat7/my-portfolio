import React from 'react';
import useSWR from 'swr';
import fetch from 'node-fetch';
type ContextProps = {
  profile: string[];
  profileImage: {
    imgurl: string;
    srcurl: string;
  }[];
  datalist: {
    id: number;
    name: string;
    image: string;
    term: string;
    season: string;
    skill: string;
  }[];
  text: string[];
  devEx: {
    id: number;
    url: string;
    title: string;
    skill: string[];
    link: {};
  };
};

export const ProfileDataContext = () => {
  async function fetcher(url: string): Promise<any> {
    const response = await fetch(url, {
      headers: { 'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}` },
    });
    return response.json();
  }
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_DAILY_API}`, fetcher);

  const profileData = React.createContext<ContextProps>(data);

  return profileData;
};
