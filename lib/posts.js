import fetch from "node-fetch";
const appUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await fetch(new URL(appUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostsIds() {
  const res = await fetch(new URL(appUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(new URL(`${appUrl}/${id}`));
  const post = await res.json();

  return { post };
}
