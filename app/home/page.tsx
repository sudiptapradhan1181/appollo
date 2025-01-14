'use client';
import { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import { getBaseUrl } from '../helpers/utils';

const Page = () => {
    type NewsData = {
        articles: [];
    };

    type Article = {
        title: string;
        description: string;
        urlToImage: string;
        publishedAt: string;
    };
    const [newsData, setNewsData] = useState<NewsData>();

    useEffect(() => {
        fetchNews();
    }, []);

    async function fetchNews() {
        await fetch(`${getBaseUrl()}/api/news`)
            .then((response) => response.json())
            .then((data) => {
                setNewsData(data);
            });
    }

    return (
        <main className="flex flex-row items-center font-inter justify-center relative">
            <div className="max-w-[500px] w-full min-h-screen">
                <section className="flex flex-col items-center justify-center p-4 gap-4 w-full">
                    {newsData?.articles?.map((article: Article) => {
                        return (
                            <NewsCard
                                key={article.title}
                                time={article.publishedAt}
                                title={article.title}
                                description={article.description}
                                imgUrl={article.urlToImage}
                            />
                        );
                    })}
                </section>
            </div>
        </main>
    );
};

export default Page;
