import React from 'react';
import useSWR from 'swr';
import fetch from 'node-fetch';
type ContentType = {
  id: string;
  title: string;
  body: string;
};

const dailys = () => {
  async function fetcher(url: string): Promise<any> {
    const response = await fetch(url, {
      headers: { 'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}` },
    });
    return response.json();
  }
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_DAILY_API}`,
    fetcher,
  );
  if (!data) {
    return <div>Loading!</div>;
  }

  return (
    <div>
      {data.contents.map((content: ContentType) => (
        <div key={content.id}>
          <h1>title: {content.title}</h1>
          <div>{content.body}</div>
        </div>
      ))}
    </div>
  );
};

export default dailys;
