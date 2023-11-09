export type Comment = {
  _id: string;
  text: string;
  userId: string;
  postId: string;
  username: string;
  avatar: string;
  createdAt: string;
};

export type CommentData = {
  text: string;
  userId: string;
};
