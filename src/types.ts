export interface Post {
    id: string;
    title: string;
    author: string;
    created_utc: number;
    url: string;
    thumbnail: string;
    num_comments: number;
    is_video: boolean;
    is_self?: boolean;
    over_18?: boolean;
    selftext?: string;
};

export interface Page<T> {
    data: Array<T>;
    before: string;
    after: string;
    modhash: string;
}