import { PostService } from "./05-dependency-b";
import {
  LocalDatabaseService,
  JsonDatabaseService,
  WebApiPostSercice,
} from "./05-dependency-c";

// Main
(async () => {
  //   const provider = new LocalDatabaseService();
  //   const provider = new JsonDatabaseService();
  const provider = new WebApiPostSercice(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
