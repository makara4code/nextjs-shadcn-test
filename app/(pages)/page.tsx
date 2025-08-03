import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { revalidatePath } from "next/cache";
import RevalidateButton from "./RevalidateButton";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Page() {
  // anti pattern

  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts: Post[] = await data.json();

  return (
    <div>
      <RevalidateButton />

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-4">
            <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
            <CardContent>{post.body}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
