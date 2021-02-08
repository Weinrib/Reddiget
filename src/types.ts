export interface Post {
    id: string;
    title: string;
    author?: string;
    created_utc: number;
    url: string;
    thumbnail: string;
    num_comments: number;
    is_video: boolean;
    is_self?: boolean;
    over_18?: boolean;
    selftext?: string;
    media: {
        reddit_video: {
            fallback_url: string;
        }
    }
};

export interface Page<T> {
    data: Array<T>;
    before: string | null;
    after: string | null;
    modhash: string;
    firstAfterPage: string | null;
}