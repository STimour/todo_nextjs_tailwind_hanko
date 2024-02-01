import { prisma } from "@/db";
import { NewTodo } from "@/app/Components/NewTodo";
import { TodoItems } from "@/app/Components/TodoItems";
import { Profile } from "../Components/Profile";
import Logout from "../Components/Logout";
import { userId } from "../userId";

export default async function Todo() {
    const userID = await userId();

    const todos = await prisma.todo.findMany({
      where: {
        userId: { equals: userID },
      },
    });
  
    return (
      <main className=" flex min-h-screen justify-center items-center bg-purple-950 ">
        <div className="absolute top-4 left-16">
        <div className=" relative py-4 space-x-6">
          <Profile />
          <Logout />
        </div>
      </div>
        <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
            <h1 className="text-3xl text-center">Some Street Magic ToDo</h1>
            <p className="text-center">Before add your street magic task, you should watch this <a href="https://www.reddit.com/r/videos/comments/xj4sai/classic_youtube_sketch_david_blaine_street_magic/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="blanc"><span className="text-purple-950 underline decoration-wavy ">video</span></a></p>
            <NewTodo />
            <ul className="px-6">
                <TodoItems  todos={todos} />
            </ul>
        </div>
      </main>
    );
  }