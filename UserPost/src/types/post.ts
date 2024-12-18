export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface PostCardProps {
    posts: IPost
    view: string
}